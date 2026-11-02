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

export default function NonResidentService() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const accordions = [
    {
      title: "Առավելություններ",
      content: (
        <ul className="space-y-4 text-[15px] sm:text-[16px] text-[#2b3a55] pl-2">
          <li className="flex items-start gap-3">
            <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
            <div>
              <span className="font-bold text-[#6a00d1] block">Prime կարգավիճակ Բանկում</span>
              <span>Բացառիկ արտոնություններ, առաջնահերթ սպասարկում և ժամանակի խնայում</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
            <div>
              <span className="font-bold text-[#6a00d1] block">Անհատական մենեջեր/Անձնական օգնական</span>
              <span>24/7 Աջակցություն ֆինանսական ցանկացած հարցում անմիջապես անձնական օգնականի կողմից</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
            <div>
              <span className="font-bold text-[#6a00d1] block">Հեռավար սպասարկում</span>
              <span>Ծառայությունների հասանելիություն առցանց՝ աշխարհի ցանկացած կետից</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
            <div>
              <span className="font-bold text-[#6a00d1] block">Փաստաթղթերի անվճար առաքում</span>
              <span>Առաքում անմիջապես Ձեր գտնվելու վայր, Ձեզ հարմար պահին՝ արագ և անվճար:</span>
            </div>
          </li>
        </ul>
      ),
    },
    {
      title: "Ֆիզիկական անձանց հաշվի բացման պայմաններ",
      content: (
        <p className="text-[15px] sm:text-[16px] text-[#2b3a55] leading-relaxed">
          Ոչ ռեզիդենտ ֆիզիկական անձինք հնարավորություն ունեն բացել դրամային և արտարժութային հաշիվներ առանց Բանկ այցելելու՝ ուղարկելով անհրաժեշտ փաստաթղթերը և անցնելով տեսազանգով նույնականացում։
        </p>
      ),
    },
    {
      title: "Ֆիզիկական անձանց հաշվի բացման անհրաժեշտ փաստաթղթեր",
      content: (
        <ul className="space-y-3 text-[15px] sm:text-[16px] text-[#2b3a55] pl-2">
          <li className="flex items-start gap-3">
            <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
            <span>Վավեր անձնագիր կամ նույնականացման փաստաթուղթ։</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
            <span>Հաշվի բացման լրացված դիմում։</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
            <span>Բանկի պահանջով այլ փաստաթղթեր (ըստ անհրաժեշտության)։</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Իրավաբանական անձանց փաստաթղթերի ցանկ",
      content: (
        <p className="text-[15px] sm:text-[16px] text-[#2b3a55] leading-relaxed">
          Իրավաբանական անձանց համար հեռավար սպասարկման և հաշիվների բացման նպատակով պահանջվում է ներկայացնել ընկերության հիմնադիր փաստաթղթերը, գրանցման վկայականը, տնօրենի և իրական շահառուների անձնագրային տվյալները, ինչպես նաև լրացված դիմում-հայտերը։
        </p>
      ),
    },
    {
      title: "Սակագներ",
      content: (
        <p className="text-[15px] sm:text-[16px] text-[#2b3a55] leading-relaxed">
          Ոչ ռեզիդենտ հաճախորդների հաշիվների բացման և սպասարկման սակագները սահմանվում են Բանկի գործող սակագներին համապատասխան, որոնց մանրամասներին կարող եք ծանոթանալ կայքի համապատասխան բաժնում։
        </p>
      ),
    },
    {
      title: "Հաշվի բացման փուլեր",
      content: (
        <ol className="list-decimal space-y-2 text-[15px] sm:text-[16px] text-[#2b3a55] pl-5">
          <li>Ուղարկեք անհրաժեշտ փաստաթղթերը առցանց եղանակով։</li>
          <li>Անցեք տեսազանգով նույնականացում Բանկի մասնագետի հետ։</li>
          <li>Ստացեք հաշվի ակտիվացման մասին ծանուցում և սկսեք օգտվել ծառայություններից։</li>
        </ol>
      ),
    },
  ];

  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',sans-serif] text-[#1d1d1f]">
      {/* Breadcrumbs */}
      <div className="px-6 pt-4 sm:px-8 xl:px-[62px] text-xs sm:text-sm text-[#515365] flex items-center gap-2">
        <Link to="/" className="hover:text-[#6a00d1]">
          <svg className="h-3.5 w-3.5 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </Link>
        <span>›</span>
        <Link to="/accounts" className="hover:text-[#6a00d1]">Անհատ</Link>
        <span>›</span>
        <Link to="/accounts" className="hover:text-[#6a00d1]">Հաշիվներ</Link>
        <span>›</span>
        <span className="text-[#1d1d1f] font-semibold">Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</span>
      </div>

      {/* Hero Section */}
      <section className="w-full bg-[#f8f7fa] py-8 px-4 sm:px-8 xl:px-[62px]">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[24px] bg-white shadow-sm flex flex-col lg:flex-row items-stretch">
          {/* Ձախ կողմ - Տեքստային բլոկ */}
          <div className="flex-1 bg-[#f4effa] p-8 sm:p-12 lg:p-16 flex flex-col justify-center rounded-b-[24px] lg:rounded-b-none lg:rounded-l-[24px]">
            <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#1d1d1f] leading-tight mb-6">
              Ոչ ռեզիդենտ <br className="hidden sm:inline" />
              հաճախորդների հեռավար <br className="hidden sm:inline" />
              սպասարկում
            </h1>
            <p className="text-[#515365] text-base sm:text-lg leading-relaxed max-w-[500px]">
              Բանկ այցելելն այլևս պարտադիր չէ։ Անգամ եթե չեք բնակվում ՀՀ-ում, Evocabank-ի հետ Դուք կարող եք բացել հաշիվներ օնլայն եղանակով աշխարհի ցանկացած կետից և ցանկացած պահի։
            </p>
          </div>

          {/* Աջ կողմ - Նկարի բլոկ */}
          <div className="flex-1 bg-[#121212] flex items-center justify-center min-h-[320px] lg:min-h-[420px] relative overflow-hidden">
            <img
              src="https://www.evoca.am/images-cache/menu/1/17510033256067/780x585.png"
              alt="Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում"
              className="w-full h-full object-cover object-center max-h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-12 px-6 sm:px-12 xl:px-[160px] max-w-[1400px] mx-auto">
        <div className="space-y-6 text-[16px] sm:text-[18px] leading-relaxed text-[#2b3a55] mb-12">
          <p>
            24/7 անձնական մենեջեր, ֆինանսական ծառայությունների հասանելիություն աշխարհի ցանկացած կետից, փաստաթղթերի անվճար առաքում Ձեր գտնվելու վայր։ Բոլոր մանրուքները մտածված են, որ Դուք խնայեք Ձեր ժամանակը, չշեղվեք կարևոր գործերից և, հարկ է, օգտվեք prime սպասարկումից։
          </p>
          <p>
            Ուղարկեք փաստաթղթերը, անցեք տեսազանգով նույնականացում և բացեք Ձեր հաշիվը՝ առանց Բանկ այցելելու:
          </p>
          <p className="font-semibold text-[#1d1d1f]">
            Մանրամասները և քայլ առ քայլ ուղեցույցը՝ ներքևում:
          </p>
        </div>

        {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ */}
        <h2 className="text-xl sm:text-[22px] font-bold text-[#1d1d1f] mb-6">
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
              Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.
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