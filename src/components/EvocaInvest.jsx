import React, { useState } from "react";

export default function EvocaInvest() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Տվյալները հաջողությամբ ուղարկվեցին!");
  };

  return (
    <div className="w-full bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] text-[#1d1d1f]">
      {/* 1. Hero Section */}
      <section className="w-full bg-[#f8f5fc] py-12 md:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-10 px-6 lg:flex-row lg:px-16">
          <div className="max-w-[650px]">
            <h1 className="text-[32px] font-bold text-[#1d1d1f] md:text-[44px] leading-tight">
              Կատարիր ներդրումներ և ստացիր եկամուտ EvocaINVEST հավելվածով
            </h1>
            <p className="mt-6 text-[16px] leading-[1.7] text-[#4a4a4c] md:text-[18px]">
              EvocaINVEST հավելվածի միջոցով կարողես կատարել ներդրումներ մի շարք միջազգային ֆինանսական շուկաներում:
            </p>
          </div>

          <div className="w-full max-w-[600px] overflow-hidden rounded-[20px] bg-[#eadef7] p-4 md:p-8 flex items-center justify-center">
            <img
              src="https://www.evoca.am/images-cache/menu/1/17812682689927/780x585.png"
              alt="EvocaINVEST"
              className="h-auto w-full object-contain rounded-[12px]"
            />
          </div>
        </div>
      </section>

      {/* 2. Main Content & Instruments Section */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 lg:px-16 space-y-10">
        <div className="max-w-[900px] space-y-6 text-[16px] leading-[1.8] text-[#333]">
          <p className="font-semibold text-[18px] text-[#1d1d1f]">
            Apple, Tesla, Google, Amazon, թե՞ Nike:
          </p>
          <p>
            <span className="text-[#6a00d1] font-bold">EvocaINVEST</span>-ի միջոցով դու կարողես ներդրումներ կատարել միջազգային և տեղական կապիտալի շուկաներում: Իսկ բրոքերային հաշիվ կարողես բացել ընդամենը մի քանի րոպեում՝ անմիջապես <span className="text-[#6a00d1] font-bold">EvocaTOUCH</span> հավելվածից:
          </p>
          <p>
            Գնիր բաժնետոմսեր, պարտատոմսեր, ETF-ներ և կառավարիր պորտֆոլիոդ մեկ հարթակից:
          </p>

          <h3 className="text-[22px] font-bold text-[#6a00d1] pt-4">
            Քո ներդրումային գործիքները
          </h3>
          <p>
            <span className="text-[#6a00d1] font-bold">EvocaINVEST</span>-ը հնարավորություն է տալիս ներդրումներ կատարել ամերիկյան, եվրոպական և ասիական ֆոնդային բորսաներում՝ ընտրելով քեզ հարմար ռազմավարություն:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-[#1d1d1f]">Բաժնետոմսեր`</strong> ներդրումներ համաշխարհային առաջատար ընկերություններում
            </li>
            <li>
              <strong className="text-[#1d1d1f]">Պարտատոմսեր և Եվրապարտատոմսեր`</strong> ավելի կանխատեսելի ներդրումների և կայուն եկամտի հնարավորություն
            </li>
            <li>
              <strong className="text-[#1d1d1f]">ETF-ներ`</strong> դիվերսիֆիկացված ներդրումներ մեկ գործիքի միջոցով
            </li>
          </ul>

          <p className="pt-4 text-[#4a4a4c]">
            Անկախ նրանից՝ նֹր ես սկսում ներդրում կատարել, թե' արդեն ունես փորձ, կատարում ես երկարաժամկե՞տ, թե' կարճաժամկետ ներդրումներ, <span className="text-[#6a00d1] font-bold">EvocaINVEST</span>-ը տալիս է բոլոր անհրաժեշտ գործիքները քո ներդրումային ռազմավարության համար:
          </p>
        </div>

        {/* 3. Open Account in 3 Steps */}
        <div className="max-w-[1000px] bg-[#faf8fc] border border-[#dcd6f7] rounded-[24px] p-8 md:p-12 space-y-8 my-12">
          <h2 className="text-[26px] font-bold text-[#1d1d1f] md:text-[30px] text-center">
            Բացիր բրոքերային հաշիվ 3 պարզ քայլով
          </h2>

          <div className="space-y-6">
            <div>
              <h4 className="text-[18px] font-bold text-[#6a00d1]">1. Ներբեռնիր EvocaTOUCH հավելվածը</h4>
              <p className="text-[15px] text-[#4a4a4c] mt-1">
                Բանկային և ներդրումային գործառնությունները՝ մեկ հավելվածում: Հասանելի է iOS և Android համակարգերում: Ներբեռնելու համար անցիր <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="text-[#6a00d1] underline font-semibold">App Store</a> և <a href="https://play.google.com" target="_blank" rel="noreferrer" className="text-[#6a00d1] underline font-semibold">Google Play</a>:
              </p>
            </div>

            <div>
              <h4 className="text-[18px] font-bold text-[#6a00d1]">2. Բացիր Բրոքերային հաշիվ</h4>
              <p className="text-[15px] text-[#4a4a4c] mt-1">
                Մուտք գործիր հավելվածի «Հաշիվներ» բաժին, ընտրիր «Բրոքերային հաշիվ» և ավարտիր գրանցումը մի քանի րոպեում՝ առանց Բանկ այցելելու անհրաժեշտության:
              </p>
            </div>

            <div>
              <h4 className="text-[18px] font-bold text-[#6a00d1]">3. Սկսիր ներդրումներ կատարել</h4>
              <p className="text-[15px] text-[#4a4a4c] mt-1">
                Փնտրիր ընկերությունն ըստ անվան կամ ticker-ի EvocaINVEST հավելվածում, տեղադրիր լիմիտային կամ շուկայական պատվեր և հետևիր պորտֆոլիոդ:
              </p>
            </div>
          </div>

          {/* Steps Image Banner */}
          <div className="w-full bg-[#1d1d1f] rounded-[16px] p-4 flex justify-center overflow-hidden">
            <img 
              src="https://www.evoca.am/file_manager/other/invest%20steps%20(1).png" 
              alt="Ներդրման քայլեր" 
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* 4. Why Choose EvocaINVEST */}
        <div className="max-w-[900px] space-y-8">
          <h3 className="text-[24px] font-bold text-[#1d1d1f]">
            Ինչո՞ւ ընտրել EvocaINVEST ներդրումային հարթակը
          </h3>

          <div className="space-y-6 text-[15px] text-[#4a4a4c] leading-[1.8]">
            <div>
              <h4 className="text-[17px] font-bold text-[#6a00d1] mb-1">24/7 պատվերներ</h4>
              <p>Տեղադրիր պատվերդ ցանկացած ժամի, այն կհերթագրվի և կկատարվի ավտոմատ՝ բորսայի բացվելուն պես:</p>
            </div>

            <div>
              <h4 className="text-[17px] font-bold text-[#6a00d1] mb-1">Մրցակցային սակագներ</h4>
              <p>Մրցակցային և թափանցիկ միջնորդավճարներ: Ամբողջական սակագներին ծանոթանում ես նախքան գործարքը հաստատելը:</p>
            </div>

            <div>
              <h4 className="text-[17px] font-bold text-[#6a00d1] mb-1">Լիմիտային և շուկայական պատվերներ</h4>
              <p>Պատվերներն ավտոմատ կիրառվում են որպես լիմիտային՝ գնի ճշգրտության համար: Անհրաժեշտության դեպքում կարող ես ակնթարթորեն անցնել շուկայական պատվերի, եթե արագությունն ավելի կարևոր է:</p>
            </div>

            <div>
              <h4 className="text-[17px] font-bold text-[#6a00d1] mb-1">Զարգացրու ոչ միայն պորտֆոլիդ, այլ նաև գիտելիքդ</h4>
              <p>Միանալով EvocaINVEST տելեգրամյան ալիքին՝ դու կգտնես ներդրումների մասին պարզ և հասկանալի նյութեր, շուկայական հետազոտություններ, փորձագետների կարծիքներ և համաշխարհային շուկաների կարևոր թարմացումներ:</p>
              <p className="mt-2">
                Միացիր մեր տելեգրամյան ալիքին <a href="https://t.me" target="_blank" rel="noreferrer" className="text-[#6a00d1] underline font-bold">այս հղումով</a>:
              </p>
            </div>
          </div>
        </div>

        {/* 5. Contact Section & Exact Form Style */}
        <div className="max-w-[900px] mt-16 p-8 md:p-12 border border-[#dcd6f7] rounded-[24px] bg-[#f8f5fc]">
          <div className="text-center mb-8">
            <h2 className="text-[28px] font-bold text-[#1d1d1f]">
              EvocaINVEST հետադարձ կապ
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-[20px] shadow-sm border border-[#e6e6e6]">
            <div>
              <h4 className="text-[16px] font-bold text-[#1d1d1f] mb-4 pb-2 border-b border-[#f0f0f0]">
                Անձնական տվյալներ
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#7a7d7e]">
                      👤
                    </span>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="" 
                      className="w-full pl-10 pr-4 py-3 rounded-[12px] border border-[#dcd6f7] bg-white focus:outline-none focus:border-[#6a00d1]" 
                    />
                  </div>
                  <label className="block text-[13px] text-[#7a7d7e] mt-1">Անուն</label>
                </div>

                <div>
                  <input 
                    type="text" 
                    name="surname" 
                    value={formData.surname} 
                    onChange={handleChange} 
                    placeholder="" 
                    className="w-full px-4 py-3 rounded-[12px] border border-[#dcd6f7] bg-white focus:outline-none focus:border-[#6a00d1]" 
                  />
                  <label className="block text-[13px] text-[#7a7d7e] mt-1">Ազգանուն</label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[15px] font-bold text-[#1d1d1f] mb-2">Էլ. Հասցե</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#7a7d7e]">
                  ✉️
                </span>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="" 
                  className="w-full pl-10 pr-4 py-3 rounded-[12px] border border-[#dcd6f7] bg-white focus:outline-none focus:border-[#6a00d1]" 
                />
              </div>
            </div>

            <div>
              <label className="block text-[15px] font-bold text-[#1d1d1f] mb-2">Հեռախոսահամար</label>
              <div className="flex items-center rounded-[12px] border border-[#dcd6f7] bg-white px-4 py-3 focus-within:border-[#6a00d1]">
                <span className="flex items-center gap-1 font-semibold text-[#333] mr-3 border-r border-[#e6e6e6] pr-3">
                  🇦🇲 +374 ▼
                </span>
                <input 
                  type="text" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="" 
                  className="w-full focus:outline-none bg-transparent" 
                />
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button 
                type="submit" 
                className="w-full md:w-auto px-12 py-3 bg-[#2ab69e] text-white font-bold rounded-[12px] hover:bg-[#239984] transition-colors shadow-md"
              >
                Ուղարկել
              </button>
            </div>
          </form>
        </div>

        {/* 6. Video Tutorials Section (Big videos stacked one below another) */}
        <div className="mt-20 max-w-[900px]">
          <h3 className="text-[26px] font-bold text-[#1d1d1f] mb-8">
            EvocaINVEST օգտակար նյութեր
          </h3>

          <div className="flex flex-col gap-10">
            {/* Video 1 */}
            <div className="bg-[#faf8fc] border border-[#dcd6f7] rounded-[24px] overflow-hidden shadow-md flex flex-col">
              <div className="aspect-video w-full bg-black">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/5kUF-3KueZ8" 
                  title="EvocaINVEST Order replace" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 text-[18px] font-bold text-[#1d1d1f]">
                EvocaINVEST | Order replace
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-[#faf8fc] border border-[#dcd6f7] rounded-[24px] overflow-hidden shadow-md flex flex-col">
              <div className="aspect-video w-full bg-black">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/wax5BjEOAGQ" 
                  title="EvocaINVEST Sell with limit" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 text-[18px] font-bold text-[#1d1d1f]">
                EvocaINVEST | Sell with limit
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-[#faf8fc] border border-[#dcd6f7] rounded-[24px] overflow-hidden shadow-md flex flex-col">
              <div className="aspect-video w-full bg-black">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/oxxOZXf2kPA" 
                  title="EvocaINVEST Buying with market price" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 text-[18px] font-bold text-[#1d1d1f]">
                EvocaINVEST | Buying with market price
              </div>
            </div>

            {/* Video 4 */}
            <div className="bg-[#faf8fc] border border-[#dcd6f7] rounded-[24px] overflow-hidden shadow-md flex flex-col">
              <div className="aspect-video w-full bg-black">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/XCz2N5eicHs" 
                  title="EvocaINVEST Add indicators" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 text-[18px] font-bold text-[#1d1d1f]">
                EvocaINVEST | Add indicators
              </div>
            </div>

            {/* Video 5 */}
            <div className="bg-[#faf8fc] border border-[#dcd6f7] rounded-[24px] overflow-hidden shadow-md flex flex-col">
              <div className="aspect-video w-full bg-black">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/8_C9YpvlZAE" 
                  title="EvocaINVEST Buy limit show order" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 text-[18px] font-bold text-[#1d1d1f]">
                EvocaINVEST | Buy limit show order
              </div>
            </div>

            {/* Video 6 */}
            <div className="bg-[#faf8fc] border border-[#dcd6f7] rounded-[24px] overflow-hidden shadow-md flex flex-col">
              <div className="aspect-video w-full bg-black">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/3mPDelJ-KcM" 
                  title="EvocaINVEST Create favorite list" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 text-[18px] font-bold text-[#1d1d1f]">
                EvocaINVEST | Create favorite list
              </div>
            </div>

            {/* Video 7 */}
            <div className="bg-[#faf8fc] border border-[#dcd6f7] rounded-[24px] overflow-hidden shadow-md flex flex-col">
              <div className="aspect-video w-full bg-black">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/OIfnnN40_DA" 
                  title="EvocaINVEST Summary" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 text-[18px] font-bold text-[#1d1d1f]">
                EvocaINVEST | Summary
              </div>
            </div>
          </div>
        </div>

        {/* 7. Important Disclaimer */}
        <div className="mt-16 border-t border-[#e6e6e6] pt-8 text-[13px] text-[#7a7d7e] leading-[1.6] max-w-[900px]">
          <h4 className="font-bold text-[#1d1d1f] mb-2 text-[15px]">Կարևոր</h4>
          <p>
            EvocaINVEST-ը հնարավորություն է տալիս բացահայտել ներդրումային հնարավորություններ: Այս հարթակում և մյուս սոց. հարթակներում ներկայացված նյութերը բացառապես տեղեկատվական նպատակի համար են: Յուրաքանչյուր ներդրումային որոշում կայացվում է օգտատիրոջ կողմից՝ սեփական գնահատման հիման վրա: Ներդրումները կապված են ռիսկերի հետ, հետևաբար նախորդ ցուցանիշները չեն կարող դիտվել որպես ապագա արդյունքների երաշխիք:
          </p>
        </div>
      </section>
    </div>
  );
}