import React from 'react';

export default function EvocaSection() {
const cards = [
{
tag: "Թվային քարտեր",
title: "Evoca Digital քարտ",
text: "Evoca Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում։ Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը։",
},
{
tag: "Նվեր քարտեր",
title: "Evoca Gift Card",
text: "Գնիր Evoca Gift Card և նվիրիր նվեր սիրելիներիդ։ Քարտը հարմար է բոլոր առիթների համար։",
},
{
tag: "Նոր հավելված",
title: "EvocaTOUCH 2",
text: "EvocaTOUCH-ը պարզապես բանկային հավելված չէ, վստահ եղիր՝ այն քեզ համար դարձնելու է ավելի հարմար։",
},
{
tag: "Օնլայն վճարումներ",
title: "Արագ online վճարումներ",
text: "Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով՝ արագ և ապահով։ Այն հասանելի է 24/7։",
},
];

return ( <section className="relative min-h-[800px] overflow-hidden bg-white px-6 py-16">
{/* Մանուշակագույն կոր ֆոն */} <div className="absolute -top-44 -left-24 h-[570px] w-[115%] rounded-b-[48%] bg-[#6500df] md:h-[820px] md:-top-[430px]" />

```
  {/* Դեկորատիվ կետեր */}
  <div className="absolute left-[8%] top-20 h-[440px] w-[440px] rounded-full border-[8px] border-dotted border-purple-400/70" />

  <div className="relative z-10 mx-auto grid max-w-[1500px] items-center gap-8 lg:grid-cols-[400px_1fr]">
    {/* Արձան */}
    <div className="relative flex items-center justify-center lg:mt-12">
      <div className="absolute left-10 top-28 h-72 w-72 rounded-full bg-white" />

      <img
        src="https://www.evoca.am/img/statue-1.png"
        alt="Evocabank statue"
        className="relative z-10 w-full max-w-[440px] object-contain"
      />

      <span className="absolute left-8 top-28 z-20 text-7xl text-purple-300">
        ◢
      </span>
      <span className="absolute bottom-10 left-16 z-20 text-6xl text-pink-500">
        〽
      </span>
    </div>

    {/* Վերնագիր և քարտեր */}
    <div>
      <h2 className="mb-12 text-3xl font-extrabold text-white md:text-4xl">
        Լավագույնը Evocabank-ից
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.title}
            className="min-h-[260px] rounded-2xl bg-white py-5 shadow-[0_8px_30px_rgba(90,0,180,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="inline-block rounded-r-md bg-[#f0f0f0] px-7 py-3 text-xs font-bold text-purple-800">
              {card.tag}
            </span>

            <div className="px-7">
              <h3 className="mt-6 text-xl font-extrabold text-[#363636]">
                {card.title}
              </h3>

              <p className="mt-12 text-sm leading-[1.6] text-[#424242]">
                {card.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>


);
}
