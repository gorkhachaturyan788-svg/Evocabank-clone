import { useEffect, useRef, useState } from "react";

const BASE = "https://www.evoca.am/images-cache/partners/1";

const PARTNERS = [
  "16104583322099",
  "16104594273635",
  "17689930369925",
  "1610459808737",
  "16104603665095",
  "16104604109064",
  "17077436606929",
  "17107493820339",
  "17104032198171",
].map((id, i) => ({
  id,
  name: `Partner ${i + 1}`,
  src: `${BASE}/${id}/185x80_grayscale.png`,
}));

const MIN_CELL = 200; // մեկ լոգոյի նվազագույն լայնությունը (px)
const MAX_VISIBLE = 4;

const Chevron = ({ dir = "right" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={dir === "left" ? "rotate-180" : ""}
    aria-hidden="true"
  >
    <path d="M9 5l7 7-7 7" />
  </svg>
);

// Դեղին կետավոր համակենտրոն շրջաններ
const DottedRings = () => (
  <svg
    viewBox="0 0 430 430"
    className="h-full w-full"
    fill="none"
    stroke="#ffe21a"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="215" cy="215" r="211" strokeWidth="5" strokeDasharray="0.1 14" />
    <circle cx="215" cy="215" r="172" strokeWidth="4" strokeDasharray="0.1 13" opacity="0.9" />
  </svg>
);

export default function PartnerSlider({
  title = "Գործընկերներ",
  text = "Դարձեք Evocabank-ի Գործընկեր և եկեք միասին գնանք դեպի գունեղ նոր իրականություն։ Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ։ Մենք մշտապես բաց ենք հետաքրքիր առաջարկների ու համագործակցությունների համար։",
  buttonText = "Բոլոր գործընկերները",
  buttonHref = "#",
  heroImage = null, // օր.՝ "/images/hand.png"
  autoPlayMs = 0, // օր.՝ 3000
}) {
  const viewportRef = useRef(null);
  const touchX = useRef(null);
  const [visible, setVisible] = useState(MAX_VISIBLE);
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, PARTNERS.length - visible);

  // Քանի լոգո է տեղավորվում՝ ըստ իրական լայնության
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const calc = () =>
      setVisible(
        Math.max(1, Math.min(MAX_VISIBLE, Math.floor(el.clientWidth / MIN_CELL)))
      );
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  useEffect(() => {
    if (!autoPlayMs) return;
    const t = setInterval(next, autoPlayMs);
    return () => clearInterval(t);
  }, [autoPlayMs, maxIndex]);

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  const arrowCls =
    "z-10 flex h-10 w-10 shrink-0 items-center justify-center text-[#6a0dd6] transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6a0dd6]";

  return (
    <section className="w-full overflow-hidden bg-white py-12 lg:py-16">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-0">
        {/* Ձախ՝ տեքստ */}
        <div className="px-6 lg:w-[460px] lg:shrink-0 lg:pl-[60px] lg:pr-0 xl:w-[595px] xl:pl-[145px]">
          <h2 className="text-4xl font-bold text-[#1f1f1f]">{title}</h2>
          <p className="mt-10 text-[17px] leading-[1.7] text-[#1f1f1f]">{text}</p>
          <a
            href={buttonHref}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ece6f8] px-6 py-3.5 text-[15px] font-medium text-[#6a0dd6] transition-colors hover:bg-[#e0d6f4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a0dd6]"
          >
            {buttonText}
            <Chevron />
          </a>
        </div>

        {/* Աջ՝ շրջան + ձեռք + վահանակ */}
        <div className="relative min-w-0 flex-1 lg:h-[430px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[23px] top-0 hidden h-[430px] w-[430px] lg:block"
          >
            <DottedRings />
          </div>

          {/* Մոխրագույն վահանակ՝ մինչև էկրանի աջ եզր */}
          <div
            className={`relative z-[1] flex h-[230px] items-center bg-gradient-to-b from-[#f3f3f3] to-[#f1ecfa] pr-4 lg:absolute lg:left-[57px] lg:right-0 lg:top-[73px] lg:h-[283px] lg:pr-[60px] ${
              heroImage ? "lg:pl-[110px]" : "pl-2 lg:pl-6"
            }`}
          >
            <button type="button" onClick={prev} aria-label="Նախորդը" className={arrowCls}>
              <Chevron dir="left" />
            </button>

            <div
              ref={viewportRef}
              className="min-w-0 flex-1 overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex h-[217px] transition-transform duration-500 ease-in-out motion-reduce:transition-none"
                style={{ transform: `translateX(-${(index * 100) / visible}%)` }}
              >
                {PARTNERS.map((p) => (
                  <div
                    key={p.id}
                    className="flex h-full shrink-0 items-center justify-center border-l border-[#dcdcdc] px-4 first:border-l-0"
                    style={{ width: `${100 / visible}%` }}
                  >
                    <img
                      src={p.src}
                      alt={p.name}
                      width={185}
                      height={80}
                      draggable={false}
                      className="h-auto w-[185px] max-w-full select-none object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button type="button" onClick={next} aria-label="Հաջորդը" className={arrowCls}>
              <Chevron />
            </button>
          </div>

          {/* Ձեռքի նկար */}
          {heroImage && (
            <img
              src={heroImage}
              alt=""
              className="pointer-events-none absolute left-[50px] top-0 z-[2] hidden h-[365px] w-auto object-contain lg:block"
            />
          )}
        </div>
      </div>
    </section>
  );
}