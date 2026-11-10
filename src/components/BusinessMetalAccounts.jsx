import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HAND_LEFT = "https://www.evoca.am/img/reviews/hand1.png";
const HAND_RIGHT = "https://www.evoca.am/img/reviews/hand2.png";

const REVIEWS = [
  {
    id: 1,
    rating: 5,
    text: "Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրեց: Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից…",
    name: "Կամո Թովմասյան",
    role: "KAMOBLOG մեդիա-հարթակի հիմնադիր, influencer",
  },
  {
    id: 2,
    rating: 5,
    text: "Լավագույն նորարարական և թվային բանկ՝ լավագույն ծառայություններով և անձնակազմով:",
    name: "Էլեն Վարդանյան",
    role: "Հաճախորդ",
  },
  {
    id: 3,
    rating: 5,
    text: "Դեպի նոր իրականություն. ահա թե ուր ենք մենք շարժվում` ամեն մի նախագիծ Evocabank-ի հետ հաջողությամբ ավարտելիս: Ավելի քան 5 տարի համագործակցելով` կարելի է ասել, որ միասին անցել ենք մի մեծ ճանապարհ` լի",
    name: "Արամ Ազարյան",
    role: "Indigo Branding-ի հիմնադիր",
  },
  {
    id: 4,
    rating: 5,
    text: "Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ: Միայն այս հնարավորությունն ընձեռելով երիտասարդ ընտանիքներին` նման ցածր տոկոսով բնակարան ձեռք բերել, արժանի է մեծ հարգանքի: Շնորհակալ ենք, որ Դուք կաք:",
    name: "Սուսաննա Վանյան",
    role: "Հաճախորդ",
  },
  {
    id: 5,
    rating: 5,
    text: "Վստահելի և ժամանակակից բանկային համակարգ, որը միշտ պատրաստ է աջակցել բիզնեսի և անհատների զարգացմանը:",
    name: "Հաճախորդ",
    role: "Evocabank-ի հաճախորդ",
  },
];

const Star = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="#ffd60a" aria-hidden="true">
    <path d="M12 1.8l3 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.5l-6.3 3.7 1.5-7.1L1.8 9.2l7.2-.8z" strokeLinejoin="round" stroke="#ffd60a" strokeWidth="1.2" />
  </svg>
);

const QuoteMark = ({ className = "" }) => (
  <svg width="34" height="26" viewBox="0 0 34 26" fill="#6a0dd6" className={className} aria-hidden="true">
    <path d="M0 0h14v10L7 26H0z" />
    <path d="M20 0h14v10l-7 16h-7z" />
  </svg>
);

const Zigzag = () => (
  <svg width="64" height="54" viewBox="0 0 64 54" fill="none" stroke="#a45be0" strokeWidth="5" strokeLinecap="square" aria-hidden="true">
    <path d="M4 4l16 8-8 4 24 12-8 4 20 10" />
  </svg>
);

const Wave = () => (
  <svg width="84" height="26" viewBox="0 0 84 26" fill="none" stroke="#ff1fe0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 18l9-10 9 10 9-10 9 10 9-10 9 10 9-10 9 10" />
  </svg>
);

