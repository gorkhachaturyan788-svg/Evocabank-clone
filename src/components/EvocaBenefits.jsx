import { useState } from "react";

const BASE = "https://www.evoca.am/images/landing_card_groups/1/";

// Յուրաքանչյուր քարտի hover-ի ժամանակ երևացող նկարը
const CARDS = [
  { id: "visa", img: BASE + "17768428900225.png", border: "linear-gradient(#1a2a80,#1a2a80)" },
  { id: "mastercard", img: BASE + "17768429357504.png", border: "linear-gradient(90deg,#ee2c3c,#f79e1b)" },
  { id: "arca", img: BASE + "17768429488894.png", border: "linear-gradient(90deg,#3d5afe,#7ed957)" },
  { id: "unionpay", img: BASE + "17768429612343.png", border: "linear-gradient(90deg,#e21836,#00798a)" },
];

const IMG = "https://www.evoca.am/images-cache/landing_benefits/1/";
const BANNER_IMG = "https://www.evoca.am/img/temp/benefits/card-white_1.png";

const MERCHANTS = [
  { pct: "10%", name: "CEMI Café by Apicius Armenia", tag: "Սրճարաններ", type: "Զեղչ", img: IMG + "17883543964959/304x140.png", links: ["ig"] },
  { pct: "10%", name: "ppls Dilijan", tag: "Հանգիստ", type: "Զեղչ", img: IMG + "17883546922591/304x140.png", links: ["fb", "ig", "web"] },
  { pct: "10%", name: "Villa3 Community Hub", tag: "Հանգիստ", type: "Զեղչ", img: IMG + "17883548008353/304x140.png", links: ["fb", "ig"] },
  { name: "MiniMondo", tag: "Կենսակերպ", type: "Նվեր-քարտ", img: IMG + "17927608252913/304x140.png", links: ["fb", "ig", "web"] },
  { pct: "15%", name: "Chronograph", tag: "Աքսեսուարներ", type: "Զեղչ", img: IMG + "17737342206664/304x140.png", links: ["fb", "ig"] },
  { pct: "10%", name: "Paul Armenia", tag: "Սրճարաններ", type: "Զեղչ", img: IMG + "17737344773161/304x140.png", links: ["fb", "ig"] },
  { pct: "15%", name: "Henderson", tag: "Նրածնություն", type: "Զեղչ", img: null, bg: "#14213d", links: ["fb", "ig"] },
  { pct: "5%", name: "Pullman", tag: "Ինտերիեր", type: "Զեղչ", img: null, bg: "#6b6b6b", links: ["fb", "ig"] },
  { pct: "10%", name: "Burmunk", tag: "Աքսեսուարներ", type: "Զեղչ", img: null, bg: "#555", links: ["fb", "ig"] },
];

const FILTERS = [
  { title: "Քարտատեսակ", scroll: true, items: [
    ["Visa Infinite", 115], ["Evoca Visa Platinum", 90], ["Evoca Travel Card", 105], ["Wilco Visa Infinite", 8],
    ["Visa Vision", 91], ["Mastercard Gold", 99], ["Visa Gold", 99], ["Mastercard Standard", 91],
    ["Visa Classic", 91], ["Mastercard World Digital", 91], ["Visa Digital", 91] ] },
  { title: "Վայր", items: [["Հայաստան", 115], ["Արտերկիր", 1]] },
  { title: "Բենեֆիթ", items: [["Cashback", 12], ["Զեղչ", 99], ["Նվեր-քարտ", 3]] },
  { title: "Ոլորտ", items: [["Սրճարաններ", 29], ["Նվերներ", 4], ["Ինտերիեր", 11], ["Կենսակերպ", 8], ["Տեխնիկա", 1],
    ["Նրածնություն", 20], ["Առողջություն", 5], ["Գեղեցկություն", 8], ["Սպորտ", 9], ["Աքսեսուարներ", 13]] },
];
const DEFAULT_CHECKED = ["Visa Infinite", "Visa Vision", "Visa Gold", "Visa Classic", "Visa Digital"];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@125,800&family=Noto+Sans+Armenian:wght@400;500;600&family=Comfortaa:wght@700&family=Montserrat:wght@300;400;500;600;700&display=swap');

