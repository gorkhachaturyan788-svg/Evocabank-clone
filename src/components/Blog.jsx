import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const CATEGORIES = ["Բիզնես", "Կենսակերպ", "Ներդրումներ"];

const HERO_POST = {
  id: "monthly-recap",
  category: "Կենսակերպ",
  title: "Monthly Recap",
  excerpt:
    "Monthly Recap-ն օգնում է ամփոփել ամիսը, հասկանալ ձեռքբերումները, բաց թողածները և փոքր քայլերով կատարել մեծ ու արդյունավետ փոփոխություններ:",
  date: "05.01.2026",
  image: "https://www.evoca.am/images-cache/blogs/1/17683779856926/780x585.png",
  slug: "/blog/monthly-recap",
};

const DONT_MISS_FEATURED = {
  id: "evocainvest-transactions",
  category: "Ներդրումներ",
  title: "EvocaINVEST. ինչպե՞ս կատարել գործարքներ",
  excerpt:
    "Այս բլոգում կներկայացնենք EvocaINVEST-ն, ինչպես նաև գործարքներ կնքելու համար առաջնային անհրաժեշտ գործիքներից օգտվելու քայլերը:",
  date: "15.05.2024",
  image: "https://www.evoca.am/images-cache/blogs/1/17186317173483/616x462.jpg",
  slug: "/blog/evocainvest-how-to-trade",
};

const DONT_MISS_GRID = [
  {
    id: "investment-dos-donts",
    category: "Ներդրումներ",
    title: "Ներդրումների կարելիներն ու չի կարելիները",
    date: "23.04.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/17138737784517/450x295.jpg",
    slug: "/blog/investment-dos-and-donts",
  },
  {
    id: "small-steps-big-income",
    category: "Ներդրումներ",
    title: "Փոքր քայլերով դեպի մեծ եկամուտներ",
    date: "11.04.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/17128187874533/450x295.jpg",
    slug: "/blog/small-steps-big-income",
  },
  {
    id: "start-business-armenia",
    category: "Բիզնես",
    title: "Ինչպե՞ս սկսել բիզնես Հայաստանում",
    date: "04.04.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/16691870758279/450x295.jpg",
    slug: "/blog/how-to-start-business-armenia",
  },
  {
    id: "lifestyle-inspiration",
    category: "Կենսակերպ",
    title: "Ժամանակակից կենսակերպ և ոգեշնչում",
    date: "28.03.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/16443271105456/450x295.png",
    slug: "/blog/lifestyle-inspiration",
  },
];

const BEST_POST = {
  id: "new-year-evoca-dream",
  category: "Կենսակերպ",
  title: "Ամանորի քո Evocaգույն երազանքը",
  excerpt:
    "Ավելի հաճելի է նվեր նվիրել, թե՞ ստանալ։ Ինչպե՞ս երազանքը պահել Ամանորի գիշերը։ Ո՞րն է ամենաթրենդային նվերի տարբերակը։ Բոլոր պատասխանները կգտնես բլոգում:",
  date: "21.12.2023",
  image: "https://www.evoca.am/images-cache/blogs/1/1703162335976/780x585.png",
  slug: "/blog/new-year-evoca-dream",
};

