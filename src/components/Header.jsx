import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const DESIGN_WIDTH = 1907;
const MIN_DESKTOP = 1280;

const TOP_LINKS = [
  { label: "Անհատ", path: "/" },
  { label: "Բիզնես", path: "/business" },
  { label: "Ակնթարթային վճարումներ", path: "/instant-payments" },
  { label: "Մեր մասին", path: "/about" },
  { label: "Նորություններ", path: "/news" },
  { label: "Բլոգ", path: "/blog" },
  { label: "Կարիերա", path: "/career" },
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

/* Icons */
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
  <svg className="h-[18px] w-[15px]" viewBox="4.5 1.5 15 21" preserveAspectRatio="none" fill="currentColor" aria-hidden="true">
    <path d="M12 1.5a7.5 7.5 0 0 0-7.5 7.5c0 5.4 6.2 12.1 6.9 12.8a1.1 1.1 0 0 0 1.6 0c.7-.7 6.9-7.4 6.9-12.8A7.5 7.5 0 0 0 12 1.5zm0 10.3a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z" />
  </svg>
);

const FaqIcon = () => (
  <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11.5" fill="currentColor" />
    <path d="M8.7 9.4a3.3 3.3 0 1 1 4.7 3c-.9.5-1.4 1.1-1.4 2.1" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" fill="none" />
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
  <svg className="h-[19px] w-[19px]" viewBox="1.5 1.5 21 21" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
    <circle cx="10" cy="10" r="7" />
    <path d="M15.5 15.5L21.5 21.5" />
  </svg>
);

const BurgerIcon = () => (
  <svg className="h-[17px] w-[23px]" viewBox="0 0 26 20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
    <path d="M1 2h24M7 10h18M1 18h24" />
  </svg>
);

