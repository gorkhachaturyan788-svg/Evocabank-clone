import React from "react";

export default function RepoTransactions() {
  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f]">
      {/* 1. Hero Section */}
      <section className="w-full bg-[#f8f5fc] py-12 md:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-10 px-6 lg:flex-row lg:px-16">
          <div className="max-w-[650px]">
            <h1 className="text-[32px] font-bold text-[#1d1d1f] md:text-[44px] leading-tight">
              Ռեպո/Հակադարձ Ռեպո գործարքներ
            </h1>
            <p className="mt-6 text-[16px] leading-[1.7] text-[#4a4a4c] md:text-[18px]">
              Կարճաժամկետ դրամական միջոցներ ներգրավելու և տեղաբաշխելու նպատակով Evocabank-ն իրականացնում է Ռեպո/Հակադարձ Ռեպո գործարքներ: Ռեպո/Հակադարձ Ռեպո գործարքների շնորհիվ՝ Բանկը կատարում է կարճաժամկետ իրացվելիության կառավարում[cite: 9]:
            </p>
          </div>

          <div className="w-full max-w-[600px] overflow-hidden rounded-[20px] bg-[#eadef7] p-4 md:p-8 flex items-center justify-center">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg"
              alt="Ռեպո/Հակադարձ Ռեպո գործարքներ"
              className="h-auto w-full object-contain rounded-[12px]"
            />
          </div>
        </div>
      </section>

      {/* 2. Main Content & Details Section */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 lg:px-16 pb-20">
        <div className="max-w-[900px] space-y-6 text-[16px] leading-[1.8] text-[#333]">
          <p>
            Բանկը Ռեպո/Հակադարձ Ռեպո գործարքներ է կնքում բացառապես Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից գրանցված և լիցենզավորված, մասնագիտացված ընկերությունների հետ (Բանկեր, Ներդրումային ընկերություններ, Ներդրումային ֆոնդեր, Վարկային կազմակերպություններ, Ապահովագրական ընկերություններ)[cite: 10]:
          </p>
          <p>
            Գործարքները կնքվում են ՀՀ պետական գանձապետական և ԿԲ-ի կողմից թողարկված պարտատոմսերով, ինչպես նաև ՀՀ առևտրային բանկերի, վարկային կազմակերպությունների կողմից թողարկված և Հայաստանի ֆոնդային բորսայում ցուցակված այլ կորպորատիվ պարտատոմսերով[cite: 10]:
          </p>
          <p>
            Գործարքի հիմնական պայմանները որոշվում են երկկողմ բանակցությունների արդյունքում[cite: 10]:
          </p>
        </div>
      </section>
    </div>
  );
}