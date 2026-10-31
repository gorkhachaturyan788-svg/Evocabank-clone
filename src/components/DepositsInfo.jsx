import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DESIGN_WIDTH = 1907;
const MIN_DESKTOP = 1280;

/* ---------- Տվյալներ ---------- */

const GENERAL = [
  { t: "«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ն (այսուհետ՝ Բանկ) իրականացնում է իրավաբանական և ֆիզիկական անձանցից (ռեզիդենտ, ոչ ռեզիդենտ) ժամկետային ավանդների (այսուհետ՝ Ավանդ) ներգրավում:" },
  { t: "Ավանդները ներգրավվում են՝ ՀՀ դրամով, ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլով:" },
  { t: ["Ավանդներն ընդունվում են ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով:", "Ավանդների դիմաց հաշվեգրվող տոկոսագումարների վճարումն իրականացվում է ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով:"] },
  { t: ["Ֆիզիկական անձ հաճախորդի կողմից Ավանդի ներդրումը ձևակերպվում է Բանկի կողմից սահմանված ձևի Հայտ-պայմանագիրը ստորագրելով և/կամ էլեկտրոնային հայտ ներկայացնելով:", "Հայտ-պայմանագրում/էլ. հայտում նշվում է Ավանդի տեսակը, գումարը, արժույթը, ժամկետը, տոկոսադրույքը և ըստ անհրաժեշտության այլ պայմաններ:"] },
  { t: "Ավանդների ներդրման համար գործառնական օր է համարվում՝", sub: [
    "Գլխամասում և մասնաճյուղերում ներդրվող ավանդների գծով՝ տվյալ ստորաբաժանման Հաճախորդների սպասարկման համար սահմանված ժամերը,",
    "Հեռակառավարման համակարգերի միջոցով ներդրվող ավանդների համար՝ տվյալ օրացուցային օրվա 24-ժամյա ժամանակահատվածը",
  ] },
  { t: "Ավանդների ներդրման և համալրման համար տվյալ գործառնական օրվա ընթացքում ներկայացված հայտերը կատարվում են միևնույն գործառնական օրվա ընթացքում:" },
  { t: "Ֆիզիկական անձ հանդիսացող Ավանդատուների ավանդները երաշխավորվում են համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի: Երաշխավորված ավանդների չափերին Հաճախորդները կարող են ծանոթանալ Բանկի ինտերնետային կայքում, Ավանդների տեղեկատվական ամփոփագրում, ինչպես նաև Ավանդ ներդնելու դեպքում վերջինիս տրամադրվող ծանուցման միջոցով:" },
  { t: "Ավանդի գումարի վերադարձը կատարվում է Ավանդի պայմանագրի վերջին օրը, իսկ եթե տվյալ օրը ոչ աշխատանքային է, ապա հաջորդ աշխատանքային օրը:" },
  { t: "Հաշվեգրված տոկոսների վճարումը իրականացվում է համաձայն Հաճախորդի կողմից Հայտ-պայմանագրում/Պայմանագրում նշված տոկոսների վճարման պարբերականության:" },
  { t: "Ավանդների հետ կապված կանխիկ գործառնությունների միջնորդավճարները սահմանվում են Բանկի «Սակագներով և դրույքներով» (TRM14-0002-02/1)-ով սահմանված դրամարկղային գործառնությունների սակագներով, բացառությամբ ՌԴ ռուբլով ավանդների:", sub: [
    "Կանխիկ ՌԴ ռուբլով ներդրված Ավանդը վերադարձվում է կանխիկ ՌԴ ռուբլով, իսկ անկանխիկ ՌԴ ռուբլով ներդրված Ավանդը վերադարձվում է անկանխիկ ՌԴ ռուբլով՝ առանց միջնորդավճարների գանձման:",
    "Անկանխիկ ՌԴ ռուբլով ներդրված Ավանդը կանխիկ ՌԴ ռուբլով վերադարձնելու դեպքում գանձվում է վերադարձման օրը ՌԴ ռուբլու կանխիկացման համար սահմանված միջնորդավճարը:",
    "Կանխիկ ՌԴ ռուբլով ներդրված Ավանդը անկանխիկ ՌԴ ռուբլով վերադարձնելու դեպքում գանձվում է վերադարձման օրը կանխիկ ՌԴ ռուբլու մուտքագրման համար սահմանված միջնորդավճարը:",
  ] },
  { t: "Արտարժույթով ներդրված ավանդների դիմաց հաշվեգրված տոկոսագումարները ավանդատուի ցանկությամբ կարող են վճարվել այն արտարժույթով, որով ներգրավվել է ավանդը, ինչպես նաև ՀՀ դրամով՝ հիմք ընդունելով վճարման օրը տվյալ արտարժույթի համար Բանկի կողմից սահմանված անկանխիկ առքի փոխարժեքը:" },
];

