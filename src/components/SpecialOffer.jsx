import React, { useState } from "react";

export default function SpecialOffer() {
  const [openSection1, setOpenSection1] = useState(true);
  const [openSection2, setOpenSection2] = useState(false);

  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f] pb-16">
      {/* Ձախ կողմի սոց․ կայքերի կոճակներ */}
      <div className="fixed left-6 top-1/3 hidden flex-col gap-2 rounded-lg border border-[#e6e6e6] bg-white p-2 shadow-sm xl:flex z-10">
        <button type="button" className="p-1 text-gray-500 hover:text-[#6a00d1]">f</button>
        <button type="button" className="p-1 text-gray-500 hover:text-[#6a00d1]">in</button>
        <button type="button" className="p-1 text-gray-500 hover:text-[#6a00d1]">📷</button>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 pt-6 sm:px-6 xl:px-8">
        {/* Էջի Վերնագիր */}
        <h1 className="mb-8 text-[32px] font-bold text-[#1d1d1f] xl:text-[40px]">
          ՀԱՏՈՒԿ ԱՌԱՋԱՐԿ
        </h1>

        <div className="space-y-6">
          {/* ==================== ACCORDION 1: Լոջիք Գրուպ ՍՊԸ ==================== */}
          <div className="rounded-[20px] border border-[#a855f7] bg-white p-6 shadow-sm">
            <button
              type="button"
              onClick={() => setOpenSection1(!openSection1)}
              className="flex w-full cursor-pointer items-center justify-between text-left"
            >
              <h2 className="text-[18px] font-bold text-[#1d1d1f] xl:text-[20px]">
                Լոջիք Գրուպ ՍՊԸ
              </h2>
              <span className={`text-[18px] font-bold text-[#6a00d1] transition-transform duration-200 ${openSection1 ? "rotate-180" : ""}`}>
                ▲
              </span>
            </button>

            {openSection1 && (
              <div className="mt-6 space-y-6 pt-4 border-t border-[#f0e6fc]">
                <p className="text-[15px] leading-relaxed text-[#333]">
                  Արտադրողականության խթանման նպատակային ծրագրից չօգտվող հաճախորդների համար <strong className="text-[#6a00d1]">Evocabank</strong>-ը ներկայացնում է նոր առաջարկ, ըստ որի կտրամադրվեն լիզինգներ հետևյալ պայմաններով`
                </p>

                {/* Աղյուսակ */}
                <div className="overflow-x-auto rounded-xl border border-[#f4ecfb]">
                  <table className="w-full text-left text-[14px] sm:text-[15px] border-collapse bg-white">
                    <thead>
                      <tr className="border-b border-[#f4ecfb] bg-[#fbf9fe]">
                        <th className="p-4 font-bold text-[#1d1d1f]">AMD</th>
                        <th className="p-4 font-bold text-[#1d1d1f]">USD</th>
                        <th className="p-4 font-bold text-[#1d1d1f]">EUR</th>
                        <th className="p-4 font-bold text-[#1d1d1f]">Ժամկետ ամիս</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#f4ecfb]">
                        <td className="p-4 text-[#333]">5.0%</td>
                        <td className="p-4 text-[#333]">0.0%</td>
                        <td className="p-4 text-[#333]">0.0%</td>
                        <td className="p-4 text-[#333]">12</td>
                      </tr>
                      <tr className="border-b border-[#f4ecfb]">
                        <td className="p-4 text-[#333]">8.5%</td>
                        <td className="p-4 text-[#333]">5.0%</td>
                        <td className="p-4 text-[#333]">4.0%</td>
                        <td className="p-4 text-[#333]">24</td>
                      </tr>
                      <tr className="border-b border-[#f4ecfb]">
                        <td className="p-4 text-[#333]">10.0%</td>
                        <td className="p-4 text-[#333]">6.0%</td>
                        <td className="p-4 text-[#333]">5.0%</td>
                        <td className="p-4 text-[#333]">36</td>
                      </tr>
                      <tr className="border-b border-[#f4ecfb]">
                        <td className="p-4 text-[#333]">10.75%</td>
                        <td className="p-4 text-[#333]">7.00%</td>
                        <td className="p-4 text-[#333]">6.0%</td>
                        <td className="p-4 text-[#333]">48</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#333]">11.50%</td>
                        <td className="p-4 text-[#333]">7.50%</td>
                        <td className="p-4 text-[#333]">7.0%</td>
                        <td className="p-4 text-[#333]">60</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* ==================== ACCORDION 2: Ավտո Գելլերի ՓԲԸ ==================== */}
          <div className="rounded-[20px] border border-[#a855f7] bg-white p-6 shadow-sm">
            <button
              type="button"
              onClick={() => setOpenSection2(!openSection2)}
              className="flex w-full cursor-pointer items-center justify-between text-left"
            >
              <h2 className="text-[18px] font-bold text-[#1d1d1f] xl:text-[20px]">
                Ավտո Գելլերի ՓԲԸ
              </h2>
              <span className={`text-[18px] font-bold text-[#6a00d1] transition-transform duration-200 ${openSection2 ? "rotate-180" : ""}`}>
                ▲
              </span>
            </button>

            {openSection2 && (
              <div className="mt-6 space-y-6 pt-4 border-t border-[#f0e6fc]">
                <p className="text-[15px] leading-relaxed text-[#333]">
                  Արտադրողականության խթանման նպատակային ծրագրի շրջանակում` <strong className="text-[#6a00d1]">Evocabank</strong>-ը և իր գործընկեր <strong className="text-[#1d1d1f]">«Ավտո Գելլերի» ՓԲԸ</strong>-ն համատեղ ներկայացնում են նոր առաջարկ, ըստ որի կտրամադրվեն լիզինգներ`
                </p>

                <ul className="space-y-3 text-[15px] text-[#333]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                    <span>0.1% տարեկան տոկոսադրույքով</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                    <span>մինչև 36 ամիս մարման ժամկետով</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                    <span>5% կանխավճարով</span>
                  </li>
                </ul>

                <p className="text-[15px] font-semibold text-[#1d1d1f]">
                  Առաջարկը գործում է միայն բեռնատար ավտոմեքենաների համար:
                </p>

                <p className="text-[15px] leading-relaxed text-[#333]">
                  Շտապիր օգտվել այս բացառիկ առաջարկից և ձեռք բերել ամենահարմար ու մատչելի պայմաններով լիզինգը հենց այսօր:
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

   
    </div>
  );
}