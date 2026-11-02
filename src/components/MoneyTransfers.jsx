import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChevronDown = ({ open }) => (
  <svg
    className={`h-4 w-4 transition-transform duration-200 text-[#6a00d1] ${open ? "rotate-180" : ""}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const FileIcon = () => (
  <svg className="h-6 w-6 text-[#6a00d1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="12" y2="12" />
    <line x1="9" y1="15" x2="15" y2="15" />
  </svg>
);

const OnlineBankingBanner = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeEmbedUrl = "https://www.youtube.com/embed/KwAgMHEx8ys?autoplay=1";

  return (
    <div className="relative w-full bg-[#5D00C6] text-white overflow-hidden rounded-tr-[100px] py-12 px-6 md:px-16 font-sans mt-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Սարքավորումների հատված */}
        <div className="flex items-end justify-center lg:justify-start w-full lg:w-[58%] gap-6 sm:gap-8">
          
          {/* Նոթբուքի կոնտեյներ */}
          <div className="relative w-full max-w-[500px] aspect-[16/10] bg-[#1a1a1a] rounded-t-xl p-2.5 pb-0 shadow-2xl border-t border-x border-gray-700 z-10 shrink-0">
            <div className="relative w-full h-full bg-black overflow-hidden rounded-t-md group cursor-pointer">
              {!isPlaying ? (
                <div 
                  className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
                  style={{ backgroundImage: `url('https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg')` }}
                  onClick={() => setIsPlaying(true)}
                >
                  <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-transform transform group-hover:scale-110 shadow-lg border border-white/50">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white ml-1"></div>
                  </div>
                </div>
              ) : (
                <iframe
                  src={youtubeEmbedUrl}
                  title="Evoca Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[110%] h-3 bg-[#d1d5db] rounded-b-lg shadow-md flex justify-center items-center">
              <div className="w-16 h-1 bg-[#9ca3af] rounded-full"></div>
            </div>
          </div>

          {/* Հեռախոս */}
          <div className="w-24 sm:w-28 md:w-32 mb-2 z-20 shrink-0 drop-shadow-2xl">
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
              alt="Evoca Mobile App" 
              className="w-full h-auto rounded-2xl border-[3px] border-gray-900 shadow-2xl"
            />
          </div>

        </div>

        {/* Տեքստային հատված */}
        <div className="w-full lg:w-[38%] space-y-6 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide">
            Օնլայն և մոբայլ բանկինգ
          </h2>
          
          <p className="text-sm sm:text-base text-gray-100 leading-relaxed font-normal">
            Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <img 
                src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
                alt="QR Code" 
                className="w-20 h-20 object-contain"
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs text-gray-200 block font-medium">
                Ներբեռնել հավելվածները՝
              </span>
              <div className="flex flex-col sm:flex-row gap-2">
                <a href="#" className="hover:opacity-80 transition">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-9" />
                </a>
                <a href="#" className="hover:opacity-80 transition">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-9" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default function MoneyTransfers() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const accordions = [
    {
      title: "Փոխանցումներ դրամով",
      content: (
        <ul className="space-y-3 text-[15px] sm:text-[16px] text-[#2b3a55] pl-2">
          <li className="flex items-start gap-3">
            <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
            <span>Մեզ մոտ գործող վճարահաշվարկային համակարգն ապահովում է արագ և հուսալի դրամային փոխանցումներ ինչպես մեր համակարգում, այնպես էլ հայաստանյան այլ բանկերի միջև։</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
            <span>Դրամով փոխանցումները Հայաստանի տարածքում կատարվում են 1 բանկային օրվա ընթացքում։</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Միջազգային փոխանցումներ",
      content: (
        <p className="text-[15px] sm:text-[16px] text-[#2b3a55] leading-relaxed">
          Միջազգային փոխանցումներն իրականացվում են SWIFT համակարգով և միջազգային վճարային այլ ցանցերով՝ աշխարհի ցանկացած երկիր, արագ և անվտանգ կերպով։
        </p>
      ),
    },
    {
      title: "Վճարային համակարգեր",
      content: (
        <p className="text-[15px] sm:text-[16px] text-[#2b3a55] leading-relaxed">
          Բանկն աշխատում է հայտնի միջազգային դրամական փոխանցման համակարգերի հետ, որոնք թույլ են տալիս ակնթարթորեն ուղարկել և ստանալ գումարներ առանց հաշիվ բացելու անհրաժեշտության։
        </p>
      ),
    },
    {
      title: "Փոխանցման պայմանների փոփոխում կամ չեղյալացում",
      content: (
        <p className="text-[15px] sm:text-[16px] text-[#2b3a55] leading-relaxed">
          Արդեն ուղարկված փոխանցման պայմանները կարող են փոփոխվել կամ փոխանցումը կարող է չեղյալ համարվել հաճախորդի դիմումի հիման վրա՝ համաձայն միջազգային և բանկային կանոնների։
        </p>
      ),
    },
  ];

  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',sans-serif] text-[#1d1d1f] overflow-x-hidden">
      {/* Breadcrumbs */}
      <div className="px-6 pt-4 sm:px-8 xl:px-[62px] text-xs sm:text-sm text-[#515365] flex items-center gap-2">
        <Link to="/" className="hover:text-[#6a00d1]">
          <svg className="h-3.5 w-3.5 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </Link>
        <span>›</span>
        <Link to="/transfers" className="hover:text-[#6a00d1]">Անհատ</Link>
        <span>›</span>
        <Link to="/transfers" className="hover:text-[#6a00d1]">Փոխանցումներ</Link>
        <span>›</span>
        <span className="text-[#1d1d1f] font-semibold">Դրամական փոխանցումներ</span>
      </div>

      {/* Hero Section */}
      <section className="w-full bg-[#f8f7fa] py-8 px-4 sm:px-8 xl:px-[62px]">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[24px] bg-white shadow-sm flex flex-col lg:flex-row items-stretch">
          {/* Ձախ կողմ - Տեքստային բլոկ */}
          <div className="flex-1 bg-[#f4effa] p-8 sm:p-12 lg:p-16 flex flex-col justify-center rounded-b-[24px] lg:rounded-b-none lg:rounded-l-[24px]">
            <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#1d1d1f] leading-tight mb-6">
              Դրամական <br className="hidden sm:inline" />
              փոխանցումներ
            </h1>
            <p className="text-[#515365] text-base sm:text-lg leading-relaxed max-w-[500px]">
              Իրականացնում ենք դրամական փոխանցումներ Հայաստանի տարածքում և դեպի արտերկիր՝ դրամով և արտարժույթով։ Փոխանցումներն իրականացվում են միջազգային բանկային ստանդարտներին համապատասխանող համակարգերով։
            </p>
          </div>

          {/* Աջ կողմ - Նկարի բլոկ */}
          <div className="flex-1 bg-[#f0ebf7] flex items-center justify-center min-h-[320px] lg:min-h-[420px] relative overflow-hidden">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16115828343472/780x585.jpg"
              alt="Դրամական փոխանցումներ"
              className="w-full h-full object-cover object-center max-h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-12 px-6 sm:px-12 xl:px-[160px] max-w-[1400px] mx-auto">
        <h2 className="text-xl sm:text-[22px] font-bold text-[#1d1d1f] mb-6">
          Ընդհանուր դրույթներ
        </h2>

        <div className="space-y-6 text-[15px] sm:text-[16px] text-[#2b3a55] leading-relaxed mb-12">
          <p>
            Ձեր բանկային փոխանցումներն իրականացնում ենք՝ ղեկավարվելով «Բանկերի և բանկային գործունեության մասին» ՀՀ օրենքով, ՀՀ Կենտրոնական բանկի իրավական ակտերով, ՀՀ այլ իրավական ակտերով, թղթակից բանկերի հետ կնքված պայմանագրերով և սպասարկման սահմանված պայմաններով:
          </p>
          <p>
            Ձեր փոխանցումները կատարում ենք վճարման հանձնարարագրերի հման վրա (կախված գումարի չափից, փոխանցման բնույթից և նպատակից՝ կարող են պահանջվել նաև այլ փաստաթղթեր):
          </p>
          <p>
            Յուրաքանչյուր աշխատանքային օրվա ընթացքում՝ մինչև ժամը 15:30 ներկայացված վճարման հանձնարարագրերը կատարում ենք նույն բանկային օրը, իսկ ժամը 15:30-ից հետո ներկայացված վճարման հանձնարարագրերը՝ հաջորդ բանկային օրը: Մինչև ժամը 16:30 ներկայացված դրամով փոխանցումները (պետական և տեղական բյուջեի վճարներ, կոմունալ կամ սոցիալական այլ վճարներ) կատարման ենք ընդունում նույն բանկային օրը:
          </p>
          <p>
            Դրամով և արտարժույթով բանկային փոխանցումներ իրականացնելիս Ձեզանից գանձում ենք <a href="#fees" className="font-bold text-[#6a00d1] underline hover:opacity-80">միջնորդավճարներ</a> ըստ մեր դրույքաչափերի և սակագների: Կոմունալ վճարների սպասարկման դիմաց միջնորդավճար չենք գանձում: Միջնորդավճարները գանձվում են ՀՀ դրամով: Արտարժույթի տոկոսային հարաբերակցությամբ սահմանված միջնորդավճարները գանձվում են ՀՀ դրամով՝ հիմք ընդունելով գանձման օրը տվյալ արտարժույթի համար մեր կողմից սահմանված անկանխիկ վաճառքի փոխարժեքը:
          </p>
          <p>
            Մենք պարտավոր ենք տրամադրել յուրաքանչյուր փոխանցման կատարումը հավաստող փաստաթուղթ, որտեղ նշված կլինեն փոխանցման գումարը, արժույթը, միջնորդավճարի չափը և այլ մանրամասներ:
          </p>
        </div>

        {/* 100vw FULL-WIDTH ՆԿԱՐԻ ԲԼՈԿ (Ամբողջ էկրանի լայնությամբ) */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 my-12 h-[260px] sm:h-[320px] flex items-center justify-center text-center p-8">
          <div className="absolute inset-0 z-0">
            <img
              src="https://www.evoca.am/images-cache/menu/1/1611294541215/1920x530.jpg"
              alt="Մասնաճյուղեր"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 max-w-[1000px] text-white px-4">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed">
              Կարող եք գումարներ փոխանցել ինչպես Ձեր հաշվից, այնպես էլ առանց հաշվի բացման։
            </p>
          </div>
        </div>

        {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ */}
        <h2 className="text-xl sm:text-[22px] font-bold text-[#1d1d1f] mb-6 mt-12">
          ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
        </h2>

        <div className="space-y-4 mb-16">
          {accordions.map((acc, idx) => {
            const isOpen = openAccordion === idx;
            return (
              <div
                key={idx}
                className="rounded-[16px] border border-[#d1b3ff] bg-white overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenAccordion(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer bg-white hover:bg-[#faf5ff] transition-colors"
                >
                  <span className="text-[17px] sm:text-[18px] font-bold text-[#6a00d1]">
                    {acc.title}
                  </span>
                  <ChevronDown open={isOpen} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0">
                    {acc.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Փաստաթղթեր */}
        <h2 className="text-xl sm:text-[22px] font-bold text-[#1d1d1f] mb-6">
          Փաստաթղթեր
        </h2>

        <div className="space-y-4">
          <a
            href="#download-1"
            className="flex items-center justify-between p-5 sm:p-6 rounded-[16px] bg-[#f8f7fa] hover:bg-[#f4effa] transition-colors group border border-transparent hover:border-[#d1b3ff]"
          >
            <span className="text-[15px] sm:text-[17px] font-semibold text-[#1d1d1f] group-hover:text-[#6a00d1] transition-colors">
              Միջազգային վճարման հանձնարարականներով փոխանցումների իրականացման կանոններ
            </span>
            <FileIcon />
          </a>

          <a
            href="#download-2"
            className="flex items-center justify-between p-5 sm:p-6 rounded-[16px] bg-[#f8f7fa] hover:bg-[#f4effa] transition-colors group border border-transparent hover:border-[#d1b3ff]"
          >
            <span className="text-[15px] sm:text-[17px] font-semibold text-[#1d1d1f] group-hover:text-[#6a00d1] transition-colors">
              Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.
            </span>
            <FileIcon />
          </a>

          <a
            href="#download-3"
            className="flex items-center justify-between p-5 sm:p-6 rounded-[16px] bg-[#f8f7fa] hover:bg-[#f4effa] transition-colors group border border-transparent hover:border-[#d1b3ff]"
          >
            <span className="text-[15px] sm:text-[17px] font-semibold text-[#1d1d1f] group-hover:text-[#6a00d1] transition-colors">
              SWIFT Transfers (20.03.2026)
            </span>
            <FileIcon />
          </a>
        </div>
      </section>

      {/* Օնլայն և մոբայլ բանկինգ բլոկ */}
      <OnlineBankingBanner />
    </div>
  );
}