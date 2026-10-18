import { useEffect, useState } from "react";

const HAND_LEFT = "https://www.evoca.am/img/reviews/hand1.png";
const HAND_RIGHT = "https://www.evoca.am/img/reviews/hand2.png";

// Ավելացրեք մյուս կարծիքները այս զանգվածում՝ կետերը (dots) ավտոմատ կավելանան
const REVIEWS = [
  {
    id: 1,
    rating: 5,
    text: "Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրեց: Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից…",
    name: "Կամո Թովմասյան",
    role: "KAMOBLOG մեդիա-հարթակի հիմնադիր, influencer",
  },
];

const Star = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="#ffd60a" aria-hidden="true">
    <path d="M12 1.8l3 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.5l-6.3 3.7 1.5-7.1L1.8 9.2l7.2-.8z" strokeLinejoin="round" stroke="#ffd60a" strokeWidth="1.2" />
  </svg>
);

// Վարդագույն/մանուշակագույն չակերտներ
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

export default function ReviewsSlider({ autoPlayMs = 0 }) {
  const [active, setActive] = useState(0);
  const review = REVIEWS[active];

  useEffect(() => {
    if (!autoPlayMs || REVIEWS.length < 2) return;
    const t = setInterval(() => setActive((i) => (i + 1) % REVIEWS.length), autoPlayMs);
    return () => clearInterval(t);
  }, [autoPlayMs]);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f3f3f3] to-[#f1ecfa]">
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

      {/* Դեկորատիվ տարրեր (միայն մեծ էկրաններին) */}
      <div aria-hidden="true" className="pointer-events-none hidden lg:block">
        <img
          src={HAND_LEFT}
          alt=""
          className="rv-float absolute left-[14%] top-[40px] h-[150px] w-auto"
          style={{ animationDuration: "5s" }}
        />
        <div
          className="rv-float absolute left-[17%] top-[265px]"
          style={{ animationDuration: "6.5s", animationDelay: "-1.5s" }}
        >
          <Zigzag />
        </div>
        <img
          src={HAND_RIGHT}
          alt=""
          className="rv-float absolute right-[18%] top-[100px] h-[140px] w-auto"
          style={{ animationDuration: "6s", animationDelay: "-2.5s" }}
        />
        <div
          className="rv-float absolute right-[20%] top-[262px]"
          style={{ animationDuration: "7s", animationDelay: "-3.5s" }}
        >
          <Wave />
        </div>
      </div>

      {/* Բովանդակություն */}
      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center px-6 pb-12 pt-[60px] text-center">
        <div key={review.id} className="rv-fade flex flex-col items-center">
          <div className="flex gap-3" role="img" aria-label={`${review.rating} աստղ`}>
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} />
            ))}
          </div>

          <div className="relative mt-7 w-full max-w-[680px]">
            <QuoteMark className="absolute -left-[104px] -top-0.5 hidden lg:block" />
            <p className="line-clamp-4 text-[18px] leading-[29px] text-[#1f1f1f]">
              {review.text}
            </p>
            <QuoteMark className="absolute -right-[72px] bottom-0 hidden rotate-180 lg:block" />
          </div>

          <p className="mt-9 text-[17px] font-semibold text-[#1f1f1f]">{review.name}</p>
          <p className="mt-2 max-w-[560px] text-[17px] text-[#7a7a7a]">{review.role}</p>
        </div>

        {/* Կետեր */}
        <div className="mt-8 flex items-center gap-[22px]">
          {REVIEWS.map((r, i) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Կարծիք ${i + 1}`}
              aria-current={i === active}
              className={`h-3 w-3 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a0dd6] ${
                i === active ? "bg-[#6a0dd6]" : "bg-[#c8c8c8] hover:bg-[#b0b0b0]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}