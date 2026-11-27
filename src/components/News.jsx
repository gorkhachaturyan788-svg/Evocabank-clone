import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  "Գլխավոր",
  "Բանկային",
  "Հարցազրույցներ",
  "Պրոդուկտներ",
  "Նորարարություններ",
  "Կենսակերպ",
  "Մրցանակներ",
  "CSR",
  "Այլ",
];

const HERO_NEWS = {
  id: "bonds-usd-eur-2026",
  category: "Բանկային",
  title: "Evocabank-ը կրկին թողարկել է պարտատոմսեր՝ դոլարով ու եվրոյով",
  excerpt:
    "Evoca-ն կրկին թողարկել է դոլարով 5.5% և եվրոյով 4% եկամտաբերությամբ պարտատոմսեր՝ $20 մլն և €10 մլն ընդհանուր ծավալով:",
  date: "25.11.2026",
  image: "https://www.evoca.am/images-cache/news/1/17955955042904/780x585.png",
  slug: "/news/bonds-usd-eur-2026",
};

const DONT_MISS_FEATURED = {
  id: "amx-awards-2026",
  category: "Մրցանակներ",
  title: "Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր",
  excerpt:
    "Evocabank-ը AMX AWARDS 2026-ի ընթացքում արժանացել է «Դեպոզիտարիայի ավտոմատացված համակարգերի կիրառման",
  date: "14.05.2026",
  image: "https://www.evoca.am/images-cache/news/1/17815943976247/616x462.png",
  slug: "/news/amx-awards-2026",
};

const DONT_MISS_GRID = [
  {
    id: "best-sme-bank-armenia",
    category: "Մրցանակներ",
    title: "Evocabank. Լավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ...",
    date: "08.05.2026",
    image: "https://www.evoca.am/images-cache/news/1/17784860353078/450x295.png",
    slug: "/news/best-sme-bank-armenia",
  },
  {
    id: "crypto-account-evocatouch",
    category: "Պրոդուկտներ",
    title: "Քո Crypto հաշիվը՝ արդեն EvocaTOUCH-ում",
    date: "27.02.2026",
    image: "https://www.evoca.am/images-cache/news/1/17722002491716/450x295.png",
    slug: "/news/crypto-account-evocatouch",
  },
  {
    id: "karen-yeghiazaryan-interview",
    category: "Հարցազրույցներ",
    title: "Կարեն Եղիազարյանի հարցազրույցը միջազգային մամուլում",
    date: "19.02.2026",
    image: "https://www.evoca.am/images-cache/news/1/17720089281517/450x295.png",
    slug: "/news/karen-yeghiazaryan-interview",
  },
  {
    id: "evocabank-new-branch-event",
    category: "Բանկային",
    title: "Evocabank-ի նոր բացված մասնաճյուղը և հաճախորդների սպասարկումը",
    date: "12.01.2026",
    image: "https://www.evoca.am/images-cache/news/1/17683825017248/450x295.jpg",
    slug: "/news/evocabank-new-branch-event",
  },
];

const IMPORTANT_NEWS = {
  id: "block-transactions-one-click",
  category: "Բանկային",
  title: "Գործարքների արգելափակում 1 կոճակով",
  excerpt:
    "Հունիսի 1-ից EvocaTOUCH հավելվածում ու EvocaONLINE համակարգում հասանելի կլինի նոր՝ «Գործարքների արգելափակում» ֆունկցիոնալը:",
  date: "01.06.2026",
  image: "https://www.evoca.am/images-cache/news/1/17852444643548/780x585.png",
  slug: "/news/block-transactions-one-click",
};

const BOTTOM_NEWS = [
  {
    id: "new-colors-for-our-city",
    category: "Կենսակերպ",
    title: "Evocabank-ը նոր գույներ է տալիս մեր քաղաքին",
    date: "12.06.2026",
    image: "https://www.evoca.am/images-cache/news/1/17812556342544/438x328.png",
    slug: "/news/new-colors-for-our-city",
  },
  {
    id: "esg-management-system",
    category: "Բանկային",
    title: "ESG կառավարման համակարգը Evocabank-ում",
    date: "31.03.2026",
    image: "https://www.evoca.am/images-cache/news/1/17757342882486/438x328.png",
    slug: "/news/esg-management-system",
  },
  {
    id: "joined-amcham-armenia",
    category: "Բանկային",
    title: "Evocabank-ը միացել է AmCham Armenia-ին",
    date: "10.02.2026",
    image: "https://www.evoca.am/images-cache/news/1/17707319421286/438x328.png",
    slug: "/news/joined-amcham-armenia",
  },
];