const BOTTOM_POSTS = [
  {
    id: "cinema-premieres-2021",
    category: "Կենսակերպ",
    title: "2021-ը դարձել է կինո պրեմիերաների մրցավազք",
    date: "01.02.2021",
    image: "https://www.evoca.am/images-cache/blogs/1/16329119822114/438x328.jpg",
    slug: "/blog/cinema-premieres-2021",
  },
  {
    id: "top-21-series-2021",
    category: "Կենսակերպ",
    title: "2021-ի ամենասպասված 21 սերիալները",
    date: "18.01.2021",
    image: "https://www.evoca.am/images-cache/blogs/1/16329974590876/438x328.png",
    slug: "/blog/top-21-series-2021",
  },
  {
    id: "in-demand-professions-future",
    category: "Կենսակերպ",
    title: "Ապագայի ամենապահանջված մասնագիտությունները",
    date: "22.06.2020",
    image: "https://www.evoca.am/images-cache/blogs/1/16335957379/438x328.png",
    slug: "/blog/in-demand-professions-future",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredGrid = useMemo(() => {
    if (!activeCategory) return DONT_MISS_GRID;
    return DONT_MISS_GRID.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const filteredBottom = useMemo(() => {
    if (!activeCategory) return BOTTOM_POSTS;
    return BOTTOM_POSTS.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const showHero = !activeCategory || HERO_POST.category === activeCategory;
  const showFeatured = !activeCategory || DONT_MISS_FEATURED.category === activeCategory;
  const showBest = !activeCategory || BEST_POST.category === activeCategory;

  return (
    <div className="w-full overflow-x-hidden bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@400;500;600;700;800&display=swap');
      `}</style>

      {/* ---------- 1. Վերնագիր, ֆիլտրեր և Արխիվ կոճակ ---------- */}
      <section className="mx-auto max-w-[1340px] px-6 pt-10 pb-10 lg:px-10">
        <h1 className="mb-7 text-[34px] font-bold leading-tight text-[#1d1d1f] sm:text-[38px]">
          Բլոգ
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(isSelected ? null : category)}
                  className={`cursor-pointer rounded-full px-5 py-2 text-[14px] font-medium transition-all ${
                    isSelected
                      ? "bg-[#6a00d1] text-white shadow-[0_6px_18px_rgba(106,0,209,0.22)]"
                      : "border border-[#e4e4e7] bg-white text-[#2b3a55] hover:border-[#6a00d1] hover:text-[#6a00d1]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <Link
            to="/blog/archive"
            className="inline-flex items-center gap-2 rounded-full bg-[#f1eafc] px-6 py-2.5 text-[14px] font-semibold text-[#6a00d1] transition-colors hover:bg-[#e5d6fa]"
          >
            <span>Արխիվ</span>
            <span aria-hidden="true">&gt;</span>
          </Link>
        </div>
      </section>

      {/* ---------- 2. Hero Բլոկ (Monthly Recap) ---------- */}
      {showHero && (
        <section className="relative w-full py-6">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
            <div className="relative rounded-bl-[44px] bg-[#f4f3f6] px-6 py-12 sm:px-12 lg:px-16 lg:py-14">
              <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-10 lg:grid-cols-12">
                {/* Ձախ տեքստային մաս */}
                <div className="lg:col-span-5">
                  <div className="mb-4 flex items-center gap-2.5">
                    <span className="inline-block h-4 w-3.5 bg-[#2d005c]" aria-hidden="true" />
                    <span className="text-[14px] font-medium text-[#2d005c]">
                      {HERO_POST.category}
                    </span>
                  </div>

                  <Link to={HERO_POST.slug} className="group block">
                    <h2 className="mb-4 text-[30px] font-bold leading-[1.2] text-[#1d1d1f] transition-colors group-hover:text-[#6a00d1] sm:text-[34px]">
                      {HERO_POST.title}
                    </h2>
                  </Link>

                  <p className="mb-8 max-w-[430px] text-[15px] leading-[1.65] text-[#4a4a4f]">
                    {HERO_POST.excerpt}
                  </p>

                  <div className="text-[13px] font-normal text-[#6e6e73]">{HERO_POST.date}</div>
                </div>

                {/* Աջ նկարը՝ վերին ձախ անկյունային շրջանակով */}
                <div className="relative lg:col-span-7">
                  <div
                    className="pointer-events-none absolute -top-4 -left-4 z-10 h-9 w-9 border-t-[5px] border-l-[5px] border-[#1d1d1f]"
                    aria-hidden="true"
                  />
                  <Link
                    to={HERO_POST.slug}
                    className="group block overflow-hidden rounded-[4px] bg-white shadow-[0_14px_34px_rgba(0,0,0,0.08)]"
                  >
                    <img
                      src={HERO_POST.image}
                      alt={HERO_POST.title}
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
          {/* Ձախ մեծ հոդված */}
          {showFeatured && (
            <article className="lg:col-span-6">
              <Link
                to={DONT_MISS_FEATURED.slug}
                className="group block overflow-hidden rounded-[4px] bg-[#161618]"
              >
                <img
                  src={DONT_MISS_FEATURED.image}
                  alt={DONT_MISS_FEATURED.title}
                  className="h-[310px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] sm:h-[385px]"
                />
              </Link>

              <div className="mt-4 flex items-center gap-2.5">
                <span className="inline-block h-3.5 w-[3px] bg-[#2d005c]" aria-hidden="true" />
                <span className="text-[13px] font-medium text-[#2d005c]">
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
              {filteredGrid.map((post) => (
                <article key={post.id} className="flex flex-col">
                  <Link
                    to={post.slug}
                    className="group block overflow-hidden rounded-[4px] bg-[#f4f3f6]"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-[175px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </Link>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-block h-3.5 w-[3px] bg-[#2d005c]" aria-hidden="true" />
                    <span className="text-[13px] font-medium text-[#2d005c]">{post.category}</span>
                  </div>

                  <Link to={post.slug} className="group block">
                    <h3 className="mt-2 text-[17px] font-bold leading-[1.35] text-[#1d1d1f] transition-colors group-hover:text-[#6a00d1]">
                      {post.title}
                    </h3>
                  </Link>

                  <div className="mt-auto pt-2.5 text-[12px] text-[#a6a6ac]">{post.date}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 4. «Լավագույն» Բաժին ---------- */}
      {showBest && (
        <section className="mx-auto max-w-[1340px] px-6 pt-6 pb-14 lg:px-10">
          <h2 className="mb-8 text-[44px] font-bold leading-none tracking-[-0.02em] text-[#ececef] sm:text-[64px]">
            Լավագույն
          </h2>

          <div className="rounded-[6px] bg-[#f4f3f6] p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              {/* Նկար՝ ներքևի աջ անկյունային շրջանակով */}
              <div className="relative lg:col-span-6">
                <Link
                  to={BEST_POST.slug}
                  className="group block overflow-hidden rounded-[4px] bg-[#4b1285] shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                >
                  <img
                    src={BEST_POST.image}
                    alt={BEST_POST.title}
                    className="h-[290px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] sm:h-[340px]"
                  />
                </Link>
                <div
                  className="pointer-events-none absolute -right-4 -bottom-4 z-10 h-8 w-8 border-r-[5px] border-b-[5px] border-[#1d1d1f]"
                  aria-hidden="true"
                />
              </div>

              {/* Տեքստային մաս */}
              <div className="lg:col-span-6 lg:pl-4">
                <div className="mb-3.5 flex items-center gap-2.5">
                  <span className="inline-block h-4 w-3.5 bg-[#2d005c]" aria-hidden="true" />
                  <span className="text-[14px] font-medium text-[#2d005c]">
                    {BEST_POST.category}
                  </span>
                </div>

                <Link to={BEST_POST.slug} className="group block">
                  <h3 className="mb-4 text-[26px] font-bold leading-[1.28] text-[#1d1d1f] transition-colors group-hover:text-[#6a00d1] sm:text-[30px]">
                    {BEST_POST.title}
                  </h3>
                </Link>

                <p className="mb-7 max-w-[460px] text-[14px] leading-[1.65] text-[#4a4a4f]">
                  {BEST_POST.excerpt}
                </p>

                <div className="text-[12px] text-[#7c7c82]">{BEST_POST.date}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---------- 5. Ստորին 3 Սյունակ Բլոգային Քարտեր ---------- */}
      <section className="mx-auto max-w-[1340px] px-6 pt-4 pb-20 lg:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {filteredBottom.map((post) => (
            <article key={post.id} className="flex flex-col">
              <Link
                to={post.slug}
                className="group block overflow-hidden rounded-[4px] bg-[#f4f3f6]"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[235px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </Link>

              <div className="mt-4 flex items-center gap-2">
                <span className="inline-block h-3.5 w-[3px] bg-[#2d005c]" aria-hidden="true" />
                <span className="text-[13px] font-medium text-[#2d005c]">{post.category}</span>
              </div>

              <Link to={post.slug} className="group block">
                <h3 className="mt-2.5 text-[18px] font-bold leading-[1.35] text-[#1d1d1f] transition-colors group-hover:text-[#6a00d1]">
                  {post.title}
                </h3>
              </Link>

              <div className="mt-auto pt-4 text-[12px] text-[#b2b2b8]">{post.date}</div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}