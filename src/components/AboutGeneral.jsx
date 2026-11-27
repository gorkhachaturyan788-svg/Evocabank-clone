import React, { useState } from "react";

const GENERAL_IMAGE =
  "https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png";

const HISTORY_IMAGE =
  "https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png";

const HISTORY_ITEMS = [
  {
    year: "2026",
    text: "Բանկը բացեց նոր «Աջափնյակ» մասնաճյուղը, կնքեց նոր միջազգային համագործակցության պայմանագրեր, մասնակցեց միջազգային կոնֆերանսների, արժանացավ հեղինակավոր մրցանակների և կյանքի կոչեց Երևանը գունավորող street art-երը:",
    image: HISTORY_IMAGE,
  },
  {
    year: "2025",
    text: "Բանկը շարունակեց թվային հարթակների կատարելագործումը, ընդլայնեց ներդրումային և վճարային ծառայությունների հասանելիությունը՝ նշելով իր 35-ամյակը:",
    image: HISTORY_IMAGE,
  },
  {
    year: "2024",
    text: "Բանկը ներդրեց նոր թվային լուծումներ EvocaTOUCH-ում ու EvocaONLINE-ում, զարգացրեց ՓՄՁ և ներդրումային ուղղությունները:",
    image: HISTORY_IMAGE,
  },
  {
    year: "2023",
    text: "Բանկը շարունակեց ակտիվ մասնակցությունը կրթական, մշակութային և տեխնոլոգիական նախաձեռնություններին՝ ամրապնդելով իր դիրքերը ֆինանսական շուկայում:",
    image: HISTORY_IMAGE,
  },
  {
    year: "2022",
    text: "Բանկը զարգացրեց առցանց բանկային գործիքները և շարունակեց հաճախորդակենտրոն ծառայությունների թվայնացումը:",
    image: HISTORY_IMAGE,
  },
  {
    year: "2021",
    text: "Բանկը շարունակեց ռազմավարական թվային վերափոխումը՝ առաջարկելով արագ, պարզ և հասանելի ֆինանսական լուծումներ:",
    image: HISTORY_IMAGE,
  },
];

const CSR_ITEMS = [
  "Նորագույն տեխնոլոգիաների զարգացում, նորարար նախաձեռնություններ, startup-եր,",
  "Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ,",
  "Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ,",
  "Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ:",
];

