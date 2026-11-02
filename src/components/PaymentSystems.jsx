import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../useCartStore";

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

export default function PaymentSystems() {
  const [openAccordion, setOpenAccordion] = useState(0);
  const { cartItems, toggleCartItem } = useCartStore();

  const systems = [
    {
      id: "moneytun",
      title: "MoneyTun",
      image: "https://www.evoca.am/images-cache/payment_systems/1/1738743146575/200x100.png",
      description: "MoneyTun-ը գործում է 2007 թվականից: Կազմակերպության նպատակն է Ամերիկայի և Հայաստանի միջև ապահով ու պաշտպանված գործարքների ապահովումն է՝ հիմնված տասնամյակների փորձի վրա։ Դրամական փոխանցումները կազմում են MoneyTun-ի կողմից մատուցվող ծառայությունների զգալի մասը։",
      phone: "+374 10 27 72 85",
      schedule: "Երկուշաբթի-ուրբաթ 10:00-17:30\nՇաբաթ 10:00-14:00\nԿիրակի 10:00-13:00",
    },
    {
      id: "ria",
      title: "Ria",
      image: "https://www.evoca.am/images-cache/payment_systems/1/16510581265332/200x100.png",
      description: "Գործում է 182 երկրի ավելի քան 509,000 սպասարկման կետերում։ Փոխանցումները կատարվում են դոլարով և եվրոյով։ Միջնորդավճարը գանձվում է՝ ըստ RIA համակարգի սահմանված սակագների։",
      phone: "+374 94 23 59 00",
      schedule: "Երկուշաբթի-ուրբաթ, 09:00-18:00\n(Երևանի ժամանակով)\nՀաճախորդների աջակցության լեզուներ՝ ռուսերեն, անգլերեն",
    },
    {
      id: "ubpay",
      title: "UBpay",
      image: "https://www.evoca.am/images-cache/payment_systems/1/17304660969195/200x100.png",
      description: "UBPay – ը արագ դրամական փոխանցումների համակարգ է նախատեսված ֆիզիկական անձանց միջև ոչ առևտրային դրամական փոխանցումների իրականացման համար։ Համակարգի միջոցով կարող եք իրականացնել փոխանցումներ Հայաստանից դեպի ՌԴ և հակառակ ուղղությամբ։",
      phone: "+374 43 00 49 35",
      schedule: "",
    },
    {
      id: "intelexpress",
      title: "IntelExpress",
      image: "https://www.evoca.am/images-cache/payment_systems/1/16133289933621/200x100.png",
      description: "Գործում է 90 երկրի ավելի քան 57,000 կետերում (Ռուսաստան, ԱՊՀ այլ երկրներ, Մեծ Բրիտանիա, Չինաստան, եվրոպական երկրներ և այլն)։ Փոխանցումները կատարվում են ռուբլով, դոլարով և եվրոյով։ Միջնորդավճարը գանձվում է՝ ըստ IntelExpress-ի սահմանված սակագների։",
      phone: "+995 32 2 49 25 25",
      schedule: "",
    },
    {
      id: "stak",
      title: "STAK",
      image: "https://www.evoca.am/images-cache/payment_systems/1/17651707946608/200x100.png",
      description: "«ՍՏԱԿ» դրամական փոխանցումների հայաստանյան միասնական համակարգի գործունեության նպատակը ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար պատշաճ որակի դրամական փոխանցումների իրականացման կազմակերպումն է։ Համակարգը հնարավորություն է տալիս կատարել և ստանալ փոխանցումներ դոլարով և, ինչպես նաև եվրոյով։",
      phone: "",
      schedule: "",
    },
    {
      id: "moneygram",
      title: "MoneyGram",
      image: "https://www.evoca.am/images-cache/payment_systems/1/17651703221475/200x100.png",
      description: "Գործում է 170 երկրի ավելի քան 125,000 կետերում։ Արտերկրից Հայաստան փոխանցվում է դոլար և եվրո, իսկ Հայաստանից արտերկիր՝ միայն դոլար։ Միջնորդավճարը գանձվում է ըստ MoneyGram-ի սահմանված սանդղակի։",
      phone: "1-800-926-9400",
      schedule: "",
    },
  ];

  const accordions = [
    {
      title: "Վճարային համակարգերով փոխանցումների պայմաններ",
      content: (
        <p className="text-[15px] sm:text-[16px] text-[#2b3a55] leading-relaxed">
          Բոլոր միջազգային վճարային համակարգերով փոխանցումներն իրականացվում են անվտանգության բարձր ստանդարտներին համապատասխան՝ ակնթարթորեն կամ տեղում ստացման հնարավորությամբ։
        </p>
      ),
    },
  ];

  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',sans-serif] text-[#1d1d1f]">
      {/* Breadcrumbs */}
      <div className="px-6 pt-4 sm:px-8 xl:px-[62px] text-xs sm:text-sm text-[#515365] flex items-center gap-2">
        <Link to="/" className="hover:text-[#6a00d1]">
          <svg className="h-3.5 w-3.5 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </Link>
        <span>›</span>
        <Link to="/transfers" className="hover:text-[#6a00d1]">Անհատ</Link>
        <span>›</span>
        <Link to="/transfers" className="hover:text-[#6a00d1]">Փոխանցումներ</Link>
        <span>›</span>
        <span className="text-[#1d1d1f] font-semibold">Վճարային համակարգեր</span>
      </div>


      {/* Cards Grid with Hearts (Zustand Integration) */}
      <section className="w-full py-12 px-6 sm:px-12 xl:px-[100px] max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((sys) => {
            const isInCart = cartItems.some((item) => item.id === sys.id);

            return (
              <div 
                key={sys.id} 
                className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#f0ebf7] relative flex flex-col justify-between transition-all hover:shadow-lg"
              >
                {/* Սրտիկի կոճակ */}
                <button
                  onClick={() => toggleCartItem(sys)}
                  className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-md cursor-pointer transition-transform active:scale-95"
                  title="Ավելացնել զամբյուղ"
                >
                  <svg
                    className={`w-6 h-6 transition-colors duration-200 ${
                      isInCart ? 'text-red-500 fill-red-500' : 'text-gray-400 fill-none'
                    }`}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                <div>
                  {/* Լոգո */}
                  <div className="h-16 flex items-center justify-center mb-6">
                    <img src={sys.image} alt={sys.title} className="max-h-full max-w-[140px] object-contain" />
                  </div>

                  {/* Նկարագրություն */}
                  <p className="text-[14px] sm:text-[15px] text-[#2b3a55] leading-relaxed text-center mb-8">
                    {sys.description}
                  </p>
                </div>

                {/* Հեռախոսահամար և աշխատանքային գրաֆիկ */}
                <div className="pt-6 border-t border-[#f0ebf7] text-center mt-auto">
                  {sys.phone && (
                    <>
                      <span className="block text-[13px] font-semibold text-[#6a00d1] mb-1">
                        {sys.title} Հաճախորդների սպասարկման հեռախոսահամար՝
                      </span>
                      <a href={`tel:${sys.phone}`} className="text-[15px] font-bold text-[#1d1d1f] hover:text-[#6a00d1] block mb-3">
                        {sys.phone}
                      </a>
                    </>
                  )}

                  {sys.schedule && (
                    <div className="text-[13px] text-[#515365] whitespace-pre-line leading-relaxed">
                      <span className="font-semibold block mb-1">Աշխատանքային գրաֆիկ`</span>
                      {sys.schedule}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Անհրաժեշտ տեղեկատվություն / Ակորդեոն */}
       


      </section>
    </div>
  );
}