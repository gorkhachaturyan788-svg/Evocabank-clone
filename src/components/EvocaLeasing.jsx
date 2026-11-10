import React, { useState } from "react";

export default function EvocaLeasing() {
  const [openSection1, setOpenSection1] = useState(true);
  const [openSection2, setOpenSection2] = useState(false);
  const [openSection3, setOpenSection3] = useState(false);
  const [openSection4, setOpenSection4] = useState(false); // <--- Նոր ակորդեոն (Տրանսպորտային միջոցի լիզինգ)

  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f] pb-16">
      {/* Social Media Links Floating Left Bar */}
      <div className="fixed left-6 top-1/3 hidden flex-col gap-2 rounded-lg border border-[#e6e6e6] bg-white p-2 shadow-sm xl:flex z-10">
        <button type="button" className="p-1 text-gray-500 hover:text-[#6a00d1]">f</button>
        <button type="button" className="p-1 text-gray-500 hover:text-[#6a00d1]">in</button>
        <button type="button" className="p-1 text-gray-500 hover:text-[#6a00d1]">📷</button>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 pt-6 sm:px-6 xl:px-8">
        {/* Main Title */}
        <h1 className="mb-8 text-[32px] font-bold text-[#1d1d1f] xl:text-[40px]">
          Evoca Leasing
        </h1>

        <div className="space-y-6">
          {/* ==================== ACCORDION 1 ==================== */}
          <div className="rounded-[20px] border border-[#a855f7] bg-white p-6 shadow-sm">
            <button
              type="button"
              onClick={() => setOpenSection1(!openSection1)}
              className="flex w-full cursor-pointer items-center justify-between text-left"
            >
              <h2 className="text-[20px] font-bold text-[#1d1d1f]">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>
              <span className={`text-[18px] font-bold text-[#6a00d1] transition-transform duration-200 ${openSection1 ? "rotate-180" : ""}`}>
                ▲
              </span>
            </button>

            {openSection1 && (
              <div className="mt-6 space-y-8 pt-4 border-t border-[#f0e6fc]">
                <div>
                  <h3 className="mb-4 text-[18px] font-bold text-[#1d1d1f]">Evoca Leasing</h3>
                  <p className="mb-4 text-[16px] leading-relaxed text-[#333]">
                    Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից` առաջնային և երկրորդային շուկաներից: Լիզինգի առարկա կարող են հանդիսանալ`
                  </p>
                  <ul className="space-y-2.5 text-[15px] text-[#333]">
                    <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" /><span>Արտադրական/արդյունաբերական հաստոցներ/հոսքագծեր,</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" /><span>Բեռնատար/մարդատար ավտոմեքենաներ,</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" /><span>Շինարարական տեխնիկա</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" /><span>Արևային կայաններ,</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" /><span>Բժշկական սարքավորումներ,</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" /><span>Կոմերցիոն անշարժ գույք,</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" /><span>և այլն:</span></li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-[18px] font-bold text-[#1d1d1f]">Լիզինգի առավելությունները</h3>
                  <ul className="space-y-3 text-[15px] text-[#333]">
                    <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" /><span>Առանց գրավի առկայության պրոդուկտ է,</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" /><span>Առանց նոտարական/կադաստրային ծախսերի,</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" /><span>Հնարավորություն է տալիս իրականացնել ԱԱՀ-ի հաշվանցումներ և ծախսագրումներ,</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" /><span>Լիզինգի առարկայի ձեռքբերում արտերկրից` առանց հաճախորդի մասնակցության գնման գործընթացին,</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" /><span>Ստանալ էքսպերտային գնահատում և խորհրդատվություն լիզինգային նախագծի վերաբերյալ:</span></li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-[20px] font-bold text-[#1d1d1f]">Պայմաններ և սակագներ`</h3>
                  <div className="overflow-x-auto rounded-xl border border-[#f4ecfb]">
                    <table className="w-full text-left text-[15px] border-collapse bg-white">
                      <tbody>
                        <tr className="border-b border-[#f4ecfb]"><td className="w-1/3 bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Արժույթը</td><td className="p-4 text-[#333]">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</td></tr>
                        <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Լիզինգառուները</td><td className="p-4 text-[#333]">ՀՀ ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձինք և անհատ ձեռնարկատերեր</td></tr>
                        <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Լիզինգի առարկայի ձեռքբերման հնարավորությունները</td><td className="p-4 text-[#333]">Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից` առաջնային և երկրորդային շուկաներից</td></tr>
                        <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Լիզինգի սահմանաչափերը</td><td className="p-4 text-[#333]">5,000,001-1,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ</td></tr>
                        <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Կանխավճար</td><td className="p-4 text-[#333]">Նվազագույնը` 10%</td></tr>
                        <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Մարման ժամկետը</td><td className="p-4 text-[#333]">6-72 ամիս` կախված ձեռքբերվող Լիզինգի առարկայից</td></tr>
                        <tr className="border-b border-[#f4ecfb]">
                          <td className="bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Մարման եղանակը</td>
                          <td className="p-4 text-[#333]">
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Անուիտետային</li>
                              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Զսպանակաձև</li>
                              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Պայմանագրային</li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="border-b border-[#f4ecfb]">
                          <td className="bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Տարեկան տոկոսադրույքը</td>
                          <td className="p-4 text-[#333]">
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />ՀՀ դրամ` սկսած 10.5%-ից</li>
                              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />ԱՄՆ դոլար` սկսած 8%-ից</li>
                              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Եվրո` սկսած 6%-ից</li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="border-b border-[#f4ecfb]">
                          <td className="bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Լիզինգի մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</td>
                          <td className="p-4 text-[#333]">
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6a00d1] shrink-0" />Ժամկետանց լիզինգի մայր գումարի դեպքում` օրական 0.015%-ի չափով</li>
                              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6a00d1] shrink-0" />Ժամկետանց տոկոսագումարների դեպքում` օրական 0.1%-ի չափով</li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="border-b border-[#f4ecfb]">
                          <td className="bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Ժամկետից շուտ մարելու տուգանք</td>
                          <td className="p-4 text-[#333]">
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6a00d1] shrink-0" />Մինչև պայմանագրի գործողության ժամկետի կեսը մարումների ժամանակացույցով սահմանված ամսական վարձավճարից ավելին մարելու դեպքում վճարվում է տուգանք` մարումների ժամանակացույցով սահմանված ամսական Լիզինգի մայր գումարի չափը գերազանցող գումարի 5%-ի չափով</li>
                              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6a00d1] shrink-0" />Առանձին դեպքերում Բանկի լիազոր մարմնի որոշմամբ սահմանված տուգանքի չափը կարող է փոփոխվել</li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="border-b border-[#f4ecfb]">
                          <td className="bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Ապահովվածություն</td>
                          <td className="p-4 text-[#333]">
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6a00d1] shrink-0" />Գույքի/իրավունքի գրավ` ըստ պահանջի</li>
                              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6a00d1] shrink-0" />Առանձին դեպքերում, բարձր ռիսկայնությամբ գործարքների դեպքում կարող է պահանջվել նաև այլ գրավ</li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="border-b border-[#f4ecfb]">
                          <td className="bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Գանձվող վճարներ</td>
                          <td className="p-4 text-[#333]">
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6a00d1] shrink-0" />Լիզինգային հայտի ուսումնասիրման միանվագ վճար` 20,000 ՀՀ դրամ</li>
                              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6a00d1] shrink-0" />Լիզինգի գումարից միանվագ գանձվող միջնորդավճար` 0.4-1%, ոչ ավել քան 500.000 ՀՀ դրամ</li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Սեփականության իրավունքի փոխանցման վճար` յուրաքանչյուր պայմանագրի մասով անկախ դրա գույքերի քանակից</td><td className="p-4 text-[#333]">10,000 ՀՀ դրամ</td></tr>
                        <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Լիզինգի պայմանների վերանայում</td><td className="p-4 text-[#333]">15,000 ՀՀ դրամ</td></tr>
                        <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Ենթավարձակալությամբ տրամադրելու համաձայնություն</td><td className="p-4 text-[#333]">50,000 ՀՀ դրամ</td></tr>
                        <tr><td className="bg-[#fbf9fe] p-4 font-bold text-[#1d1d1f]">Լիզինգի առարկայի տարեկան ապահովագրություն</td><td className="p-4 text-[#333]">Լիզինգի ողջ ժամկետի ընթացքում` լիզինգի մնացորդային արժեքի հիման վրա</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ==================== ACCORDION 2 ==================== */}
          <div className="rounded-[20px] border border-[#a855f7] bg-white p-6 shadow-sm">
            <button
              type="button"
              onClick={() => setOpenSection2(!openSection2)}
              className="flex w-full cursor-pointer items-center justify-between text-left"
            >
              <h2 className="text-[18px] font-bold text-[#1d1d1f] xl:text-[20px]">
                ՀՀ Կառավարության Տնտեսության Արդիականացման նպատակային ծրագրի ներքո արտադրողականության խթանմանն ուղղված լիզինգ (գործելու է մինչև 31.12.2026թ.)
              </h2>
              <span className={`ml-4 text-[18px] font-bold text-[#6a00d1] transition-transform duration-200 ${openSection2 ? "rotate-180" : ""}`}>
                ▲
              </span>
            </button>

            {openSection2 && (
              <div className="mt-6 border-t border-[#f0e6fc] pt-4">
                <div className="overflow-x-auto rounded-xl border border-[#f4ecfb]">
                  <table className="w-full text-left text-[14px] border-collapse bg-white">
                    <tbody>
                      <tr className="border-b border-[#f4ecfb]"><td className="w-12 bg-[#fbf9fe] p-3 text-center font-bold">1.</td><td className="w-1/3 bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f]">Ֆինանսավորում</td><td className="p-3 text-[#333]">Լիզինգ</td></tr>
                      <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-3 text-center font-bold">2.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f]">Արժույթ</td><td className="p-3 text-[#333]">ՀՀ դրամ, ԱՄՆ դոլար կամ Եվրո</td></tr>
                      <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-3 text-center font-bold">3.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f]">Լիզինգառու</td><td className="p-3 text-[#333]">ՀՀ ռեզիդենտ իրավաբանական անձ և անհատ ձեռնարկատեր</td></tr>
                      <tr className="border-b border-[#f4ecfb]">
                        <td className="bg-[#fbf9fe] p-3 text-center font-bold align-top">4.</td>
                        <td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f] align-top">Նպատակ</td>
                        <td className="p-3 text-[#333] space-y-3">
                          <p>Նոր (չօգտագործված) մեքենասարքավորումների գնում կամ ներմուծում, որոնք օգտագործվելու են Հայաստանի Հանրապետության տարածքում (ներառում է նաև մեքենասարքավորումների բաղկացուցիչ մասերը):</p>
                          <p>Կապիտալ շինարարության իրականացում` մեքենասարքավորման մոնտաժման և սպասարկման դեպքում, եթե կապալառուն ԱԱՀ հարկ վճարող է և տնտեսվարողը մեքենասարքավորումը ձեռք է բերել սույն Ծրագրի շրջանակում:</p>
                          <p>Բիզնես գործընթացների թվայնացման նպատակով թվային ծրագրերի կամ հարթակների ձեռքբերում:</p>
                        </td>
                      </tr>
                      <tr className="border-b border-[#f4ecfb]">
                        <td className="bg-[#fbf9fe] p-3 text-center font-bold align-top">5.</td>
                        <td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f] align-top">Սուբսիդավորվող ոլորտները</td>
                        <td className="p-3 text-[#333]">
                          <ul className="space-y-1.5">
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Մշակող արդյունաբերություն</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Հանքագործական արդյունաբերություն և բացահանքերի շահագործում</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Տեղեկատվություն և կապ</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Շինարարություն</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Փոխադրում և պահեստային տնտեսություն</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Մասնագիտական, գիտական և տեխնիկական գործունեություն</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Կրթություն</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Առողջապահություն և բնակչության սոցիալական սպասարկում</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Էլեկտրականության, գազի, գոլորշու և լավորակ օդի մատակարարում</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Ավտոմեքենաների տեխնիկական սպասարկում և նորոգում</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Վարձույթ և լիզինգ</li>
                            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6a00d1] shrink-0" />Կացության կազմակերպում (բացառությամբ Երևան քաղաքի վարչական սահմաններում կացության կազմակերպման գործունեություն իրականացնող տնտեսվարողների)</li>
                            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6a00d1] shrink-0" />Ստեղծագործական, արվեստի և հանդիսադիր ներկայացումների կազմակերպման բնագավառում</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-b border-[#f4ecfb]">
                        <td className="bg-[#fbf9fe] p-3 text-center font-bold align-top">6.</td>
                        <td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f] align-top">Ֆինանսավորման առավելագույն չափ</td>
                        <td className="p-3 text-[#333] space-y-3">
                          <p>Մեքենասարքավորումների և դրանց բաղկացուցիչ մասերի դեպքում` 1 մլրդ ՀՀ դրամ կամ համարժեք արտարժույթ (պայմանագրի ստորագրման պահի փոխարժեքով),</p>
                          <p>Կապիտալ շինարարության դեպքում` ձեռք բերված մեքենասարքավորման 30%,</p>
                          <p>Բիզնես գործընթացների թվայնացման ծրագրային ապահովման և արտադրողականության խորհրդատվության դեպքում` 400 մլն ՀՀ դրամ կամ համարժեք արտարժույթ (պայմանագրի ստորագրման պահի փոխարժեքով):</p>
                          <p>Յուրաքանչյուր լիզինգառու կարող է օգտվել Ծրագրի բոլոր նպատակներից, սակայն սուբսիդավորվող մասի առավելագույն գումարը չի կարող գերազանցել նշված չափը (ներառում է փոխկապակցված համարվող կազմակերպությունները):</p>
                        </td>
                      </tr>
                      <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-3 text-center font-bold">7.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f]">Մարման ժամկետ</td><td className="p-3 text-[#333]">Մինչև 120 ամիս</td></tr>
                      <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-3 text-center font-bold align-top">8.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f] align-top">Տարեկան տոկոսադրույք</td><td className="p-3 text-[#333]"><p>ՀՀ դրամ` 9%-14%</p><p className="mt-1">ԱՄՆ դոլար, Եվրո` 6%-10%</p></td></tr>
                      <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-3 text-center font-bold">9.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f]">Կանխավճար</td><td className="p-3 text-[#333]">Լիզինգի առարկայի արժեքի նվազագույնը` 10%</td></tr>
                      <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-3 text-center font-bold align-top">10.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f] align-top">Ապահովություն</td><td className="p-3 text-[#333] space-y-1"><p>Իրավաբանական անձի, ֆիզիկական անձի երաշխավորություն</p><p>Գույքի գրավ ( ըստ պահանջի)</p></td></tr>
                      <tr className="border-b border-[#f4ecfb]">
                        <td className="bg-[#fbf9fe] p-3 text-center font-bold align-top">11.</td>
                        <td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f] align-top">Սուբսիդավորման ժամանակահատված</td>
                        <td className="p-3 text-[#333] space-y-2">
                          <p>Մինչև 42 ամիս</p>
                          <p className="text-[13px] leading-relaxed text-[#555]">Ընդ որում մատակարարման փուլի տոկոսագումարի սուբսիդավորումը կատարվում է մինչև 180 օր ժամկետի համար` սկսած լիզինգի պայմանագրի կնքման օրվանից, իսկ 180 օր ժամկետը գերազանցող ժամկետի համար տոկոսների վճարման պարտականությունը կրում է Լիզինգառուն:</p>
                        </td>
                      </tr>
                      <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-3 text-center font-bold">12.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f]">Վարկային միջոցի օգտագործում</td><td className="p-3 text-[#333]">Անկանխիկ և բանկային փոխանցումներով</td></tr>
                      <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-3 text-center font-bold align-top">13.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f] align-top">Տոկոսադրույքի սուբսիդավորում</td><td className="p-3 text-[#333]"><p>ՀՀ դրամ` 8%</p><p className="mt-1">ԱՄՆ դոլար, Եվրո` 6%</p></td></tr>
                      <tr><td className="bg-[#fbf9fe] p-3 text-center font-bold align-top">14.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f] align-top">Լիզինգի առարկայի արժեք</td><td className="p-3 text-[#333] text-[13px] leading-relaxed">Ներառում է լիզինգի առարկայի ձեռքբերման գինը, ՀՀ Ներմուծման հետ կապված ծախսերը: Ներմուծման հետ կապված ծախսերն իրենց մեջ պետք է ներառონ տեղափոխման, մաքսազերծման, ավելացված արժեքի</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* ==================== ACCORDION 3 (Ավելացված ամբողջական աղյուսակով) ==================== */}
          <div className="rounded-[20px] border border-[#a855f7] bg-white p-6 shadow-sm">
            <button
              type="button"
              onClick={() => setOpenSection3(!openSection3)}
              className="flex w-full cursor-pointer items-center justify-between text-left"
            >
              <h2 className="text-[18px] font-bold text-[#1d1d1f] xl:text-[20px]">
                Լիզինգ` գյուղատնտեսական տեխնիկայի ձեռքբերման նպատակով
              </h2>
              <span className={`ml-4 text-[18px] font-bold text-[#6a00d1] transition-transform duration-200 ${openSection3 ? "rotate-180" : ""}`}>
                ▲
              </span>
            </button>

            {openSection3 && (
              <div className="mt-6 border-t border-[#f0e6fc] pt-4 space-y-4">
                <p className="text-[15px] font-bold text-[#6a00d1]">
                  Լիզինգ` գյուղատնտեսական տեխնիկայի ձեռքբերման նպատակով{" "}
                  <span className="font-normal text-[#333]">
                    (Կանխավճարի մասնակի սուբսիդավորումը գործելու է մինչև 30.12.2026թ. լիզինգի տրամադրման պայմանագիր կնքած շահառուների համար)
                  </span>
                </p>

                <div className="overflow-x-auto rounded-xl border border-[#f4ecfb]">
                  <table className="w-full text-left text-[14px] border-collapse bg-white">
                    <tbody>
                      <tr className="border-b border-[#f4ecfb]"><td className="w-12 bg-[#fbf9fe] p-3 text-center font-bold">1.</td><td className="w-1/3 bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f]">Արժույթ</td><td className="p-3 text-[#333]">ՀՀ դրամ</td></tr>
                      <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-3 text-center font-bold">2.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f]">Լիզինգառու</td><td className="p-3 text-[#333]">Իրավաբանական անձ, Անհատ ձեռնարկատեր</td></tr>
                      <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-3 text-center font-bold">3.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f]">Գործունեության ոլորտ</td><td className="p-3 text-[#333]">Գյուղատնտեսություն</td></tr>
                      <tr className="border-b border-[#f4ecfb]">
                        <td className="bg-[#fbf9fe] p-3 text-center font-bold align-top">4.</td>
                        <td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f] align-top">Նպատակ</td>
                        <td className="p-3 text-[#333]">
                          <p className="font-semibold mb-2">Գյուղատնտեսական տեխնիկայի ձեռքբերում`</p>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />տրանկտորներ` տարբեր մակնիշների</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />կոմբայններ</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />հավաքիչ-մամլիչներ</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />շարքացաններ</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />գութաններ</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />խոտհնձիչներ</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />կարտոֆիլատնկիչներ, կարտոֆիլահանչներ</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />կուլտիվատորներ, ֆրեզներ</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />սրսկիչներ</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />այլ գյուղատնտեսական տեխնիկա</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-3 text-center font-bold">5.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f]">Լիզինգի սահմանաչափ</td><td className="p-3 text-[#333]">5,100,000-500,000,000 ՀՀ դրամ</td></tr>
                      <tr className="border-b border-[#f4ecfb]">
                        <td className="bg-[#fbf9fe] p-3 text-center font-bold align-top">6.</td>
                        <td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f] align-top">Կանխավճար</td>
                        <td className="p-3 text-[#333] space-y-2">
                          <p>Լիզինգի առարկայի արժեքի 20 %</p>
                          <p className="text-[13px] text-[#555]">Ընդ որում Ծրագրի շրջանակներում նույն լիզինգառուի կողմից ձեռք բերվող լիզինգի առարկաների արժեքների հանրագումարը չպետք է գերազանցի 500 մլն դրամը:</p>
                        </td>
                      </tr>
                      <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-3 text-center font-bold">7.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f]">Մարման ժամկետ</td><td className="p-3 text-[#333]">36-120 ամիս</td></tr>
                      <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-3 text-center font-bold align-top">8.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f] align-top">Մարման եղանակ</td><td className="p-3 text-[#333]">Մայր գումարի հավասարաչափ վճարում, տոկոսադրույքի հաշվարկ մայր գումարի մնացորդի հաշվով</td></tr>
                      <tr className="border-b border-[#f4ecfb]">
                        <td className="bg-[#fbf9fe] p-3 text-center font-bold align-top">9.</td>
                        <td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f] align-top">Տարեկան տոկոսադրույք և տոկոսադրույքի սուբսիդավորման չափ</td>
                        <td className="p-3 text-[#333] text-[13px] leading-relaxed">
                          Մինչև 14%, որի մինչև 12 տոկոսային կետը սուբսիդավորվում է այնպիսի չափաքանակով, որ Լիզինգառուի կողմից վճարվող լիզինգի տարեկան տոկոսադրույքը կազմի 2%, իսկ... հաստատված սոցիալական աջակցություն ստացող սահմանամերձ բնակավայրերի տարածքներում գործունեություն իրականացնող տնտեսվարողների համար լիզինգի տոկոսադրույքի սուբսիդավորումը կիրականացվի այնպիսի չափաքանակով, որ լիզինգառուի կողմից վճարման ենթակա լիզինգի տարեկան տոկոսադրույքը կազմի 0%:
                        </td>
                      </tr>
                      <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-3 text-center font-bold">10.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f]">Ապահովում</td><td className="p-3 text-[#333]">Կարող է պահանջվել իրավաբանական անձի, ֆիզիկական անձի երաշխավորություն, այլ գրավ:</td></tr>
                      <tr className="border-b border-[#f4ecfb]"><td className="bg-[#fbf9fe] p-3 text-center font-bold">11.</td><td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f]">Գումարի տրամադրման եղանակ</td><td className="p-3 text-[#333]">Անկանխիկ` մատակարարի բանկային հաշվին:</td></tr>
                      <tr className="border-b border-[#f4ecfb]">
                        <td className="bg-[#fbf9fe] p-3 text-center font-bold align-top">12.</td>
                        <td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f] align-top">Մատակարար</td>
                        <td className="p-3 text-[#333] text-[13px] leading-relaxed">
                          Եվրասիական տնտեսական միության անդամ և այլ երկրներում գյուղատնտեսական տեխնիկա արտադրող ընկերություններից նոր, չօգտագործված տեխնիկա ներմուծող մասնագիտացված կառույցներ, որոնք իրականացնում են նաև գյուղատնտեսական տեխնիկայի երաշխիքային և հետերաշխիքային սպասարկում:
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-[#fbf9fe] p-3 text-center font-bold align-top">13.</td>
                        <td className="bg-[#fbf9fe] p-3 font-bold text-[#1d1d1f] align-top">Սեփականության իրավունքի պետական գրանցման վճար (պետական տուրք)</td>
                        <td className="p-3 text-[#333]">
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Տրակտորների և կոմբայնների համար` 5,000 դրամ,</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#6a00d1]" />Այլ գյուղատնտեսական տեխնիկայի համար` վճար չկա:</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* ==================== ACCORDION 4 (Նոր ավելացված՝ Տրանսպորտային միջոցի լիզինգ) ==================== */}
          <div className="rounded-[20px] border border-[#a855f7] bg-white p-6 shadow-sm">
            <button
              type="button"
              onClick={() => setOpenSection4(!openSection4)}
              className="flex w-full cursor-pointer items-center justify-between text-left"
            >
              <h2 className="text-[18px] font-bold text-[#1d1d1f] xl:text-[20px]">
                Տրանսպորտային միջոցի լիզինգ
              </h2>
              <span className={`ml-4 text-[18px] font-bold text-[#6a00d1] transition-transform duration-200 ${openSection4 ? "rotate-180" : ""}`}>
                ▲
              </span>
            </button>

            {openSection4 && (
              <div className="mt-6 border-t border-[#f0e6fc] pt-4 space-y-4">
                <p className="text-[15px] leading-relaxed text-[#333]">
                  <strong className="text-[#6a00d1]">Evoca-ի տրանսպորտային միջոցի լիզինգով</strong> կարող եք ձեռք բերել մարդատար, ուղևորատար կամ բեռնատար տրանսպորտային միջոց` թե՛ Հայաստանից, թե՛ արտերկրից առաջնային կամ երկրորդային շուկայից:
                </p>
                <p className="text-[15px] leading-relaxed text-[#333]">
                  Ընտրության ազատությունը միայն տրանսպորտային միջոցին չի վերաբերում. կարող եք ընտրել նաև լիզինգի արժույթը, մարման եղանակն ու ժամկետը` <strong className="text-[#6a00d1]">6-ից մինչև 72 ամիս</strong>, իսկ ֆինանսավորման սահմանաչափը կարող է հասնել մինչև <strong className="text-[#6a00d1]">1 մլրդ ՀՀ դրամի կամ համարժեք արտարժույթի</strong>:
                </p>
                <p className="text-[15px] leading-relaxed text-[#333]">
                  Ընտրեք Ձեր բիզնեսին հարմար տրանսպորտային միջոցը, իսկ մենք կտրամադրենք Ձեզ ամենահարմար ֆինանսավորումը:
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

     
    </div>
  );
}