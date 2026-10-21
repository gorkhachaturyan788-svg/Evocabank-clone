import React, { useState } from "react";
import { Link } from "react-router-dom";

// Ֆիլտրման կոճակները (Tabs)
const TABS = [
  { id: "all", label: "Բոլորը" },
  { id: "secured", label: "Գրավով ապահովված սպառողական վարկեր" },
  { id: "unsecured", label: "Անգրավ սպառողական վարկեր" },
  { id: "mortgage", label: "Հիփոթեքային վարկեր" },
  { id: "auto", label: "Ավտոմեքենաների ձեռքբերման ֆինանսավորում" },
  { id: "installment", label: "Ապառիկ" },
  { id: "online", label: "Օնլայն վարկեր" },
];

// Բոլոր 16 վարկատեսակները՝ ըստ Evocabank-ի կայքի
const LOANS_DATA = [
  {
    id: 1,
    category: ["unsecured", "online"],
    title: "Անգրավ սպառողական վարկ",
    description: "Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ. Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման:",
    image: "https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg",
    stats: [
      { label: "Գումար", value: "10 մլն. ֏", prefix: "Մինչև" },
      { label: "Ժամկետ", value: "60 ամիս", prefix: "Մինչև" },
      { label: "Տոկոսադրույք", value: "19%-ից", prefix: "սկսած" },
    ],
  },
  {
    id: 2,
    category: ["auto"],
    title: "Ավտոմեքենայի ձեռքբերման նպատակով վարկ",
    description: "Նոր ավտոմեքենա գնելու որոշո՞ւմ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը:",
    image: "https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg",
    stats: [
      { label: "Գումար", value: "50 մլն. ֏", prefix: "Մինչև" },
      { label: "Ժամկետ", value: "84 ամիս", prefix: "Մինչև" },
      { label: "Տոկոսադրույք", value: "13%-ից", prefix: "սկսած" },
      { label: "Կանխավճար", value: "10%-ից", prefix: "սկսած" },
    ],
  },
  {
    id: 3,
    category: ["secured"],
    title: "Գույքի գրավով ապահովված վարկ",
    description: "Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց:",
    image: "https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg",
    stats: [
      { label: "Գումար", value: "150 մլն. ֏", prefix: "Մինչև" },
      { label: "Վարկի մարման ժամկետը (անշարժ գույք)", value: "24-180 ամիս" },
      { label: "Վարկի մարման ժամկետը (շարժական գույք)", value: "60 ամիս" },
      { label: "Տոկոսադրույք", value: "14%-ից", prefix: "Սկսած" },
    ],
  },
  {
    id: 4,
    category: ["unsecured"],
    title: "Արևային կայանների ձեռք բերման վարկ EvocaPOWER",
    description: "Քո տան էլեկտրաէներգիան արևից, իսկ վարկը` Evoca-ից: EvocaPOWER վարկատեսակը տրամադրվում է առանց կանխավճարի, գրավի և բանկ այցելելու անհրաժեշտության:",
    image: "https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png",
    stats: [
      { label: "Գումար", value: "5 մլն. ֏", prefix: "Մինչև" },
      { label: "Ժամկետ", value: "60 ամիս", prefix: "Մինչև" },
      { label: "Տոկոսադրույք", value: "0%-ից", prefix: "Սկսած" },
    ],
  },
  {
    id: 5,
    category: ["secured"],
    title: "Ոսկու գրավով (լոմբարդային) վարկ",
    description: "Ձևակերպե՛ք ոսկյա իրերի գրավով վարկեր Evocabank-ի մասնաճյուղերում հաշված րոպեների ընթացքում և ստացե՛ք վարկ ոսկու գնահատված արժեքի մինչև 150%-ի չափով:",
    image: "https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg",
    stats: [
      { label: "Գումար", value: "50 մլն. ֏", prefix: "Մինչև" },
      { label: "Ժամկետ", value: "3-60 ամիս" },
      { label: "Տոկոսադրույք", value: "15.5%-ից", prefix: "սկսած" },
      { label: "Վարկ / գրավ հարաբերակցություն", value: "150%", prefix: "Մինչև" },
    ],
  },
  {
    id: 6,
    category: ["installment"],
    title: "Տեղում Ապառիկ",
    description: "Ցանկանո՞ւմ ես ձեռք բերել քո նախընտրած ապրանքը կամ օգտվել ծառայությունից, բայց չես ցանկանում ամբողջ գումարը վճարել միանգամից: Օգտվիր Evoca-ի տեղումապառիկից:",
    image: "https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg",
    stats: [
      { label: "Գումար", value: "5 մլն. ֏", prefix: "Մինչև" },
      { label: "Ժամկետ", value: "60 ամիս", prefix: "Մինչև" },
      { label: "Տոկոսադրույք", value: "0%-ից", prefix: "Սկսած" },
    ],
  },
  {
    id: 7,
    category: ["unsecured"],
    title: "Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ",
    description: "Աշխատավարձ ես ստանում մեր բանկային քարտով և ունե՞ս ընթացիկ ծախսերի հետ կապված խնդիրներ: Evocabank-ը Ձեզ կտրամադրի շահավետ պայմաններով վարկ:",
    image: "https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg",
    stats: [],
  },
  {
    id: 8,
    category: ["mortgage"],
    title: "Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով",
    description: "Ձեռք բերեք Ձեր նախընտրած բնակարանը հիփոթեքային վարկավորման միջոցով:",
    image: "https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg",
    stats: [
      { label: "Գումար", value: "80 մլն. ֏", prefix: "Մինչև" },
      { label: "Ժամկետ", value: "240 ամիս", prefix: "Մինչև" },
      { label: "Տոկոսադրույք", value: "13.2%", prefix: "սկսած" },
    ],
  },
  {
    id: 9,
    category: ["online", "unsecured"],
    title: "Action",
    description: "Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով` 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի:",
    image: "https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png",
    stats: [
      { label: "Սահմանաչափ", value: "10 մլն ֏", prefix: "Մինչև" },
      { label: "Մարման ժամկետ", value: "60 ամիս", prefix: "Մինչև" },
      { label: "Տարեկան անվանական տոկոսադրույք", value: "18%-ից", prefix: "սկսած" },
    ],
  },
  {
    id: 10,
    category: ["mortgage"],
    title: "Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին",
    description: "Evocabank-ը միշտ ձեր կողքին է: Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային Ղարաբաղից բռնի տեղահանված ընտանիքներին:",
    image: "https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png",
    stats: [
      { label: "Գումար", value: "55 մլն ֏", prefix: "Մինչև" },
      { label: "Մարման ժամկետ", value: "120 ամիս", prefix: "Մինչև" },
      { label: "Տոկոսադրույք", value: "13%" },
    ],
  },
  {
    id: 11,
    category: ["mortgage"],
    title: "Հողամասի ձեռքբերման վարկ",
    description: "Փնտրո՞ւմ ես հողատարածք` քո երազանքների տունը կառուցելու, հանգստի գոտի ստեղծելու կամ այլ նպատակների համար: Դու արդեն գտել ես այն:",
    image: "https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg",
    stats: [
      { label: "Գումար", value: "80 մլն. ֏", prefix: "Մինչև" },
      { label: "Ժամկետ", value: "240 ամիս", prefix: "Մինչև" },
      { label: "Տոկոսադրույք", value: "14%-ից", prefix: "սկսած" },
    ],
  },
  {
    id: 12,
    category: ["unsecured"],
    title: "Միկրովերանորոգման վարկ Բանկի ռեսուրսներով",
    description: "Պլանավորո՞ւմ ես բնակարանի վերանորոգում: Ստացիր Evocabank-ի միկրովերանորոգման վարկ և օգտվիր պետական սուբսիդավորման հնարավորությունից:",
    image: "https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png",
    stats: [
      { label: "Գումար", value: "5 մլն. ֏", prefix: "Մինչև" },
      { label: "Ժամկետ", value: "60 ամիս" },
      { label: "Տոկոսադրույք", value: "17%" },
    ],
  },
  {
    id: 13,
    category: ["auto"],
    title: "Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ",
    description: "Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ ճկուն պայմաններով և մատչելի գնով:",
    image: "https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png",
    stats: [
      { label: "Գումար", value: "50 մլն ֏", prefix: "Մինչև" },
      { label: "Ժամկետ", value: "60 ամիս", prefix: "Մինչև" },
      { label: "Տոկոսադրույք", value: "14%-ից", prefix: "Սկսած" },
    ],
  },
  {
    id: 14,
    category: ["online", "unsecured"],
    title: "Վճարային քարտով օվերդրաֆտ (վարկային քարտ)",
    description: "Ունես չնախատեսված ծախսե՞ր: Evocabank-ի Online Օվերդրաֆտը լավագույն կարճաժամկետ լուծումն է: 24/7 հասանելիություն և առանց փաստաթղթաշրջանառության:",
    image: "https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png",
    stats: [
      { label: "Սահմանաչափ", value: "10 մլն ֏", prefix: "Մինչև" },
      { label: "Մարման ժամկետ", value: "36 ամիս" },
      { label: "Տարեկան անվանական տոկոսադրույք", value: "16%-ից", prefix: "սկսած" },
    ],
  },
  {
    id: 15,
    category: ["secured"],
    title: "Անհատական վարկ «Ներդրումային»",
    description: "Ոչ թե վարկ, այլ ներդրում: Գիտե՞իր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ:",
    image: "https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png",
    stats: [
      { label: "Գումար", value: "350 մլն ֏", prefix: "Մինչև" },
      { label: "Մարման ժամկետ", value: "240 ամիս", prefix: "Մինչև" },
      { label: "Տոկոսադրույք", value: "15%" },
    ],
  },
  {
    id: 16,
    category: ["mortgage"],
    title: "Ավտոկայանատեղիի ձեռքբերման վարկ",
    description: "Evocabank-ի նոր վարկատեսակով վերջապես կարող ես ձեռք բերել սեփական ավտոկայանատեղի և մոռանալ մեքենան կանգնեցնելու անհարմարությունների մասին:",
    image: "https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg",
    stats: [
      { label: "Գումար", value: "8 մլն ֏", prefix: "Մինչև" },
      { label: "Մարման ժամկետ", value: "60 ամիս", prefix: "Մինչև" },
      { label: "Տոկոսադրույք", value: "16%" },
    ],
  },
];

