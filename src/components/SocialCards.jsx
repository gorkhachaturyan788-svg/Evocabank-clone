import React, { useState } from 'react';

const documentsData = [
  { title: 'Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.', link: '#' },
  { title: 'Դեբետային և կրեդիտային քարտեր (Տեղեկատվական ամփոփագիր) 17.03.2026', link: '#' },
];

export default function SocialCards() {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeEmbedUrl = "https://www.youtube.com/embed/KwAgMHEx8ys?autoplay=1";

  return (
    <div className="w-full bg-white text-[#1d1d1f] font-['Noto_Sans_Armenian','Noto_Sans',sans-serif] py-12 space-y-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Վերևի գլխավոր բլոկ */}
        <div className="flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          
          {/* Ձախակողմյան տեքստային հատված */}
          <div className="w-full lg:w-1/2 bg-[#f9f9fb] p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] leading-tight">
              Սոցիալական ապահովության վճարային քարտեր
            </h1>
            
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Կենսաթոշակառուներին առաջարկում ենք ARCA կենսաթոշակային վճարային քարտեր` միայն կենսաթոշակների գումարների սպասարկման նպատակով: Քարտերը տրամադրում ենք Սոցիալական ապահովության պետական ծառայության հետ 2011թ. հունվարի 21-ին կնքված պայմանագրի համաձայն:
            </p>
          </div>

          {/* Աջակողմյան մանուշակագույն հատված՝ նկարով */}
          <div className="w-full lg:w-1/2 bg-[#d8cbf7] relative flex items-end justify-center overflow-hidden min-h-[350px]">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17218011250749/780x585.jpg" 
              alt="Կենսաթոշակային քարտեր" 
              className="w-full h-full object-cover object-top"
            />
          </div>

        </div>

        {/* Տրամադրման և սպասարկման տեքստային հատվածներ (ըստ նկարների ոճի) */}
        <div className="space-y-8 text-[#1d1d1f] text-base leading-relaxed px-2 sm:px-4">
          
          <div className="space-y-4 text-gray-800">
            <p>
              Քարտերը տրամադրում և սպասարկում ենք մեր կողմից հաստատված Կենսաթոշակային քարտերի տրամադրման և սպասարկման սակագների համաձայն:
            </p>

            <p>
              Քարտերի ստացման դիմում կարող եք ներկայացնել մեր Գլխամասային գրասենյակ կամ ցանկացած մասնաճյուղ:
            </p>

            <p>
              Վճարային քարտերի տրամադրմանը, սպասարկմանը և օգտագործմանը վերաբերող մանրամասն տեղեկատվությանը կարող եք ծանոթանալ <a href="#" className="text-[#6a00d1] font-bold underline hover:opacity-80">այստեղ</a>:
            </p>

            <p className="text-gray-700 pt-2">
              <strong>Ծանոթագրություն</strong> - Կենսաթոշակառու` անձ, ում կենսաթոշակը վճարվում է անկանխիկ եղանակով, Բանկում բացված բանկային հաշվին փոխանցելու միջոցով: Կենսաթոշակ` կենսաթոշակի, պատվովճարի, դրամական օգնության և սոցիալական ապահովության այլ ծրագրերով նախատեսված դրամական վճարների գումարը:
            </p>
          </div>

          {/* Վճարային քարտերով կատարվող գործառնություններ */}
          <div className="space-y-4 pt-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f]">
              Վճարային քարտերով կատարվող գործառնություններ
            </h2>
            <p className="font-bold text-[#6a00d1]">
              Վճարային քարտերով կարող եք՝
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a00d1] mt-2 flex-shrink-0"></span>
                <span>Կանխիկացնել Ձեր քարտային հաշվին առկա միջոցները բանկոմատներից (ATM) և կանխիկացման կետերից (POS տերմինալներից):</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a00d1] mt-2 flex-shrink-0"></span>
                <span>Կատարել անկանխիկ վճարումներ առևտրի և սպասարկման կետերում (ապրանքների կամ ծառայությունների դիմաց՝ խանութներում, ռեստորաններում, հյուրանոցներում և սպասարկման այլ կետերում):</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a00d1] mt-2 flex-shrink-0"></span>
                <span>Կատարել կոմունալ վճարումներ՝ բանկոմատների միջոցով կամ օնլայն (www.arca.am-ում գրանցելով վիրտուալ քարտ):</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a00d1] mt-2 flex-shrink-0"></span>
                <span>Օնլայն գործարքներ կատարել (վճարումներ, գնումներ):</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a00d1] mt-2 flex-shrink-0"></span>
                <span>Քարտից քարտ գումար փոխանցել՝ բանկոմատների միջոցով կամ օնլայն:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a00d1] mt-2 flex-shrink-0"></span>
                <span>Մեր online բանկինգ ծառայությունից օգտվելու պարագայում դուք հնարավորություն կունենաք առանց մեզ այցելելու կատարել դրամական միջոցների համալրում (ընթացիկ հաշվից՝ քարտային հաշիվ) և անմիջապես տնօրինել այդ գումարները՝ ձեր քարտի միջոցով:</span>
              </li>
            </ul>

            <p className="text-sm text-gray-700 pt-2 leading-relaxed">
              <strong>Նշում.</strong> Քարտային հաշվով կատարվող դրամական շարժը վերահսկելու նպատակով ակտիվացնում ենք SMS-տեղեկացում ծառայությունը (դուք կարող եք դիմում գրել և հրաժարվել SMS տեղեկացումների ծառայությունից): Օնլայն վճարումներ իրականացնելիս կարող եք օգտվել 3D Secure ծառայությունից:
            </p>
          </div>

          {/* Օգտակար տեղեկատվություն */}
          <div className="space-y-4 pt-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f]">
              Օգտակար տեղեկատվություն
            </h2>
            <p className="font-bold text-[#6a00d1]">
              Քարտային վճարումներ կատարելիս անհրաժեշտ է հիշել`
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a00d1] mt-2 flex-shrink-0"></span>
                <span>Քարտերով կարող եք վճարումներ կատարել այն առևտրի ու սպասարկման կետերում, որտեղ փակցված է տվյալ քարտային համակարգի լոգոտիպը:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a00d1] mt-2 flex-shrink-0"></span>
                <span>Քարտով վճարում կատարելիս՝ մինչև անդորրագիրը ստորագրելը, հավաստիացե՛ք, որ անդորրագրում նշված գումարը համապատասխանում է ձեր գործարքի գումարին:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a00d1] mt-2 flex-shrink-0"></span>
                <span>Քարտով վճարելիս մի՛շտ պահեք քարտը ձեր տեսադաշտում:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a00d1] mt-2 flex-shrink-0"></span>
                <span>Եթե հրաժարվում եք գնումից, ապա պահանջե՛ք չեղյալ համարել (VOID) ձեր վճարումը և պահե՛ք համապատասխան անդորրագիրը մինչև հերթական քաղվածքի ստացումը՝ համոզվելու, որ հաշվից գանձում չի կատարվել:</span>
              </li>
            </ul>
          </div>

          {/* Զգուշացում */}
          <div className="space-y-4 pt-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f]">
              Զգուշացում
            </h2>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a00d1] mt-2 flex-shrink-0"></span>
                <span>Ապահովե՛ք ձեր PIN ծածկագրի գաղտնիությունը (այն պետք է պահպանել գաղտնի և հասանելի չդարձնել այլ անձանց): PIN ծածկագրով կատարված բոլոր գործառնությունների պատասխանատվությունը կրում եք դուք: Մենք պատասխանատվություն չենք կրում ձեր PIN ծածկագիրը երրորդ անձանց հասանելի դառնալու հետևանքով վճարային քարտի ոչ օրինական և ձեր կողմից չարտոնված օգտագործման համար:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a00d1] mt-2 flex-shrink-0"></span>
                <span>Քարտի կորստի կամ գողության դեպքում անմիջապես զանգահարե՛ք մեզ (+374 10) 605555 հեռախոսահամարով կամ «Արմենիան Քարդ» վճարահաշվարկային համակարգի (+374 10) 592222 հեռախոսահամարով՝ հայտնելով քարտի ստացման դիմումի մեջ ձեր կողմից նշված գաղտնաբառը: Զանգից անմիջապես հետո քարտի գործողությունը կդադարեցվի:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a00d1] mt-2 flex-shrink-0"></span>
                <span>Քարտի կորստի կամ գողության մասին ՄԵԶ տեղեկացնելու հետաձգումը կարող է հանգեցնել ձեր քարտով այլ անձանց կողմից գործարքների կատարմանը:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a00d1] mt-2 flex-shrink-0"></span>
                <span>Մենք պատասխանատվություն չենք կրում ձեզ հասցրած այն վնասի համար, որը կատարվել է քարտը կորցնելու և մեզ հայտնելու միջև ընկած ժամանակահատվածում:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a00d1] mt-2 flex-shrink-0"></span>
                <span>Դուք պատասխանատվություն եք կրում քարտով կատարված բոլոր գործառնությունների համար մինչև այն պահը, երբ տեղեկացնում եք մեզ կորստի կամ գողություն պատճառով քարտի գործողությունը դադարեցնելու անհրաժեշտության մասին:</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Փաստաթղթեր բաժին */}
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f]">
            Փաստաթղթեր
          </h2>

          <div className="space-y-3">
            {documentsData.map((doc, index) => (
              <a
                key={index}
                href={doc.link}
                className="flex items-center justify-between p-4 sm:p-5 bg-[#f9f9fb] hover:bg-[#f2ecfa] border border-gray-100 rounded-2xl transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f0e6fa] text-[#6a00d1] flex items-center justify-center flex-shrink-0 group-hover:bg-[#6a00d1] group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-[#1d1d1f] group-hover:text-[#6a00d1] transition-colors">
                    {doc.title}
                  </span>
                </div>
                
                <div className="text-[#6a00d1] p-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Օնլայն և մոբայլ բանկինգի բաններ */}
      <div className="relative w-full bg-[#5D00C6] text-white overflow-hidden rounded-tr-[100px] py-14 px-6 md:px-16 font-sans mt-16 shadow-lg">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Սարքավորումների հատված */}
          <div className="flex items-end justify-center lg:justify-start w-full lg:w-[58%] gap-6 sm:gap-8">
            
            {/* Նոթբուքի կոնտեյներ */}
            <div className="relative w-full max-w-[540px] aspect-[16/10] bg-[#1a1a1a] rounded-t-xl p-2.5 pb-0 shadow-2xl border-t border-x border-gray-700 z-10 shrink-0">
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

            {/* Հեռախոսը */}
            <div className="w-24 sm:w-28 md:w-32 mb-2 z-20 shrink-0 drop-shadow-2xl">
              <img 
                src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
                alt="Evoca Mobile App" 
                className="w-full h-auto rounded-2xl border-[3px] border-gray-900 shadow-2xl"
              />
            </div>

          </div>

          {/* Տեքստային հատվածը */}
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
    </div>
  );
}