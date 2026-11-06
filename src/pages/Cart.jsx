import React from "react";
import { useCartStore } from "../useCartStore";

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const toggleCartItem = useCartStore((state) => state.toggleCartItem);

  if (cartItems.length === 0) {
    return (
      <div className="w-full py-20 text-center text-[#2b3a55] text-[18px]">
        Զամբյուղը դատարկ է
      </div>
    );
  }

  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',sans-serif] text-[#1d1d1f]">
      <section className="w-full py-12 px-6 sm:px-12 xl:px-[100px] max-w-[1500px] mx-auto">
        <h1 className="text-[28px] font-bold mb-8">Զամբյուղ ({cartItems.length})</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#f0ebf7] relative flex flex-col justify-between"
            >
              <button
                type="button"
                onClick={() => toggleCartItem(item)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-transform active:scale-95"
                title="Հեռացնել զամբյուղից"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="#ef4444"
                  stroke="#ef4444"
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
                <div className="h-16 flex items-center justify-center mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-[140px] object-contain"
                  />
                </div>

                <p className="text-[14px] sm:text-[15px] text-[#2b3a55] leading-relaxed text-center mb-8">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#f0ebf7] text-center mt-auto">
                {item.phone && (
                  <>
                    <span className="block text-[13px] font-semibold text-[#6a00d1] mb-1">
                      {item.title} Հաճախորդների սպասարկման հեռախոսահամար՝
                    </span>
                    <a
                      href={`tel:${item.phone}`}
                      className="text-[15px] font-bold text-[#1d1d1f] hover:text-[#6a00d1] block mb-3"
                    >
                      {item.phone}
                    </a>
                  </>
                )}

                {item.schedule && (
                  <div className="text-[13px] text-[#515365] whitespace-pre-line leading-relaxed">
                    <span className="font-semibold block mb-1">Աշխատանքային գրաֆիկ`</span>
                    {item.schedule}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}