export default function LoansPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredLoans = activeTab === "all"
    ? LOANS_DATA
    : LOANS_DATA.filter((item) => item.category.includes(activeTab));

  return (
    <div className="min-h-screen bg-white font-['Noto_Sans_Armenian','Noto_Sans',sans-serif] text-[#1d1d1f] pb-24">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-[60px] pt-8 sm:pt-12">
        {/* Վերնագիր */}
        <h1 className="text-3xl sm:text-[40px] font-bold text-[#1d1d1f] mb-8">
          Վարկեր
        </h1>

        {/* Ֆիլտրացիայի Tab-եր */}
        <div className="flex flex-wrap gap-2.5 mb-14">
          {TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-2xl text-[14px] font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#6a00d1] text-white shadow-sm"
                    : "bg-[#f2f2f7] text-[#1d1d1f] hover:bg-[#e5e5ea]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Վարկերի ցուցակ */}
        <div className="flex flex-col gap-16">
          {filteredLoans.map((loan) => (
            <div
              key={loan.id}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start pt-8 border-t border-[#f0f0f0] first:border-t-0 first:pt-0"
            >
              {/* Նկարի բլոկ */}
              <div className="w-full lg:w-[415px] shrink-0 overflow-hidden rounded-[20px] bg-[#f8f8fa]">
                <img
                  src={loan.image}
                  alt={loan.title}
                  className="w-full h-auto object-cover rounded-[20px] hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Տեքստային և ստատիստիկայի բլոկ */}
              <div className="flex-1 w-full">
                <h2 className="text-2xl sm:text-[28px] font-bold text-[#1d1d1f] mb-3 leading-snug">
                  {loan.title}
                </h2>
                <p className="text-[15px] leading-relaxed text-[#515154] mb-6 max-w-[820px]">
                  {loan.description}
                </p>

                {/* Ցուցանիշներ (Stats) */}
                {loan.stats.length > 0 && (
                  <div className="flex flex-wrap gap-x-10 gap-y-4 mb-8">
                    {loan.stats.map((st, idx) => (
                      <div key={idx} className="flex flex-col">
                        {st.prefix && (
                          <span className="text-[12px] text-[#8e8e93] font-medium mb-0.5">
                            {st.prefix}
                          </span>
                        )}
                        <span className="text-2xl sm:text-[28px] font-bold text-[#6a00d1] leading-none mb-1.5">
                          {st.value}
                        </span>
                        <span className="text-[12px] text-[#8e8e93] font-medium">
                          {st.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Մանրամասն կոճակ */}
                <Link
                  to={`/loans/${loan.id}`}
                  className="inline-flex items-center gap-2 bg-[#f0e6fa] hover:bg-[#e4d4f8] text-[#6a00d1] font-bold px-6 py-2.5 rounded-2xl text-[14px] transition-colors"
                >
                  Մանրամասն
                  <svg
                    className="w-3.5 h-3.5 stroke-current"
                    viewBox="0 0 12 12"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 2.5L8 6L4.5 9.5" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}