function ReviewsSlider({ autoPlayMs = 5000 }) {
  const [active, setActive] = useState(0);
  const review = REVIEWS[active];

  useEffect(() => {
    if (!autoPlayMs || REVIEWS.length < 2) return;
    const t = setInterval(() => setActive((i) => (i + 1) % REVIEWS.length), autoPlayMs);
    return () => clearInterval(t);
  }, [autoPlayMs]);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f3f3f3] to-[#f8f6fc] mt-16 py-16">
      <style>{`
        @keyframes rv-float {
          0%   { transform: translateY(0) rotate(-3deg); }
          100% { transform: translateY(-14px) rotate(5deg); }
        }
        @keyframes rv-fade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rv-float { animation: rv-float 5s ease-in-out infinite alternate; }
        .rv-fade  { animation: rv-fade .5s ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .rv-float, .rv-fade { animation: none; }
        }
      `}</style>

      {/* Դեկորատիվ ձեռքեր և զարդանախշեր ամբողջ լայնությամբ */}
      <div aria-hidden="true" className="pointer-events-none hidden lg:block">
        <img
          src={HAND_LEFT}
          alt=""
          className="rv-float absolute left-[6%] top-[40px] h-[150px] w-auto"
          style={{ animationDuration: "5s" }}
        />
        <div
          className="rv-float absolute left-[10%] top-[225px]"
          style={{ animationDuration: "6.5s", animationDelay: "-1.5s" }}
        >
          <Zigzag />
        </div>
        <img
          src={HAND_RIGHT}
          alt=""
          className="rv-float absolute right-[6%] top-[60px] h-[140px] w-auto"
          style={{ animationDuration: "6s", animationDelay: "-2.5s" }}
        />
        <div
          className="rv-float absolute right-[10%] top-[230px]"
          style={{ animationDuration: "7s", animationDelay: "-3.5s" }}
        >
          <Wave />
        </div>
      </div>

      {/* Բովանդակություն */}
      <div className="relative mx-auto flex w-full max-w-[1000px] flex-col items-center px-6 text-center">
        <div key={review.id} className="rv-fade flex flex-col items-center w-full">
          <div className="flex gap-3" role="img" aria-label={`${review.rating} աստղ`}>
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} />
            ))}
          </div>

          <div className="relative mt-7 w-full max-w-[720px]">
            <QuoteMark className="absolute -left-[60px] -top-2 hidden lg:block opacity-60" />
            <p className="text-[18px] sm:text-[20px] leading-[32px] text-[#1f1f1f] font-normal">
              {review.text}
            </p>
            <QuoteMark className="absolute -right-[60px] bottom-0 hidden rotate-180 lg:block opacity-60" />
          </div>

          <p className="mt-8 text-[18px] font-bold text-[#1f1f1f]">{review.name}</p>
          <p className="mt-1 max-w-[560px] text-[15px] text-[#7a7a7a]">{review.role}</p>
        </div>

        {/* Կետեր (Dots) */}
        <div className="mt-10 flex items-center gap-[16px]">
          {REVIEWS.map((r, i) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Կարծիք ${i + 1}`}
              aria-current={i === active}
              className={`h-3 w-3 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a0dd6] ${
                i === active ? "bg-[#6a0dd6] w-6" : "bg-[#c8c8c8] hover:bg-[#b0b0b0]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BusinessMetalAccounts() {
  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f] pb-16">
      {/* Ձախ կողմի սոց․ կայքերի կոճակներ */}
      <div className="fixed left-6 top-1/3 hidden flex-col gap-2 rounded-lg border border-[#e6e6e6] bg-white p-2 shadow-sm xl:flex z-10">
        <button type="button" className="p-1 text-gray-500 hover:text-[#6a00d1]">f</button>
        <button type="button" className="p-1 text-gray-500 hover:text-[#6a00d1]">in</button>
        <button type="button" className="p-1 text-gray-500 hover:text-[#6a00d1]">📷</button>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 pt-6 sm:px-6 xl:px-8">
        
        {/* Վերնագրի և Նկարի հատված (կորացված ֆոնով) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-6 bg-[#faf5ff] rounded-bl-[120px] p-8 sm:p-12 shadow-sm relative z-0">
            <div className="max-w-xl space-y-6">
              <h1 className="text-[32px] font-bold text-[#1d1d1f] xl:text-[42px] leading-tight">
                Առարկայազուրկ մետաղական հաշիվներ
              </h1>
              <p className="text-[16px] leading-relaxed text-[#333]">
                Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ, որոնք նախատեսված են անկանխիկ ոսկու հաշվառման համար: Այս ցպահանջ հաշիվները հնարավորություն են ընձեռում խնայողություններ կատարել անկանխիկ ոսկով, ինչպես նաև ավելացնել դրանք` միջազգային շուկայում ոսկու գնի բարձրացման շնորհիվ:
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16154599304948/780x585.jpg" 
              alt="Առարկայազուրկ մետաղական հաշիվներ" 
              className="w-full h-auto rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>

        {/* Տեքստային և կետային բովանդակություն */}
        <div className="max-w-[1200px] mx-auto space-y-6 text-[15px] text-[#333] leading-relaxed">
          <p>
            առանց նվազագույն մնացորդի պահանջի: Մեզ մոտ կարելի է գնել անկանխիկ ոսկի` սկսած 31 գրամից (ոսկու գնանշումը կատարվում է գրամով): Մեր կայքում հրապարակվում են ոսկու գնանշման օրական տվյալները, որոնք փոփոխվում են` կախված միջազգային շուկաներում ոսկու գնից:
          </p>

          <ul className="space-y-4 pl-2">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
              <span>Հաշիվներում անկանխիկ ոսկին հաշվառում ենք դրամով` ՀՀ Կենտրոնական բանկի հայտարարած հաշվարկային գնով և կշռային (գրամային) արտահայտությամբ` 0.01 գրամ ճշգրտությամբ կամ տրույական ունցիաներով` 0.001 տրույական ունցիա ճշգրտությամբ (մեկ տրույական ունցիան հավասար է 31.10348 գրամի):</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
              <span>Մետաղական հաշիվ/ներ բացելիս ղեկավարվում ենք ՀՀ օրենսդրությամբ, ՀՀ Կենտրոնական բանկի նորմատիվ ակտերով, որոշումներով, մեր ներքին իրավական ակտերով:</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
              <span>Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխամասային գրասենյակ և ցանկացած մասնաճյուղ: Մետաղական հաշիվների սպասարկման, գործառնությունների կատարման սակագներին և պայմաններին կարող եք ծանոթանալ <Link to="/about/tariffs/commissions" className="text-[#6a00d1] underline font-semibold">այստեղ</Link>:</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
              <div className="space-y-2">
                <p>Այս հաշիվներով կարող ենք իրականացնել հետևյալ գործառնությունները`</p>
                <ul className="pl-4 space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6a00d1] font-bold">—</span>
                    <span>հաշվի համալրում` բանկից անկանխիկ ոսկի գնելու և այն հաշվին մուտքագրելու, ինչպես նաև ձեր կամ այլ անձի` նույն բանկում կամ այլ բանկում առկա մետաղական հաշվից անկանխիկ ոսկու փոխանցելու միջոցով,</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6a00d1] font-bold">—</span>
                    <span>հաշվի ելքագրում` հաշվին առկա անկանխիկ ոսկին բանկին վաճառելու, ինչպես նաև ձեր կամ այլ անձի` նույն բանկում կամ այլ բանկում առկա մետաղական հաշվին անկանխիկ ոսկու փոխանցելու միջոցով:</span>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
              <span>Մետաղական հաշիվները կարող են գրավադրվել:</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#6a00d1] shrink-0" />
              <span>Հաշիվ բացելու համար անհրաժեշտ փաստաթղթերը`</span>
            </li>
          </ul>

          {/* Իրավաբանական անձանց դեպքում */}
          <div className="space-y-4 pt-4 pl-6">
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
          <div className="space-y-4 pt-4 pl-6">
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
      </div>

      {/* Ամբողջ լայնությամբ կարծիքների սլայդեր էջի վերջում */}
      <ReviewsSlider />

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