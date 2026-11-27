import React, { useState } from "react";
import { Link } from "react-router-dom";

const EVOCABANK_SERVICES = [
  {
    id: "loan-repayment",
    title: "Վարկի մարում",
    icon: "https://resource.evoca.am/images/webPayment/Account-Replenishment.png",
    path: "/instant-payments/evocabank/loan-repayment",
  },
  {
    id: "account-replenishment",
    title: "Հաշվի համալրում",
    icon: "https://resource.evoca.am/images/webPayment/Account-Replenishment.png",
    path: "/instant-payments/evocabank/account-replenishment",
  },
  {
    id: "card-replenishment",
    title: "Քարտի համալրում",
    icon: "https://resource.evoca.am/images/webPayment/cardtocard.png",
    path: "/instant-payments/evocabank/card-replenishment",
  },
];

const GlobeIcon = () => (
  <svg className="h-[19px] w-[19px]" viewBox="2.5 2.5 19 19" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" fill="currentColor" />
    <g stroke="#fff" strokeWidth="1.6" fill="none">
      <ellipse cx="12" cy="12" rx="4" ry="9.5" />
      <path d="M2.5 12h19M4 7h16M4 17h16" />
    </g>
  </svg>
);

function ServiceCard({ item }) {
  return (
    <Link
      to={item.path}
      className="group flex h-[325px] w-full flex-col items-center rounded-[18px] bg-white px-6 pt-[54px] pb-8 text-center shadow-[0_4px_22px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(106,0,209,0.1)]"
    >
      <div className="mb-7 flex h-[118px] w-[140px] items-center justify-center">
        <img
          src={item.icon}
          alt={item.title}
          className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
        />
      </div>

      <h2 className="max-w-[235px] text-[19px] font-medium leading-[1.35] text-[#1d1d1f] transition-colors group-hover:text-[#6a00d1]">
        {item.title}
      </h2>
    </Link>
  );
}

export default function EvocabankPayments() {
  const [selectedLang, setSelectedLang] = useState("HY");
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#f4f4f6] font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Աջ եզրի մանուշակագույն ուղղահայաց դեկորատիվ գիծը */}
      <div
        className="pointer-events-none fixed right-0 top-0 z-40 h-[560px] w-[6px] bg-[#6a00d1]"
        aria-hidden="true"
      />

      {/* Online Payment Top Sub-Header */}
      <div className="w-full border-b border-[#ececef] bg-white">
        <div className="mx-auto flex h-[64px] max-w-[1560px] items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-6 sm:gap-10">
            <Link to="/" className="flex items-center">
              <img
                src="https://payments.evoca.am/assets/images/logo.png"
                alt="Evocabank"
                className="h-[26px] w-auto object-contain"
              />
            </Link>
            <span className="text-[16px] font-normal tracking-[-0.01em] text-[#4a4a4f]">
              Online payment
            </span>
          </div>

          <div className="flex items-center gap-5 sm:gap-7">
            <a
              href="tel:+37410605555"
              className="hidden text-[15px] font-medium text-[#6a00d1] transition-opacity hover:opacity-80 sm:inline-block"
            >
              +374 10 605555
            </a>

            <div className="relative">
              <button
                type="button"
                aria-label="Լեզու"
                onClick={() => setLangMenuOpen((prev) => !prev)}
                className="flex cursor-pointer items-center justify-center text-[#1d1d1f] transition-colors hover:text-[#6a00d1]"
              >
                <GlobeIcon />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 top-[calc(100%+12px)] z-50 min-w-[90px] rounded-xl border border-[#e6e6e6] bg-white py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                  {["HY", "EN", "RU"].map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangMenuOpen(false);
                      }}
                      className={`block w-full px-4 py-1.5 text-left text-[14px] font-medium transition-colors hover:bg-[#f4ecfb] hover:text-[#6a00d1] ${
                        selectedLang === lang ? "font-bold text-[#6a00d1]" : "text-[#1d1d1f]"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/instant-payments/history"
              className="inline-flex h-[36px] items-center justify-center rounded-full bg-[#6a00d1] px-6 text-[14px] font-semibold text-white transition-all hover:bg-[#5500a8] active:scale-[0.98]"
            >
              Պատմություն
            </Link>
          </div>
        </div>
      </div>

      {/* Հիմնական բովանդակություն */}
      <main className="mx-auto max-w-[1440px] px-6 pt-8 pb-24">
        {/* Breadcrumb: Գլխավոր / EVOCABANK */}
        <nav aria-label="Breadcrumb" className="mx-auto mb-6 max-w-[1028px] text-[15px]">
          <Link
            to="/instant-payments"
            className="font-medium text-[#6a00d1] transition-opacity hover:opacity-80"
          >
            Գլխավոր
          </Link>
          <span className="mx-3 text-[#7a7d7e]">/</span>
          <span className="font-semibold tracking-[0.02em] text-[#4a4a4f]">EVOCABANK</span>
        </nav>

        {/* Վերնագիր՝ EVOCABANK */}
        <h1 className="mb-11 text-center text-[36px] font-bold tracking-[0.01em] text-[#6a00d1] sm:text-[40px]">
          EVOCABANK
        </h1>

        {/* 3 քարտ կենտրոնացված */}
        <div className="mx-auto grid max-w-[1028px] grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {EVOCABANK_SERVICES.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}