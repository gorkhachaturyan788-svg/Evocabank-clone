import React, { useState } from "react";

export default function CreditHistoryScore() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Ի՞նչ է վարկային պատմությունը",
      a: "«Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի համաձայն վարկային տեղեկատվությունը վարկային տեղեկատվության սուբյեկտի կողմից ստանձնած պարտավորությունների վերաբերյալ տեղեկատվությունն է, որը ցույց է տալիս վարկային տեղեկատվության սուբյեկտի պարտքերը, վճարումները, վճարումների սովորությունները կամ պարտավորությունների կամ դրանց կատարման վերաբերյալ տեղեկատվություններ: Այն, որպես կանոն, օգտագործվում է ֆինանսական կազմակերպությունների կողմից վարկերի տրամադրման, ինչպես նաև արտադրող և վաճառող կամ ծառայություններ մատուցող կազմակերպությունների կողմից՝ տարաժամկետ վճարման սկզբունքով («ապառիկ») ապրանքների/ծառայությունների իրացման վերաբերյալ որոշում կայացնելու ընթացքում:",
    },
    {
      q: "Որո՞նք են վարկային պատմության ձևավորման աղբյուրները",
      a: "Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները, հետաձգված վճարումներով գործարքներ իրականացնող կազմակերպությունները, ինչպես նաև՝ հանրային տվյալների բազաներից ՀՀ կառավարության սահմանած կարգով վարկային բյուրոյին անձանց վերաբերյալ տեղեկություններ տրամադրող պետական մարմինները), որոնք տրամադրում են վարկային տեղեկատվության սուբյեկտի վերաբերյալ տեղեկություններ(տվյալներ):",
    },
    {
      q: "Ի՞նչ է վարկային բյուրոն",
      a: "Վարկային բյուրոն իրականացնում է իրավաբանական և ֆիզիկական անձանց ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկության (վարկային տեղեկատվության) հավաքագրում, մշակում, պահպանում, տրամադրում, ինչպես նաև դրանց հիման վրա վարկային զեկույցի պատրաստման գործունեություն:",
    },
    {
      q: "Ի՞նչ է վարկային զեկույցը",
      a: "Վարկային զեկույցը գրավոր կամ էլեկտրոնային փաստաթուղթ է, որը պարունակում է վարկային տեղեկատվության սուբյեկտի (ֆիզիկական կամ իրավաբանական) և նրա կողմից ստանձնած տնտեսվարող կազմակերպությունների նկատմամբ ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկատվություն: Զեկույցը կազմված է ԱՔՌԱ գործընկեր կազմակերպություններից ստացված տվյալների հիման վրա և արտացոլում է հարցման պահից վերջին 5 տարվա վարկային տվյալները:",
    },
    {
      q: "Որքա՞ն ժամանակ է պահպանվում վարկային պատմությունը",
      a: "Համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի 11-րդ հոդվածի դրույթների, «վարկային բյուրոյի կողմից տրամադրվող վարկային զեկույցներում չպետք է ներառվի վարկային զեկույցի տրամադրման պահին նախորդող հինգ տարուց ավելի վարկային տեղեկատվություն»:",
    },
    {
      q: "Ինչպե՞ս բարելավել վարկային պատմությունը",
      a: "Նախ, անհրաժեշտ է լիովին մարել նախկինում գոյացած ժամկետանց պարտավորությունների վճարումները: Բացի այդ, ներկա պահին գործող վարկերի մասով անհրաժեշտ է բացառել ժամկետանց՝ նույնիսկ մեկ օրվա կտրվածքով պարտավորությունների գոյացումը:",
    },
    {
      q: "Ո՞ւր դիմել եթե վարկային պատմությունը սխալ է",
      a: "Եթե վարկառուի վարկային պատմության մեջ առկա են սխալ կամ թերի տվյալներ, ապա պարզաբանման և ուղղման նպատակով վարկառուն կարող է այդ մասին տեղեկացնել վարկային բյուրոյին կամ ուղղակիորեն դիմել տեղեկատվություն տրամադրող սուբյեկտներին: Տեղեկացումը կարող է իրականացվել համապատասխան գրավոր դիմում ներկայացնելու միջոցով կամ էլեկտրոնային եղանակով՝ «Իմ ԱՔՌԱ» անձնական գրասենյակից:",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-['Noto_Sans_Armenian','Noto_Sans',sans-serif] text-[#1d1d1f] pb-24">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0 pt-8 sm:pt-12">
        {/* Վերնագիր */}
        <h1 className="text-3xl sm:text-[40px] font-bold text-[#1d1d1f] mb-4">
          Վարկային պատմություն և սքոր
        </h1>

        {/* Զգուշացում */}
        <div className="bg-[#fff4e5] border-l-4 border-[#ff9500] p-5 rounded-r-2xl mb-12">
          <p className="text-[#b36b00] font-bold text-[15px] sm:text-[16px]">
            Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ
          </p>
          <p className="text-[#804d00] text-[14px] sm:text-[15px] mt-1">
            Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր <strong>ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ</strong> վրա:
          </p>
        </div>

        {/* Հարցուպատասխան (Accordion / Accordion-style FAQ) */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#1d1d1f]">
            Հաճախ տրվող հարցեր վարկային պատմության մասին
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#e5e5ea] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-[100%] flex justify-between items-center p-5 sm:p-6 bg-[#f8f8fa] hover:bg-[#f2f2f7] text-left cursor-pointer transition-colors"
                >
                  <span className="font-bold text-[16px] sm:text-[18px] text-[#1d1d1f]">
                    - {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#6a00d1] transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="p-5 sm:p-6 bg-white border-t border-[#e5e5ea] text-[#515154] text-[15px] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Վարկի տրամադրման որոշման չափանիշները */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1d1d1f]">
            Վարկի տրամադրման վերաբերյալ որոշման կայացման չափանիշները
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Դրական որոշում */}
            <div className="bg-[#f2fbf5] border border-[#34c759]/30 p-6 sm:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#34c759]/20 flex items-center justify-center text-[#34c759] font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f]">
                  Դրական որոշման կայացման չափանիշները
                </h3>
              </div>
              <ul className="space-y-3 text-[#3a3a3c] text-[15px]">
                <li className="flex items-start gap-2">
                  <span className="text-[#34c759] font-bold">•</span>
                  Մեր կողմից ընդունելի գրավադրվող գույքը և երաշխավորությունները
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#34c759] font-bold">•</span>
                  Մշտական բնակության վայրը
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#34c759] font-bold">•</span>
                  Կայուն եկամտի աղբյուրը
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#34c759] font-bold">•</span>
                  Դրական կամ չեզոք վարկային պատմությունը
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#34c759] font-bold">•</span>
                  Արժանահավատ և լիարժեք փաստաթղթերը
                </li>
              </ul>
            </div>

            {/* Բացասական որոշում */}
            <div className="bg-[#fff5f5] border border-[#ff3b30]/30 p-6 sm:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#ff3b30]/20 flex items-center justify-center text-[#ff3b30] font-bold">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f]">
                  Բացասական որոշման կայացման չափանիշները
                </h3>
              </div>
              <ul className="space-y-3 text-[#3a3a3c] text-[15px]">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff3b30] font-bold">•</span>
                  Ոչ արժանահավատ փաստաթղթերը ներկայացնելը
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff3b30] font-bold">•</span>
                  Բացասական վարկային պատմությունը
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff3b30] font-bold">•</span>
                  Եկամտի աղբյուրի ռիսկայնությունը (անկայուն եկամուտներ, ոչ հստակ պարբերականությամբ)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff3b30] font-bold">•</span>
                  Գրավի պայմանագրի կամ երաշխավորության համաձայնագրերի համար անհրաժեշտ փաստաթղթեր չներկայացնելը
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Վարկային Սքոր բաժին */}
        <div className="bg-[#f8f8fa] border border-[#e5e5ea] p-8 sm:p-10 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold text-[#6a00d1] mb-4">
            Վարկային սքոր
          </h2>
          <p className="text-[#515154] text-[15px] sm:text-[16px] leading-relaxed mb-6">
            Բանկը կիրառում է իր կողմից մշակված վարկային սքորը վարկավորման վերաբերյալ որոշումների կայացման ժամանակ։ Վարկային սքորը հաճախորդի վարկային պատմության և որոկական ցուցանիշների ուսումնասիրության հիման վրա ձևավորվող վիճակագրական գնահատականն է, որն արտահայտում է հավանականությունը հայցվող վարկը ժամանակին և պատշաճ մարելու գծով։ Վարկային պատմությունը ներառվում է սքորի հաշվարկի մեջ դիմելու պահից վերջին 5 տարվա վաղեմությամբ։
          </p>

          <h3 className="font-bold text-[17px] text-[#1d1d1f] mb-3">
            Բանկի ներքին սքոր գնահատականի վրա ազդող հիմնական գործոններն են․
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-[#515154] mb-8">
            <li className="bg-white p-3.5 rounded-xl border border-[#e5e5ea]">
              <strong>ՖԱՅԿՈ սքոր․</strong> բարձր ՖԱՅԿՈ սքոր (դրական ազդեցություն)
            </li>
            <li className="bg-white p-3.5 rounded-xl border border-[#e5e5ea]">
              <strong>Եկամուտների մեծություն․</strong> բարձր եկամուտներ (դրական ազդեցություն)
            </li>
            <li className="bg-white p-3.5 rounded-xl border border-[#e5e5ea]">
              <strong>Գործող վարկերի քանակ․</strong> քանակի ավելացում (բացասական ազդեցություն)
            </li>
            <li className="bg-white p-3.5 rounded-xl border border-[#e5e5ea]">
              <strong>Վարկային բեռ․</strong> բարձր վարկային բեռ (բացասական ազդեցություն)
            </li>
            <li className="bg-white p-3.5 rounded-xl border border-[#e5e5ea]">
              <strong>Ժամկետանցների առկայություն․</strong> (բացասական ազդեցություն)
            </li>
            <li className="bg-white p-3.5 rounded-xl border border-[#e5e5ea]">
              <strong>Նոր հայտերի հաճախականություն․</strong> ավելացում (բացասական ազդեցություն)
            </li>
          </ul>

          <div className="bg-[#f0e6fa] p-5 rounded-2xl text-[#6a00d1] text-[14px] leading-relaxed mb-6">
            <strong>Ինչպես խուսափել վատթարացումից․</strong> Հաճախորդները չպետք է ունենան ժամկետանցներ, անհիմն ավելացնեն վարկային ծանրաբեռնվածությունը, վարկերի քանակը, հաճախակի վարկավորման հարցումներ ուղարկեն տարբեր կազմակերպություններին, հանդիսանան երաշխավոր անվստահելի անձանց համար։
          </div>

          <div className="text-[14px] text-[#8e8e93] pt-4 border-t border-[#e5e5ea]">
            Վարկային պատմության և ՖԱՅԿՈ սքորի վերաբերյալ առավել մանրամասն տեղեկատվություն կարելի է ստանալ այցելելով՝{" "}
            <a href="https://www.abcfinance.am" target="_blank" rel="noreferrer" className="text-[#6a00d1] underline">
              abcfinance.am
            </a>
            ,{" "}
            <a href="https://acra.am" target="_blank" rel="noreferrer" className="text-[#6a00d1] underline">
              acra.am
            </a>{" "}
            կայքեր։
          </div>
        </div>
      </div>
    </div>
  );
}