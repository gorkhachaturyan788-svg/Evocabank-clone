import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const EvocaLogo = () => (
  <svg
    role="img"
    aria-label="Evocabank"
    viewBox="0 0 176 35"
    style={{ display: "block", height: "28px", width: "140px" }}
  >
    <g fill="none" stroke="#7a7d7e" strokeWidth="8">
      <path d="M4 17.5H31A13.5 13.5 0 1 0 26.2 27.8" />
      <circle cx="91" cy="17.5" r="13.5" />
      <path d="M136.85 7.95A13.5 13.5 0 1 0 136.85 27.05" />
      <circle cx="158.5" cy="17.5" r="13.5" />
      <path d="M172 0V35" />
    </g>
    <path fill="#6a00d1" d="M36 0H49L55 18L61 0H68L56 35H51Z" />
  </svg>
);

const RIGHT_BG_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSHS1J2416uGi8p1EX_HHDsoiaZiAmqg-XoX-Qx2Q0ig&s=10";

const PHONES_IMAGE =
  "https://www.telecomarmenia.am/myaccount/img/mobile-devices.png?v=3";

export default function LoginPage() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("individuals");
  const [showPassword, setShowPassword] = useState(false);
  const [lang, setLang] = useState("am");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/account");
    }
  }, [user, navigate]);

  if (authLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          fontFamily: "'Noto Sans Armenian', 'Noto Sans', Arial, sans-serif",
        }}
      >
        Բեռնվում է...
      </div>
    );
  }

  const handleGoogleLogin = async () => {
    if (loading) return;
    setLoading(true);
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const result = await signInWithPopup(auth, provider);
      const loggedUser = result.user;

      await setDoc(
        doc(db, "users", loggedUser.uid),
        {
          uid: loggedUser.uid,
          name: loggedUser.displayName || "Անուն չկա",
          email: loggedUser.email,
          photoURL: loggedUser.photoURL || "",
          createdAt: new Date(),
        },
        { merge: true }
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!email || !password || loading) return;

    setLoading(true);
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const regUser = userCredential.user;

      await setDoc(
        doc(db, "users", regUser.uid),
        {
          uid: regUser.uid,
          email: regUser.email,
          name: "Անուն չկա",
          createdAt: new Date(),
        },
        { merge: true }
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password || loading) return;

    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#f7f8fa",
        fontFamily: "'Noto Sans Armenian', 'Noto Sans', Arial, sans-serif",
      }}
    >
      {/* Ձախ հատված (40%) */}
      <div
        style={{
          flex: "0 0 40%",
          minWidth: "380px",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "28px 24px 32px",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Լոգոն վերև ձախում */}
        <div style={{ alignSelf: "flex-start", width: "100%" }}>
          <Link to="/" aria-label="Evocabank" style={{ display: "inline-block" }}>
            <EvocaLogo />
          </Link>
        </div>

        {/* Կենտրոնական բլոկ՝ Tabs + Form */}
        <div
          style={{
            width: "100%",
            maxWidth: "360px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "42px", marginBottom: "28px" }}>
            <button
              type="button"
              onClick={() => setActiveTab("individuals")}
              style={{
                background: "transparent",
                border: "none",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                paddingBottom: "8px",
                color: activeTab === "individuals" ? "#1f2937" : "#9ca3af",
                borderBottom:
                  activeTab === "individuals"
                    ? "2.5px solid #6a00d1"
                    : "2.5px solid transparent",
              }}
            >
              Անհատներին
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("business")}
              style={{
                background: "transparent",
                border: "none",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                paddingBottom: "8px",
                color: activeTab === "business" ? "#1f2937" : "#9ca3af",
                borderBottom:
                  activeTab === "business"
                    ? "2.5px solid #6a00d1"
                    : "2.5px solid transparent",
              }}
            >
              Բիզնես
            </button>
          </div>

          {/* Սպիտակ քարտը */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              padding: "36px 32px",
              width: "100%",
              boxShadow: "0 8px 28px rgba(15, 23, 42, 0.05)",
              boxSizing: "border-box",
            }}
          >
            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: "22px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "11px",
                    color: "#9ca3af",
                    marginBottom: "6px",
                  }}
                >
                  Էլ. հասցե
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #d1d5db",
                    paddingBottom: "6px",
                  }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Մուտքագրեք էլ. հասցեն"
                    autoComplete="email"
                    style={{
                      border: "none",
                      outline: "none",
                      width: "100%",
                      fontSize: "13px",
                      color: "#1f2937",
                      background: "transparent",
                    }}
                    required
                  />
                </div>
              </div>

              <div style={{ marginBottom: "22px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "11px",
                    color: "#9ca3af",
                    marginBottom: "6px",
                  }}
                >
                  Գաղտնաբառ
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #d1d5db",
                    paddingBottom: "6px",
                  }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Մուտքագրեք գաղտնաբառը"
                    autoComplete="current-password"
                    style={{
                      border: "none",
                      outline: "none",
                      width: "100%",
                      fontSize: "13px",
                      color: "#1f2937",
                      background: "transparent",
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: "#6b7280",
                      display: "flex",
                      alignItems: "center",
                      padding: 0,
                    }}
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
              </div>

              {error && (
                <p
                  style={{
                    color: "#dc2626",
                    marginBottom: "14px",
                    fontSize: "12px",
                  }}
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  backgroundColor: "#eb5353",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "20px",
                  padding: "11px 16px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  marginBottom: "14px",
                }}
              >
                {loading ? "Բեռնվում է..." : "Մուտք"}
              </button>
            </form>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              style={{
                width: "100%",
                backgroundColor: "#ffffff",
                color: "#374151",
                border: "1px solid #d1d5db",
                borderRadius: "20px",
                padding: "10px 16px",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                marginBottom: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                />
              </svg>
              Մուտք Google-ով
            </button>

            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <a
                href="#"
                style={{
                  color: "#2b6cb0",
                  fontSize: "12px",
                  textDecoration: "underline",
                }}
              >
                Մոռացե՞լ եք գաղտնաբառը
              </a>
            </div>

            <button
              type="button"
              onClick={handleRegister}
              disabled={loading}
              style={{
                width: "100%",
                backgroundColor: "#ffffff",
                color: "#eb5353",
                border: "1px solid #eb5353",
                borderRadius: "20px",
                padding: "10px 16px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {loading ? "Բեռնվում է..." : "Գրանցում"}
            </button>
          </div>
        </div>

        {/* Ներքևի լեզուները */}
        <div style={{ display: "flex", gap: "24px", marginTop: "20px" }}>
          <button
            type="button"
            onClick={() => setLang("am")}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              paddingBottom: "4px",
              borderBottom:
                lang === "am" ? "2px solid #00bcd4" : "2px solid transparent",
            }}
          >
            <span style={{ fontSize: "20px" }}>🇦🇲</span>
          </button>
          <button
            type="button"
            onClick={() => setLang("ru")}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              paddingBottom: "4px",
              borderBottom:
                lang === "ru" ? "2px solid #00bcd4" : "2px solid transparent",
            }}
          >
            <span style={{ fontSize: "20px" }}>🇷🇺</span>
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              paddingBottom: "4px",
              borderBottom:
                lang === "en" ? "2px solid #00bcd4" : "2px solid transparent",
            }}
          >
            <span style={{ fontSize: "20px" }}>🇬🇧</span>
          </button>
        </div>
      </div>

      {/* Աջ հատված (60%) */}
      <div
        style={{
          flex: "1 1 60%",
          backgroundImage: `url("${RIGHT_BG_IMAGE}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px 56px 28px",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "36px",
            marginTop: "24px",
          }}
        >
          <h1
            style={{
              color: "#1f2937",
              fontSize: "44px",
              fontWeight: 900,
              margin: 0,
              letterSpacing: "1px",
              lineHeight: 1.15,
              textAlign: "right",
            }}
          >
            ԱՆՁՆԱԿԱՆ
            <br />
            ԳՐԱՍԵՆՅԱԿ
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#000000",
                color: "#ffffff",
                padding: "7px 12px",
                borderRadius: "7px",
                textDecoration: "none",
                width: "126px",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z" />
              </svg>
              <div>
                <div style={{ fontSize: "8px", opacity: 0.75, lineHeight: 1 }}>
                  Download on the
                </div>
                <div style={{ fontSize: "13px", fontWeight: 700, lineHeight: 1.2 }}>
                  App Store
                </div>
              </div>
            </a>

            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#000000",
                color: "#ffffff",
                padding: "7px 12px",
                borderRadius: "7px",
                textDecoration: "none",
                width: "126px",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.25 2.25c-.173 0-.342.045-.491.13L13.11 10.5l3.22-3.22L5.59 2.43c-.105-.06-.221-.11-.34-.11v-.07zM3.47 3.22a.742.742 0 00-.22.53v16.5c0 .204.083.39.22.53l9.01-9.01-9.01-9.01zM13.84 11.23l-3.32 3.32 7.07 4.08c.36.21.78.21 1.14 0l-4.89-4.89-2.51-2.51zm4.14-1.44l4.15-2.4c.36-.21.57-.59.57-1s-.21-.79-.57-1l-5.17 2.99 1.02 1.41z" />
              </svg>
              <div>
                <div style={{ fontSize: "8px", opacity: 0.75, lineHeight: 1 }}>
                  GET IT ON
                </div>
                <div style={{ fontSize: "13px", fontWeight: 700, lineHeight: 1.2 }}>
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </div>

        <img
          src={PHONES_IMAGE}
          alt="Mobile Devices"
          style={{
            position: "absolute",
            bottom: "42px",
            right: "48px",
            width: "440px",
            maxWidth: "65%",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 3,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#ffffff",
            fontSize: "12px",
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
            <a href="#" style={{ color: "inherit" }}>
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>
            <a href="#" style={{ color: "inherit" }}>
              <svg
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" style={{ color: "inherit" }}>
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
          <div>Evoca © 2026.</div>
        </div>
      </div>
    </div>
  );
}