// Սևագիր տեքստեր (6 տող յուրաքանչյուրը)՝ ստուգիր և հաստատիր իրավաբանի/բանկի հետ
const ACCORDION = [
  { q: "Ավանդների ներգրավման պայմանները", body: [
    "Բանկը ներգրավում է ժամկետային ավանդներ իրավաբանական և ֆիզիկական անձանցից՝ ռեզիդենտներից և ոչ ռեզիդենտներից:",
    "Ավանդները ներգրավվում են ՀՀ դրամով, ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլով:",
    "Ավանդի ներդրումը ձևակերպվում է Հայտ-պայմանագրի ստորագրմամբ և/կամ էլեկտրոնային հայտի ներկայացմամբ:",
    "Հայտ-պայմանագրում նշվում են ավանդի տեսակը, գումարը, արժույթը, ժամկետը և տոկոսադրույքը:",
    "Ավանդները կարող են ներդրվել ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով:",
    "Ավանդի ներդրման համար գործառնական օրվա ժամերը կախված են ստորաբաժանումից կամ հեռակառավարման համակարգից:",
  ] },
  { q: "Ավանդների տոկոսագումարների հաշվարկման և վճարման կարգը", body: [
    "Ավանդի դիմաց տոկոսագումարները հաշվեգրվում են Հայտ-պայմանագրում նշված տոկոսադրույքով:",
    "Հաշվեգրված տոկոսների վճարումը կատարվում է Հայտ-պայմանագրում նշված պարբերականությամբ:",
    "Վճարումը կարող է իրականացվել ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով:",
    "Արտարժույթով ավանդների տոկոսները կարող են վճարվել նույն արտարժույթով կամ ՀՀ դրամով՝ Բանկի անկանխիկ առքի փոխարժեքով:",
    "Եթե վճարման կամ վերադարձի օրը ոչ աշխատանքային է, այն կատարվում է հաջորդ աշխատանքային օրը:",
    "Հաշվարկի օրինակները տե՛ս «Տոկոսագումարների հաշվարկման ներկայացուցչական օրինակներ» բաժնում:",
  ] },
  { q: "Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն", body: [
    "Ավանդ ներդնելիս Հաճախորդին տրամադրվում է Հայտ-պայմանագիրը՝ ավանդի բոլոր պայմաններով:",
    "Ավանդների տեղեկատվական ամփոփագիրը հասանելի է Բանկի ինտերնետային կայքում՝ «Փաստաթղթեր» բաժնում:",
    "Հաճախորդին տրամադրվում է նաև ավանդի երաշխավորման մասին ծանուցում:",
    "Ավանդի հետ կապված կանխիկ գործառնությունների միջնորդավճարները սահմանվում են Բանկի «Սակագներով և դրույքներով»:",
    "Լրացուցիչ տեղեկություններ կարող եք ստանալ Բանկի մասնաճյուղերում:",
    "Հարցերի դեպքում կարող եք զանգահարել՝ +374 10 510 510:",
  ] },
  { q: "Երաշխավորված ավանդների չափերը", body: [
    "Ֆիզիկական անձ ավանդատուների ավանդները երաշխավորվում են «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի համաձայն:",
    "Երաշխավորման չափերը սահմանվում են նույն օրենքով:",
    "Երաշխավորված ավանդների չափերին կարող եք ծանոթանալ Բանկի ինտերնետային կայքում:",
    "Այդ տեղեկությունները ներառված են նաև Ավանդների տեղեկատվական ամփոփագրում:",
    "Ավանդ ներդնելու դեպքում Հաճախորդին տրամադրվում է համապատասխան ծանուցում:",
    "Երաշխավորության վերաբերյալ լրացուցիչ հարցերով կարող եք դիմել Բանկին:",
  ] },
  { q: "Ավանդատուներին անվճար տրամադրվող վճարային քարտեր", body: [
    "Ավանդատուներին կարող են տրամադրվել Բանկի վճարային քարտեր՝ Բանկի սահմանած պայմաններով:",
    "Քարտերի տեսակները և պայմանները նշված են «Դեբետային և կրեդիտային քարտեր» տեղեկատվական ամփոփագրում:",
    "Այդ փաստաթուղթը հասանելի է այս էջի «Փաստաթղթեր» բաժնում:",
    "Քարտի տրամադրման և սպասարկման պայմաններին կարող եք ծանոթանալ «Քարտեր» բաժնում:",
    "Անվճար տրամադրման կոնկրետ պայմանների մասին կարող եք տեղեկանալ մասնաճյուղում:",
    "Քարտի ձևակերպումը կատարվում է Հաճախորդի հայտի հիման վրա:",
  ] },
  { q: "Տոկոսագումարների հաշվարկման ներկայացուցչական օրինակներ", body: [
    "Օրինակները ցույց են տալիս, թե ինչպես է հաշվարկվում ավանդի դիմաց տոկոսագումարը:",
    "Տոկոսագումարը կախված է ավանդի գումարից, ժամկետից և տոկոսադրույքից:",
    "Հաշվարկը կատարվում է Հայտ-պայմանագրում նշված տոկոսադրույքով և պարբերականությամբ:",
    "Օրինակները ներկայացվում են ըստ ավանդատեսակի և արժույթի:",
    "Օրինակները կրում են տեղեկատվական բնույթ և չեն հանդիսանում պայմանագրային առաջարկ:",
    "Ճշգրիտ պայմանները նշվում են ավանդի Հայտ-պայմանագրում:",
  ] },
  { q: "Ավանդի տարեկան տոկոսային եկամտաբերության չափը", body: [
    "Տարեկան տոկոսային եկամտաբերությունը ցույց է տալիս ավանդից ստացվող եկամտի տարեկան չափը:",
    "Այն կախված է ավանդի տեսակից, արժույթից, ժամկետից և տոկոսների վճարման պարբերականությունից:",
    "Եկամտաբերության չափը նշվում է Ավանդների տեղեկատվական ամփոփագրում:",
    "Տոկոսադրույքը նշվում է Հայտ-պայմանագրում՝ ավանդի ներդրման պահին:",
    "Ավանդատեսակների պայմանները տե՛ս «Ավանդներ» էջում:",
    "Ճշգրիտ չափերի համար դիմեք Բանկի մասնաճյուղ կամ զանգահարեք՝ +374 10 510 510:",
  ] },
  { q: "Բանկի կողմից առաջարկվող ավանդատեսակների տարեկան տոկոսային եկամտաբերության աղյուսակներ", body: [
    "Աղյուսակներում ներկայացված են Բանկի առաջարկվող ավանդատեսակների տարեկան տոկոսային եկամտաբերությունները:",
    "Տվյալները ներկայացվում են ըստ ավանդատեսակի, արժույթի և ժամկետի:",
    "Ավանդները ներդրվում են ՀՀ դրամով, ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլով:",
    "Ավանդատեսակների նկարագրությունը տե՛ս «Ավանդներ» էջում:",
    "Գործող տոկոսադրույքները նշվում են ավանդի Հայտ-պայմանագրում:",
    "Լրացուցիչ տեղեկությունների համար կարող եք դիմել Բանկի մասնաճյուղ:",
  ] },
];
const ACCORDION_PLACEHOLDER = "Այստեղ ավելացրու տեքստը (ACCORDION զանգված, body դաշտ):";

