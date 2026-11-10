import React, { useState } from "react";
import { Link } from "react-router-dom";

// Օնլայն և մոբայլ բանկինգի բաններ բաղադրիչը
const OnlineBankingBanner = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeEmbedUrl = "https://www.youtube.com/embed/KwAgMHEx8ys?autoplay=1";

  return (
    <div className="relative w-full bg-[#5D00C6] text-white overflow-hidden rounded-tr-[100px] py-12 px-6 md:px-16 font-sans my-12">
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

export default function BusinessAccountOpening() {
  const [openSection1, setOpenSection1] = useState(false);
  const [openSection2, setOpenSection2] = useState(true);
  const [openSection3, setOpenSection3] = useState(false);
  const [openSection4, setOpenSection4] = useState(false);
  const [openSection5, setOpenSection5] = useState(false);

  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f] pb-16">
      {/* Ձախ կողմի սոց․ կայքերի կոճակներ */}
      <div className="fixed left-6 top-1/3 hidden flex-col gap-2 rounded-lg border border-[#e6e6e6] bg-white p-2 shadow-sm xl:flex z-10">
        <button type="button" className="p-1 text-gray-500 hover:text-[#6a00d1]">f</button>
        <button type="button" className="p-1 text-gray-500 hover:text-[#6a00d1]">in</button>
        <button type="button" className="p-1 text-gray-500 hover:text-[#6a00d1]">📷</button>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 pt-6 sm:px-6 xl:px-8">
        
        {/* Նոր ճշգրիտ հատված՝ ձախ կողմում կորացված ֆոնային բլոկ, աջում՝ նկար */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Ձախ կողմի կորացված բլոկը */}
          <div className="lg:col-span-6 bg-[#faf5ff] rounded-bl-[120px] p-8 sm:p-12 shadow-sm relative z-0">
            <div className="max-w-xl space-y-6">
              <h1 className="text-[32px] font-bold text-[#1d1d1f] xl:text-[42px] leading-tight">
                Հաշիվների բացում և սպասարկում
              </h1>
              <p className="text-[16px] leading-relaxed text-[#333]">
                Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձանց ու անհատ ձեռնարկատերերին առաջարկում ենք մեզ մոտ բացել դրամային և արտարժութային բանկային ընթացիկ հաշիվներ:
              </p>
            </div>
          </div>

          {/* Աջ կողմի նկարը */}
          <div className="lg:col-span-6">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16116367969264/780x585.jpg" 
              alt="Հաշիվների բացում և սպասարկում" 
              className="w-full h-auto rounded-2xl shadow-md object-cover"
            />
          </div>

        </div>

        {/* Հղումների տեքստային հատված */}
        <div className="space-y-4 mb-10 text-[15px] text-[#333] leading-relaxed max-w-[1200px] mx-auto">
          <p>
            Հաշիվների սպասարկումն իրականացնում ենք մեր <Link to="/about/tariffs/commissions" className="text-[#6a00d1] underline font-semibold">Ընթացիկ հաշիվների սպասարկման սակագների համաձայն</Link>: Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխամասային գրասենյակ և ցանկացած մասնաճյուղ:
          </p>
          <p>
            <strong className="text-[#6a00d1]">Ուշադրություն.</strong> <Link to="/business/accounts/metal" className="text-[#6a00d1] underline font-semibold">Առարկայազուրկ մետաղական հաշիվների</Link>, Ավանդային և Քարտային հաշիվների սպասարկման պայմաններին կարող եք ծանոթանալ Առարկայազուրկ մետաղական հաշիվներ, Վճարային քարտեր ենթաբաժիններում և իրավաբանական անձանց բանկային ծառայությունների Ավանդներ բաժնում:
          </p>
        </div>

        {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ */}
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-6 text-[24px] font-bold text-[#1d1d1f]">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>

          <div className="space-y-6">
            {/* Ակորդեոն 1: Անվանատիրոջ հատուկ հաշիվներ */}
            <div className="rounded-[20px] border border-[#a855f7] bg-white p-6 shadow-sm">
              <button
                type="button"
                onClick={() => setOpenSection1(!openSection1)}
                className="flex w-full cursor-pointer items-center justify-between text-left"
              >
                <h3 className="text-[18px] font-bold text-[#1d1d1f]">
                  Անվանատիրոջ հատուկ հաշիվներ
                </h3>
                <span className={`text-[18px] font-bold text-[#6a00d1] transition-transform duration-200 ${openSection1 ? "rotate-180" : ""}`}>
                  ▲
                </span>
              </button>

              {openSection1 && (
                <div className="mt-6 space-y-4 pt-4 border-t border-[#f0e6fc] text-[15px] text-[#333] leading-relaxed">
                  <p>
                    Անվանատիրոջ հատուկ հաշիվը կարող է օգտագործվել միայն Ներդրումային ծառայություններ մատուցող անձի և Ներդրումային ֆոնդի կառավարչի կողմից` Ներդրումային ծառայությունների մատուցման կամ Ներդրումային ֆոնդերի կառավարման հետ կապված գործառնությունների իրականացման համար:
                  </p>
                  <p>
                    Հաշվի տարեկան սպասարկումը 5,000 ՀՀ դրամ:
                  </p>
                </div>
              )}
            </div>

            {/* Ակորդեոն 2: Հաշիվների սպասարկում */}
            <div className="rounded-[20px] border border-[#a855f7] bg-white p-6 shadow-sm">
              <button
                type="button"
                onClick={() => setOpenSection2(!openSection2)}
                className="flex w-full cursor-pointer items-center justify-between text-left"
              >
                <h3 className="text-[18px] font-bold text-[#1d1d1f]">
                  Հաշիվների սպասարկում
                </h3>
                <span className={`text-[18px] font-bold text-[#6a00d1] transition-transform duration-200 ${openSection2 ? "rotate-180" : ""}`}>
                  ▲
                </span>
              </button>

              {openSection2 && (
                <div className="mt-6 space-y-4 pt-4 border-t border-[#f0e6fc] text-[15px] text-[#333] leading-relaxed">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <span>Ձեր բանկային հաշիվների սպասարկումը կարգավորվում է Հայաստանի օրենսդրությամբ, Կենտրոնական բանկի նորմատիվ ակտերով, մեր և ձեր միջև կնքված բանկային հաշվի սպասարկման պայմանագրով:</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <span>Բանկային հաշիվները սպասարկում են մեր գլխամասային գրասենյակը և մասնաճյուղերը` գործառնական օրվա ընթացքում` ժամը 9:30-17:00-ը, առանց ընդմիջման:</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <span>Ձեր հաշիվներով իրականացվող գործառնությունների (հաշվարկային/դրամարկղային) դիմաց գանձում ենք համապատասխան միջնորդավճարներ` մեր սակագների համաձայն: Նշում. Իրավաբանական անձանց համար սահմանված դրույքները և սակագները կիրառվում են նաև անհատ ձեռնարկատերերի նկատմամբ:</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <span>Հաշիվների բացման և փակման դիմաց միջնորդավճարներ չենք գանձում, չի գործում նաև հաշվի չնվազող մնացորդի պահանջ:</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <div className="space-y-2">
                        <p>Իրավունք ունեք ձեր բանկային հաշիվներով կատարել Հայաստանի օրենսդրական ակտերով չարգելված ցանկացած գործառնություն (կանխիկ/անկանխիկ)` մեզ ներկայացնելով փաստաթղթային հանձնարարական/կարգադրություն: Բանկային հաշվով հնարավոր է իրականացնել հետևյալ գործառնությունները`</p>
                        <ul className="pl-4 space-y-2">
                          <li className="flex items-center gap-2 text-gray-700">
                            <span className="text-[#6a00d1] font-bold">—</span>
                            <span>բացված հաշվին մուտքագրել դրամական միջոցներ,</span>
                          </li>
                          <li className="flex items-center gap-2 text-gray-700">
                            <span className="text-[#6a00d1] font-bold">—</span>
                            <span>կատարել հաշվից դրամական փոխանցումներ,</span>
                          </li>
                          <li className="flex items-center gap-2 text-gray-700">
                            <span className="text-[#6a00d1] font-bold">—</span>
                            <span>հաշվից գումարներ ստանալ,</span>
                          </li>
                          <li className="flex items-center gap-2 text-gray-700">
                            <span className="text-[#6a00d1] font-bold">—</span>
                            <span>իրականացնել ընթացիկ հաշվի մնացորդի փոխարկում արտարժույթի (գործարքի կատարման դրությամբ մեր կողմից սահմանված արտարժույթների առք ու վաճառքի փոխարժեքներով),</span>
                          </li>
                          <li className="flex items-center gap-2 text-gray-700">
                            <span className="text-[#6a00d1] font-bold">—</span>
                            <span>ընթացիկ հաշվից մարել վարկեր և կատարել այլ գործառնություններ:</span>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <span>Կարող եք նաև առանց մեզ այցելելու կառավարել ձեր հաշիվները` բանկային հաշիվների հեռակառավարման (online) մեր համակարգերի միջոցով:</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <span>Բանկային հաշիվներով իրականացվող գործառնությունները (դրամական միջոցների շարժը, գանձված միջնորդավճարներ, ստացված եկամուտներ) ամբողջովին արտացոլվում են հաշիվների քաղվածքներում: Փոխադարձ համաձայնության հիման վրա քաղվածքները կարող ենք տրամադրել առձեռն, փոստային կամ էլեկտրոնային կապի միջոցներով: Քաղվածքների կրկնօրինակների և/կամ հաշիվների վերաբերյալ այլ տեղեկանքների տրամադրման դիմաց գանձում ենք միջնորդավճարներ` մեր սակագների համաձայն:</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <div className="space-y-2">
                        <p>Ձեր հաշվին դրամական միջոցների մուտքագրման/ելքագրման ժամկետները`</p>
                        <ul className="pl-4 space-y-2">
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#6a00d1] font-bold">—</span>
                            <span>Ձեր օգտին ստացված դրամական միջոցները հաշվին մուտքագրվում են ոչ ուշ, քան մուտքագրումը հաստատող փաստաթղթերի ստացման հաջորդող բանկային օրը: Հաշվի կանխիկ համալրման դեպքում` դրամական միջոցները մուտքագրվում են նույն բանկային օրը:</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#6a00d1] font-bold">—</span>
                            <span>Ձեր հաշվից դրամական միջոցների ելքագրումը (փոխանցումների իրականացումը) կատարվում է ձեր կողմից մեզ ներկայացված վճարման հանձնարարագրերի հիման վրա, ընդ որում` մինչև ժամը 15:30-ը ներկայացված վճարման հանձնարարագրերը կատարում ենք նույն բանկային օրը:</span>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <span>Բանկի կողմից վճարման հանձնարարականի դրոշմակնքումը հաստատում է այն փաստը, որ վճարման հանձնարարականն ընդունվել է Բանկի կողմից ի կատարումն և չի նշանակում, որ արդեն կատարվել է Բանկի կողմից: Բանկի կողմից ընդունված և դրոշմակնքված վճարման հանձնարարականի կատարումը կարող է չեղյալ համարվել հաճախորդի հաշվին միջոցների անբավարարության, գումարի ծագման հիմքերի բացակայության և այլ անհամապատասխանություններ ի հայտ գալու դեպքում: Սույն գործողության արդյունքում Հաճախորդին պատճառված վնասի համար Բանկը պատասխանատվություն չի կրում:</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <span>Բանկային հաշվին առկա դրամական միջոցները տնօրինելու ձեր իրավունքները չենք սահմանափակում:</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <span>Հաշվետիրոջ ձեր իրավունքները <strong className="text-[#6a00d1]">կարող են սահմանափակվել</strong> դատարանի վճռով, դատական ակտերի հարկադիր կատարումնապահովող մարմինների կամ հարկային մարմինների կողմից ներկայացված հայտի հիման վրա: Առանց ձեր կարգադրության` հաշվից դրամական միջոցները կարող են բռնագանձվել դատարանի վճռով հարկադիր կատարումնապահովող մարմինների և հարկային մարմինների ներկայացրած հայտի հիման վրա:</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <span>Այս դեպքերում մենք պարտավորություն չենք կրում ձեր հանդեպ, ձեր հաշիվների և դրամական միջոցների նկատմամբ ՀՀ օրենսդրական կարգով կիրառվող իրավական սանկցիաների մասին տեղեկացնելու համար: Նման տեղեկատվություն կարող ենք տրամադրել միայն համապատասխան սանկցիաները կիրառելուց հետո` հեռախոսի կամ այլ կապի միջոցներով (էլեկտրոնային/փոստային):</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <span>Երաշխավորում ենք հաշվի, հաշվով գործառնությունների և ձեր մասին տեղեկությունների գաղտնիությունը: Նման տեղեկություններ տրամադրում ենք միայն ձեզ կամ ձեր լիազոր ներկայացուցչին: Պետական մարմիններին և դրանց պաշտոնատար անձանց բանկային գաղտնիք կազմող տեղեկությունները տրամադրում ենք` միայն Բանկային գաղտնիքի մասին ՀՀ օրենքի համաձայն:</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <span>Մեր և ձեր միջև ծագած ցանկացած վեճ և տարաձայնություն նախ և առաջ լուծվում է փոխադարձ բանակցությունների միջոցով, իսկ համաձայնության չգալու դեպքում` Հայաստանի օրենսդրությամբ սահմանված կարգով:</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Ակորդեոն 3: Բանկային հաշվի պայմանագրի լուծման պայմաններ */}
            <div className="rounded-[20px] border border-[#a855f7] bg-white p-6 shadow-sm">
              <button
                type="button"
                onClick={() => setOpenSection3(!openSection3)}
                className="flex w-full cursor-pointer items-center justify-between text-left"
              >
                <h3 className="text-[18px] font-bold text-[#1d1d1f]">
                  Բանկային հաշվի պայմանագրի լուծման պայմաններ
                </h3>
                <span className={`text-[18px] font-bold text-[#6a00d1] transition-transform duration-200 ${openSection3 ? "rotate-180" : ""}`}>
                  ▲
                </span>
              </button>

              {openSection3 && (
                <div className="mt-6 space-y-4 pt-4 border-t border-[#f0e6fc] text-[15px] text-[#333] leading-relaxed">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <span><strong className="underline text-[#1d1d1f]">Դուք ցանկացած ժամանակ կարող եք պահանջել լուծել</strong> բանկային հաշվի սպասարկման պայմանագիրը և ձեր հայեցողությամբ տնօրինել հաշվին առկա դրամական մնացորդը (կանխիկ ելքագրել կամ փոխանցել այլ հաշվի): Այս դեպքերում հաշվին եղած դրամական միջոցների մնացորդը տրամադրում ենք ձեզ կամ ձեր ցուցումով փոխանցում այլ հաշվի` ձեր համապատասխան գրավոր դիմումը ստանալուց ոչ ուշ, քան 7 (յոթ) օրվա ընթացքում:</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <span>Կարող ենք անվիճելի կարգով դադարեցնել բանկային հաշվի սպասարկման պայմանագիրը, եթե լինելով իրավաբանական անձ հաճախորդ` <strong className="text-[#1d1d1f]">մեկ տարվա</strong> ընթացքում ձեր բանկային հաշվով գործառնություններ չեք կատարել, իսկ մնացորդը զրոյական է:</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                      <span>Բանկային հաշվի պայմանագրի լուծումը հիմք է ձեր հաշիվը փակելու համար:</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Ակորդեոն 4: Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում */}
            <div className="rounded-[20px] border border-[#a855f7] bg-white p-6 shadow-sm">
              <button
                type="button"
                onClick={() => setOpenSection4(!openSection4)}
                className="flex w-full cursor-pointer items-center justify-between text-left"
              >
                <h3 className="text-[18px] font-bold text-[#1d1d1f]">
                  Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում
                </h3>
                <span className={`text-[18px] font-bold text-[#6a00d1] transition-transform duration-200 ${openSection4 ? "rotate-180" : ""}`}>
                  ▲
                </span>
              </button>

              {openSection4 && (
                <div className="mt-6 space-y-4 pt-4 border-t border-[#f0e6fc] text-[15px] text-[#333] leading-relaxed">
                  <p>Հարգելի Հաճախորդ,</p>
                  <p>
                    «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ն Հայաստանի Հանրապետության և Ամերիկայի Միացյալ Նահանգների միջև «Օտարերկրյա հաշիվների հարկային համապատասխանության ակտի» կիրարկմանն օժանդակելու համագործակցության մասին համաձայնագրի պահանջներից ելնելով իրավասու է հաճախորդներից պահանջել լրացուցիչ տեղեկատվություն, մասնավորապես հաճախորդներից պահանջվում է լրացնել վերջիններիս ԱՄՆ անձ կարգավիճակի նույնականացման համար պահանջվող հետևյալ ձևաթղթերը`
                  </p>
                  <p>
                    <a href="#" className="text-[#6a00d1] underline font-semibold">Իրավաբանական անձ հաճախորդների ինքնահայտարարագրման ձև` Մոդել 2-ի համաձայն (FATCA)</a> կամ <a href="#" className="text-[#6a00d1] underline font-semibold">Ֆիզիկական անձ (ներառյալ անհատ ձեռնարկատեր) հաճախորդների ինքնահայտարարագրման ձև FATCA նպատակների համար</a>
                  </p>
                </div>
              )}
            </div>

            {/* Ակորդեոն 5: Անհրաժեշտ փաստաթղթեր */}
            <div className="rounded-[20px] border border-[#a855f7] bg-white p-6 shadow-sm">
              <button
                type="button"
                onClick={() => setOpenSection5(!openSection5)}
                className="flex w-full cursor-pointer items-center justify-between text-left"
              >
                <h3 className="text-[18px] font-bold text-[#1d1d1f]">
                  Անհրաժեշտ փաստաթղթեր
                </h3>
                <span className={`text-[18px] font-bold text-[#6a00d1] transition-transform duration-200 ${openSection5 ? "rotate-180" : ""}`}>
                  ▲
                </span>
              </button>

              {openSection5 && (
                <div className="mt-6 space-y-6 pt-4 border-t border-[#f0e6fc] text-[15px] text-[#333] leading-relaxed">
                  
                  {/* Իրավաբանական անձանց դեպքում */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-[#6a00d1] text-[16px]">Իրավաբանական անձանց դեպքում`</h4>
                    <ul className="space-y-3 pl-2">
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                        <span>Դիմում` մեր ձևանմուշի համաձայն:</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                        <span>Կանոնադրություն (ոչ ռեզիդենտների դեպքում` կանոնադրություն կամ փոխարինող այլ փաստաթուղթ):</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                        <span>Պետական ռեգիստրի գրանցման վկայական (ոչ ռեզիդենտների դեպքում` տվյալ երկրի գրանցող պետական մարմնի կողմից տրված վկայական և գրանցման երկրի համապատասխան մարմնի կողմից տրված հարկային մարմիններում հաշվառված փաստաթուղթ):</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                        <span>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում:</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                        <span>Գործադիր մարմնի ղեկավար/ների, գլխավոր հաշվապահի անձնագրերը կամ նույնականացման քարտերը, ինչպես նաև քաղվածքներ պաշտոնների նշանակման հրամաններից, եթե պետական ռեգիստրի գրանցման վկայականում ղեկավարի վերաբերյալ տվյալները բացակայում են (ոչ ռեզիդենտների դեպքում` գործադիր մարմնի ղեկավար/ների, անձնագիր/ները և իրավասու մարմնի կողմից պաշտոնների նշանակման վերաբերյալ որոշումները):</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                        <span>Հաշվի կարգադրիչների անձնագրերը կամ նույնականացման քարտերը:</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                        <div className="space-y-2">
                          <p>Կանոնադրական կապիտալում 10% և ավելի բաժնեմաս ունեցող անձանց/իրական շահառուների նույնականացման համար անհրաժեշտ են`</p>
                          <ul className="pl-4 space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-[#6a00d1] font-bold">—</span>
                              <span>Եթե իրական շահառուն ֆիզիկական անձ է, ապա անձնագրի կամ նույնականացման քարտի պատճենը:</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#6a00d1] font-bold">—</span>
                              <span>Եթե իրական շահառուն իրավաբանական անձ է, ապա տվյալ իրավաբանական անձի այս տեղեկատվության 2-րդ, 3-րդ և 4-րդ կետերով պահանջվող փաստաթղթերի (ոչ ռեզիդենտների դեպքում` միայն 2-րդ և 3-րդ կետերով պահանջվող փաստաթղթերի) պատճենները:</span>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                        <span>Մեր պահանջով այլ փաստաթղթեր:</span>
                      </li>
                    </ul>
                  </div>

                  {/* Անհատ ձեռնարկատերերի դեպքում */}
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h4 className="font-bold text-[#6a00d1] text-[16px]">Անհատ ձեռնարկատերերի դեպքում`</h4>
                    <ul className="space-y-3 pl-2">
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                        <span>Դիմում` մեր ձևանմուշի համաձայն:</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                        <span>Անձնագիր կամ նույնականացման քարտ:</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                        <span>Պետական ռեգիստրի գրանցման վկայական (բացակայության դեպքում` քաղվածք պետական ռեգիստրից):</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                        <span>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում:</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                        <span>Ստորագրության նմուշի քարտ: Առանց կնիքի գործող անհատ ձեռնարկատերի դեպքում, ստորագրության և նմուշի քարտում կատարվում է համապատասխան գրառում` կնիքի բացակայության վերաբերյալ:</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                        <span>Մեր պահանջով այլ փաստաթղթեր:</span>
                      </li>
                    </ul>
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Օնլայն և մոբայլ բանկինգի բաններ */}
      <OnlineBankingBanner />

      
      </div>
  );
}