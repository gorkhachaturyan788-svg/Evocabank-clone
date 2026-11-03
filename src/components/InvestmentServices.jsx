import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function InvestmentServices() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const newsItems = [
    {
      tag: "Կենսակերպ",
      title: "Սթիվեն Բարթլետը՝ Երևանում` Evoca Conference 2026-ին",
      date: "19.10.2026",
      image: "https://www.evoca.am/images-cache/news/1/17930859918757/439x320.png",
    },
    {
      tag: "Բանկային",
      title: "Evocabank-ը և IFC-ն մեկնարկում են բնապահպանական առաջին ծրագիրը",
      date: "26.10.2026",
      image: "https://www.evoca.am/images-cache/news/1/17930164747919/439x320.png",
    },
    {
      tag: "Կենսակերպ",
      title: "Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր",
      date: "08.10.2026",
      image: "https://www.evoca.am/images-cache/news/1/17915391966329/439x320.png",
    },
  ];

  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f]">
      {/* 1. Hero Section */}
      <section className="w-full bg-[#f8f5fc] py-12 md:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-10 px-6 lg:flex-row lg:px-16">
          {/* Left Text */}
          <div className="max-w-[650px]">
            <h1 className="text-[32px] font-bold text-[#1d1d1f] md:text-[44px] leading-tight">
              Ներդրումային ծառայություններ
            </h1>
            <p className="mt-6 text-[16px] leading-[1.7] text-[#4a4a4c] md:text-[18px]">
              Evocabank-ն առաջարկում է ներդրումային ծառայություններ և տալիս եկամտի նոր աղբյուրների հնարավորություն՝ ձեր պահանջներին և ցանկություններին համապատասխան:
            </p>
          </div>

          {/* Right Image Container */}
          <div className="w-full max-w-[600px] overflow-hidden rounded-[20px] bg-[#eadef7] p-4 md:p-8 flex items-center justify-center">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg"
              alt="Ներդրումային ծառայություններ"
              className="h-auto w-full object-contain rounded-[12px]"
            />
          </div>
        </div>
      </section>

      {/* 2. Main Content & Details Section */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 lg:px-16">
        <div className="max-w-[900px]">
          <p className="text-[16px] leading-[1.8] text-[#333] md:text-[18px]">
            Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ՝ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ հանդիսացող հաճախորդներին:
          </p>

          {/* How to become a client */}
          <div className="mt-10">
            <h3 className="text-[20px] font-bold text-[#6a00d1] md:text-[22px]">
              Ինչպե՞ս դառնալ հաճախորդ.
            </h3>
            <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
              Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար պահանջվող փաստաթղթերին կարող եք ծանոթանալ{" "}
              <Link to="/accounts/service" className="text-[#6a00d1] font-semibold underline hover:text-[#5500a8]">
                այստեղ
              </Link>:
            </p>
            <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
              Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ:
            </p>
          </div>

          {/* Address & Contact Info */}
          <div className="mt-10 space-y-6">
            <div>
              <h4 className="text-[18px] font-bold text-[#6a00d1]">Հասցե՝</h4>
              <p className="mt-1 text-[16px] text-[#333]">Երևան, Հանրապետության 44/2</p>
            </div>

            <div>
              <h4 className="text-[18px] font-bold text-[#6a00d1]">Հետադարձ կապ՝</h4>
              <p className="mt-1 text-[16px] text-[#333]">
                <span className="font-semibold">Հեռ.՝</span> 374 33 777 453, 374 33 603 055
              </p>
              {/* Social / Messengers icons placeholder */}
              <div className="mt-2 flex items-center gap-3 text-[#6a00d1]">
                <span className="cursor-pointer hover:opacity-80">🟢 WhatsApp</span>
                <span className="cursor-pointer hover:opacity-80">🔵 Telegram</span>
                <span className="cursor-pointer hover:opacity-80">🟣 Viber</span>
              </div>
            </div>

            <div>
              <p className="text-[16px] text-[#333]">
                <span className="font-semibold">Էլ. հասցե՝</span>{" "}
                <a href="mailto:investsecurities@evoca.am" className="text-[#6a00d1] underline hover:text-[#5500a8]">
                  investsecurities@evoca.am
                </a>
              </p>
            </div>
          </div>

          {/* Risk Warning Box */}
          <div className="mt-12 rounded-[12px] bg-[#fff5f5] border border-[#ffcccc] p-6 text-[15px] leading-[1.7] text-[#c53030]">
            <span className="font-bold">ՈՒՇԱԴՐՈՒԹՅՈՒՆ.</span> Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում:
          </div>
        </div>

        {/* 3. Required Information & Accordions */}
        <div className="mt-16">
          <h2 className="text-[24px] font-bold text-[#1d1d1f] md:text-[28px] mb-8">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>

          <div className="space-y-4">
            {/* Accordion Item 1 */}
            <div className="rounded-[16px] border border-[#dcd6f7] bg-white shadow-sm overflow-hidden transition-all">
              <button
                onClick={() => toggleAccordion(0)}
                className="flex w-full items-center justify-between px-6 py-5 text-left font-bold text-[#1d1d1f] hover:bg-[#faf8fc]"
              >
                <span className="text-[17px] text-[#6a00d1]">Ներդրումային ծառայությունների մատուցման կանոններ</span>
                <span className={`transform transition-transform duration-200 ${openAccordion === 0 ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {openAccordion === 0 && (
                <div className="px-6 pb-6 text-[15px] leading-[1.8] text-[#4a4a4c] space-y-4 border-t border-[#f0ebfb] pt-4">
                  <div>
                    <h5 className="font-bold text-[#1d1d1f] mb-1">Արժեթղթերի շուկայում բրոքերային ծառայությունների մատուցման կանոններ</h5>
                    <p>
                      Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման պատվերների ընդունման/հաղորդման, հաճախորդների հետ կապի իրականացման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները...
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1d1d1f] mb-1">Արժեթղթերի Պահառության գործունեության կանոններ</h5>
                    <p>
                      Այս կանոնները սահմանում են արժեթղթերի հաշիվների հետ կատարվող գործառնությունների ցանկը, ծառայությունների մատուցման/կատարման կարգն ու պայմանները...
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion Item 2 */}
            <div className="rounded-[16px] border border-[#dcd6f7] bg-white shadow-sm overflow-hidden transition-all">
              <button
                onClick={() => toggleAccordion(1)}
                className="flex w-full items-center justify-between px-6 py-5 text-left font-bold text-[#1d1d1f] hover:bg-[#faf8fc]"
              >
                <span className="text-[17px] text-[#6a00d1]">Ծառայությունների մատուցման սակագներ</span>
                <span className={`transform transition-transform duration-200 ${openAccordion === 1 ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {openAccordion === 1 && (
                <div className="px-6 pb-6 text-[15px] leading-[1.8] text-[#4a4a4c] border-t border-[#f0ebfb] pt-4">
                  <p>Այստեղ ներկայացված են ներդրումային ծառայությունների մատուցման մանրամասն միջնորդավճարներն ու սակագները:</p>
                </div>
              )}
            </div>

            {/* Accordion Item 3 */}
            <div className="rounded-[16px] border border-[#dcd6f7] bg-white shadow-sm overflow-hidden transition-all">
              <button
                onClick={() => toggleAccordion(2)}
                className="flex w-full items-center justify-between px-6 py-5 text-left font-bold text-[#1d1d1f] hover:bg-[#faf8fc]"
              >
                <span className="text-[17px] text-[#6a00d1]">Լրացուցիչ տեղեկատվություն</span>
                <span className={`transform transition-transform duration-200 ${openAccordion === 2 ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {openAccordion === 2 && (
                <div className="px-6 pb-6 text-[15px] leading-[1.8] text-[#4a4a4c] border-t border-[#f0ebfb] pt-4">
                  <p>Լրացուցիչ հաշվետվություններ, ձևաչափեր և հայտարարություններ հաճախորդների համար:</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4. News Section (Ընդլայնված և մեծացված տեսքով) */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[26px] font-bold text-[#1d1d1f] md:text-[32px]">
              Նորություններ և իրադարձություններ
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {newsItems.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col overflow-hidden rounded-[20px] bg-white border border-[#e6e6e6] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Նկարի բարձրությունը մեծացված է (h-[260px]) */}
                <div className="h-[260px] w-full overflow-hidden bg-[#f0f0f0]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                {/* Բովանդակության հատվածն ավելի հարմարավետ և մեծ պահպանված տարածքով */}
                <div className="flex flex-col flex-grow p-7">
                  <span className="text-[14px] font-bold text-[#b8860b] mb-3 uppercase tracking-wide">
                    {item.tag}
                  </span>
                  <h4 className="text-[18px] font-bold text-[#1d1d1f] leading-snug mb-6 flex-grow">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between pt-4 border-t border-[#f0f0f0]">
                    <span className="text-[14px] font-medium text-[#7a7d7e]">{item.date}</span>
                    <span className="text-[14px] font-bold text-[#6a00d1] hover:underline cursor-pointer">
                      Կարդալ ավելին →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}