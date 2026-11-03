import React from "react";

export default function HKDServices() {
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
          <div className="max-w-[650px]">
            <h1 className="text-[32px] font-bold text-[#1d1d1f] md:text-[44px] leading-tight">
              Հայաստանի կենտրոնական դեպոզիտարիայի (ՀԿԴ)
            </h1>
            <p className="mt-6 text-[16px] leading-[1.7] text-[#4a4a4c] md:text-[18px]">
              Evocabank-ը հանդիսանում է ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր՝ միջնորդավորելով ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ռեեստրավարման և արժեթղթերի պահառության հետ կապված բոլոր ծառայությունները:
            </p>
          </div>

          <div className="w-full max-w-[600px] overflow-hidden rounded-[20px] bg-[#eadef7] p-4 md:p-8 flex items-center justify-center">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg"
              alt="Հայաստանի կենտրոնական դեպոզիտարիա"
              className="h-auto w-full object-contain rounded-[12px]"
            />
          </div>
        </div>
      </section>

      {/* 2. Main Content & Details Section */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 lg:px-16 pb-20">
        <div className="max-w-[900px] space-y-6 text-[16px] leading-[1.8] text-[#333]">
          <p>
            ՀՀ Կենտրոնական Դեպոզիտարիան հաճախորդների սպասարկումն իրականացնում է բացառապես Հաշվի Օպերատորների միջնորդությամբ:
          </p>
          <p>
            Հաշվի Օպերատորը ՀՀ Կենտրոնական Դեպոզիտարիայի հետ կնքված պայմանագրի հիման վրա միջնորդավորում է ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ծառայությունները:
          </p>
          <p>
            Evocabank-ը, որպես ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր և կարգավորվող շուկայի հաշվարկային համակարգի անդամ (ԿՇՀՍԱ), մատուցում է ռեեստրավարման և պահառության ծառայություններ՝ ապահովելով դրանց մատուցումը ինչպես Բանկի Գլխամասային գրասենյակում, այնպես էլ՝ մասնաճյուղերում:
          </p>

          {/* Links / Document downloads */}
          <div className="pt-6 space-y-4">
            <div>
              <a href="#tariffs" className="text-[#6a00d1] font-bold underline text-[17px] hover:text-[#5500a8]">
                Հայաստանի կենտրոնական դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդավորման գործունեության սակագներ
              </a>
            </div>
            <div>
              <a href="#rules" className="text-[#6a00d1] font-bold underline text-[17px] hover:text-[#5500a8]">
                Հայաստանի կենտրոնական դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդավորման գործունեության կանոններ
              </a>
            </div>
          </div>
        </div>

        {/* 3. News Section */}
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
                <div className="h-[260px] w-full overflow-hidden bg-[#f0f0f0]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
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