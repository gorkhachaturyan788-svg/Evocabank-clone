import React, { useState } from "react";

const ChevronDown = ({ open }) => (
  <svg
    className={`h-4 w-4 transition-transform duration-200 text-[#6a00d1] ${open ? "rotate-180" : ""}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const FileIcon = () => (
  <svg className="h-6 w-6 text-[#6a00d1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="12" y2="12" />
    <line x1="9" y1="15" x2="15" y2="15" />
  </svg>
);

export default function EvocaSavingsAccount() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const accordions = [
    {
      title: "Անհրաժեշտ փաստաթղթեր",
      content: (
        <ul className="space-y-3 text-[15px] sm:text-[16px] text-[#2b3a55] pl-2">
          <li className="flex items-start gap-3">
            <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
            <span>Հաշվի բացման դիմում</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
            <span>Մեր պահանջով այլ փաստաթղթեր:</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Երաշխավորված ավանդների սահմանաչափերը",
      content: (
        <p className="text-[15px] sm:text-[16px] text-[#2b3a55] leading-relaxed">
          Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորված է «Ավանդների հատուցումը երաշխավորող համակարգի մասին» ՀՀ օրենքով: Դրամային ավանդների երաշխավորված սահմանափակումը մինչև 16 միլիոն ՀՀ դրամ է, իսկ արտարժույթով ավանդների դեպքում՝ մինչև 7 միլիոն ՀՀ դրամ: Բանկն ապահովում է ձեր միջոցների լիարժեք պաշտպանվածությունը և անվտանգությունը բոլոր պայմաններում:
        </p>
      ),
    },
    {
      title: "Խնայողական հաշիվների սպասարկում",
      content: (
        <p className="text-[15px] sm:text-[16px] text-[#2b3a55] leading-relaxed">
          Խնայողական հաշիվների բացումն ու սպասարկումն իրականացվում են բանկի սահմանված ներքին կանոնակարգերին համապատասխան: Հաճախորդը հնարավորություն ունի ցանկացած պահին հետևելու իր հաշվի շարժին EvocaONLINE կամ EvocaTOUCH հավելվածների միջոցով: Հաշվի հետ կապված բոլոր միջնորդավճարները և պայմանները թափանցիկ են և չունեն թաքնված ծախսեր:
        </p>
      ),
    },
    {
      title: "Խնայողական հաշվի պայմանագրի լուծման պայմաններ",
      content: (
        <p className="text-[15px] sm:text-[16px] text-[#2b3a55] leading-relaxed">
          Խնայողական հաշվի պայմանագիրը կարող է լուծվել հաճախորդի դիմումի համաձայն ցանկացած պահին՝ առանց որևէ տույժի կամ լրացուցիչ վճարի: Պայմանագիրը լուծելիս հաշվի վրա առկա մնացորդը և կուտակված տոկոսագումարները ամբողջությամբ փոխանցվում են հաճախորդի հիմնական բանկային հաշվին: Բանկը նույնպես իրավունք ունի միակողմանիորեն դադարեցնելու պայմանագիրը օրենքով սահմանված դեպքերում:
        </p>
      ),
    },
    {
      title: "Հաշիվ բացելու ընթացակարգ",
      content: (
        <p className="text-[15px] sm:text-[16px] text-[#2b3a55] leading-relaxed">
          Հաշիվ բացելու համար անհրաժեշտ է այցելել բանկի ցանկացած մասնաճյուղ կամ պարզապես դիմել առցանց՝ օգտվելով մեր հեռահար համակարգերից: Գործընթացը տևում է ընդամենը մի քանի րոպե և պահանջում է նվազագույն փաստաթղթեր: Հաշիվը ակտիվանում է անմիջապես, և դուք կարող եք սկսել կուտակել գումարներ:
        </p>
      ),
    },
    {
      title: "Հաշիվների սպասարկմանն առնչվող այլ դրույթներ",
      content: (
        <p className="text-[15px] sm:text-[16px] text-[#2b3a55] leading-relaxed">
          Բանկային հաշիվների վարման, արժույթների փոխանակման և հեռավար սպասարկման հետ կապված բոլոր լրացուցիչ կանոնները կարգավորվում են բանկի ընդհանուր պայմաններով: Հաճախորդներին տրամադրվում է շուրջօրյա աջակցություն ցանկացած հարցի դեպքում: Բանկը երסաշխավորում է տեղեկատվության գաղտնիությունն ու անվտանգությունը:
        </p>
      ),
    },
    {
      title: "ՈՒՇԱԴՐՈՒԹՅՈՒՆ",
      content: (
        <p className="text-[15px] sm:text-[16px] text-[#2b3a55] leading-relaxed">
          Հաշվիդ դրական մնացորդի նկատմամբ հաշվարկվող տոկոսագումարները ենթակա են հարկման ՀՀ օրենսդրությամբ սահմանված կարգով: Բանկն իրավունք ունի միակողմանիորեն փոխել տոկոսադրույքները՝ օրենքով և պայմանագրով նախատեսված կարգով տեղեկացնելով հաճախորդներին: Մանրամասն տեղեկությունների համար կարող եք կապ հաստատել բանկի հետ:
        </p>
      ),
    },
  ];

  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',sans-serif] text-[#1d1d1f]">
      {/* 1. Hero Section */}
      <section className="w-full bg-[#f8f7fa] py-8 px-4 sm:px-8 xl:px-[62px]">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[24px] bg-white shadow-sm flex flex-col lg:flex-row items-stretch">
          {/* Ձախ կողմ */}
          <div className="flex-1 bg-[#f4effa] p-8 sm:p-12 lg:p-16 flex flex-col justify-center rounded-b-[24px] lg:rounded-b-none lg:rounded-l-[24px]">
            <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#1d1d1f] leading-tight mb-6">
              Evoca խնայողական <br className="hidden sm:inline" />
              հաշիվ
            </h1>
            <p className="text-[#515365] text-base sm:text-lg leading-relaxed max-w-[480px]">
              Ստացիր եկամուտ՝ պարզապես գումարդ պահելով խնայողական հաշվիդ վրա։
            </p>
          </div>

          {/* Աջ կողմ */}
          <div className="flex-1 bg-[#f0ebf7] flex items-center justify-center min-h-[320px] lg:min-h-[420px] relative overflow-hidden">
            <img
              src="https://www.evoca.am/images-cache/menu/1/17906902726456/780x585.png"
              alt="Evoca խնայողական հաշիվ"
              className="w-full h-full object-cover object-center max-h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* 2. Content & Advantages Section */}
      <section className="w-full py-12 px-6 sm:px-12 xl:px-[160px] max-w-[1400px] mx-auto">
        {/* Նկարագրության տեքստեր */}
        <div className="mb-10 text-[16px] sm:text-[18px] leading-relaxed text-[#2b3a55] space-y-4">
          <p>
            Գումարդ ավելանա՞, թե՞ միշտ հասանելի մնա: Այլևս պետք չէ ընտրել:{" "}
            <span className="font-bold text-[#6a00d1]">
              Evoca խնայողական հաշվի
            </span>{" "}
            միջոցով կարող ես միաժամանակ և՛ խնայել, և՛ ավելացնել գումարը, և՛
            անհրաժեշտ պահին ունենալ դրա հասանելիությունը:
          </p>
          <p>
            Պահիր գումարդ Evoca խնայողական հաշվին և ստացիր մինչև{" "}
            <span className="font-bold text-[#6a00d1]">
              5.09% տարեկան տոկոսային եկամտաբերություն
            </span>
            : Իսկ երբ գումարդ անհրաժեշտ լինի, պարզապես փոխանցիր այն Evocabank-ում
            գործող քո մեկ այլ հաշվին:
          </p>
        </div>

        {/* Ինչո՞ւ Evoca խնայողական հաշիվ */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#6a00d1] mb-8">
          Ինչո՞ւ Evoca խնայողական հաշիվ
        </h2>

        {/* Առավելությունների ցանկ */}
        <div className="space-y-6 text-[#2b3a55]">
          <div>
            <h3 className="text-[17px] sm:text-[19px] font-bold text-[#6a00d1] mb-1">
              Գումարի աճ
            </h3>
            <p className="text-[15px] sm:text-[16px] leading-relaxed">
              Հաշվիդ դրական մնացորդի նկատմամբ տոկոսները հաշվարկվում են ամեն օր:
            </p>
          </div>

          <div>
            <h3 className="text-[17px] sm:text-[19px] font-bold text-[#6a00d1] mb-1">
              Միշտ հասանելիություն
            </h3>
            <p className="text-[15px] sm:text-[16px] leading-relaxed">
              Այս պահին հարկավո՞ր է գումար: Փոխանցիր այն Evocabank-ում գործող քո
              այլ հաշվին և օգտագործիր:
            </p>
          </div>

          <div>
            <h3 className="text-[17px] sm:text-[19px] font-bold text-[#6a00d1] mb-1">
              Ոչ մի սահմանափակում
            </h3>
            <p className="text-[15px] sm:text-[16px] leading-relaxed">
              Այսօր՝ մի փոքր քիչ, հաջորդ ամիս՝ ավելի շատ: Չկա պարտադիր ժամկետ
              կամ համալրման նվազագույն գումար:
            </p>
          </div>

          <div>
            <h3 className="text-[17px] sm:text-[19px] font-bold text-[#6a00d1] mb-1">
              Նախընտրելի արժույթ
            </h3>
            <p className="text-[15px] sm:text-[16px] leading-relaxed">
              Բացիր խնայողական հաշիվ ՀՀ դրամով, ԱՄՆ դոլարով կամ Եվրոյով:
            </p>
          </div>
        </div>

        {/* Ինչո՞ւ սկսել գումար կուտակել հենց այսօր */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#6a00d1] mt-12 mb-6">
          Ինչո՞ւ սկսել գումար կուտակել հենց այսօր:
        </h2>

        {/* Քանի որ bullet-ներ */}
        <div className="mb-10">
          <p className="text-[16px] sm:text-[18px] font-semibold text-[#2b3a55] mb-4">
            Քանի որ
          </p>
          <ul className="space-y-4 text-[15px] sm:text-[16px] text-[#2b3a55] pl-2">
            <li className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
              <span>Հաշվի բացումն ու սպասարկումն անվճար են,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
              <span>Բացման և համալրման նվազագույն գումար չկա,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
              <span>Գործարքի նվազագույն չափ չկա.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
              <span>Խնայելու պարտադիր ժամկետ չկա,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
              <span>
                Հաշիվը կարող ես համալրել ցանկացած պահի՝ Evocabank-ում գործող քո
                այլ հաշվից:
              </span>
            </li>
          </ul>
        </div>

        {/* Ստացիր մինչև 5.09% տարեկան տոկոսային եկամտաբերություն */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#6a00d1] mb-6">
          Ստացիր մինչև 5.09% տարեկան տոկոսային եկամտաբերություն
        </h2>

        <ul className="space-y-5 text-[15px] sm:text-[16px] text-[#2b3a55] pl-2 mb-10">
          <li className="flex items-start gap-3">
            <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
            <span>
              Եկամտաբերությունը կախված է հաշվիդ մնացորդից և ընտրված արժույթից:
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
            <span>
              Եթե օրվա վերջում հաշվիդ մնացորդը համապատասխանում է տվյալ արժույթի
              համար սահմանված նվազագույն շեմին, այդ օրվա համար հաշվարկվում է
              տոկոսագումար: Նվազագույն շեմերին և այլ պայմաններին կարող ես
              ծանոթանալ{" "}
              <a
                href="#terms"
                className="font-bold text-[#6a00d1] underline hover:opacity-80"
              >
                այստեղ
              </a>
              :
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="h-2 w-2 rounded-full bg-[#6a00d1] mt-2 shrink-0" />
            <span>
              Տոկոսները հաշվարկվում են ամեն օր, իսկ կուտակված տոկոսագումարը
              փոխանցվում է հաշվիդ յուրաքանչյուր եռամսյակի ավարտից հետո՝ հաջորդ
              ամսվա 1-ին օրը:
            </span>
          </li>
        </ul>

        {/* Պայմանագրային տեքստ */}
        <p className="text-[14px] sm:text-[15px] text-[#515365] leading-relaxed mb-12">
          Մեր և Ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են ՀԱՄԱԼԻՐ
          ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ, որը հրապարակային
          առաջարկ (օֆերտա) է և Ձեր կողմից համարվում է ընդունված այն պահից, երբ
          առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք ներկայացնում
          պատշաճ լրացված և վավերացված բանկային ծառայություններից օգտվելու
          հայտ/դիմում։ Համալիր բանկային ծառայությունների մատուցման պայմաններին
          կարող եք ծանոթանալ{" "}
          <a
            href="#terms"
            className="font-bold text-[#6a00d1] underline hover:opacity-80"
          >
            այստեղ
          </a>
          :
        </p>

        {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ */}
        <h2 className="text-xl sm:text-[22px] font-bold text-[#1d1d1f] mb-6">
          ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
        </h2>

        <div className="space-y-4 mb-16">
          {accordions.map((acc, idx) => {
            const isOpen = openAccordion === idx;
            return (
              <div
                key={idx}
                className="rounded-[16px] border border-[#d1b3ff] bg-white overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenAccordion(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer bg-white hover:bg-[#faf5ff] transition-colors"
                >
                  <span className="text-[17px] sm:text-[18px] font-bold text-[#6a00d1]">
                    {acc.title}
                  </span>
                  <ChevronDown open={isOpen} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0">
                    {acc.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Փաստաթղթեր */}
        <h2 className="text-xl sm:text-[22px] font-bold text-[#1d1d1f] mb-6">
          Փաստաթղթեր
        </h2>

        <div className="space-y-4">
          <a
            href="#download-1"
            className="flex items-center justify-between p-5 sm:p-6 rounded-[16px] bg-[#f8f7fa] hover:bg-[#f4effa] transition-colors group border border-transparent hover:border-[#d1b3ff]"
          >
            <span className="text-[15px] sm:text-[17px] font-semibold text-[#1d1d1f] group-hover:text-[#6a00d1] transition-colors">
              Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.
            </span>
            <FileIcon />
          </a>

          <a
            href="#download-2"
            className="flex items-center justify-between p-5 sm:p-6 rounded-[16px] bg-[#f8f7fa] hover:bg-[#f4effa] transition-colors group border border-transparent hover:border-[#d1b3ff]"
          >
            <span className="text-[15px] sm:text-[17px] font-semibold text-[#1d1d1f] group-hover:text-[#6a00d1] transition-colors">
              Խնայողական հաշվի պայմաններ և սակագներ տեղեկատվական ամփոփագիր 01.11.2026թ.
            </span>
            <FileIcon />
          </a>
        </div>
      </section>
    </div>
  );
}