export default function AboutGeneral() {
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const currentHistory = HISTORY_ITEMS[selectedYearIndex] || HISTORY_ITEMS[0];

  const handlePrevYear = () => {
    setSelectedYearIndex((prev) => (prev - 1 + HISTORY_ITEMS.length) % HISTORY_ITEMS.length);
  };

  const handleNextYear = () => {
    setSelectedYearIndex((prev) => (prev + 1) % HISTORY_ITEMS.length);
  };

  return (
    <div className="w-full overflow-x-hidden bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@400;500;600;700;800&display=swap');
      `}</style>

      {/* ---------- 1. Ընդհանուր տեղեկատվություն ---------- */}
      <section className="mx-auto max-w-[1340px] px-6 pt-10 pb-12 lg:px-10">
        <h1 className="mb-8 text-[30px] font-bold leading-tight text-[#1d1d1f] sm:text-[34px]">
          Ընդհանուր տեղեկատվություն
        </h1>

        <div className="rounded-bl-[44px] bg-[#f5f4f7] p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="space-y-5 text-[14px] leading-[1.65] text-[#2d2d32] sm:text-[15px] lg:col-span-5">
              <p>
                <span className="font-semibold text-[#6a00d1]">Evocabank-ը</span> արագ, պարզ և
                նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական
                նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
              </p>
              <p>
                Մենք հատուկ ուշադրություն ենք դարձնում մոբայլ ծառայությունների զարգացմանը:
              </p>
              <p>
                Մենք աշխատում ենք mobile-first ֆորմատով՝ յուրաքանչյուր նոր ծառայություն
                նախագծելիս նախևառաջ հաշվի ենք առնելու դրա՝ հավելվածով օգտագործման
                հարմարավետությունը:
              </p>
              <p>Աշխարհը թվային է դառնում, և մենք պատրաստ ենք դրան:</p>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-[2px] bg-[#140429] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                <img
                  src={GENERAL_IMAGE}
                  alt="Evocabank"
                  className="h-[290px] w-full object-cover sm:h-[380px] lg:h-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 2. Մեր տեսլականը ---------- */}
      <section className="w-full bg-[#5a00db] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
          <h2 className="mb-8 text-[28px] font-bold leading-tight text-white sm:text-[34px]">
            Մեր տեսլականը
          </h2>

          <div className="flex items-start gap-6 sm:gap-8">
            <span
              className="mt-2.5 h-[2px] w-9 shrink-0 bg-white/85"
              aria-hidden="true"
            />
            <p className="max-w-[780px] text-[15px] leading-[1.7] text-white sm:text-[17px]">
              Դառնալ գլոբալ Ֆինտեխ գործընկեր, որը միավորում է լավագույն փորձն ու
              տեխնոլոգիական նորարարությունները հարմարավետ և ճկուն ծառայություններ ապահովելու
              համար:
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 3. Բանկի պատմությունը ---------- */}
      <section className="mx-auto max-w-[1260px] px-6 py-16 sm:py-20 lg:px-10">
        <h2 className="mb-12 text-[28px] font-bold leading-tight text-[#1d1d1f] sm:text-[34px]">
          Բանկի պատմությունը
        </h2>

        {/* Ժամանակացույցի տարիներ */}
        <div className="mx-auto mb-12 flex max-w-[920px] items-center justify-between gap-3">
          <button
            type="button"
            onClick={handlePrevYear}
            aria-label="Նախորդ տարի"
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#6a00d1] transition-colors hover:bg-[#f4ecfb]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="relative flex flex-1 items-center justify-between px-2 sm:px-6">
            <div
              className="pointer-events-none absolute top-[34px] left-6 right-6 h-[1px] bg-[#d8d8e0]"
              aria-hidden="true"
            />

            {HISTORY_ITEMS.map((item, idx) => {
              const isSelected = idx === selectedYearIndex;
              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setSelectedYearIndex(idx)}
                  className="relative z-10 flex cursor-pointer flex-col items-center gap-2.5 focus:outline-none"
                >
                  <span
                    className={`text-[14px] font-bold transition-colors sm:text-[16px] ${
                      isSelected ? "text-[#6a00d1]" : "text-[#2d2d32] hover:text-[#6a00d1]"
                    }`}
                  >
                    {item.year}
                  </span>
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border transition-all ${
                      isSelected
                        ? "border-[#6a00d1] bg-[#6a00d1] ring-4 ring-[#6a00d1]/20"
                        : "border-[#5a5a60] bg-white"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleNextYear}
            aria-label="Հաջորդ տարի"
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#6a00d1] transition-colors hover:bg-[#f4ecfb]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Տարվա բովանդակություն և նկար */}
        <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-center gap-6 lg:grid-cols-12">
          <div className="rounded-br-[36px] bg-[#f4effa] p-7 sm:p-9 lg:col-span-6">
            <p className="text-[14px] leading-[1.7] text-[#2d2d32]">{currentHistory.text}</p>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-[2px] bg-[#e6e6ea] shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <img
                src={currentHistory.image}
                alt={`Բանկի պատմությունը ${currentHistory.year}`}
                className="h-[250px] w-full object-cover sm:h-[310px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 4. Կորպորատիվ սոցիալական պատասխանատվություն ---------- */}
      <section className="w-full bg-[#f8f7fa] py-16 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
          <h2 className="mb-5 text-[28px] font-bold leading-[1.25] text-[#1d1d1f] sm:text-[34px]">
            Կորպորատիվ սոցիալական
            <br />
            պատասխանատվություն
          </h2>

          <p className="mb-10 max-w-[780px] text-[14px] leading-[1.65] text-[#3a3a40] sm:text-[15px]">
            Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և
            հասարակական նախաձեռնություններին հետևյալ ոլորտներում՝
          </p>

          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {CSR_ITEMS.map((text, idx) => (
              <div key={idx} className="flex items-start gap-5">
                <span
                  className="mt-2.5 h-[3px] w-8 shrink-0 bg-[#6a00d1]"
                  aria-hidden="true"
                />
                <p className="text-[14px] leading-[1.65] text-[#2d2d32] sm:text-[15px]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 5. Բանկի լոգոտիպը և Բրենդբուքը ---------- */}
      <section className="mx-auto max-w-[1160px] px-6 py-16 sm:py-20 lg:px-10">
        <h2 className="mb-5 text-[28px] font-bold leading-tight text-[#1d1d1f] sm:text-[34px]">
          Բանկի լոգոտիպը
        </h2>

        <p className="max-w-[920px] text-[14px] leading-[1.7] text-[#3a3a40] sm:text-[15px]">
          Բանկի լոգոն կազմված է evolution՝ էվոլյուցիա բառի արմատից և նմանեցված է evoke՝
          զարթեցնել բառին: Բառի երկրորդ տառը՝ V-ն, պատկերված է կորացված անկյուններով
          հավասարակողմ եռանկյան տեսքով և նմանեցված է դեպի աջ և վեր ուղղված սլաքի տեսքով՝
          խորհրդանշելով Բանկի ձգտումը դեպի առաջընթաց:
        </p>

        {/* Լոգոտիպի կենտրոնացված ցուցադրում */}
        <div className="my-12 flex items-center justify-center py-4">
          <div className="flex items-center select-none text-[44px] tracking-[-0.03em] sm:text-[64px]">
            <span className="font-medium text-[#66666d]">evo</span>
            <svg
              viewBox="0 0 46 46"
              className="mx-0.5 h-[42px] w-[42px] text-[#6a00d1] sm:h-[58px] sm:w-[58px]"
              aria-hidden="true"
            >
              <path
                d="M11 8L23 36L35 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="7.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium text-[#66666d]">ca</span>
            <span className="ml-1 font-light tracking-[0.02em] text-[#66666d]">BANK</span>
          </div>
        </div>

        <h2 className="mb-5 text-[28px] font-bold leading-tight text-[#1d1d1f] sm:text-[34px]">
          Բանկի բրենդբուքը
        </h2>

        <div className="max-w-[920px] space-y-3 text-[14px] leading-[1.7] text-[#3a3a40] sm:text-[15px]">
          <p>
            Բրենդբուքում կգտնեք Բանկի լոգոյի կիրառման կանոնները, բրենդային գույները,
            տառատեսակները և բրենդի այլ կարևոր տարրերը:
          </p>
          <p>
            Սա պարզապես ուղեցույց չէ, այլ ոգեշնչման աղբյուր՝ ուժեղ և ճանաչելի բրենդ
            կառուցելու համար:
          </p>
        </div>

        {/* ---------- 6. Վիդեո բլոկ (EVOCA IS 35) ---------- */}
        <div className="mx-auto mt-14 max-w-[780px]">
          <div className="relative overflow-hidden rounded-[4px] bg-[#09040f] shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
            {!videoPlaying ? (
              <div className="relative aspect-video w-full">
                {/* Վերին ձախ YouTube-անման վերնագիր */}
                <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-3 bg-gradient-to-b from-black/75 to-transparent px-4 py-3 text-white">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[13px] font-extrabold text-[#6a00d1]">
                    V
                  </span>
                  <div className="leading-tight">
                    <div className="text-[13px] font-semibold sm:text-[14px]">
                      Evocabank: 2025 Q4 Ամփոփում | ARM
                    </div>
                    <div className="text-[11px] text-white/75">Evocabank</div>
                  </div>
                </div>

                {/* Կենտրոնական ֆոնային գրաֆիկա */}
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#160529] via-[#0c0217] to-[#1d0533] px-6 text-center text-white select-none">
                  <div className="text-[48px] font-bold tracking-[0.06em] sm:text-[76px]">
                    EVOCA
                  </div>
                  <div className="-mt-3 text-[52px] font-bold tracking-[0.04em] sm:text-[82px]">
                    IS 35
                  </div>
                </div>

                {/* Play կոճակ */}
                <button
                  type="button"
                  onClick={() => setVideoPlaying(true)}
                  aria-label="Միացնել տեսանյութը"
                  className="group absolute inset-0 z-20 flex cursor-pointer items-center justify-center"
                >
                  <span className="flex h-12 w-18 items-center justify-center rounded-[12px] bg-[#e62117] text-white shadow-lg transition-transform duration-200 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6">
                      <polygon points="8 5 19 12 8 19 8 5" />
                    </svg>
                  </span>
                </button>

                {/* Ներքևի ձախ և աջ պիտակներ */}
                <div className="absolute bottom-3 left-4 z-10 flex items-center gap-2 text-white/80">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>

                <button
                  type="button"
                  onClick={() => setVideoPlaying(true)}
                  className="absolute right-3 bottom-3 z-10 flex cursor-pointer items-center gap-1.5 rounded-[3px] bg-black/80 px-2.5 py-1 text-[11px] font-medium text-white hover:bg-black"
                >
                  <span>Смотреть на</span>
                  <span className="font-bold tracking-tight">▶ YouTube</span>
                </button>
              </div>
            ) : (
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src="https://www.youtube.com/embed?listType=search&list=Evocabank+2025+Q4+Ամփոփում&autoplay=1"
                  title="Evocabank: 2025 Q4 Ամփոփում | ARM"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button
                  type="button"
                  onClick={() => setVideoPlaying(false)}
                  className="absolute top-3 right-3 rounded-full bg-black/70 px-3 py-1 text-[12px] font-semibold text-white hover:bg-black"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}