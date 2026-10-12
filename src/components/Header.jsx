import { useState, useEffect, useRef } from "react";

/**
 * Evocabank header — հարմարեցված է առաջին նկարին (1907px լայնությամբ դիզայն):
 *  - xl (≥1280px) էկրաններին header-ը «մասշտաբվում» է DESIGN_WIDTH-ից, այնպես որ
 *    ցանկացած լայնության վրա (կամ browser zoom-ի դեպքում) նույն համամասնություններն են
 *  - xl-ից փոքր էկրաններին՝ սովորական mobile layout
 */
const DESIGN_WIDTH = 1907;
const MIN_DESKTOP = 1280;

const TOP_LINKS = [
  { label: "Անհատ", href: "#", active: true },
  { label: "Բիզնես", href: "#" },
  { label: "Ակնթարթային վճարումներ", href: "#" },
  { label: "Մեր մասին", href: "#" },
  { label: "Նորություններ", href: "#" },
  { label: "Բլոգ", href: "#" },
  { label: "Կարիերա", href: "#" },
];

const MAIN_LINKS = [
  { label: "Վարկեր", href: "#" },
  { label: "Քարտեր", href: "#" },
  { label: "Ավանդներ", href: "#" },
  { label: "Հաշիվներ", href: "#" },
  { label: "Փոխանցումներ", href: "#" },
  { label: "Արժեթղթեր", href: "#" },
  { label: "EvocaSALARY", href: "#" },
  { label: "EvocaTOUCH", href: "#" },
];

const DROPDOWNS = [
  {
    id: "requests",
    label: "Առցանց հայտեր",
    items: [
      { label: "Վարկի հայտ", href: "#" },
      { label: "Քարտի հայտ", href: "#" },
      { label: "Ավանդի հայտ", href: "#" },
    ],
  },
  {
    id: "contact",
    label: "Հետադարձ կապ",
    items: [
      { label: "Զանգահարել", href: "#" },
      { label: "Գրել մեզ", href: "#" },
      { label: "Մասնաճյուղեր", href: "#" },
    ],
  },
];

/* ---------------- Icons (չափերը վերցված են նկարից) ---------------- */