export default function News() {
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredGrid = useMemo(() => {
    if (!activeCategory || activeCategory === "Գլխավոր" || activeCategory === "Այլ") {
      return DONT_MISS_GRID;
    }
    return DONT_MISS_GRID.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const filteredBottom = useMemo(() => {
    if (!activeCategory || activeCategory === "Գլխավոր" || activeCategory === "Այլ") {
      return BOTTOM_NEWS;
    }
    return BOTTOM_NEWS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const matchesCategory = (category) =>
    !activeCategory ||
    activeCategory === "Գլխավոր" ||
    activeCategory === "Այլ" ||
    category === activeCategory;

  const showHero = matchesCategory(HERO_NEWS.category);
  const showFeatured = matchesCategory(DONT_MISS_FEATURED.category);
  const showImportant = matchesCategory(IMPORTANT_NEWS.category);

  return (
    <div className="w-full overflow-x-hidden bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@400;500;600;700;800&display=swap');
      `}</style>

      {/* ---------- 1. Վերնագիր, կատեգորիաներ և «Բոլորը >» կոճակ ---------- */}
      <section className="mx-auto max-w-[1340px] px-6 pt-10 pb-10 lg:px-10">
        <h1 className="mb-7 text-[34px] font-bold leading-tight text-[#1d1d1f] sm:text-[38px]">
          Նորություններ
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            {CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(isSelected ? null : category)}
                  className={`cursor-pointer rounded-full px-4 py-1.5 text-[13px] font-medium transition-all ${
                    isSelected
                      ? "bg-[#6a00d1] text-white shadow-[0_6px_18px_rgba(106,0,209,0.22)]"
                      : "border border-[#e6e6ea] bg-white text-[#2b3a55] hover:border-[#6a00d1] hover:text-[#6a00d1]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#f1eafc] px-5 py-2 text-[13px] font-semibold text-[#6a00d1] transition-colors hover:bg-[#e5d6fa]"
          >
            <span>Բոլորը</span>
            <span aria-hidden="true">&gt;</span>
          </button>
        </div>
      </section>

      {/* ---------- 2. Hero Բլոկ (Պարտատոմսեր՝ դոլարով ու եվրոյով) ---------- */}
      {showHero && (
        <section className="relative w-full py-5">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
            <div className="relative rounded-bl-[44px] bg-[#f4f3f6] px-6 py-12 sm:px-12 lg:px-16 lg:py-14">
              <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-10 lg:grid-cols-12">
                {/* Ձախ տեքստային մաս */}
                <div className="lg:col-span-5">
                  <div className="mb-4 flex items-center gap-2.5">
                    <span className="inline-block h-4 w-3.5 bg-[#6a00d1]" aria-hidden="true" />
                    <span className="text-[14px] font-medium text-[#6a00d1]">
                      {HERO_NEWS.category}
                    </span>
                  </div>

                  <Link to={HERO_NEWS.slug} className="group block">
                    <h2 className="mb-4 text-[28px] font-bold leading-[1.25] text-[#1d1d1f] transition-colors group-hover:text-[#6a00d1] sm:text-[32px]">
                      {HERO_NEWS.title}
                    </h2>
                  </Link>

                  <p className="mb-8 max-w-[430px] text-[14px] leading-[1.65] text-[#4a4a4f]">
                    {HERO_NEWS.excerpt}
                  </p>

                  <div className="text-[12px] font-normal text-[#6e6e73]">{HERO_NEWS.date}</div>
                </div>

                {/* Աջ նկարը՝ վերին ձախ մանուշակագույն անկյունային շրջանակով */}
                <div className="relative lg:col-span-7">
                  <div
                    className="pointer-events-none absolute -top-4 -left-4 z-10 h-9 w-9 border-t-[5px] border-l-[5px] border-[#6a00d1]"
                    aria-hidden="true"
                  />
                  <Link
                    to={HERO_NEWS.slug}
                    className="group block overflow-hidden rounded-[4px] bg-[#161618] shadow-[0_14px_34px_rgba(0,0,0,0.08)]"
                  >
                    <img
                      src={HERO_NEWS.image}
                      alt={HERO_NEWS.title}
                      className="h-[340px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] sm:h-[420px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---------- 3. «Բաց մի թող» Բաժին ---------- */}
      <section className="mx-auto max-w-[1340px] px-6 pt-12 pb-12 lg:px-10">
        <h2 className="mb-9 text-[44px] font-bold leading-none tracking-[-0.02em] text-[#ececef] sm:text-[64px]">
          Բաց մի թող
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Ձախ մեծ նորություն՝ դեղին վերին ձախ անկյունային ակցենտով */}
          {showFeatured && (
            <article className="relative lg:col-span-6">
              <div
                className="pointer-events-none absolute -top-3 -left-3 z-10 h-14 w-14 bg-[#f5e136]"
                aria-hidden="true"
              />
              <Link
                to={DONT_MISS_FEATURED.slug}
                className="group relative z-20 block overflow-hidden rounded-[4px] bg-[#1d1d1f]"
              >
                <img
                  src={DONT_MISS_FEATURED.image}
                  alt={DONT_MISS_FEATURED.title}
                  className="h-[310px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] sm:h-[385px]"
                />
              </Link>

              <div className="mt-4 flex items-center gap-2.5">
                <span className="inline-block h-3.5 w-[3px] bg-[#f5b800]" aria-hidden="true" />
                <span className="text-[13px] font-medium text-[#2b3a55]">
                  {DONT_MISS_FEATURED.category}
                </span>
              </div>

              <Link to={DONT_MISS_FEATURED.slug} className="group block">
                <h3 className="mt-2.5 text-[22px] font-bold leading-[1.35] text-[#1d1d1f] transition-colors group-hover:text-[#6a00d1]">
                  {DONT_MISS_FEATURED.title}
                </h3>
              </Link>

              <p className="mt-3 text-[14px] leading-[1.6] text-[#5c5c62]">
                {DONT_MISS_FEATURED.excerpt}
              </p>

              <div className="mt-4 text-[12px] text-[#9a9aa0]">{DONT_MISS_FEATURED.date}</div>
            </article>
          )}

          {/* Աջ ցանց՝ 2x2 քարտեր */}
          <div className={showFeatured ? "lg:col-span-6" : "lg:col-span-12"}>
            <div className="grid grid-cols-1 gap-x-7 gap-y-8 sm:grid-cols-2">
              {filteredGrid.map((item) => (
                <article key={item.id} className="flex flex-col">
                  <Link
                    to={item.slug}
                    className="group block overflow-hidden rounded-[4px] bg-[#f4f3f6]"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[175px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </Link>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-block h-3.5 w-[3px] bg-[#6a00d1]" aria-hidden="true" />
                    <span className="text-[13px] font-medium text-[#2b3a55]">{item.category}</span>
                  </div>

                  <Link to={item.slug} className="group block">
                    <h3 className="mt-2 text-[16px] font-bold leading-[1.38] text-[#1d1d1f] transition-colors group-hover:text-[#6a00d1]">
                      {item.title}
                    </h3>
                  </Link>

                  <div className="mt-auto pt-2.5 text-[12px] text-[#a6a6ac]">{item.date}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 4. «Կարևոր» Բաժին ---------- */}
      {showImportant && (
        <section className="mx-auto max-w-[1340px] px-6 pt-6 pb-14 lg:px-10">
          <h2 className="mb-8 text-[44px] font-bold leading-none tracking-[-0.02em] text-[#ececef] sm:text-[64px]">
            Կարևոր
          </h2>

          <div className="rounded-[6px] bg-[#f4f3f6] p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              {/* Նկար՝ վերին աջ և ներքևի աջ անկյունային մանուշակագույն շրջանակներով */}
              <div className="relative lg:col-span-6">
                <div
                  className="pointer-events-none absolute -top-3 -right-3 z-10 h-8 w-8 border-t-[5px] border-r-[5px] border-[#6a00d1]"
                  aria-hidden="true"
                />
                <Link
                  to={IMPORTANT_NEWS.slug}
                  className="group block overflow-hidden rounded-[4px] bg-[#3a0968] shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                >
                  <img
                    src={IMPORTANT_NEWS.image}
                    alt={IMPORTANT_NEWS.title}
                    className="h-[290px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] sm:h-[340px]"
                  />
                </Link>
                <div
                  className="pointer-events-none absolute -right-4 -bottom-4 z-10 h-8 w-8 border-r-[5px] border-b-[5px] border-[#6a00d1]"
                  aria-hidden="true"
                />
              </div>

              {/* Տեքստային մաս */}
              <div className="lg:col-span-6 lg:pl-4">
                <div className="mb-3.5 flex items-center gap-2.5">
                  <span className="inline-block h-4 w-3.5 bg-[#6a00d1]" aria-hidden="true" />
                  <span className="text-[14px] font-medium text-[#6a00d1]">
                    {IMPORTANT_NEWS.category}
                  </span>
                </div>

                <Link to={IMPORTANT_NEWS.slug} className="group block">
                  <h3 className="mb-4 text-[26px] font-bold leading-[1.28] text-[#1d1d1f] transition-colors group-hover:text-[#6a00d1] sm:text-[30px]">
                    {IMPORTANT_NEWS.title}
                  </h3>
                </Link>

                <p className="mb-7 max-w-[460px] text-[14px] leading-[1.65] text-[#4a4a4f]">
                  {IMPORTANT_NEWS.excerpt}
                </p>

                <div className="text-[12px] text-[#7c7c82]">{IMPORTANT_NEWS.date}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---------- 5. Ստորին 3 Սյունակ Նորությունների Քարտեր ---------- */}
      <section className="mx-auto max-w-[1340px] px-6 pt-4 pb-20 lg:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {filteredBottom.map((item) => (
            <article key={item.id} className="flex flex-col">
              <Link
                to={item.slug}
                className="group block overflow-hidden rounded-[4px] bg-[#f4f3f6]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[235px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </Link>

              <div className="mt-4 flex items-center gap-2">
                <span className="inline-block h-3.5 w-[3px] bg-[#6a00d1]" aria-hidden="true" />
                <span className="text-[13px] font-medium text-[#2b3a55]">{item.category}</span>
              </div>

              <Link to={item.slug} className="group block">
                <h3 className="mt-2.5 text-[18px] font-bold leading-[1.35] text-[#1d1d1f] transition-colors group-hover:text-[#6a00d1]">
                  {item.title}
                </h3>
              </Link>

              <div className="mt-auto pt-4 text-[12px] text-[#b2b2b8]">{item.date}</div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}