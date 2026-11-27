import React, { useState } from "react";

const HERO_BANNER_IMAGE =
  "https://www.evoca.am/images-cache/menu/1/16195117975601/1920x634.jpg";

const WHY_EVOCA_IMAGE =
  "https://www.evoca.am/file_manager/Career/evoca-girl.jpg";

const CULTURE_VIDEOS = [
  {
    id: "new-year-2022",
    title: "Evoca New Year Corporate Party 2022",
    thumbnail:
      "https://www.evoca.am/images-cache/culture_sliders/1/16760069357338/744x419.jpg",
    youtubeUrl: "https://youtu.be/PvDYyPGb3RU?si=n4dOUzh0kcwRKTRN",
    embedId: "PvDYyPGb3RU",
  },
  {
    id: "summer-party-2022",
    title: "EVOCAISLAND Evoca Summer Party 2022",
    thumbnail:
      "https://www.evoca.am/images-cache/culture_sliders/1/16196059430279/744x419.jpg",
    youtubeUrl: "https://youtu.be/PF9JbEC-z-I?si=rXDz4haAlcZ247XC",
    embedId: "PF9JbEC-z-I",
  },
  {
    id: "never-seen-like-this",
    title: "Attention!!! You have never seen anything like this",
    thumbnail:
      "https://www.evoca.am/images-cache/culture_sliders/1/16760071256254/744x419.jpg",
    youtubeUrl: "https://youtu.be/Abpc2dbNEdU?si=me82atrE5H1ClJJh",
    embedId: "Abpc2dbNEdU",
  },
  {
    id: "purple-photoshoot",
    title: "Purple photoshoot with Evocabank",
    thumbnail:
      "https://www.evoca.am/images-cache/culture_sliders/1/16335942010669/744x419.png",
    youtubeUrl: "https://youtu.be/X9yAx39078s?si=GpO0J9NGz2ibTW1h",
    embedId: "X9yAx39078s",
  },
  {
    id: "welcome-to-evocabank",
    title: "Welcome to Evocabank!",
    thumbnail:
      "https://www.evoca.am/images-cache/culture_sliders/1/16196069660929/744x419.jpg",
    youtubeUrl: "https://youtu.be/ygQS-e1-2I8?si=GWO4OdaFIbkDYzZE",
    embedId: "ygQS-e1-2I8",
  },
  {
    id: "corporate-party-2021",
    title: "Evoca Corporate Party 2021",
    thumbnail:
      "https://www.evoca.am/images-cache/culture_sliders/1/16196066065187/744x419.jpg",
    youtubeUrl: "https://youtu.be/VNVSaTULcBk?si=MojE8G-FYNsFJaTc",
    embedId: "VNVSaTULcBk",
  },
  {
    id: "neon-art-party",
    title: "Evocabank neon art corporate party",
    thumbnail:
      "https://www.evoca.am/images-cache/culture_sliders/1/16412988100187/744x419.jpg",
    youtubeUrl: "https://youtu.be/PvDYyPGb3RU?si=n4dOUzh0kcwRKTRN",
    embedId: "PvDYyPGb3RU",
  },
];

const TEAM_QUOTES_PAGES = [
  [
    {
      id: "harutyun",
      words: ["Թրենդային", "Պահանջված", "Ուրախ"],
      author: "Հարություն Սահակյան",
      role: "Անվտանգության մասնագետ",
    },
    {
      id: "lilit",
      words: ["Դինամիկ", "Պրպտող", "Զարգացող"],
      author: "Լիլիթ Գաբոյան",
      role: "Գլխավոր ֆինանսական տնօրեն",
    },
    {
      id: "alla",
      words: ["Կրեատիվ", "Նորարար", "Մանուշակագույն"],
      author: "Ալլա Զաքարյան",
      role: "Վճարային գործիքների մասնագետ",
    },
  ],
  [
    {
      id: "member-4",
      words: ["Արագ", "Թիմային", "Համարձակ"],
      author: "Արամ Պետրոսյան",
      role: "Թվային պրոդուկտների մասնագետ",
    },
    {
      id: "member-5",
      words: ["Ժամանակակից", "Էներգետիկ", "Վստահելի"],
      author: "Մարիամ Հակոբյան",
      role: "Հաճախորդների սպասարկման մասնագետ",
    },
    {
      id: "member-6",
      words: ["Առաջատար", "Պրոակտիվ", "Ոգեշնչող"],
      author: "Դավիթ Մարտիրոսյան",
      role: "ՏՏ ճարտարապետ",
    },
  ],
];

