import React from "react";
import { useCartStore } from "../useCartStore";

const businessLoans = [
  {
    id: "b-loan-1",
    title: "Արագ բիզնես վարկ/վարկային գիծ",
    description: "Արագ ֆինանսավորում Ձեր բիզնեսի զարգացման համար միայն երաշխավորությամբ և ցածր տոկոսադրույքով:",
    image: "https://www.evoca.am/images-cache/loans/1/17721008940374/415x261.png",
    details: [
      { label: "Ժամկետ", value: "Մինչև 60 ամիս" },
      { label: "Սահմանաչափ", value: "Մինչև 30 մլն ֏" },
      { label: "Տոկոսադրույք", value: "9.22%-17.89%" },
    ],
  },
  {
    id: "b-loan-2",
    title: "Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ",
    description: "Evocabank-ը տրամադրում է բիզնես վարկ՝ տեքստիլ հումքի ներմուծման համար: Շտապե՞ք դիմել, զարգացնել Ձեր բիզնեսը...",
    image: "https://www.evoca.am/images-cache/loans/1/17749381045652/415x261.png",
    details: [
      { label: "Ժամկետ", value: "Մինչև 36 ամիս" },
      { label: "Սահմանաչափ", value: "Մինչև 500 մլն ֏" },
      { label: "Տոկոսադրույք", value: "8% (սուբսիդավորման չափ)" },
    ],
  },
  {
    id: "b-loan-3",
    title: "Բիզնես վարկերի վերաֆինանսավորում",
    description: "Տեղափոխե՞ք Ձեր բիզնես վարկը Evocabank, ստացեք վարկի վերաֆինանսավորում և լրացուցիչ ֆինանսավորում...",
    image: "https://www.evoca.am/images-cache/loans/1/17822121684763/415x261.png",
    details: [
      { label: "Վերաֆինանսավորում", value: "36-120 ամիս" },
      { label: "Գումար", value: "15մլն-500մլն ֏" },
      { label: "Տոկոսադրույք", value: "ՀՀ դրամ՝ 12%, ԱՄՆ դոլար՝ 9%" },
    ],
  },
  {
    id: "b-loan-4",
    title: "Պարտատոմսերով ապահովված վարկ",
    description: "Ստացեք վարկ՝ Բանկի պարտատոմսերի գրավով և շարունակեք զարգացնել Ձեր բիզնեսը:",
    image: "https://www.evoca.am/images-cache/loans/1/17848707149538/415x261.png",
    details: [{ label: "Ապահովվածություն", value: "Բանկի պարտատոմսեր" }],
  },
  {
    id: "b-loan-5",
    title: "Խոշոր և ՓՄՁ բիզնես վարկ",
    description: "Զարգացրե՛ք Ձեր բիզնեսը Evocabank-ի հետ փոխշահավետ պայմաններով:",
    image: "https://www.evoca.am/images-cache/loans/1/16148637167789/415x261.jpg",
    details: [
      { label: "Սահմանաչափ", value: "Մինչև 4 մլրդ ֏" },
      { label: "Ժամկետ", value: "Մինչև 180 ամիս" },
      { label: "Տոկոսադրույք", value: "Սկսած 8.2%-ից" },
    ],
  },
  {
    id: "b-loan-6",
    title: "Evoca GO",
    description: "Օգտվե՛ք Եվրոպական Ներդրումային Բանկի (ԵՆԲ) կողմից ֆինանսավորվող ծրագրի շրջանակներում վարկավորման փոխշահավետ հնարավորությունից:",
    image: "https://www.evoca.am/images-cache/loans/1/1614870243661/415x261.jpg",
    details: [
      { label: "Սահմանաչափ", value: "Մինչև 500 մլն ֏" },
      { label: "Ժամկետ", value: "Մինչև 90 ամիս" },
      { label: "Տոկոսադրույք", value: "10.5%" },
    ],
  },
  {
    id: "b-loan-7",
    title: "Վարկեր ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր",
    description: "Եթե Դուք ցանկանում եք ձեռք բերել ԵԱ սարքավորումներ և մեքենաներ կամ իրականացնել այլ էներգաարդյունավետ ներդրումներ...",
    image: "https://www.evoca.am/images-cache/loans/1/16148681592638/415x261.jpg",
    details: [
      { label: "Սահմանաչափ", value: "Մինչև 500 մլն ֏" },
      { label: "Ժամկետ", value: "Մինչև 5 տարի" },
      { label: "Տոկոսադրույք", value: "Սկսած 9%-ից" },
    ],
  },
  {
    id: "b-loan-8",
    title: "Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ",
    description: "Մի' օգտագործեք կուտակված խնայողությունները. Ձեր ֆինանսական խնդիրները կարգավորելու համար մենք ավելի շահավետ տարբերակ ունենք:",
    image: "https://www.evoca.am/images-cache/loans/1/16142658362638/415x261.jpg",
    details: [
      { label: "Ավանդի գրավ", value: "Մինչև 95%" },
      { label: "Պարտատոմսի գրավ", value: "Մինչև 80%" },
    ],
  },
  {
    id: "b-loan-9",
    title: "KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում",
    description: "Եթե ցանկանում եք իրականացնել էներգաարդյունավետ և էներգախնայող ներդրումներ՝ բիզնեսի ծախսերը կրճատելու համար...",
    image: "https://www.evoca.am/images-cache/loans/1/16148706367372/415x261.jpg",
    details: [
      { label: "Առանց գրավի", value: "Մինչև 10 մլն ֏" },
      { label: "Ժամկետ", value: "Մինչև 120 ամիս" },
    ],
  },
  {
    id: "b-loan-10",
    title: "Պարզ բիզնես վարկ",
    description: "Ստացե'ք «Պարզ բիզնես վարկ» անշարժ գույքի ապահովմամբ և ցածր տարեկան տոկոսադրույքով:",
    image: "https://www.evoca.am/images-cache/loans/1/1614869229831/415x261.jpg",
    details: [
      { label: "Սահմանաչափ", value: "Մինչև 50 մլն ֏" },
      { label: "Ժամկետ", value: "Մինչև 60 ամիս" },
      { label: "Տոկոսադրույք", value: "Սկսած 7.5%-ից" },
    ],
  },
  {
    id: "b-loan-11",
    title: "Հաշվի վարկավորում",
    description: "Հանդիսանո՞ւմ եք Evocabank-ի հաշվետեր հաճախորդ առնվազն 1 տարի, ուրեմն Evocabank-ը կօգնի հոգալ Ձեր բիզնեսի ընթացիկ ծախսերը:",
    image: "https://www.evoca.am/images-cache/loans/1/16148678149192/415x261.jpg",
    details: [
      { label: "Առավելագույնը", value: "500 մլն ֏" },
      { label: "Ժամկետ", value: "Մինչև 12 ամիս" },
      { label: "Տոկոսադրույք", value: "Սկսած 7%-ից" },
    ],
  },
  {
    id: "b-loan-12",
    title: "Վարկային գիծ",
    description: "Եթե Դուք ունեք կազմակերպություն կամ անհատ ձեռնարկատեր եք և ցանկանում եք մշտապես ունենալ հասանելի վարկային միջոցներ...",
    image: "https://www.evoca.am/images-cache/loans/1/16148665659945/415x261.jpg",
    details: [
      { label: "Սահմանաչափ", value: "Մինչև 1.5 մլրդ ֏" },
      { label: "Ժամկետ", value: "Մինչև 5 տարի" },
      { label: "Տոկոսադրույք", value: "Սկսած 6%-ից" },
    ],
  },
  {
    id: "b-loan-13",
    title: "Արտադրողականության խթանման ծրագրի ներքո վարկ (գործում է մինչև 31.12.2026թ.)",
    description: "Մատչելի ֆինանսավորում Ձեր բիզնեսը արդիականացնելու և արտադրողականությունը խթանելու նպատակով:",
    image: "https://www.evoca.am/images-cache/loans/1/16148696068365/415x261.jpg",
    details: [
      { label: "Սահմանաչափ", value: "Մինչև 1 մլրդ ֏" },
      { label: "Ժամկետ", value: "Մինչև 120 ամիս" },
      { label: "Տոկոսադրույք", value: "Սկսած 6%" },
    ],
  },
  {
    id: "b-loan-14",
    title: "KFW բանկի կողմից ՄՓՄՁ-ների ֆինանսավորում",
    description: "Կատարե'ք Ձեր կապիտալ ներդրումները և իրականացրե'ք բիզնես գործունեության նպատակները Evocabank-ի հետ:",
    image: "https://www.evoca.am/images-cache/loans/1/16394873850552/415x261.png",
    details: [
      { label: "Սահմանաչափ", value: "Մինչև 160 մլն ֏" },
      { label: "Ժամկետ", value: "Մինչև 60 ամիս" },
      { label: "Տոկոսադրույք", value: "Սկսած 9.5%-ից" },
    ],
  },
];