// href-երը փոխարինիր PDF-ների իրական հղումներով
const DOCS = [
  { label: "Տեղեկատվական ամփոփագիր (Ավանդներ) 09.06.2026", href: "#" },
  { label: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.", href: "#" },
  { label: "Դեբետային և կրեդիտային քարտեր (Տեղեկատվական ամփոփագիր) 17.03.2026", href: "#" },
];

/* ---------- Իկոնկաներ ---------- */

const HomeIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="#7a7d7e" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />
  </svg>
);
const Sep = () => (
  <svg className="h-[9px] w-[6px]" viewBox="0 0 6 10" fill="none" stroke="#7a7d7e" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 1l4 4-4 4" />
  </svg>
);
const Chevron = () => (
  <svg className="h-[9px] w-[14px] shrink-0" viewBox="0 0 14 9" fill="none" stroke="#6a00d1" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1.5 1.5l5.500 5.500 5.500-5.500" />
  </svg>
);
const FbIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M14 8.500V6.800c0-.8.2-1.300 1.400-1.300H17V2.200C16.700 2.200 15.800 2 14.700 2 12.400 2 10.800 3.400 10.800 6v2.500H8v3.400h2.800V22H14V11.900h2.600l.4-3.400z" />
  </svg>
);
const InIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 9h4v12H3zM5 3a2.300 2.300 0 1 1 0 4.600A2.300 2.300 0 0 1 5 3zM10 9h3.800v1.700h.1c.6-1 1.900-2 3.900-2 4.100 0 4.800 2.600 4.800 6.100V21h-4v-5.600c0-1.400 0-3.100-1.900-3.100s-2.200 1.500-2.200 3V21h-4z" />
  </svg>
);
const IgIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.400" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.300" cy="6.700" r="1.100" fill="currentColor" stroke="none" />
  </svg>
);
const DocIcon = () => (
  <svg className="h-[34px] w-[34px] shrink-0" viewBox="0 0 34 34" fill="none" stroke="#6a00d1" strokeWidth="1.600" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 29H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l7 7v5" />
    <path d="M19 3v7h7M10 13h5M10 17h8M10 21h5" />
    <circle cx="25" cy="25" r="6.500" />
    <path d="M25 21.500v7M22 26l3 3 3-3" />
  </svg>
);