const PlayButtonOverlay = ({ size = "md" }) => {
  const isLarge = size === "lg";
  return (
    <span
      className={`flex items-center justify-center rounded-full bg-black/45 text-white/90 transition-transform duration-200 group-hover:scale-110 group-hover:bg-[#6a00d1]/85 ${
        isLarge ? "h-16 w-16" : "h-11 w-11"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        className={isLarge ? "ml-0.5 h-7 w-7 text-[#45e8ff]" : "ml-0.5 h-5 w-5 text-[#45e8ff]"}
      >
        <polygon points="6 4 20 12 6 20 6 4" />
      </svg>
    </span>
  );
};

const DoubleQuoteMark = () => (
  <svg
    viewBox="0 0 44 34"
    fill="none"
    className="h-8 w-11 text-[#5a00c8]"
    aria-hidden="true"
  >
    <polygon points="0,12 12,0 12,22 0,34" fill="currentColor" />
    <polygon points="20,12 32,0 32,22 20,34" fill="currentColor" />
  </svg>
);

export default function EvocaLife() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [quotePageIndex, setQuotePageIndex] = useState(0);

  const totalVideos = CULTURE_VIDEOS.length;
  const prevIndex = (centerIndex - 1 + totalVideos) % totalVideos;
  const nextIndex = (centerIndex + 1) % totalVideos;

  const leftVideo = CULTURE_VIDEOS[prevIndex];
  const centerVideo = CULTURE_VIDEOS[centerIndex];
  const rightVideo = CULTURE_VIDEOS[nextIndex];

  const handlePrevVideo = () => {
    setCenterIndex((prev) => (prev - 1 + totalVideos) % totalVideos);
  };

  const handleNextVideo = () => {
    setCenterIndex((prev) => (prev + 1) % totalVideos);
  };

  const currentQuotes = TEAM_QUOTES_PAGES[quotePageIndex] || TEAM_QUOTES_PAGES[0];

  return (
    <div className="w-full overflow-x-hidden bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@400;500;600;700;800&display=swap');
      `}</style>

      <section className="relative w-full">
        <div className="relative h-[380px] w-full overflow-hidden sm:h-[460px] lg:h-[520px]">
          <img
            src={HERO_BANNER_IMAGE}
            alt="Մշակույթ"
            className="h-full w-full object-cover object-center"
          />

          <div className="mx-auto max-w-[1380px] px-6 lg:px-12">
            <div className="absolute bottom-0 left-6 right-6 max-w-[560px] rounded-tr-[6px] bg-white/95 p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)] backdrop-blur-xs sm:left-12 sm:p-8 lg:left-28">
              <h1 className="mb-3 text-[26px] font-bold leading-[1.25] text-[#1d1d1f] sm:text-[32px]">
                Մշակույթ
              </h1>
              <p className="text-[14px] leading-[1.6] text-[#3a3a40] sm:text-[15px]">
                Evoca-ում աշխատելը հաճելի է։ Առօրյան լցված է նորարարություններով։
                Այստեղ տաղանդները անընդհատ զարգանում են ու կատարելագործվում։
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-[1140px] px-6 pt-14 pb-16 lg:px-10">
        <h2 className="mb-4 text-[26px] font-bold leading-[1.3] text-[#1d1d1f] sm:text-[32px]">
          Ինչո՞ւ աշխատել Evoca-ում
        </h2>

        <p className="mb-9 max-w-[920px] text-[14px] leading-[1.65] text-[#3a3a40] sm:text-[15px]">
          «Բացահայտիր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ։ Աշխատակիցներն ուրախ են,
          մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների
          մասին»
        </p>

        <div className="flex justify-center">
          <div className="w-full max-w-[760px] overflow-hidden rounded-[4px] bg-[#f8d7e3]">
            <img
              src={WHY_EVOCA_IMAGE}
              alt="Ինչո՞ւ աշխատել Evoca-ում"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="culture"
        className="relative w-full overflow-hidden bg-gradient-to-br from-[#5d00c4] via-[#6b00de] to-[#4f00ad] py-16 text-white sm:py-20"
      >
        <div
          className="pointer-events-none absolute top-14 left-12 h-4 w-12 -rotate-12 rounded-xs border-2 border-[#f372b8]/70"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/3 left-44 h-6 w-6 rotate-12 border-2 border-white/40"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-14 right-44 h-5 w-5 rotate-45 bg-[#f7d934]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/3 right-28 h-7 w-7 rounded-full border-[5px] border-[#eb55b8]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-8">
          <div className="mx-auto mb-10 max-w-[820px] text-center">
            <h2 className="mb-3 text-[28px] font-bold leading-tight text-white sm:text-[34px]">
              Մշակույթ
            </h2>
            <p className="text-[13px] leading-[1.65] text-white/90 sm:text-[14px]">
              Evoca-ում մենք ոչ միայն անում ենք այն, ինչ սիրում ենք, այլ նաև կյանքից
              վերցնում ենք ամեն ինչ։ Անընդհատ սովորում ենք, մեր փորձը կիսում ենք գործընկերների
              հետ, սպորտով ենք զբաղվում և հանգստանում։ Միացե՛ք մեզ!
            </p>
          </div>

          <div className="relative flex items-center justify-center gap-4 lg:gap-7">
            <button
              type="button"
              onClick={handlePrevVideo}
              aria-label="Նախորդ տեսանյութ"
              className="z-20 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-white/85 transition-all hover:scale-110 hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              onClick={handlePrevVideo}
              className="group hidden w-[260px] shrink-0 cursor-pointer overflow-hidden rounded-[12px] bg-white text-[#1d1d1f] shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 md:block xl:w-[290px]"
            >
              <div className="relative h-[145px] w-full overflow-hidden bg-black">
                <img
                  src={leftVideo.thumbnail}
                  alt={leftVideo.title}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayButtonOverlay size="md" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-[13px] font-bold leading-[1.35] text-[#1d1d1f]">
                  {leftVideo.title}
                </h3>
              </div>
            </div>

            <div className="w-full max-w-[660px] overflow-hidden rounded-[14px] bg-white text-[#1d1d1f] shadow-[0_22px_50px_rgba(0,0,0,0.32)] transition-all duration-300">
              <button
                type="button"
                onClick={() => setActiveVideo(centerVideo)}
                className="group relative block h-[250px] w-full cursor-pointer overflow-hidden bg-black sm:h-[340px] lg:h-[370px]"
              >
                <img
                  src={centerVideo.thumbnail}
                  alt={centerVideo.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors group-hover:bg-black/25">
                  <PlayButtonOverlay size="lg" />
                </div>
              </button>
              <div className="flex items-center justify-between gap-4 px-6 py-4">
                <h3 className="text-[16px] font-bold leading-[1.35] text-[#1d1d1f] sm:text-[18px]">
                  {centerVideo.title}
                </h3>
                <a
                  href={centerVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-[12px] font-semibold text-[#6a00d1] hover:underline"
                >
                  YouTube
                </a>
              </div>
            </div>

            <div
              onClick={handleNextVideo}
              className="group hidden w-[260px] shrink-0 cursor-pointer overflow-hidden rounded-[12px] bg-white text-[#1d1d1f] shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 md:block xl:w-[290px]"
            >
              <div className="relative h-[145px] w-full overflow-hidden bg-black">
                <img
                  src={rightVideo.thumbnail}
                  alt={rightVideo.title}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayButtonOverlay size="md" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-[13px] font-bold leading-[1.35] text-[#1d1d1f]">
                  {rightVideo.title}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={handleNextVideo}
              aria-label="Հաջորդ տեսանյութ"
              className="z-20 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-white/85 transition-all hover:scale-110 hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-[1260px] px-6 py-16 sm:py-20 lg:px-10">
        <h2 className="mb-12 text-center text-[22px] font-bold leading-[1.35] text-[#2d3748] sm:text-[26px]">
          Հարցրու՛ մեր թիմին. «Ինչպիսի՞ն է Evoca-ն՝ 3 բառով»
        </h2>

        <div className="relative flex items-center justify-center gap-3 sm:gap-6">
          <button
            type="button"
            onClick={() =>
              setQuotePageIndex((prev) => (prev - 1 + TEAM_QUOTES_PAGES.length) % TEAM_QUOTES_PAGES.length)
            }
            aria-label="Նախորդ կարծիքներ"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#5a00c8] transition-colors hover:bg-[#f4ecfb]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="grid w-full max-w-[1060px] grid-cols-1 gap-6 md:grid-cols-3">
            {currentQuotes.map((quote) => (
              <div
                key={quote.id}
                className="relative flex min-h-[260px] flex-col justify-between bg-[#faf8ff] p-7 sm:p-8"
              >
                <div className="pointer-events-none absolute -top-3.5 right-6" aria-hidden="true">
                  <DoubleQuoteMark />
                </div>

                <div className="pt-2">
                  {quote.words.map((word) => (
                    <div
                      key={word}
                      className="text-[20px] font-bold leading-[1.3] text-[#5a00c8] sm:text-[22px]"
                    >
                      {word}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="text-[13px] font-medium text-[#2d3748]">{quote.author}</div>
                  <div className="mt-0.5 text-[11px] text-[#718096]">{quote.role}</div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setQuotePageIndex((prev) => (prev + 1) % TEAM_QUOTES_PAGES.length)}
            aria-label="Հաջորդ կարծիքներ"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#5a00c8] transition-colors hover:bg-[#f4ecfb]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {TEAM_QUOTES_PAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Էջ ${idx + 1}`}
              onClick={() => setQuotePageIndex(idx)}
              className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-all ${
                quotePageIndex === idx ? "scale-110 bg-[#5a00c8]" : "bg-[#cbd5e0]"
              }`}
            />
          ))}
        </div>
      </section>

      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[820px] overflow-hidden rounded-[14px] bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-[#ececef] px-5 py-3.5">
              <h3 className="text-[15px] font-bold text-[#1d1d1f]">{activeVideo.title}</h3>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="cursor-pointer rounded-full px-2.5 py-1 text-[14px] font-semibold text-[#5a00c8] hover:bg-[#f4ecfb]"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.embedId}?autoplay=1`}
                title={activeVideo.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}