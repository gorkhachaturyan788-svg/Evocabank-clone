import React from "react";

export default function EvocaSalary() {
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
              EVOCA ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ ՆԱԽԱԳԻԾ
            </h1>
            <p className="mt-6 text-[16px] leading-[1.7] text-[#4a4a4c] md:text-[18px]">
              Քո աշխատավարձը կարող է քեզ տալ շատ ավելին:
              Պարզապես պետք է ընտրել Evocabank-ը:
            </p>
          </div>

          <div className="w-full max-w-[600px] overflow-hidden rounded-[20px] bg-[#6a00d1] p-4 md:p-8 flex items-center justify-center">
            <img
              src="https://www.evoca.am/images-cache/menu/1/17738355890361/780x585.png"
              alt="Evoca Աշխատավարձային Նախագիծ"
              className="h-auto w-full object-contain rounded-[12px]"
            />
          </div>
        </div>
      </section>

      {/* 2. Main Content & Benefits List */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 lg:px-16 pb-20">
        <div className="max-w-[950px] space-y-10 text-[16px] leading-[1.8] text-[#333]">
          <p>
            Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց աշխատավարձը քարտին ստանալուց բացի, ցանկանում են նաև ստանալ{" "}
            <strong className="text-[#6a00d1]">նոր հնարավորություններ ու առավելություններ</strong>:
          </p>

          {/* Section 1: Mastercard Gold */}
          <div className="space-y-4">
            <h3 className="text-[18px] font-bold text-[#6a00d1]">
              Բեր աշխատավարձդ Evoca, Տար անվճար <a href="#mastercard" className="underline hover:text-[#5500a8]">Mastercard Gold</a>
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Պրեմիում դասի քարտ</li>
              <li>Հասանելի ամբողջ աշխարհում</li>
              <li>Գումարի անվտանգության բարձր մակարդակ</li>
              <li>
                Դրական մնացորդի նկատմամբ <strong className="text-[#6a00d1]">2% տարեկան տոկոսադրույք</strong>
              </li>
            </ul>
          </div>

          {/* Section 2: Evoca Travel Card */}
          <div className="space-y-4">
            <h3 className="text-[18px] font-bold text-[#6a00d1]">
              Բեր աշխատավարձդ Evoca, Տար 50% զեղչով <a href="#travel" className="underline hover:text-[#5500a8]">Evoca Travel Card</a>
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Մինչև <strong className="text-[#6a00d1]">1.5% cashback</strong> արտասահմանում իրականացրած վճարումների համար
              </li>
              <li>
                Անվճար <strong className="text-[#6a00d1]">6 մուտք</strong> Lounge Key սրահներ քեզ և հյուրերիդ համար
              </li>
              <li>
                Անվճար <strong className="text-[#6a00d1]">6 անգամ</strong> Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար
              </li>
              <li>Այլ ճամփորդական առավելություններ</li>
            </ul>
          </div>

          {/* Section 3: Benefits */}
          <div className="space-y-4">
            <h3 className="text-[18px] font-bold text-[#6a00d1]">
              Բեր աշխատավարձդ Evoca Տար մի շարք <a href="#benefits" className="underline hover:text-[#5500a8]">Բենեֆիթներ</a>
            </h3>
            <p>
              Դառնալով Evoca քարտապան` կունենաս հնարավորություն օգտվելու <strong className="text-[#6a00d1]">Evoca Benefits</strong> նախագծից և մեր 100-ից ավել գործընկերների մոտ կստանաս`
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Մինչև <strong className="text-[#6a00d1]">25% զեղչ</strong>
              </li>
              <li>
                Մինչև <strong className="text-[#6a00d1]">25% cashback</strong>
              </li>
              <li>Նվեր քարտեր</li>
            </ul>
          </div>

          {/* Section 4: Loans */}
          <div className="space-y-6">
            <h3 className="text-[18px] font-bold text-[#6a00d1]">
              Բեր աշխատավարձդ Evoca, Տար ավելի ցածր տոկոսադրույքով վարկեր
            </h3>

            {/* Sub Loan 1 */}
            <div className="space-y-2 pl-2">
              <h4 className="text-[16px] font-bold text-[#6a00d1] underline">
                Օվերդրաֆտ կամ Մարման գրաֆիկով վարկ
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Մինչև աշխատավարձի <strong className="text-[#6a00d1]">15-ապատիկի չափով</strong>
                </li>
                <li>
                  Մինչև <strong className="text-[#6a00d1]">10 մլն դրամ</strong> գումար
                </li>
                <li>
                  Մինչև <strong className="text-[#6a00d1]">60 ամիս</strong> մարման ժամկետ
                </li>
              </ul>
            </div>

            {/* Sub Loan 2 */}
            <div className="space-y-2 pl-2">
              <h4 className="text-[16px] font-bold text-[#6a00d1] underline">
                Ավտովարկ
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#6a00d1]">0.5-ով</strong> ցածր տոկոսադրույք
                </li>
                <li>
                  Մինչև <strong className="text-[#6a00d1]">50 մլն դրամ</strong> գումար
                </li>
                <li>
                  Մինչև <strong className="text-[#6a00d1]">84 ամիս</strong> մարման ժամկետ
                </li>
                <li>Նախընտրած մեքենայի ձեռքբերում` ինչպես առաջնային, այնպես էլ երկրորդային շուկայից</li>
              </ul>
            </div>

            {/* Sub Loan 3 */}
            <div className="space-y-2 pl-2">
              <h4 className="text-[16px] font-bold text-[#6a00d1] underline">
                Անշարժ գույքի գրավով սպառողական վարկ
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#6a00d1]">0.5-ով</strong> ցածր տոկոսադրույք
                </li>
                <li>
                  Մինչև <strong className="text-[#6a00d1]">100 մլն դրամ</strong> գումար
                </li>
                <li>
                  Մինչև <strong className="text-[#6a00d1]">120 ամիս</strong> մարման ժամկետ
                </li>
              </ul>
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