.eb-root { min-height: 100vh; background: #fff; font-family: 'Noto Sans Armenian', system-ui, sans-serif; color: #111; padding: 40px 0 0; box-sizing: border-box; }
.eb-page { padding: 0 4.5%; }
.eb-root *, .eb-root *::before, .eb-root *::after { box-sizing: border-box; }

.eb-header { max-width: 1630px; margin: 0 auto; height: 105px; background: #fff; border-radius: 999px; box-shadow: 0 6px 40px rgba(0,0,0,.08); display: flex; align-items: center; justify-content: space-between; padding: 0 50px; }
.eb-logo { display: flex; align-items: baseline; text-decoration: none; line-height: 1; }
.eb-logo-main { font-family: 'Comfortaa', sans-serif; font-weight: 700; font-size: 46px; color: #8a8a8a; letter-spacing: -1px; }
.eb-logo-main b { color: #6a0dde; font-weight: 700; }
.eb-logo-sub { font-family: 'Montserrat', sans-serif; font-weight: 300; font-size: 41px; color: #8a8a8a; letter-spacing: 1px; margin-left: 1px; }
.eb-right { display: flex; align-items: center; gap: 30px; }
.eb-order { background: #6a0dde; color: #fff; border: 0; border-radius: 999px; height: 45px; padding: 0 45px; font: 500 18px 'Noto Sans Armenian', sans-serif; cursor: pointer; transition: background .2s; }
.eb-order:hover { background: #5a0bc0; }
.eb-globe { background: none; border: 0; padding: 0; cursor: pointer; display: grid; place-items: center; }

.eb-hero { position: relative; max-width: 1100px; margin: 0 auto; padding-top: 82px; text-align: center; }
.eb-title { margin: 0; font-weight: 500; font-size: clamp(24px, 2.4vw, 38px); color: #6a0dde; line-height: 1.3; }
.eb-pills { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-top: 14px; position: relative; z-index: 2; }
.eb-pill { height: 55px; padding: 2px; border: 0; border-radius: 999px; cursor: pointer; display: grid; }
.eb-pill > span { background: #fff; border-radius: 999px; display: flex; align-items: center; justify-content: center; padding: 0 22px; min-width: 100px; }

.eb-search { position: relative; z-index: 2; width: min(585px, 100%); height: 75px; margin: 86px auto 0; background: #f5f5f5; border-radius: 999px; display: flex; align-items: center; padding: 0 30px; gap: 26px; }
.eb-search input { flex: 1; min-width: 0; background: none; border: 0; outline: 0; font: 400 24px 'Noto Sans Armenian', sans-serif; color: #333; }
.eb-search input::placeholder { color: #8a8a8a; }
.eb-search:focus-within { box-shadow: 0 0 0 2px #6a0dde55; }

.eb-float { position: absolute; left: 50%; top: 18px; width: 100%; height: calc(100% - 18px); transform: translateX(-50%); pointer-events: none; z-index: 1; opacity: 0; transition: opacity .35s ease; }
.eb-float.on { opacity: 1; }
.eb-float img { width: 100%; height: 100%; object-fit: contain; animation: eb-bob 3.2s ease-in-out infinite; }
@keyframes eb-bob { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-8px) rotate(.8deg); } }

@media (max-width: 720px) {
  .eb-header { height: 72px; padding: 0 20px; }
  .eb-logo-main { font-size: 28px; } .eb-logo-sub { font-size: 25px; }
  .eb-order { padding: 0 16px; font-size: 13px; height: 36px; }
  .eb-right { gap: 12px; }
  .eb-hero { padding-top: 48px; }
  .eb-search { height: 56px; margin-top: 48px; } .eb-search input { font-size: 18px; }
}
.eb-benefits { max-width: 1220px; margin: 130px auto 0; }
.eb-bar { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.eb-bar h2 { margin: 0; font: 700 20px 'Montserrat', 'Noto Sans Armenian', sans-serif; color: #222; }
.eb-clear { display: inline-flex; align-items: center; gap: 6px; background: #f3eaff; color: #6a0dde; border: 1px solid #6a0dde; border-radius: 999px; padding: 3px 14px; font: 500 14px 'Noto Sans Armenian', sans-serif; cursor: pointer; }
.eb-layout { display: grid; grid-template-columns: 285px 1fr; gap: 38px; align-items: start; }

.eb-side { display: flex; flex-direction: column; gap: 14px; position: sticky; top: 16px; max-height: calc(100vh - 32px); overflow: auto; scrollbar-width: none; }
.eb-fbox { border: 1px solid #d9d9d9; border-radius: 10px; background: #fff; padding: 0 16px; }
.eb-fhead { width: 100%; display: flex; justify-content: space-between; align-items: center; background: none; border: 0; padding: 16px 0; font: 600 15px 'Montserrat', 'Noto Sans Armenian', sans-serif; color: #222; cursor: pointer; text-align: left; }
.eb-fhead svg { transition: transform .2s; }
.eb-fhead.closed svg { transform: rotate(180deg); }
.eb-flist { padding: 0 0 14px; display: flex; flex-direction: column; gap: 11px; }
.eb-flist.scroll { max-height: 335px; overflow: auto; padding-right: 6px; }
.eb-check { display: flex; align-items: center; gap: 10px; font: 500 14px 'Montserrat', 'Noto Sans Armenian', sans-serif; color: #333; cursor: pointer; }
.eb-check input { appearance: none; -webkit-appearance: none; width: 16px; height: 16px; margin: 0; border: 1.5px solid #555; border-radius: 3px; background: #fff; display: grid; place-content: center; cursor: pointer; flex: none; }
.eb-check input:checked { background: #4f46e5; border-color: #4f46e5; }
.eb-check input:checked::after { content: ""; width: 4px; height: 8px; border: solid #fff; border-width: 0 2px 2px 0; transform: translateY(-1px) rotate(45deg); }
.eb-check input:focus-visible { outline: 2px solid #6a0dde; outline-offset: 2px; }
.eb-count { margin-left: auto; background: #ececec; color: #555; font-size: 10px; border-radius: 4px; padding: 2px 5px; }

.eb-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.eb-card { border: 1px solid #cfcfcf; border-radius: 10px; background: #fff; overflow: hidden; display: flex; flex-direction: column; transition: border-color .2s; cursor: pointer; }
.eb-card:hover { border-color: #111; }
.eb-thumb { aspect-ratio: 304 / 140; background: #1a1a1a; overflow: hidden; }
.eb-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; filter: grayscale(1) brightness(.5); transition: filter .35s; }
.eb-card:hover .eb-thumb img { filter: none; }
.eb-body { padding: 14px 12px 14px; display: flex; flex-direction: column; flex: 1; }
.eb-name { margin: 0; font: 700 17px/1.3 'Montserrat', 'Noto Sans Armenian', sans-serif; color: #111; min-height: 44px; }
.eb-name em { font-style: normal; color: #6a0dde; }
.eb-kind { display: flex; align-items: center; gap: 6px; margin: 12px 0 14px; font: 500 14px 'Noto Sans Armenian', sans-serif; color: #222; }
.eb-foot { margin-top: auto; display: flex; align-items: center; gap: 8px; }
.eb-chip { border: 1px solid #cfcfcf; border-radius: 5px; padding: 5px 9px; font: 500 12px 'Noto Sans Armenian', sans-serif; color: #222; background: #fff; }
.eb-ico { width: 32px; height: 28px; border: 1px solid #cfcfcf; border-radius: 5px; display: grid; place-items: center; }
.eb-social { margin-left: auto; display: flex; gap: 8px; color: #222; }

.eb-banner { grid-column: 1 / -1; position: relative; min-height: 216px; border-radius: 14px; overflow: hidden; background: linear-gradient(90deg, #a53dff 0%, #8a2ee8 28%, #1a0733 70%, #0a0014 100%); display: flex; align-items: center; padding: 0 44px; }
.eb-banner h3 { margin: 0; font: 800 46px/.95 'Archivo', 'Montserrat', sans-serif; font-stretch: 125%; letter-spacing: -.5px; color: #fff; }
.eb-banner p { margin: 12px 0 0; max-width: 300px; font: 500 12.5px/1.3 'Noto Sans Armenian', sans-serif; color: #fff; }
.eb-banner img { position: absolute; right: 0; top: 50%; height: 120%; transform: translateY(-50%); object-fit: contain; pointer-events: none; }

.eb-chat { position: fixed; right: 0; bottom: 0; z-index: 20; background: #6a0dde; color: #fff; border: 0; border-radius: 12px 0 0 0; padding: 12px 28px 12px 14px; font: 500 14px 'Noto Sans Armenian', sans-serif; cursor: pointer; }
.eb-chat::after { content: ""; position: absolute; right: 6px; top: 6px; width: 14px; height: 14px; border-radius: 50%; background: #2ee66b; }

@media (max-width: 980px) { .eb-layout { grid-template-columns: 1fr; } .eb-side { position: static; max-height: none; } .eb-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .eb-grid { grid-template-columns: 1fr; } .eb-banner h3 { font-size: 30px; } .eb-banner { padding: 0 24px; } }

.eb-faq { max-width: 1086px; margin: 110px auto 0; background: #fff; border-radius: 28px; box-shadow: 0 4px 40px rgba(0,0,0,.07); padding: 30px 33px 33px; }
.eb-faq h2 { margin: 0 0 22px; font: 700 31px 'Montserrat', 'Noto Sans Armenian', sans-serif; color: #111; }
.eb-faq-list { display: flex; flex-direction: column; gap: 14px; }
.eb-q { border: 1px solid #dccdf5; border-radius: 6px; background: #fff; transition: border-color .2s; }
.eb-q.open { border-color: #6a0dde; }
.eb-q > button { width: 100%; display: flex; align-items: center; gap: 22px; background: none; border: 0; padding: 12px 14px; min-height: 40px; cursor: pointer; text-align: left; font: 600 14.5px 'Noto Sans Armenian', 'Montserrat', sans-serif; color: #111; }
.eb-q.open > button { font-weight: 700; padding-top: 12px; }
.eb-q > button svg { flex: none; transition: transform .2s; }
.eb-q.open > button svg { transform: rotate(180deg); }
.eb-a { padding: 8px 40px 26px 58px; font: 400 12.8px/1.6 'Noto Sans Armenian', sans-serif; color: #222; }
.eb-a b { color: #6a0dde; font-weight: 600; }

.eb-footer { margin-top: 53px; border-top: 1px solid #b9b9b9; }
.eb-foot-top { max-width: 1086px; margin: 0 auto; padding: 36px 0 48px; display: flex; justify-content: space-between; gap: 32px; flex-wrap: wrap; }
.eb-foot-logo { height: 28px; display: block; }
.eb-foot-h { margin: 28px 0 0; font: 700 15px 'Montserrat', 'Noto Sans Armenian', sans-serif; color: #111; }
.eb-contacts { display: flex; align-items: center; gap: 26px; margin-top: 18px; flex-wrap: wrap; }
.eb-contacts a { display: inline-flex; align-items: center; gap: 10px; color: #111; text-decoration: none; font: 500 14px 'Montserrat', 'Noto Sans Armenian', sans-serif; }
.eb-contacts img { width: 20px; height: 20px; }
.eb-app { padding-top: 22px; }
.eb-app a.eb-app-title { display: block; font: 700 14px 'Montserrat', 'Noto Sans Armenian', sans-serif; color: #6a0dde; text-decoration: none; }
.eb-badges { display: flex; gap: 8px; margin-top: 12px; }
.eb-badge { display: flex; align-items: center; gap: 6px; background: #000; color: #fff; border-radius: 5px; padding: 0 8px; height: 24px; text-decoration: none; border: 1px solid #777; }
.eb-badge small { display: block; font: 400 5px/1 Arial, sans-serif; letter-spacing: .3px; }
.eb-badge span { font: 500 9px/1.1 Arial, sans-serif; }
.eb-copy { background: #6a0dde; color: #fff; }
.eb-copy-in { max-width: 1086px; margin: 0 auto; height: 57px; display: flex; align-items: center; justify-content: space-between; font: 500 14px 'Montserrat', 'Noto Sans Armenian', sans-serif; }
.eb-socials { display: flex; gap: 22px; align-items: center; }
.eb-socials a { color: #fff; display: grid; }
@media (max-width: 600px) { .eb-faq { padding: 20px 16px; } .eb-a { padding: 6px 14px 20px; } .eb-copy-in { height: auto; padding: 16px 0; flex-direction: column; gap: 12px; text-align: center; } }

@media (prefers-reduced-motion: reduce) { .eb-float img { animation: none; } .eb-float { transition: none; } }
`;

function Logo() {
  return (
    <a className="eb-logo" href="/" aria-label="Evoca Benefits">
      <span className="eb-logo-main">e<b>v</b>oca</span>
      <span className="eb-logo-sub">BENEFITS</span>
    </a>
  );
}

function Globe() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.6">
      <circle cx="12" cy="12" r="10" />
      <ellipse cx="12" cy="12" rx="4.2" ry="10" />
      <path d="M2 12h20M4 6.5h16M4 17.5h16" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.7" strokeLinecap="round">
      <circle cx="10.5" cy="10.5" r="7" />
      <path d="M16 16l5 5" />
    </svg>
  );
}

const logos = {
  visa: <span style={{ font: "italic 900 30px Arial, sans-serif", color: "#1a2a80", letterSpacing: "-1px" }}>VISA</span>,
  mastercard: (
    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width="46" height="30" viewBox="0 0 46 30">
        <circle cx="15" cy="15" r="15" fill="#eb001b" />
        <circle cx="31" cy="15" r="15" fill="#f79e1b" />
        <path d="M23 3.2a15 15 0 0 1 0 23.6 15 15 0 0 1 0-23.6z" fill="#ff5f00" />
      </svg>
      <span style={{ font: "600 18px Arial, sans-serif", color: "#222" }}>mastercard</span>
    </span>
  ),
  arca: <span style={{ font: "700 30px 'Comfortaa', sans-serif", color: "#2f49e6", letterSpacing: "-1px" }}>arca</span>,
  unionpay: (
    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <svg width="38" height="24" viewBox="0 0 38 24">
        <path d="M5 0h10l-3 24H2z" fill="#e21836" />
        <path d="M14 0h12l-3 24H11z" fill="#00447c" />
        <path d="M25 0h10a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H22z" fill="#007b84" />
      </svg>
      <span style={{ lineHeight: 1 }}>
        <span style={{ font: "italic 600 16px Arial, sans-serif", color: "#333", display: "block" }}>UnionPay</span>
        <span style={{ font: "italic 400 9px Arial, sans-serif", color: "#555" }}>International</span>
      </span>
    </span>
  ),
};

const Chevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 15l6-6 6 6" /></svg>
);
const Info = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6a0dde" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 11v6M12 7.5v.5" strokeLinecap="round" /></svg>
);
const CardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.6"><rect x="3" y="6" width="18" height="12" rx="2.5" /><path d="M3 10h18M7 14.5h3" strokeLinecap="round" /></svg>
);
const social = {
  fb: <svg key="fb" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.2C16.700 2.200 15.800 2 14.700 2 12.400 2 10.800 3.400 10.800 6v2.500H8v3.400h2.800V22H14v-10.100h2.600l.4-3.400z" /></svg>,
  ig: <svg key="ig" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.200" cy="6.800" r=".8" fill="currentColor" /></svg>,
  web: <svg key="web" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9.500" /><ellipse cx="12" cy="12" rx="4" ry="9.500" /><path d="M2.500 12h19" /></svg>,
};

function FilterBox({ group, checked, toggle }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="eb-fbox">
      <button type="button" className={"eb-fhead" + (open ? "" : " closed")} onClick={() => setOpen(!open)} aria-expanded={open}>
        {group.title}<Chevron />
      </button>
      {open && (
        <div className={"eb-flist" + (group.scroll ? " scroll" : "")}>
          {group.items.map(([label, n]) => (
            <label key={label} className="eb-check">
              <input type="checkbox" checked={checked.includes(label)} onChange={() => toggle(label)} />
              {label}<span className="eb-count">{n}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function MerchantCard({ m }) {
  return (
    <article className="eb-card">
      <div className="eb-thumb" style={m.bg ? { background: m.bg } : undefined}>
        {m.img && <img src={m.img} alt={m.name} loading="lazy" onError={(e) => (e.currentTarget.style.display = "none")} />}
      </div>
      <div className="eb-body">
        <h3 className="eb-name">{m.pct && <><em>{m.pct}</em> </>}{m.name}</h3>
        <div className="eb-kind">{m.type}<Info /></div>
        <div className="eb-foot">
          <span className="eb-chip">{m.tag}</span>
          <span className="eb-ico"><CardIcon /></span>
          <span className="eb-social">{m.links.map((l) => social[l])}</span>
        </div>
      </div>
    </article>
  );
}

function Benefits() {
  const [checked, setChecked] = useState(DEFAULT_CHECKED);
  const toggle = (l) => setChecked((c) => (c.includes(l) ? c.filter((x) => x !== l) : [...c, l]));
  return (
    <section className="eb-benefits">
      <div className="eb-layout">
        <aside className="eb-side" aria-label="Ֆիլտրներ">
          <div className="eb-bar">
            <h2>Ֆիլտրներ</h2>
            <button type="button" className="eb-clear" onClick={() => setChecked([])}>✕ Մաքրել ֆիլտրերը</button>
          </div>
          <div className="eb-fbox" style={{ padding: 0 }}>
            <button type="button" className="eb-fhead closed" style={{ padding: "16px" }}>Դասավորել<Chevron /></button>
          </div>
          {FILTERS.map((g) => <FilterBox key={g.title} group={g} checked={checked} toggle={toggle} />)}
        </aside>

        <div className="eb-grid">
          {MERCHANTS.slice(0, 6).map((m) => <MerchantCard key={m.name} m={m} />)}
          <div className="eb-banner">
            <div>
              <h3>EVOCA<br />BENEFITS</h3>
              <p>Մեկ քարտ, անսահմանափակ բենեֆիթներ: Պատվիրիր քո Evoca քարտը հիմա:</p>
            </div>
            <img src={BANNER_IMG} alt="" onError={(e) => (e.currentTarget.style.display = "none")} />
          </div>
          {MERCHANTS.slice(6).map((m) => <MerchantCard key={m.name} m={m} />)}
        </div>
      </div>
      <button type="button" className="eb-chat">Գրեք մեզ, մենք օնլայն ենք !</button>
    </section>
  );
}

const FAQ = [
  { q: "Ի՞նչ է Evoca Benefits-ը:", a: <><b>Evoca Benefits</b>-ը նոր նախագիծ է, որի շրջանակում <b>Evoca</b> բոլոր քարտապանները ստանում են բենեֆիթներ՝ զեղչեր, քեշբեքեր կամ այլ առավելություններ 100-ից ավել գործընկերների մոտ՝ պարզապես վճարելով իրենց Evoca քարտերով:</> },
  { q: "Ի՞նչ բենեֆիթներից կարող են օգտվել Բանկի քարտապանները:" },
  { q: "Ինչպե՞ս օգտվել բենեֆիթներից:" },
  { q: "Քանի՞ անգամ է հնարավոր օգտվել Evoca բենեֆիթներից:" },
  { q: "Եթե տվյալ գործընկերոջ մոտ արդեն գործում են զեղչեր, Evoca բենեֆիթները կգործե՞ն:" },
  { q: "Evocabank-ի ո՞ր քարտերն ունեն բենեֆիթներ:" },
  { q: "Ինչպե՞ս պատվիրել Evoca քարտը:" },
  { q: "Ինչպե՞ս կարող է իմ բիզնեսը միանալ Evoca Benefits ծրագրին:" },
];
const FAQ_PLACEHOLDER = "Այստեղ ավելացրու պատասխանի տեքստը (FAQ զանգված):";

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="eb-faq" aria-labelledby="eb-faq-title">
      <h2 id="eb-faq-title">Հաճախ տրվող հարցեր</h2>
      <div className="eb-faq-list">
        {FAQ.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={"eb-q" + (isOpen ? " open" : "")}>
              <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6a0dde" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isOpen ? "rotate(180deg)" : "none" }}><path d="M5 9l7 7 7-7" /></svg>
                {f.q}
              </button>
              {isOpen && <div className="eb-a">{f.a || FAQ_PLACEHOLDER}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

const ASSET = "https://www.evoca.am/img/temp/benefits/";

function Footer() {
  const [logoFailed, setLogoFailed] = useState(false);
  const sc = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "currentColor" };
  return (
    <footer className="eb-footer">
      <div className="eb-foot-top">
        <div>
          {logoFailed ? <Logo /> : <img className="eb-foot-logo" src={ASSET + "logo_2.svg"} alt="Evoca Benefits" onError={() => setLogoFailed(true)} />}
          <p className="eb-foot-h">Կոնտակտային տվյալներ</p>
          <div className="eb-contacts">
            <a href="tel:+37410605555"><img src={ASSET + "icon-phone.svg"} alt="" />+374 10 605555</a>
            <a href="mailto:info@evoca.am"><img src={ASSET + "icon-email.svg"} alt="" />Կապ մեզ հետ</a>
          </div>
        </div>
        <div className="eb-app">
          <a className="eb-app-title" href="https://www.evoca.am">Ներբեռնել EvocaTouch հավելվածը</a>
          <div className="eb-badges">
            <a className="eb-badge" href="https://apps.apple.com" aria-label="App Store">
              <svg width="12" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M16.400 12.700c0-2.400 2-3.500 2.100-3.600-1.100-1.700-2.900-1.900-3.500-1.900-1.500-.2-2.900.9-3.700.9s-1.900-.9-3.200-.8c-1.600 0-3.100 1-4 2.400-1.700 3-.4 7.400 1.200 9.800.8 1.200 1.800 2.500 3 2.400 1.200 0 1.700-.8 3.100-.8s1.900.8 3.200.8 2.100-1.200 2.900-2.400c.9-1.300 1.300-2.700 1.300-2.700s-2.400-1-2.400-4.100zM14 5.500c.7-.8 1.100-1.900 1-3-1 0-2.100.7-2.800 1.500-.6.700-1.200 1.800-1 2.900 1.100.1 2.100-.6 2.800-1.400z" /></svg>
              <span><small>Download on the</small>App Store</span>
            </a>
            <a className="eb-badge" href="https://play.google.com" aria-label="Google Play">
              <svg width="12" height="14" viewBox="0 0 24 24"><path d="M3 2l11 10L3 22z" fill="#00c3ff" /><path d="M3 2l14 8-3 2z" fill="#00f076" /><path d="M3 22l14-8-3-2z" fill="#ff3a44" /><path d="M17 10l4 2-4 2-3-2z" fill="#ffd500" /></svg>
              <span><small>GET IT ON</small>Google Play</span>
            </a>
          </div>
        </div>
      </div>
      <div className="eb-copy">
        <div className="eb-copy-in">
          <span>© 2026 EVOCABANK. ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ</span>
          <div className="eb-socials">
            <a href="https://www.facebook.com/evocabank" aria-label="Facebook"><svg {...sc}><path d="M12 2a10 10 0 0 0-1.600 19.900v-7H7.900V12h2.500V9.800c0-2.500 1.500-3.900 3.800-3.900 1.100 0 2.200.2 2.200.2v2.500h-1.300c-1.200 0-1.600.8-1.600 1.600V12h2.800l-.4 2.900h-2.300v7A10 10 0 0 0 12 2z" /></svg></a>
            <a href="https://www.instagram.com/evocabank" aria-label="Instagram"><svg {...sc} fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.300" cy="6.700" r="1" fill="currentColor" stroke="none" /></svg></a>
            <a href="https://www.linkedin.com/company/evocabank" aria-label="LinkedIn"><svg {...sc}><path d="M3 3h18v18H3zM8 10H5.500v8.500H8zM6.700 6.200a1.500 1.500 0 1 0 0 3 1.500 1.500 0 0 0 0-3zM18.500 18.500v-4.700c0-2.300-1.200-3.500-3-3.500-1.300 0-2 .7-2.300 1.300V10H10.800v8.500h2.700v-4.600c0-1.200.6-1.900 1.600-1.900s1.500.7 1.500 1.900v4.600z" fillRule="evenodd" /></svg></a>
            <a href="https://www.youtube.com/@evocabank" aria-label="YouTube"><svg {...sc}><path d="M22 8.200a2.700 2.700 0 0 0-1.900-1.900C18.400 5.900 12 5.900 12 5.900s-6.400 0-8.100.4A2.700 2.700 0 0 0 2 8.200C1.600 9.900 1.600 12 1.600 12s0 2.100.4 3.800a2.700 2.700 0 0 0 1.900 1.900c1.700.4 8.100.4 8.100.4s6.400 0 8.100-.4a2.700 2.700 0 0 0 1.900-1.900c.4-1.700.4-3.800.4-3.800s0-2.100-.4-3.800zM10 15V9l5.200 3z" /></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function EvocaBenefits() {
  const [active, setActive] = useState(null);

  return (
    <div className="eb-root">
      <style>{css}</style>

      <div className="eb-page">
      <header className="eb-header">
        <Logo />
        <div className="eb-right">
          <button className="eb-order" type="button">Պատվիրել քարտ</button>
          <button className="eb-globe" type="button" aria-label="Լեզու"><Globe /></button>
        </div>
      </header>

      <main className="eb-hero">
        {CARDS.map((c) => (
          <div key={c.id} className={"eb-float" + (active === c.id ? " on" : "")} aria-hidden="true">
            <img src={c.img} alt="" draggable="false" onError={(e) => (e.currentTarget.style.display = "none")} />
          </div>
        ))}

        <h1 className="eb-title">Բացահայտիր Evoca քարտերի բենեֆիթները</h1>

        <div className="eb-pills">
          {CARDS.map((c) => (
            <button
              key={c.id}
              type="button"
              className="eb-pill"
              style={{ background: c.border }}
              aria-label={c.id}
              onMouseEnter={() => setActive(c.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(c.id)}
              onBlur={() => setActive(null)}
            >
              <span>{logos[c.id]}</span>
            </button>
          ))}
        </div>

        <label className="eb-search">
          <SearchIcon />
          <input type="text" placeholder="Որոնել" />
        </label>
      </main>

      <Benefits />
      <Faq />
      </div>

      <Footer />
    </div>
  );
}