const Chevron = ({ open }) => (
  <svg
    className={`h-[7px] w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 1.5l5 5 5-5" />
  </svg>
);

const PinIcon = () => (
  <svg
    className="h-[18px] w-[15px]"
    viewBox="4.5 1.5 15 21"
    preserveAspectRatio="none"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 1.5a7.5 7.5 0 0 0-7.5 7.5c0 5.4 6.2 12.1 6.9 12.8a1.1 1.1 0 0 0 1.6 0c.7-.7 6.9-7.4 6.9-12.8A7.5 7.5 0 0 0 12 1.5zm0 10.3a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z" />
  </svg>
);

const FaqIcon = () => (
  <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11.5" fill="currentColor" />
    <path
      d="M8.7 9.4a3.3 3.3 0 1 1 4.7 3c-.9.5-1.4 1.1-1.4 2.1"
      stroke="#fff"
      strokeWidth="2.3"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="12" cy="17.9" r="1.5" fill="#fff" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="h-[17px] w-[17px]" viewBox="2.5 2.5 19 19" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" fill="currentColor" />
    <g stroke="#fff" strokeWidth="1.6" fill="none">
      <ellipse cx="12" cy="12" rx="4" ry="9.5" />
      <path d="M2.5 12h19M4 7h16M4 17h16" />
    </g>
  </svg>
);

const SearchIcon = () => (
  <svg
    className="h-[19px] w-[19px]"
    viewBox="1.5 1.5 21 21"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="7" />
    <path d="M15.5 15.5L21.5 21.5" />
  </svg>
);

const BurgerIcon = () => (
  <svg
    className="h-[17px] w-[23px]"
    viewBox="0 0 26 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M1 2h24M7 10h18M1 18h24" />
  </svg>
);

/* ---------------- Logo ----------------
 * Ուղարկած PNG-ի վերևը կտրված էր (տառերի գագաթները հարթ էին), ուստի «evoca»-ն
 * գծված է SVG-ով՝ լրիվ տառերով, ցանկացած չափի վրա սուր է։
 * Եթե ունես ամբողջական լոգոյի ֆայլ, փոխանցիր logoSrc="/path.png":
 */
const Logo = ({ src }) =>
  src ? (
    <img src={src} alt="Evocabank" className="block h-[26px] w-auto max-w-none xl:h-[35px]" />
  ) : (
    <svg
      role="img"
      aria-label="Evocabank"
      viewBox="0 0 176 35"
      className="block h-[26px] w-[131px] xl:h-[35px] xl:w-[176px]"
    >
      <g fill="none" stroke="#7a7d7e" strokeWidth="8">
        {/* e */}
        <path d="M4 17.5H31A13.5 13.5 0 1 0 26.2 27.8" />
        {/* o */}
        <circle cx="91" cy="17.5" r="13.5" />
        {/* c */}
        <path d="M136.85 7.95A13.5 13.5 0 1 0 136.85 27.05" />
        {/* a */}
        <circle cx="158.5" cy="17.5" r="13.5" />
        <path d="M172 0V35" />
      </g>
      {/* v */}
      <path fill="#6a00d1" d="M36 0H49L55 18L61 0H68L56 35H51Z" />
    </svg>
  );

const iconBtn = "flex cursor-pointer items-center justify-center bg-transparent text-black";

export default function Header({
  logoSrc = null,
  onBurgerClick,
  onSearchClick,
}) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scale, setScale] = useState(1);
  const rightRef = useRef(null);

  // Մասշտաբ՝ որպեսզի ցանկացած լայնության վրա տեսքը համընկնի 1907px-անոց դիզայնին
  useEffect(() => {
    const update = () => {
      const w = document.documentElement.clientWidth;
      setScale(w >= MIN_DESKTOP ? w / DESIGN_WIDTH : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Փակել dropdown-ը՝ դրսից սեղմելիս
  useEffect(() => {
    const handler = (e) => {
      if (rightRef.current && !rightRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-t border-[#cfe3e0] bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f]">
      {/* Հայերեն տառատեսակը (առանց սրա Armenian-ը fallback տառատեսակով է երևում և լայնքները չեն համընկնում) */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@400;500;600;700&display=swap');`}</style>

      <div style={{ zoom: scale }}>
        {/* ---------- Top bar (72px) ---------- */}
        <div className="flex h-14 items-stretch justify-end border-b border-[#e6e6e6] px-6 sm:h-[72px] xl:justify-between xl:pl-12 xl:pr-[60px]">
          {/* Left links */}
          <ul className="hidden items-stretch gap-2 xl:flex">
            {TOP_LINKS.map((l) => (
              <li key={l.label} className="flex">
                <a
                  href={l.href}
                  className={`relative flex items-center px-[14.5px] text-[15px] transition-colors hover:text-[#6a00d1] ${
                    l.active ? "font-semibold text-[#6a00d1]" : "font-medium text-[#2b3a55]"
                  }`}
                >
                  {l.active && (
                    <span className="absolute inset-x-0 top-0 h-[3px] bg-[#6a00d1]" aria-hidden="true" />
                  )}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div ref={rightRef} className="flex items-center">
            {DROPDOWNS.map((d, i) => {
              const open = openDropdown === d.id;
              return (
                <div
                  key={d.id}
                  className={`relative hidden xl:block ${i === 0 ? "mr-12" : "mr-[76px]"}`}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenDropdown(open ? null : d.id)}
                    className="flex cursor-pointer items-center gap-4 text-[15px] font-semibold text-[#6a00d1]"
                  >
                    {d.label}
                    <Chevron open={open} />
                  </button>

                  {open && (
                    <ul className="absolute -left-4 top-[calc(100%+18px)] z-50 min-w-[220px] rounded-[10px] border border-[#e6e6e6] bg-white py-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                      {d.items.map((it) => (
                        <li key={it.label}>
                          <a
                            href={it.href}
                            className="block px-[18px] py-2.5 text-[15px] font-medium hover:bg-[#f4ecfb] hover:text-[#6a00d1]"
                          >
                            {it.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}

            {/* Icons */}
            <div className="flex items-center gap-[14px] sm:gap-[19px]">
              <a href="#" aria-label="Մասնաճյուղեր" className={iconBtn}>
                <PinIcon />
              </a>
              <a href="#" aria-label="Հաճախ տրվող հարցեր" className={iconBtn}>
                <FaqIcon />
              </a>
              <a href="#" aria-label="Լեզու" className={iconBtn}>
                <GlobeIcon />
              </a>
              <button type="button" aria-label="Որոնում" onClick={onSearchClick} className={iconBtn}>
                <SearchIcon />
              </button>
              <button
                type="button"
                aria-label="Մենյու"
                onClick={onBurgerClick}
                className={`${iconBtn} ml-[7px]`}
              >
                <BurgerIcon />
              </button>
            </div>
          </div>
        </div>

        {/* ---------- Main bar (120px) ---------- */}
        <div className="flex h-20 items-center justify-between bg-white px-6 xl:h-[120px] xl:pl-[62px] xl:pr-[60px]">
          <div className="flex items-center">
            <a href="#" aria-label="Evocabank" className="flex items-center xl:mr-[61px]">
              <Logo src={logoSrc} />
            </a>

            <nav className="hidden items-center gap-11 xl:flex">
              {MAIN_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="whitespace-nowrap text-[17px] font-medium transition-colors hover:text-[#6a00d1]"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <a
            href="#"
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-3xl bg-[#6a00d1] px-5 font-['Noto_Sans',Arial,sans-serif] text-[15px] font-bold text-white transition-colors hover:bg-[#5500a8] sm:h-[45px] sm:px-8 sm:text-[17px]"
          >
            EvocaONLINE
          </a>
        </div>
      </div>
    </header>
  );
}