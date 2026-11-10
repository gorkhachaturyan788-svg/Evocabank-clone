import React, { useState } from "react";
import { Link } from "react-router-dom";

const OnlineBankingBanner = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeEmbedUrl = "https://www.youtube.com/embed/KwAgMHEx8ys?autoplay=1";

  return (
    <div className="relative w-full bg-[#5D00C6] text-white overflow-hidden rounded-tr-[100px] py-12 px-6 md:px-16 font-sans my-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex items-end justify-center lg:justify-start w-full lg:w-[58%] gap-6 sm:gap-8">
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

          <div className="w-24 sm:w-28 md:w-32 mb-2 z-20 shrink-0 drop-shadow-2xl">
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
              alt="Evoca Mobile App" 
              className="w-full h-auto rounded-2xl border-[3px] border-gray-900 shadow-2xl"
            />
          </div>
        </div>

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

export default function ClassicDeposit() {
  const [openFatca, setOpenFatca] = useState(true);

  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f] pb-16">
      {/* Ձախ կողմի սոց․ կայքերի կոճակներ */}
      <div className="fixed left-6 top-1/3 hidden flex-col gap-2 rounded-lg border border-[#e6e6e6] bg-white p-2 shadow-sm xl:flex z-10">
        <button type="button" className="p-1 text-gray-500 hover:text-[#6a00d1]">f</button>
        <button type="button" className="p-1 text-gray-500 hover:text-[#6a00d1]">in</button>
        <button type="button" className="p-1 text-gray-500 hover:text-[#6a00d1]">📷</button>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 pt-6 sm:px-6 xl:px-8">
        
        {/* Header Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-6 bg-[#faf5ff] rounded-bl-[120px] p-8 sm:p-12 shadow-sm relative z-0">
            <div className="max-w-xl space-y-6">
              <h1 className="text-[32px] font-bold text-[#1d1d1f] xl:text-[42px] leading-tight">
                Դասական ավանդ
              </h1>
              <p className="text-[16px] leading-relaxed text-[#333]">
                Դասական ավանդը կայուն բարձր եկամտաբերությամբ կավելացնի ձեր խնայողությունները: Դասական ժամկետային ավանդն ընդունում ենք ֆիզիկական և իրավաբանական անձանցից: Ավանդ ներդնելիս ձեզ տրամադրում ենք անվճար միջազգային քարտ:
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/1615568375393/780x585.jpg" 
              alt="Դասական ավանդ" 
              className="w-full h-auto rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-[1200px] mx-auto space-y-10 text-[15px] text-[#333] leading-relaxed">
          
          {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ */}
          <div>
            <h2 className="text-[24px] font-bold text-[#1d1d1f] mb-4">Անհրաժեշտ տեղեկատվություն</h2>
            <h3 className="text-[18px] font-bold text-[#6a00d1] mb-4">Ընդհանուր տեղեկատվություն</h3>

            <ul className="space-y-4 pl-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <div className="space-y-2">
                  <p>Ժամկետային ավանդներն ընդունում ենք ֆիզիկական (այդ թվում` անհատ ձեռնարկատեր) և իրավաբանական անձ հաճախորդներից (ռեզիդենտ, ոչ ռեզիդենտ)`</p>
                  <ul className="pl-4 space-y-1 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-[#6a00d1] font-bold">—</span>
                      <span>դրամով, դոլարով, եվրոյով և ռուբլիով,</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#6a00d1] font-bold">—</span>
                      <span>կանխիկ և անկանխիկ տարբերակով:</span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span>Ավանդներն ընդունում ենք մեր կողմից հաստատված պայմաններով և տոկոսադրույքներով:</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span>Ավանդների ընդունման և վերադարձման գործընթացում ղեկավարվում ենք Օրենսդրությամբ, Կենտրոնական բանկի որոշումներով և այլ իրավական ակտերով:</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span>Մենք, օրենսդրական ակտերի համաձայն, ապահովում ենք ավանդի ներդրման և դրա հետ կապված այլ գործառնությունների գաղտնիությունը: Ավանդի վերաբերյալ տեղեկատվության տրամադրումը երրորդ անձանց կատարվում է բացառապես «Բանկային գաղտնիքի մասին» օրենքով սահմանված դեպքերում և ընթացակարգով:</span>
              </li>
            </ul>

            <p className="mt-4 text-[#6a00d1] font-semibold">
              Ուշադրություն. Մեր կողմից պարբերաբար անցկացվող ավանդային ակցիաների պայմանները տարբերվում են մեր համակարգում ավանդների ներգրավման ընդհանուր պայմաններից և գործում են միայն պաշտոնապես հրապարակված ակցիայի շրջանակում ներգրավված ավանդների նկատմամբ:
            </p>
          </div>

          {/* Ավանդի տոկոսագումարների հաշվարկման և վճարման կարգը */}
          <div>
            <h3 className="text-[18px] font-bold text-[#6a00d1] mb-4">Ավանդի տոկոսագումարների հաշվարկման և վճարման կարգը</h3>

            <ul className="space-y-4 pl-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span>Տոկոսագումարները հաշվում ենք ավանդի փաստացի մնացորդի նկատմամբ` օրական կտրվածքով, պարզ եղանակով, ավանդային պայմանագրի ամբողջ ժամկետի համար: Ավանդի յուրաքանչյուր օրվա տոկոսադրույքը հաշվում ենք սահմանված տոկոսադրույքի 1/365, իսկ նահանջ տարվա համար` 1/366 հարաբերակցությամբ:</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span>Տոկոսագումարները հաշվում ենք ավանդը բանկ մուտք լինելու օրվանից մինչև այն վերադարձնելու կամ ավանդային հաշվից այլ հիմքերով դուրս գրելու օրվան նախորդող օրն ընկած ժամանակահատվածի օրացուցային օրերի համար:</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span><strong className="text-[#6a00d1] underline">Ավանդների</strong> դիմաց հաշվեգրվող տոկոսագումարները վճարում ենք կանխիկ և անկանխիկ եղանակով` ավանդատուի ցանկությամբ տոկոսագումարները կարող են վճարվել այն արտարժույթով, որով ներգրավվել է ավանդը, ինչպես նաև ՀՀ դրամով` հիմք ընդունելով վճարման օրը տվյալ արտարժույթի համար մեր կողմից սահմանված անկանխիկ առքի փոխարժեքը:</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <div className="space-y-2">
                  <p>Ձեր ընտրությամբ տոկոսագումարները վճարում ենք հետևյալ տարբերակներով`</p>
                  <ul className="pl-4 space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6a00d1] font-bold">—</span>
                      <span>Տոկոսագումարների պարբերաբար վճարումով, որի դեպքում ավանդի դիմաց հաշվեգրված տոկոսագումարները ձեզ վճարում ենք երկկողմանի համաձայնեցված ժամանակացույցով, կամ`</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6a00d1] font-bold">—</span>
                      <span>Տոկոսագումարների վճարմամբ` պայմանագրի ժամկետի վերջում, որի դեպքում ավանդի դիմաց հաշվեգրված տոկոսագումարները վճարում ենք պայմանագրի գործողության ավարտին (վերադարձնում ենք ավանդի գումարի հետ միասին):</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <div className="mt-4 space-y-2">
              <p className="font-semibold text-[#6a00d1]">Ուշադրություն`</p>
              <ul className="pl-2 space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                  <span>Ձեր հաշվին առկա միջոցների նկատմամբ տոկոսագումարները հաշվում ենք ԱՆՎԱՆԱԿԱՆ տոկոսադրույքի հիման վրա, իսկ տարեկան ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆԸ ցույց է տալիս, թե որքան եկամուտ կստանայիք դուք, եթե ձեր ավանդի դիմաց ստացված տոկոսագումարները վերաներդնեիք ավանդի տեսքով: Տարեկան տոկոսային եկամտաբերության հաշվարկման կարգին (Կանոնակարգ 8-02) կարող եք ծանոթանալ www.cba.am կայքում:</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն */}
          <div>
            <h3 className="text-[18px] font-bold text-[#6a00d1] mb-4">Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն</h3>
            <ul className="space-y-4 pl-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span>Պայմանագրի գործողության ընթացքում պարտավոր ենք առնվազն 30-օրյա պարբերականությամբ ձեզ տրամադրել յուրաքանչյուր ավանդային հաշվի վերաբերյալ համապատասխան քաղվածք:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span>Քաղվածքները ձեզ տրամադրում ենք գրավոր` փոստային կապի միջոցով, բացառությամբ այն դեպքի, երբ դուք գրավոր, այդ թվոմ` էլեկտրոնային դիմումի հիման վրա հրաժարվել եք հաշվի քաղվածքները փոստային կապի միջոցով ստանալու իրավունքից` դրանք էլեկտրոնային կամ կապի այլ միջոցներով, կամ մեր տարածքում առձեռն ստանալու պայմանով: Հաշվի քաղվածքների տրամադրման եղանակն ամրագրվում է Ավանդային պայմանագրով:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span>Ավանդային հաշվի վերաբերյալ քաղվածքների կրկնօրինակների կամ այլ տեղեկատվության (հաշվի վերաբերյալ տեղեկանքներ) տրամադրման դիմաց ձեզանից գանձվում է միջնորդավճար` ըստ մեր սակագների, որոնք ներկայացված են Ընթացիկ հաշիվներ բաժնում:</span>
              </li>
            </ul>
          </div>

          {/* Այլ պայմաններ */}
          <div>
            <h3 className="text-[18px] font-bold text-[#6a00d1] mb-4">Այլ պայմաններ</h3>
            <ul className="space-y-4 pl-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span>Եթե պայմանագրի ժամկետի ավարտից հետո չեք պահանջում վճարել ժամկետային ավանդի գումարը կամ պայմանագրով նախատեսված հանգամանքները երևան գալուց հետո վերադարձնել այլ պայմաններով ներդրված ավանդի գումարը, ապա ավանդային պայմանագիրը համարվում է երկարաձգված ցպահանջ ավանդի պայմաններով, եթե այլ բան նախատեսված չէ պայմանագրով:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span>Մենք չենք կարող միակողմանի նվազեցնել պայմանագրով որոշված ավանդի տոկոսագումարների չափը, որը դուք ներդրել եք որոշակի ժամկետի ավարտից կամ պայմանագրով նախատեսված հանգամանքները վրա հասնելուց հետո այն հետ ստանալու պայմանով, եթե այլ բան նախատեսված չէ օրենքով:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span>Օրենսդրությամբ սահմանված կարգով դուք իրավունք ունեք ավանդ ներդնել երրորդ անձանց անունով:</span>
              </li>
            </ul>
          </div>

          {/* Երաշխավորված ավանդների սահմանաչափերը */}
          <div>
            <h3 className="text-[20px] font-bold text-[#6a00d1] mb-4">Երաշխավորված ավանդների սահմանաչափերը</h3>
            <p className="mb-4">
              Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի` բանկում բացված հաշվարկային, ընթացիկ, ժամկետային, խնայողական կամ այլ հաշվի վրա գտնվող դրամական միջոցները համարվում են բանկային ավանդ: ՀՀ օրենքով երաշխավորված ավանդները հատուցում է Ավանդների հատուցումը երաշխավորող հիմնադրամը: <strong>Եթե դուք անվճարունակ բանկում ունեք`</strong>
            </p>

            <ul className="space-y-3 pl-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span>Միայն դրամային ավանդ` ապա երաշխավորված ավանդի չափը 16 միլիոն դրամ է:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span>Միայն արտարժութային ավանդ` ապա երաշխավորված ավանդի չափը 7 միլիոն դրամ է:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span>Դրամային ու արտարժութային ավանդներ, և դրամային ավանդը 7 միլիոն դրամից ավելի է, ապա երաշխավորվում է միայն դրամային ավանդը` մինչև 16 միլիոն դրամով:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
                <span>Դրամային ու արտարժութային բանկային ավանդներ, և ձեր դրամային ավանդի գումարը պակաս է 7 միլիոն դրամից, ապա երաշխավորվում է դրամային ավանդն ամբողջությամբ և արտարժութային ավանդը` 7 միլիոն դրամի և հատուցված դրամային բանկային ավանդի տարբերության չափով:</span>
              </li>
            </ul>

            <p className="text-[#1d1d1f]">
              <strong>Ծանոթագրություն.</strong> Նույն բանկում ունեցած ձեր բոլոր դրամային ավանդները համարվում են մեկ ավանդ, և բոլոր արտարժութային ավանդները` մեկ ավանդ: Եթե ունեք ավանդներ ՀՀ տարածքում գործող մի քանի բանկերում, ապա դրանք երաշխավորվում են յուրաքանչյուր բանկում` առավելագույն սահմանաչափով:
            </p>
          </div>

          {/* Պայմաններ և սակագներ */}
          <div>
            <h2 className="text-[24px] font-bold text-[#1d1d1f] mb-6">Պայմաններ և սակագներ</h2>

            {/* Աղյուսակ 1: Տարեկան տոկոսադրույք ըստ ժամկետների */}
            <div className="overflow-x-auto rounded-xl border border-[#f4ecfb] mb-8">
              <table className="w-full text-center text-[14px] sm:text-[15px] border-collapse bg-white">
                <thead>
                  <tr className="border-b border-[#f4ecfb] bg-[#fbf9fe]">
                    <th className="p-4 font-bold text-[#1d1d1f] text-left">Ներգրավվող գումարների սահմանաչափեր ըստ արդույթի</th>
                    <th className="p-4 font-bold text-[#1d1d1f]" colSpan={5}>Տարեկան տոկոսադրույք ըստ ժամկետների</th>
                  </tr>
                  <tr className="border-b border-[#f4ecfb] bg-[#fbf9fe] text-[13px] font-semibold text-gray-700">
                    <th className="p-3 text-left"></th>
                    <th className="p-3">91 - 180 օր</th>
                    <th className="p-3">181 - 365 օր</th>
                    <th className="p-3">366 - 545 օր</th>
                    <th className="p-3">546 - 730 օր</th>
                    <th className="p-3">731 - 1095 օր</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#f4ecfb]">
                    <td className="p-4 text-left font-medium text-[#1d1d1f]">200,000 - 25,000,000 ՀՀ դրամ</td>
                    <td className="p-4 text-[#333]">6 %</td>
                    <td className="p-4 text-[#333]">8 %</td>
                    <td className="p-4 text-[#333]">9.5 %</td>
                    <td className="p-4 text-[#333]">10 %</td>
                    <td className="p-4 text-[#333]">10.5 %</td>
                  </tr>
                  <tr className="border-b border-[#f4ecfb]">
                    <td className="p-4 text-left font-medium text-[#1d1d1f]">500 - 50,000 ԱՄՆ դոլար</td>
                    <td className="p-4 text-[#333]">2 %</td>
                    <td className="p-4 text-[#333]">3 %</td>
                    <td className="p-4 text-[#333]">4 %</td>
                    <td className="p-4 text-[#333]">4.5 %</td>
                    <td className="p-4 text-[#333]">5 %</td>
                  </tr>
                  <tr className="border-b border-[#f4ecfb]">
                    <td className="p-4 text-left font-medium text-[#1d1d1f]">500 - 40,000 Եվրո</td>
                    <td className="p-4 text-[#333]">1 %</td>
                    <td className="p-4 text-[#333]">1.5 %</td>
                    <td className="p-4 text-[#333]">2 %</td>
                    <td className="p-4 text-[#333]">2.5 %</td>
                    <td className="p-4 text-[#333]">3 %</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left font-medium text-[#1d1d1f]">30,000 - 3,000,000 ՌԴ ռուբլի</td>
                    <td className="p-4 text-[#333]">5 %</td>
                    <td className="p-4 text-[#333]">5.5 %</td>
                    <td className="p-4 text-[#333]">6 %</td>
                    <td className="p-4 text-[#333]">-</td>
                    <td className="p-4 text-[#333]">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ol className="space-y-4 list-decimal pl-5 text-[15px] text-[#333]">
              <li>
                Ավանդն ընդունվում է ֆիզիկական և իրավաբանական անձանցից, ինչպես Բանկի գործունեության վայրում, այնպես էլ` «EvocaTouch» կամ «EvocaOnline» հեռակառավարման համակարգերի միջոցով:
              </li>
              <li>
                Տոկոսագումարների պարբերաբար (ամենամսյա, եռամսյակային, կիսամյակային, տարեկան) վճարման դեպքում ՀՀ դրամով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.5 %-ով պակաս տոկոսադրույք, իսկ ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլիով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.25 %-ով պակաս տոկոսադրույք:
              </li>
              <li>
                Ավանդատուն կարող է համալրել (ավելացնել) իր Ավանդի գումարը սկսած նվազագույնը 200,000 ՀՀ դրամից, 500 ԱՄՆ դոլարից, 500 Եվրոյից կամ 30,000 ՌԴ ռուբլուց: <br />
                Ավելացման հնարավորությամբ ավանդ ներդնելու դեպքում ՀՀ դրամով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.5 %-ով պակաս տոկոսադրույք, իսկ ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլիով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.25 %-ով պակաս տոկոսադրույք: Կատարված բոլոր համալրումների հանրագումարը չի կարող գերազանցել Ավանդի ներդրման սկզբնական գումարը: Ավանդային պայմանագրի գործողության վերջին 3 (երեք) ամիսների ընթացքում Ավանդի գումարի համալրում չի թույլատրվում:
              </li>
            </ol>
          </div>

          {/* Լրացուցիչ պայմաններ */}
          <div>
            <h3 className="text-[18px] font-bold text-[#6a00d1] mb-4">Լրացուցիչ պայմաններ</h3>
            <ol className="space-y-4 list-decimal pl-5 text-[15px] text-[#333] mb-6">
              <li>Ավանդատուի ցանկության դեպքում, Բանկը կարող է տրամադրել վճարային քարտ առանց տարեկան սպասարկման վճարի գանձման:</li>
              <li>Տրամադրվող վճարային քարտի տեսակները, ըստ ներդրվող ավանդի գումարի սահմանվում է ստորև.</li>
            </ol>

            {/* Աղյուսակ 2: Վճարային քարտի տեսակները */}
            <div className="overflow-x-auto rounded-xl border border-[#f4ecfb]">
              <table className="w-full text-center text-[14px] sm:text-[15px] border-collapse bg-white">
                <thead>
                  <tr className="border-b border-[#f4ecfb] bg-[#fbf9fe]">
                    <th className="p-4 font-bold text-[#1d1d1f] text-left">Ավանդի արժույթ/Քարտի տեսակ</th>
                    <th className="p-4 font-bold text-[#1d1d1f]">Mastercard Standart/ Visa Classic</th>
                    <th className="p-4 font-bold text-[#1d1d1f]">Mastercard Gold/Visa Gold</th>
                    <th className="p-4 font-bold text-[#1d1d1f]">VISA Infinite</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#f4ecfb]">
                    <td className="p-4 text-left font-medium text-[#1d1d1f]">ՀՀ դրամ</td>
                    <td className="p-4 text-[#333]">500,000 - 25,000,000</td>
                    <td className="p-4 text-[#333]">25,000,001 -50,000,000</td>
                    <td className="p-4 text-[#333]">50,000,001 և ավել</td>
                  </tr>
                  <tr className="border-b border-[#f4ecfb]">
                    <td className="p-4 text-left font-medium text-[#1d1d1f]">ԱՄՆ դոլար</td>
                    <td className="p-4 text-[#333]">1,000 - 50,000</td>
                    <td className="p-4 text-[#333]">50,001 - 100,000</td>
                    <td className="p-4 text-[#333]">100,001 և ավել</td>
                  </tr>
                  <tr className="border-b border-[#f4ecfb]">
                    <td className="p-4 text-left font-medium text-[#1d1d1f]">Եվրո</td>
                    <td className="p-4 text-[#333]">1,000 - 40,000</td>
                    <td className="p-4 text-[#333]">40,001 - 100,000</td>
                    <td className="p-4 text-[#333]">100,001 և ավել</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left font-medium text-[#1d1d1f]">ՌԴ ռուբլի</td>
                    <td className="p-4 text-[#333]">60,000 - 3,000,000</td>
                    <td className="p-4 text-[#333]">3,000,001 - 7,000,000</td>
                    <td className="p-4 text-[#333]">7,000,001 և ավել</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FATCA Ակորդեոն */}
          <div className="pt-6">
            <h2 className="text-[24px] font-bold text-[#1d1d1f] mb-6">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
            
            <div className="rounded-[20px] border border-[#a855f7] bg-white p-6 shadow-sm">
              <button
                type="button"
                onClick={() => setOpenFatca(!openFatca)}
                className="flex w-full cursor-pointer items-center justify-between text-left"
              >
                <h3 className="text-[18px] font-bold text-[#1d1d1f]">
                  Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում
                </h3>
                <span className={`text-[18px] font-bold text-[#6a00d1] transition-transform duration-200 ${openFatca ? "rotate-180" : ""}`}>
                  ▲
                </span>
              </button>

              {openFatca && (
                <div className="mt-6 space-y-4 pt-4 border-t border-[#f0e6fc] text-[15px] text-[#333] leading-relaxed">
                  <p>Հարգելի Հաճախորդ,</p>
                  <p>
                    «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ն Հայաստանի Հանրապետության և Ամերիկայի Միացյալ Նահանգների միջև «Օտարերկրյա հաշիվների հարկային համապատասխանության ակտի» կիրարկմանն օժանդակելու համագործակցության մասին համաձայնագրի պահանջներից ելնելով իրավասու է հաճախորդներից պահանջել լրացուցիչ տեղեկատվություն, մասնավորապես հաճախորդներից պահանջվում է լրացնել վերջիններիս ԱՄՆ անձ կարգավիճակի նույնականացման համար պահանջվող հետևյալ ձևաթղթերը` <a href="#" className="text-[#6a00d1] underline font-semibold">Իրավաբանական անձ հաճախորդների ինքնահայտարարագրման ձև` Մոդել 2-ի համաձայն (FATCA)</a> կամ <a href="#" className="text-[#6a00d1] underline font-semibold">Ֆիզիկական անձ (ներառյալ անհատ ձեռնարկատեր) հաճախորդների ինքնահայտարարագրման ձև FATCA նպատակների համար</a>
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Banner */}
      <OnlineBankingBanner />


      {/* Floating Support Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <div className="hidden rounded-full bg-[#6a00d1] px-4 py-2 text-[14px] font-bold text-white shadow-lg sm:block">
          Գրեք մեզ, մենք օնլայն ենք !
        </div>
        <button type="button" className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#a855f7] text-white shadow-lg hover:bg-[#8b5cf6] transition-colors">
          📞
        </button>
      </div>
    </div>
  );
}