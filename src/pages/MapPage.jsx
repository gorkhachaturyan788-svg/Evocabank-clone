import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase";

const PURPLE = "#6a00d1";
const GREEN = "#16a34a";
const DEFAULT_CENTER = [40.1792, 44.4991]; // Երևան
const STALE_MS = 2 * 60 * 1000; // 2 րոպե առանց թարմացման՝ համարվում է օֆլայն
const WRITE_EVERY_MS = 3000;
const MAX_TRAIL = 100;

// Marker-ը պատրաստում ենք divIcon-ով, որպեսզի Leaflet-ի default png-երի
// path-ի խնդիր (Vite/CRA-ում) չառաջանա
const dotIcon = (color) =>
  L.divIcon({
    className: "",
    html: `<div style="width:18px;height:18px;border-radius:50%;background:${color};border:3px solid #fff;box-shadow:0 0 0 2px ${color}66,0 2px 6px rgba(0,0,0,.35)"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });

const MY_ICON = dotIcon(PURPLE);
const OTHER_ICON = dotIcon(GREEN);

function distanceMeters(a, b) {
  const R = 6371000;
  const toRad = (x) => (x * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

// Քարտեզը հետևում է ձեր դիրքին, երբ "Հետևել" միացված է
function FollowMe({ position, follow }) {
  const map = useMap();
  useEffect(() => {
    if (follow && position) {
      map.setView(position, Math.max(map.getZoom(), 16), { animate: true });
    }
  }, [position, follow, map]);
  return null;
}

export default function MapPage() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [sharing, setSharing] = useState(false);
  const [follow, setFollow] = useState(true);
  const [me, setMe] = useState(null); // [lat, lng]
  const [myTrail, setMyTrail] = useState([]);
  const [others, setOthers] = useState([]);
  const [now, setNow] = useState(Date.now());
  const [error, setError] = useState("");

  const watchIdRef = useRef(null);
  const trailRef = useRef([]);
  const lastWriteRef = useRef(0);
  const userRef = useRef(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      userRef.current = u;
      setAuthLoading(false);
    });
    return () => unsub();
  }, []);

  // Ժամանակ՝ հին (stale) դիրքերը թաքցնելու համար
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 15000);
    return () => clearInterval(id);
  }, []);

  // Բոլոր օնլայն օգտատերերի դիրքերի լսում
  useEffect(() => {
    if (!user) return;
    const unsub = onSnapshot(
      collection(db, "live_locations"),
      (snap) => {
        setOthers(
          snap.docs
            .map((d) => ({ id: d.id, ...d.data() }))
            .filter((p) => p.uid !== user.uid)
        );
      },
      (err) => {
        console.error("Live locations listener error:", err);
        setError("Չհաջողվեց բեռնել մյուսների դիրքերը (ստուգեք Firestore Rules)։");
      }
    );
    return () => unsub();
  }, [user]);

  function stopWatching() {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
  }

  async function stopSharing() {
    stopWatching();
    setSharing(false);
    const u = userRef.current;
    if (u) {
      try {
        await deleteDoc(doc(db, "live_locations", u.uid));
      } catch (err) {
        console.error("Failed to remove live location:", err);
      }
    }
  }

  // Էջից դուրս գալիս դադարեցնում ենք հետևելը և ջնջում դիրքը
  useEffect(() => {
    return () => {
      stopWatching();
      const u = userRef.current;
      if (u && watchIdRef.current === null && trailRef.current.length > 0) {
        deleteDoc(doc(db, "live_locations", u.uid)).catch(() => {});
      }
    };
  }, []);

  function startSharing() {
    if (!user) return;
    if (!navigator.geolocation) {
      setError("Ձեր բրաուզերը դիրքի որոշում չի աջակցում։");
      return;
    }
    setError("");
    trailRef.current = [];
    setMyTrail([]);
    setSharing(true);

    watchIdRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude: lat, longitude: lng, accuracy } = pos.coords;
        setMe([lat, lng]);

        const point = { lat, lng };
        const last = trailRef.current[trailRef.current.length - 1];
        if (!last || distanceMeters(last, point) > 3) {
          trailRef.current = [...trailRef.current, point].slice(-MAX_TRAIL);
          setMyTrail(trailRef.current.map((p) => [p.lat, p.lng]));
        }

        const t = Date.now();
        if (t - lastWriteRef.current < WRITE_EVERY_MS) return;
        lastWriteRef.current = t;

        setDoc(doc(db, "live_locations", user.uid), {
          uid: user.uid,
          name: user.displayName || user.email?.split("@")[0] || "Օգտատեր",
          email: user.email || "",
          lat,
          lng,
          accuracy: accuracy || 0,
          trail: trailRef.current,
          ts: t,
          updatedAt: serverTimestamp(),
        }).catch((err) => {
          console.error("Failed to write live location:", err);
          setError("Դիրքը չհաջողվեց պահպանել (ստուգեք Firestore Rules)։");
        });
      },
      (err) => {
        console.error("Geolocation error:", err);
        if (err.code === 1) {
          setError("Դիրքի թույլտվությունը մերժված է։ Թույլատրեք բրաուզերի կարգավորումներում։");
        } else {
          setError("Դիրքը չհաջողվեց որոշել։");
        }
        stopWatching();
        setSharing(false);
      },
      { enableHighAccuracy: true, maximumAge: 2000, timeout: 15000 }
    );
  }

  const visibleOthers = others.filter(
    (p) => typeof p.lat === "number" && now - (p.ts || 0) < STALE_MS
  );

  if (authLoading) {
    return <div className="p-10 text-center text-gray-500">Բեռնվում է...</div>;
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center gap-3 p-10 text-center">
        <p className="m-0 text-gray-600">
          Քարտեզը տեսնելու համար անհրաժեշտ է մուտք գործել։
        </p>
        <Link
          to="/login"
          className="rounded-full bg-[#6a00d1] px-6 py-2 text-sm font-bold text-white no-underline"
        >
          Մուտք գործել
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-4">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={sharing ? stopSharing : startSharing}
          className="cursor-pointer rounded-full border-0 px-5 py-2 text-sm font-bold text-white"
          style={{ background: sharing ? "#ef4444" : PURPLE }}
        >
          {sharing ? "Դադարեցնել կիսվելը" : "Կիսվել իմ դիրքով"}
        </button>

        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={follow}
            onChange={(e) => setFollow(e.target.checked)}
          />
          Հետևել ինձ
        </label>

        <div className="ml-auto text-sm text-gray-600">
          {sharing ? "Դուք օնլայն եք, բոլորը տեսնում են ձեր դիրքը" : "Ձեր դիրքը թաքնված է"}
          {" · "}
          Օնլայն՝ {visibleOthers.length + (sharing ? 1 : 0)}
        </div>
      </div>

      {error && <div className="mb-3 text-sm text-red-600">{error}</div>}

      <div
        className="w-full overflow-hidden rounded-xl border border-gray-200"
        style={{ height: "calc(100vh - 230px)", minHeight: 420 }}
      >
        <MapContainer
          center={DEFAULT_CENTER}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FollowMe position={me} follow={follow && sharing} />

          {sharing && myTrail.length > 1 && (
            <Polyline positions={myTrail} pathOptions={{ color: PURPLE, weight: 5 }} />
          )}
          {sharing && me && (
            <Marker position={me} icon={MY_ICON}>
              <Popup>Դուք</Popup>
            </Marker>
          )}

          {visibleOthers.map((p) => (
            <React.Fragment key={p.uid}>
              {Array.isArray(p.trail) && p.trail.length > 1 && (
                <Polyline
                  positions={p.trail.map((t) => [t.lat, t.lng])}
                  pathOptions={{ color: GREEN, weight: 4, opacity: 0.8 }}
                />
              )}
              <Marker position={[p.lat, p.lng]} icon={OTHER_ICON}>
                <Popup>
                  <strong>{p.name}</strong>
                  <br />
                  {p.email}
                </Popup>
              </Marker>
            </React.Fragment>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}