const Logo = () => (
  <svg role="img" aria-label="Evocabank" viewBox="0 0 176 35" className="block h-[26px] w-[131px] xl:h-[35px] xl:w-[176px]">
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

const iconBtn = "flex cursor-pointer items-center justify-center bg-transparent text-black transition-colors hover:text-[#6a00d1]";

export default function Header({ onBurgerClick, onSearchClick }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scale, setScale] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState(0);
  const rightRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const update = () => {
      const w = document.documentElement.clientWidth;
      setScale(w >= MIN_DESKTOP ? w / DESIGN_WIDTH : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (rightRef.current && !rightRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setActiveSubTab(0);
  }, [location.pathname]);

  // Կոնֆիգուրացիա՝ ըստ էջերի
  const getMenuConfig = () => {
    switch (location.pathname) {
      case "/business":
        return {
          mainLinks: [
            { label: "Վարկեր", subItems: ["Բիզնես վարկեր"] },
            { label: "Լիզինգ", subItems: ["Evoca Leasing", "Հատուկ առաջարկ"] },
            { label: "Հաշիվներ", subItems: ["Հաշիվների բացում և սպասարկում", "Առարկայազուրկ մետաղական հաշիվներ"] },
            { label: "Ավանդներ", subItems: ["Դասական ավանդ"] },
            { label: "Արժեթղթերի շուկա", subItems: ["Ներդրումային ծառայություններ", "Պարտատոմսեր", "ՀԿԴ ծառայություններ", "Ռեպո/Հակադարձ ռեպո գործարքներ", "EvocaINVEST"] },
            { label: "Առևտրի ֆինանսավորում", subItems: ["Երաշխիք", "Ֆակտորինգային ֆինանսավորում", "Ակրեդիտիվ", "Ինկասո"] },
            { label: "Դիջիթալ", subItems: ["V-POS Տերմինալ", "POS Տերմինալ", "Սակագներ", "Տերմինալի տեղադրման հայտ", "Evoca Mobile POS` mPOS"] },
            { label: "Այլ", subItems: ["Պահատուփեր", "Փոխանցումներ"] },
          ],
        };
      case "/about":
        return {
          mainLinks: [
            { 
              label: "Evoca-ի մասին", 
              subItems: [
                "Ընդհանուր", 
                "Կառուցվածք", 
                "Բաժնետերեր", 
                "Ղեկավարություն", 
                "Գործընկերներ", 
                "Մրցանակներ", 
                "CSR", 
                "Էվոկա Ֆինանսական խումբ"
              ] 
            },
            { label: "Սակագներ", subItems: ["Սակագներ"] },
            { label: "Հաշվետվություններ", subItems: ["Ֆինանսական հաշվետվություններ"] },
            { label: "Հայտարարություններ", subItems: ["Հայտարարություններ"] },
          ],
        };
      case "/news":
      case "/blog":
      case "/career":
      case "/instant-payments":
        return {
          mainLinks: [],
        };
      default: // Home (Անհատներ)
        return {
          mainLinks: [
            { label: "Վարկեր", subItems: ["Վարկեր", "Վարկային պատմություն և սքոր", "Կարևոր տեղեկատվություն"] },
            { label: "Քարտեր", subItems: ["Քարտեր", "Քարտերի տրամադրում և սպասարկում", "Սոցիալական ապահովության վճարային քարտեր", "Evoca Benefits"] },
            { label: "Ավանդներ", subItems: ["Ավանդներ", "Կարևոր տեղեկատվություն"] },
            { label: "Հաշիվներ", subItems: ["Evoca խնայողական հաշիվ", "Հաշիվների բացում և սպասարկում", "Առարկայազուրկ մետաղական հաշիվներ", "Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում"] },
            { label: "Փոխանցումներ", subItems: ["Դրամական փոխանցումներ", "Վճարային համակարգեր"] },
            { label: "Արժեթղթեր", subItems: ["Ներդրումային ծառայություններ", "Պարտատոմսեր", "ՀԿԴ ծառայություններ", "Ռեպո/Հակադարձ Ռեպո գործարքներ", "EvocaINVEST"] },
            { label: "EvocaSALARY", subItems: [] },
            { label: "EvocaTOUCH", subItems: [] },
          ],
        };
    }
  };

  const currentConfig = getMenuConfig();
  const activeMainItem = currentConfig.mainLinks[activeSubTab] || currentConfig.mainLinks[0];

  return (
    <header className="sticky top-0 z-50 w-full border-t border-[#cfe3e0] bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@400;500;600;700&display=swap');`}</style>

      <div style={{ zoom: scale }}>
        {/* ---------- 1. Top bar ---------- */}
        <div className="flex h-14 items-stretch justify-end border-b border-[#e6e6e6] px-6 sm:h-[72px] xl:justify-between xl:pl-12 xl:pr-[60px]">
          <ul className="hidden items-stretch gap-2 xl:flex">
            {TOP_LINKS.map((l) => {
              const isActive = location.pathname === l.path;
              return (
                <li key={l.label} className="flex">
                  <Link
                    to={l.path}
                    className={`relative flex items-center px-[14.5px] text-[15px] transition-colors hover:text-[#6a00d1] ${
                      isActive ? "font-bold text-[#6a00d1]" : "font-semibold text-[#2b3a55]"
                    }`}
                  >
                    {isActive && <span className="absolute inset-x-0 top-0 h-[3px] bg-[#6a00d1]" aria-hidden="true" />}
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div ref={rightRef} className="flex items-center">
            {DROPDOWNS.map((d, i) => {
              const open = openDropdown === d.id;
              return (
                <div key={d.id} className={`relative hidden xl:block ${i === 0 ? "mr-12" : "mr-[76px]"}`}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenDropdown(open ? null : d.id)}
                    className="flex cursor-pointer items-center gap-4 text-[15px] font-bold text-[#6a00d1]"
                  >
                    {d.label}
                    <Chevron open={open} />
                  </button>

                  {open && (
                    <ul className="absolute -left-4 top-[calc(100%+18px)] z-50 min-w-[220px] rounded-[10px] border border-[#e6e6e6] bg-white py-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                      {d.items.map((it) => (
                        <li key={it.label}>
                          <a href={it.href} className="block px-[18px] py-2.5 text-[15px] font-medium hover:bg-[#f4ecfb] hover:text-[#6a00d1]">
                            {it.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}

            <div className="flex items-center gap-[14px] sm:gap-[19px]">
              <a href="#" aria-label="Մասնաճյուղեր" className={iconBtn}><PinIcon /></a>
              <a href="#" aria-label="Հաճախ տրվող հարցեր" className={iconBtn}><FaqIcon /></a>
              <a href="#" aria-label="Լեզու" className={iconBtn}><GlobeIcon /></a>
              <button type="button" aria-label="Որոնում" onClick={onSearchClick} className={iconBtn}><SearchIcon /></button>
              <button type="button" aria-label="Մենյու" onClick={onBurgerClick} className={`${iconBtn} ml-[7px]`}><BurgerIcon /></button>
            </div>
          </div>
        </div>

        {/* ---------- 2. Main bar ---------- */}
        <div className="flex h-20 items-center justify-between bg-white px-6 xl:h-[120px] xl:pl-[62px] xl:pr-[60px]">
          <div className="flex items-center">
            <Link to="/" aria-label="Evocabank" className="flex items-center xl:mr-[61px]">
              <Logo />
            </Link>

            {currentConfig.mainLinks.length > 0 && (
              <nav className="hidden items-center gap-11 xl:flex">
                {currentConfig.mainLinks.map((l, index) => {
                  const isSelected = activeSubTab === index;
                  return (
                    <button
                      key={l.label}
                      onClick={() => setActiveSubTab(index)}
                      className={`whitespace-nowrap text-[17px] transition-colors bg-transparent border-none cursor-pointer hover:text-[#6a00d1] ${
                        isSelected ? "font-bold text-[#6a00d1]" : "font-bold text-[#1d1d1f]"
                      }`}
                    >
                      {l.label}
                    </button>
                  );
                })}
              </nav>
            )}
          </div>

          <a
            href="#"
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-3xl bg-[#6a00d1] px-5 font-['Noto_Sans',Arial,sans-serif] text-[15px] font-bold text-white transition-colors hover:bg-[#5500a8] sm:h-[45px] sm:px-8 sm:text-[17px]"
          >
            EvocaONLINE
          </a>
        </div>

        {/* ---------- 3. Sub-bar (Մանուշակագույն ենթատողը) ---------- */}
        {activeMainItem && activeMainItem.subItems && activeMainItem.subItems.length > 0 && (
          <div className="w-full bg-[#6a00d1] text-white py-3.5 px-6 xl:px-[62px] flex items-center gap-8 shadow-inner overflow-x-auto no-scrollbar">
            {activeMainItem.subItems.map((sub, sIdx) => (
              <a
                key={sIdx}
                href="#"
                className={`text-[15px] whitespace-nowrap transition-all ${
                  sIdx === 0 
                    ? "font-bold text-white bg-[#4c0099] px-3 py-1 rounded-md" 
                    : "font-semibold text-white/90 hover:text-white"
                }`}
              >
                {sub}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}