/* ---------- Բաղադրիչներ ---------- */

function Num({ n }) {
  return <span className="w-[34px] shrink-0 pt-px text-[15px] font-semibold text-[#6a00d1]">{n}.</span>;
}

function GeneralList() {
  return (
    <ol className="m-0 flex list-none flex-col gap-5 p-0">
      {GENERAL.map((item, i) => (
        <li key={i} className="flex">
          <Num n={i + 1} />
          <div className="min-w-0 flex-1 text-[16.5px] leading-[26px] text-[#333]">
            {[].concat(item.t).map((line, k) => (
              <p key={k} className="m-0">{line}</p>
            ))}
            {item.sub && (
              <ol className="m-0 mt-[18px] flex list-none flex-col gap-5 p-0 pl-[10px]">
                {item.sub.map((s, k) => (
                  <li key={k} className="flex">
                    <Num n={k + 1} />
                    <p className="m-0 min-w-0 flex-1">{s}</p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Accordion() {
  const [open, setOpen] = useState(-1);
  return (
    <div className="flex flex-col gap-[15px]">
      {ACCORDION.map((a, i) => {
        const isOpen = open === i;
        return (
          <div key={a.q} className="rounded-[14px] border border-[#e6d7f8] bg-white">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex min-h-[58px] w-full cursor-pointer items-center gap-[26px] border-0 bg-transparent px-[21px] py-3 text-left text-[16px] font-semibold text-[#555]"
            >
              <span className={`flex transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}><Chevron /></span>
              {a.q}
            </button>
            {isOpen && (
              <div className="px-[21px] pb-6 pl-[61px] pr-8 text-[15px] leading-[26px] text-[#333]">
                {(a.body || [ACCORDION_PLACEHOLDER]).map((line, k) => (
                  <p key={k} className="m-0">{line}</p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Documents() {
  return (
    <ul className="m-0 flex list-none flex-col gap-[28px] p-0">
      {DOCS.map((d) => (
        <li key={d.label}>
          <a
            href={d.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[56px] items-center gap-3 rounded-lg bg-gradient-to-r from-[#f5f3f7] to-[#f9f0fd] px-3 text-[15px] font-semibold text-black no-underline transition-colors hover:to-[#f1e3fb]"
          >
            <DocIcon />
            {d.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Share() {
  const url = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const cls = "flex h-7 w-7 items-center justify-center text-[#8b8b8b] transition-colors hover:text-[#6a00d1]";
  return (
    <div className="sticky top-[140px] flex w-[52px] flex-col items-center gap-[14px] rounded-lg bg-[#f2f2f2] py-[10px]">
      <a className={cls} aria-label="Facebook" target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}><FbIcon /></a>
      <a className={cls} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}><InIcon /></a>
      <a className={cls} aria-label="Instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/evocabank"><IgIcon /></a>
    </div>
  );
}

const h2 = "m-0 font-['Montserrat','Noto_Sans_Armenian',sans-serif] font-bold text-[#1d1d1f]";

export default function DepositsInfo() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = document.documentElement.clientWidth;
      setScale(w >= MIN_DESKTOP ? w / DESIGN_WIDTH : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Noto+Sans+Armenian:wght@400;500;600;700&display=swap');`}</style>

      <div style={{ zoom: scale }}>
        <div className="mx-auto max-w-[1910px] px-6 pb-28 xl:px-[145px]">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="pt-[38px]">
            <ol className="m-0 flex list-none flex-wrap items-center gap-[14px] p-0 text-[14px] font-medium text-[#2b3a55]">
              <li className="flex items-center"><Link to="/" aria-label="Գլխավոր"><HomeIcon /></Link></li>
              <li aria-hidden="true" className="flex"><Sep /></li>
              <li><Link to="/" className="hover:text-[#6a00d1]">Անհատ</Link></li>
              <li aria-hidden="true" className="flex"><Sep /></li>
              <li><Link to="/deposits" className="hover:text-[#6a00d1]">Ավանդներ</Link></li>
              <li aria-hidden="true" className="flex"><Sep /></li>
              <li aria-current="page">Կարևոր տեղեկատվություն</li>
            </ol>
          </nav>

          <div className="mt-[56px] flex flex-col gap-8 xl:flex-row xl:gap-[126px] xl:pl-[169px]">
            <div className="hidden xl:block"><Share /></div>

            <div className="min-w-0 max-w-[1150px] flex-1">
              <section aria-labelledby="gen-title">
                <h2 id="gen-title" className={`${h2} mb-[28px] text-[30px] xl:text-[34px]`}>Ընդհանուր դրույթներ</h2>
                <GeneralList />
              </section>

              <section aria-labelledby="info-title" className="mt-[90px]">
                <h2 id="info-title" className={`${h2} mb-[34px] text-[22px] uppercase xl:text-[24px]`}>Անհրաժեշտ տեղեկատվություն</h2>
                <Accordion />
              </section>

              <section aria-labelledby="docs-title" className="mt-[90px]">
                <h2 id="docs-title" className={`${h2} mb-[30px] text-[24px]`}>Փաստաթղթեր</h2>
                <Documents />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}