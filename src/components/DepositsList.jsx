import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DESIGN_WIDTH = 1907;
const MIN_DESKTOP = 1280;
const IMG = "https://www.evoca.am/images-cache/deposits/1/";
const DRAM = "\u058F"; // ֏

const DEPOSITS = [
  {
    id: "classic",
    title: "Դասական ավանդ",
    path: "/deposits/classic",
    img: IMG + "1613390220029/415x261.jpg",
    bg: "#cfa6fb",
    text: "Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել Ձեր խնայողությունները՝ ներդնելով Դասական ավանդ՝ կայուն և բարձր եկամտաբերությամբ:",
    stats: [
      { top: "Սկսած", value: "100,000", unit: DRAM, label: "Գումար" },
      { top: "", value: "31-1,825 օր", label: "Ժամկետ" },
      { top: "մինչև", value: "10.5%", unit: DRAM, label: "Տոկոսադրույք" },
      { top: "սկսած", value: "100,000", unit: DRAM, label: "Համալրման հնարավորություն" },
    ],
  },
  {
    id: "children",
    title: "Մանկական ավանդ",
    path: "/deposits/children",
    img: IMG + "16133900414285/415x261.jpg",
    bg: "#f6d30f",
    text: "Ձեր երեխայի անհոգ ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ: «Մանկական» ժամկետային ավանդն ընդունում ենք ֆիզիկական անձանցից՝ երեխաների անունով ներդնելու պայմանով:",
    stats: [
      { top: "Սկսած", value: "100,000", unit: DRAM, label: "Գումար" },
      { top: "", value: "18 լրանալը", label: "Ժամկետ" },
      { top: "", value: "9.5%", unit: DRAM, label: "Տոկոսադրույք" },
      { top: "սկսած", value: "40,000", unit: DRAM, label: "Համալրման հնարավորություն" },
    ],
  },
  {
    id: "online",
    title: "Ավանդ Evoca Online",
    path: "/deposits/evoca-online",
    img: IMG + "16133900122121/415x261.jpg",
    bg: "#6a00d1",
    text: "Ցանկանու՞մ եք ներդնել ավանդ բարձր տոկոսադրույքով, բայց չունե՞ք ժամանակ: Ձևակերպե՛ք EvocaONLINE ավանդ՝ առանց բանկ այցելելու: Իսկ մենք բոլոր փաստաթղթերը կուղարկենք Ձեր էլ. հասցեին:",
    stats: [
      { top: "Սկսած", value: "100,000", unit: DRAM, label: "Գումար" },
      { top: "", value: "31-1,825 օր", label: "Ժամկետ" },
      { top: "մինչև", value: "10.75%", unit: DRAM, label: "Տոկոսադրույք" },
    ],
  },
];

const HomeIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="#7a7d7e" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />
  </svg>
);

const Sep = () => (
  <svg className="h-[9px] w-[6px]" viewBox="0 0 6 10" fill="none" stroke="#7a7d7e" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 1l4 4-4 4" />
  </svg>
);

const Arrow = () => (
  <svg className="h-[14px] w-[10px]" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 1l6 6-6 6" />
  </svg>
);

function Stat({ s }) {
  return (
    <div className="flex min-w-0 flex-col">
      <span className="h-[18px] text-[13px] leading-[18px] text-[#1d1d1f]">{s.top}</span>
      <span className="mt-1 whitespace-nowrap font-['Montserrat','Noto_Sans_Armenian',sans-serif] text-[28px] font-medium leading-[40px] text-[#6a00d1] sm:text-[36px]">
        {s.value}
        {s.unit && <span className="ml-3">{s.unit}</span>}
      </span>
      <span className="mt-[22px] text-[14px] leading-5 text-[#1d1d1f]">{s.label}</span>
    </div>
  );
}

function DepositRow({ d, first, last }) {
  return (
    <article className={`flex flex-col gap-8 pb-[70px] ${first ? "pt-0" : "pt-[70px]"} xl:flex-row xl:gap-[81px] ${last ? "" : "border-b border-[#eeeeee]"}`}>
      <Link to={d.path} className="block h-fit shrink-0 overflow-hidden rounded-[10px] xl:w-[466px]" style={{ background: d.bg }} tabIndex={-1} aria-hidden="true">
        <img
          src={d.img}
          alt=""
          loading="lazy"
          className="block aspect-[415/261] w-full object-cover"
          onError={(e) => (e.currentTarget.style.visibility = "hidden")}
        />
      </Link>

      <div className="min-w-0 flex-1">
        <h2 className="m-0 font-['Montserrat','Noto_Sans_Armenian',sans-serif] text-[28px] font-bold leading-[1.2] text-black xl:text-[34px]">
          {d.title}
        </h2>
        <p className="mt-[34px] max-w-[900px] text-[16px] leading-[30px] text-[#1d1d1f]">{d.text}</p>

        <div className="mt-[26px] grid grid-cols-2 gap-x-6 gap-y-6 xl:grid-cols-[264px_264px_264px_1fr] xl:gap-x-0">
          {d.stats.map((s) => <Stat key={s.label} s={s} />)}
        </div>

        <Link
          to={d.path}
          className="mt-[26px] inline-flex h-[54px] w-[224px] items-center justify-center gap-4 rounded-full bg-[#ece0f7] text-[16px] font-semibold text-[#6a00d1] transition-colors hover:bg-[#e0cdf3]"
        >
          Մանրամասն
          <Arrow />
        </Link>
      </div>
    </article>
  );
}

export default function DepositsPage() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = document.documentElement.clientWidth;
      setScale(w >= MIN_DESKTOP ? w / DESIGN_WIDTH : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <main className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Noto+Sans+Armenian:wght@400;500;600;700&display=swap');`}</style>

      <div style={{ zoom: scale }}>
        <div className="mx-auto max-w-[1910px] px-6 pb-24 xl:px-[145px]">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="pt-[38px]">
            <ol className="m-0 flex list-none flex-wrap items-center gap-[14px] p-0 text-[14px] font-medium text-[#2b3a55]">
              <li className="flex items-center">
                <Link to="/" aria-label="Գլխավոր"><HomeIcon /></Link>
              </li>
              <li aria-hidden="true" className="flex"><Sep /></li>
              <li><Link to="/" className="hover:text-[#6a00d1]">Անհատ</Link></li>
              <li aria-hidden="true" className="flex"><Sep /></li>
              <li><Link to="/deposits" className="hover:text-[#6a00d1]">Ավանդներ</Link></li>
              <li aria-hidden="true" className="flex"><Sep /></li>
              <li aria-current="page">Ավանդներ</li>
            </ol>
          </nav>

          <h1 className="mb-0 mt-[48px] font-['Montserrat','Noto_Sans_Armenian',sans-serif] text-[34px] font-bold leading-tight text-[#1d1d1f] xl:text-[42px]">
            Ավանդներ
          </h1>

          <div className="mt-[44px]">
            {DEPOSITS.map((d, i) => (
              <DepositRow key={d.id} d={d} first={i === 0} last={i === DEPOSITS.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}