export default function BusinessLoans() {
  const cartItems = useCartStore((state) => state.cartItems);
  const toggleCartItem = useCartStore((state) => state.toggleCartItem);

  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f] py-12 px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-[32px] md:text-[40px] font-bold text-[#1d1d1f] mb-10">
          Բիզնես վարկեր
        </h1>

        <div className="space-y-8">
          {businessLoans.map((loan) => {
            const isInCart = cartItems.some((i) => i.id === loan.id);

            return (
              <div
                key={loan.id}
                className="relative flex flex-col lg:flex-row items-center justify-between border border-[#e6e6e6] rounded-[24px] p-6 lg:p-8 bg-[#faf8fc] hover:shadow-lg transition-all"
              >
                {/* Սրտիկի կոճակ */}
                <button
                  type="button"
                  onClick={() => toggleCartItem(loan)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer transition-transform active:scale-95"
                  title={isInCart ? "Հեռացնել զամբյուղից" : "Ավելացնել զամբյուղում"}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill={isInCart ? "#ef4444" : "none"}
                    stroke={isInCart ? "#ef4444" : "#9ca3af"}
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                {/* Նկար */}
                <div className="w-full lg:w-[350px] h-[220px] bg-white rounded-[16px] overflow-hidden flex items-center justify-center p-4 mb-6 lg:mb-0 shrink-0 border border-[#eee]">
                  <img
                    src={loan.image}
                    alt={loan.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Բովանդակություն */}
                <div className="flex-grow lg:px-8 space-y-4">
                  <h3 className="text-[22px] font-bold text-[#1d1d1f]">{loan.title}</h3>
                  <p className="text-[15px] text-[#4a4a4c] leading-relaxed max-w-[800px]">
                    {loan.description}
                  </p>

                  {/* Ցուցանիշներ */}
                  <div className="flex flex-wrap gap-8 pt-2">
                    {loan.details.map((det, idx) => (
                      <div key={idx}>
                        <span className="text-[20px] lg:text-[24px] font-extrabold text-[#6a00d1] block">
                          {det.value}
                        </span>
                        <span className="text-[13px] text-[#7a7d7e] font-medium">
                          {det.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Մանրամասն կոճակ */}
                <div className="mt-6 lg:mt-0 shrink-0">
                  <button
                    type="button"
                    className="px-6 py-3 bg-[#f0eaf8] text-[#6a00d1] font-bold rounded-[12px] hover:bg-[#6a00d1] hover:text-white transition-colors"
                  >
                    Մանրամասն &gt;
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}