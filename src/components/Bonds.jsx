import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Bonds() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Պարտատոմսերի թողարկում",
      content: (
        <div className="space-y-6">
          <h4 className="text-[18px] font-bold text-[#6a00d1] text-center">ԹՈՂԱՐԿՎԱԾ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ</h4>
          
          {/* Table */}
          <div className="overflow-x-auto border border-[#e6e6e6] rounded-[12px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#e6e6e6] bg-[#faf8fc]">
                  <th className="p-4 font-bold text-[#1d1d1f] w-1/3 border-r border-[#e6e6e6]">Դաս</th>
                  <th className="p-4 font-bold text-[#6a00d1] w-1/3 border-r border-[#e6e6e6]">Անվանական արժեկտրոնային</th>
                  <th className="p-4 font-bold text-[#6a00d1] w-1/3">Անվանական արժեկտրոնային</th>
                </tr>
              </thead>
              <tbody className="text-[15px] text-[#333]">
                <tr className="border-b border-[#e6e6e6]">
                  <td className="p-4 font-semibold border-r border-[#e6e6e6]">Անվանական արժեք</td>
                  <td className="p-4 border-r border-[#e6e6e6]">10,000 ՀՀ դրամ</td>
                  <td className="p-4">100 ԱՄՆ դոլար</td>
                </tr>
                <tr className="border-b border-[#e6e6e6]">
                  <td className="p-4 font-semibold border-r border-[#e6e6e6]">Ընդհանուր ծավալ</td>
                  <td className="p-4 border-r border-[#e6e6e6]">3,000,000,000 ՀՀ դրամ</td>
                  <td className="p-4">15,000,000 ԱՄՆ դոլար</td>
                </tr>
                <tr className="border-b border-[#e6e6e6]">
                  <td className="p-4 font-semibold border-r border-[#e6e6e6]">Թողարկվող պարտատոմսերի քանակ</td>
                  <td className="p-4 border-r border-[#e6e6e6]">300,000 հատ</td>
                  <td className="p-4">150,000 հատ</td>
                </tr>
                <tr className="border-b border-[#e6e6e6]">
                  <td className="p-4 font-semibold border-r border-[#e6e6e6]">Շրջանառության ժամկետ</td>
                  <td className="p-4 border-r border-[#e6e6e6]">36 ամիս</td>
                  <td className="p-4">36 ամիս</td>
                </tr>
                <tr className="border-b border-[#e6e6e6]">
                  <td className="p-4 font-semibold border-r border-[#e6e6e6]">Արժեկտրոնային տարեկան տոկոսադրույք</td>
                  <td className="p-4 border-r border-[#e6e6e6]">10%</td>
                  <td className="p-4">5%</td>
                </tr>
                <tr className="border-b border-[#e6e6e6]">
                  <td className="p-4 font-semibold border-r border-[#e6e6e6]">Արժեկտրոնների վճարման պարբերականություն</td>
                  <td className="p-4 border-r border-[#e6e6e6]">Եռամսյակային</td>
                  <td className="p-4">Եռամսյակային</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold border-r border-[#e6e6e6]">Տեղաբաշխող</td>
                  <td className="p-4" colSpan="2">«Էվոկաբանկ» ԲԸ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[15px] text-[#4a4a4c]">
            Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 03.07.2024թ-ի թիվ 1/254Ա որոշմամբ:
          </p>

          {/* Document Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="border border-[#dcd6f7] rounded-[16px] p-6 text-center bg-[#faf8fc] hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-between">
              <div>
                <span className="text-[15px] font-bold text-[#6a00d1] block mb-2">ԾՐԱԳՐԱՅԻՆ ԱԶԴԱԳԻՐ</span>
                <div className="my-6 text-[#7a7d7e] flex justify-center">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M9 15l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <span className="text-[14px] font-semibold text-[#6a00d1] underline">Ներբեռնել PDF</span>
            </div>

            <div className="border border-[#dcd6f7] rounded-[16px] p-6 text-center bg-[#faf8fc] hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-between">
              <div>
                <span className="text-[15px] font-bold text-[#6a00d1] block mb-2">ՊԱՅՄԱՆՆԵՐ<br/>ՀՀ ԴՐԱՄՈՎ</span>
                <div className="my-6 text-[#7a7d7e] flex justify-center">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <text x="9" y="17" fontSize="10" fill="currentColor" stroke="none">֏</text>
                  </svg>
                </div>
              </div>
              <span className="text-[14px] font-semibold text-[#6a00d1] underline">Ներբեռնել PDF</span>
            </div>

            <div className="border border-[#dcd6f7] rounded-[16px] p-6 text-center bg-[#faf8fc] hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-between">
              <div>
                <span className="text-[15px] font-bold text-[#6a00d1] block mb-2">ՊԱՅՄԱՆՆԵՐ<br/>ԱՄՆ ԴՈԼԱՐՈՎ</span>
                <div className="my-6 text-[#7a7d7e] flex justify-center">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <text x="10" y="17" fontSize="10" fill="currentColor" stroke="none">$</text>
                  </svg>
                </div>
              </div>
              <span className="text-[14px] font-semibold text-[#6a00d1] underline">Ներբեռնել PDF</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "ՏԱՍՆԵՐԿՈՒՐՈՐԴ ԵՒ ՏԱՍՆԵՐԵՔԵՐՈՐԴ",
      content: (
        <div className="space-y-4">
          <p className="text-[15px] leading-[1.8] text-[#4a4a4c]">
            Տասներկուերորդ (ՀՀ դրամով) և տասներեքերորդ (ԱՄՆ դոլարով) թողարկումների շրջանակներում տեղաբաշխված պարտատոմսերի արժեկտրոնային վճարումներն իրականացվում են եռամսյակային պարբերականությամբ:
          </p>
          <div className="flex gap-4 pt-2">
            <span className="text-[14px] font-semibold text-[#6a00d1] underline cursor-pointer">
              📄 Տասներկուերորդ թողարկման վերջնական պայմաններ (PDF)
            </span>
            <span className="text-[14px] font-semibold text-[#6a00d1] underline cursor-pointer">
              📄 Տասներեքերորդ թողարկման վերջնական պայմաններ (PDF)
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "ՏԱՍԵՐՈՐԴ ԵՒ ՏԱՍՆՄԵԿԵՐՈՐԴ",
      content: (
        <div className="space-y-4">
          <p className="text-[15px] leading-[1.8] text-[#4a4a4c]">
            10-րդ և 11-րդ թողարկման պարտատոմսերը հաջողությամբ տեղաբաշխվել են և ցուցակված են Հայաստանի ֆոնդային բորսայում (AMX): Պարտատոմսերն ունեն բարձր իրացվելիություն երկրորդային շուկայում:
          </p>
          <div className="flex gap-4 pt-2">
            <span className="text-[14px] font-semibold text-[#6a00d1] underline cursor-pointer">
              📄 10-րդ թողարկման ազդագիր և պայմաններ (PDF)
            </span>
            <span className="text-[14px] font-semibold text-[#6a00d1] underline cursor-pointer">
              📄 11-րդ թողարկման ազդագիր և պայմաններ (PDF)
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "ՅՈԹԵՐՈՐԴ, ՈՒԹԵՐՈՐԴ ԵՒ ԻՆՆԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      content: (
        <div className="space-y-4">
          <p className="text-[15px] leading-[1.8] text-[#4a4a4c]">
            7-րդ, 8-րդ և 9-րդ թողարկումների պարտատոմսերի շրջանառության ժամկետները, տոկոսադրույքները և արժեկտրոնների վճարման ժամանակացույցերը ներկայացված են համապատասխան փաստաթղթերում:
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <span className="text-[14px] font-semibold text-[#6a00d1] underline cursor-pointer">
              📄 7-րդ թողարկման պայմաններ (PDF)
            </span>
            <span className="text-[14px] font-semibold text-[#6a00d1] underline cursor-pointer">
              📄 8-րդ թողարկման պայմաններ (PDF)
            </span>
            <span className="text-[14px] font-semibold text-[#6a00d1] underline cursor-pointer">
              📄 9-րդ թողարկման պայմաններ (PDF)
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "ՀԻՆԳԵՐՈՐԴ ԵՒ ՎԵՑԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      content: (
        <div className="space-y-4">
          <p className="text-[15px] leading-[1.8] text-[#4a4a4c]">
            5-րդ և 6-րդ թողարկումների պարտատոմսերի մարումներն իրականացվել են սահմանված ժամկետներում: Բոլոր արժեկտրոնային վճարումները կատարվել են ամբողջությամբ:
          </p>
          <span className="text-[14px] font-semibold text-[#6a00d1] underline cursor-pointer block pt-2">
            📄 5-րդ և 6-րդ թողարկումների արխիվային տվյալներ (PDF)
          </span>
        </div>
      ),
    },
    {
      title: "ԵՐՐՈՐԴ ԵՒ ՉՈՐՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      content: (
        <div className="space-y-4">
          <p className="text-[15px] leading-[1.8] text-[#4a4a4c]">
            3-րդ և 4-րդ թողարկման անվանական արժեկտրոնային պարտատոմսերի տեղաբաշխման և շրջանառության վերաբերյալ տեղեկատվությունը պահպանվում է Բանկի արխիվում:
          </p>
          <span className="text-[14px] font-semibold text-[#6a00d1] underline cursor-pointer block pt-2">
            📄 3-րդ և 4-րդ թողարկումների փաստաթղթեր (PDF)
          </span>
        </div>
      ),
    },
    {
      title: "ԱՌԱՋԻՆ ԵՒ ԵՐԿՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      content: (
        <div className="space-y-4">
          <p className="text-[15px] leading-[1.8] text-[#4a4a4c]">
            Evocabank-ի առաջին պատմական թողարկումները, որոնք հաջողությամբ մարվել են: Այս թողարկումներով հիմք դրվեց բանկի պարտատոմսերի ակտիվ շուկային:
          </p>
          <span className="text-[14px] font-semibold text-[#6a00d1] underline cursor-pointer block pt-2">
            📄 Առաջին և երկրորդ թողարկման տեղեկանք (PDF)
          </span>
        </div>
      ),
    },
    {
      title: "Հաճախ տրվող հարցեր պարտատոմսերի մասին",
      content: (
        <div className="space-y-6 text-[15px] leading-[1.8] text-[#4a4a4c]">
          <div>
            <h5 className="font-bold text-[#1d1d1f] mb-1">Ի՞նչ է բանկային պարտատոմսը:</h5>
            <p>
              Պարտատոմսը պարտքային արժեթուղթ է, որը հաստատում է դրա տիրապետողի իրավունքը՝ սահմանված ժամկետում ստանալու պարտատոմսի անվանական արժեքը և արժեկտրոնային եկամուտը:
            </p>
          </div>
          <div>
            <h5 className="font-bold text-[#1d1d1f] mb-1">Ինչպե՞ս են վճարվում տոկոսագումարները:</h5>
            <p>
              Տոկոսագումարները (արժեկտրոնները) վճարվում են եռամսյակային պարբերականությամբ՝ փոխանցվելով ներդրողի բանկային հաշվին:
            </p>
          </div>
          <div>
            <h5 className="font-bold text-[#1d1d1f] mb-1">Արդյո՞ք պարտատոմսերում ներդրված միջոցները երաշխավորված են:</h5>
            <p>
              Այո, ֆիզիկական անձանց պատկանող անվանական պարտատոմսերով ներգրավված միջոցները համարվում են երաշխավորված բանկային ավանդ և երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամ»-ի կողմից:
            </p>
          </div>
          <div>
            <h5 className="font-bold text-[#1d1d1f] mb-1">Կարո՞ղ եմ վաճառել պարտատոմսը մինչև մարման ժամկետը:</h5>
            <p>
              Այո, քանի որ պարտատոմսերը ցուցակված են Հայաստանի ֆոնդային բորսայում, դրանք կարող եք վաճառել երկրորդային շուկայում ցանկացած աշխատանքային օր:
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f]">
      {/* 1. Hero Section */}
      <section className="w-full bg-[#f8f5fc] py-12 md:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-10 px-6 lg:flex-row lg:px-16">
          <div className="max-w-[650px]">
            <h1 className="text-[32px] font-bold text-[#1d1d1f] md:text-[44px] leading-tight">
              Պարտատոմսեր
            </h1>
            <p className="mt-6 text-[16px] leading-[1.7] text-[#4a4a4c] md:text-[18px]">
              Evocabank-ը հնարավորություն է տալիս ձեռք բերել պարտատոմսեր և ստանալ բարձր եկամուտներ: Մենք ցանկանում ենք դառնալ Ձեր բարեկեցիկ ապագայի մի մասնիկը:
            </p>
          </div>

          <div className="w-full max-w-[600px] overflow-hidden rounded-[20px] bg-[#eadef7] p-4 md:p-8 flex items-center justify-center">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg"
              alt="Պարտատոմսեր"
              className="h-auto w-full object-contain rounded-[12px]"
            />
          </div>
        </div>
      </section>

      {/* 2. Main Content & Details Section */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 lg:px-16 pb-20">
        <div className="max-w-[900px] space-y-6">
          <p className="text-[16px] leading-[1.8] text-[#333] md:text-[18px]">
            Առաջին անգամ հայկական ֆինանսական համակարգում <span className="text-[#6a00d1] font-bold">Evocabank</span>-ը, որպես նորարար և ժամանակակից Բանկ, իրականացրել է իր կողմից թողարկված պարտատոմսերի օնլայն տեղաբաշխում <span className="text-[#6a00d1] font-bold">EvocaTOUCH</span> հավելվածի միջոցով:
          </p>

          <div>
            <h3 className="text-[20px] font-bold text-[#6a00d1] md:text-[22px] mb-3">
              Պարտատոմսերը
            </h3>
            <p className="text-[16px] leading-[1.8] text-[#333]">
              պահանջված և բարձր եկամտաբեր ֆինանսական գործիքներ են: Դրանք ապահով են և ունեն մի շարք առավելություններ:
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-4 text-[16px] leading-[1.8] text-[#333]">
            <li>
              Անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ և ՀՀ օրենսդրությամբ սահմանված չափերով երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամ»-ի կողմից:
            </li>
            <li>
              ՀՀ Ֆոնդային Բորսայում ցուցակված պարտատոմսերից ստացված եկամուտները ազատվում են եկամտային հարկից ու ոչ ռեզիդենտի շահութահարկից՝ ապահովելով ավելի բարձր եկամտաբերություն:
            </li>
          </ul>
        </div>

        {/* 3. Accordions Section */}
        <div className="mt-16">
          <h2 className="text-[24px] font-bold text-[#1d1d1f] md:text-[28px] mb-8">
            Պարտատոմսերի թողարկում և այլ տեղեկատվություն
          </h2>

          <div className="space-y-4">
            {accordionItems.map((item, index) => {
              const isOpen = openAccordion === index;
              return (
                <div key={index} className="rounded-[16px] border border-[#dcd6f7] bg-white shadow-sm overflow-hidden transition-all">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-bold text-[#1d1d1f] hover:bg-[#faf8fc]"
                  >
                    <span className="text-[17px] text-[#6a00d1]">{item.title}</span>
                    <span className={`transform transition-transform duration-200 text-[#6a00d1] ${isOpen ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-4 border-t border-[#f0ebfb]">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}