import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CARDS_DATA = [
  {
    id: 'evoca-travel-card',
    name: 'Evoca Travel Card',
    description: 'Սիրո՞ւմ ես ճամփորդել․ ուրեմն ժամանակն է ձեռք բերելու Evoca Mastercard Travel Card, որը կդառնա քո ճամփորդական անբաժան ընկերը:',
    img: 'https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png',
    categories: ['all', 'premium', 'mastercard'],
    stats: [
      { label: 'Cashback արտասահմանում իրականացրած վճարումների համար', val: 'Մինչև 1.5%' },
      { label: 'Lounge Key սրահներ քեզ և հյուրերիդ համար', val: 'Անվճար 6 մուտք' },
      { label: 'Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար', val: 'Անվճար 6 անգամ' },
      { label: 'Քարտի տարեկան սպասարկում', val: '16.000 ֏' },
    ],
  },
  {
    id: 'evoca-visa-platinum',
    name: 'Evoca Visa Platinum',
    description: 'Պրեմիում առավելություններ պրեմիում քարտով:',
    img: 'https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg',
    categories: ['all', 'premium', 'visa'],
    stats: [
      { label: 'Սպասարկման վճար', val: '30.000 ֏' },
      { label: 'Օդանավակայանների բիզնես սրահներ', val: 'Անվճար 6 մուտք' },
    ],
  },
  {
    id: 'wilco-visa-infinite',
    name: 'Wilco Visa Infinite',
    description: 'Բացահայտեք պրեմիում բանկինգի և անհատականացված ֆինանսական փորձառությունը Wilco Visa Infinite քարտի հետ:',
    img: 'https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png',
    categories: ['all', 'premium', 'visa'],
    stats: [],
  },
  {
    id: 'unionpay-gold',
    name: 'UnionPay Gold',
    description: 'Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը:',
    img: 'https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png',
    categories: ['all', 'unionpay'],
    stats: [
      { label: 'Կանխիկացում', val: '0.5%' },
      { label: 'Քարտի ժամկետ', val: '5 տարի' },
      { label: 'Տարեկան սպասարկման վճար', val: '15000 ֏' },
      { label: 'Կիրառություն', val: 'Ամենուր' },
    ],
  },
  {
    id: '4u-am-gift-card',
    name: '4U.am Gift card',
    description: 'Երբ ժամանակակիցն ու կրեատիվը հանդիպում են, ստեղծվում է իդեալական նվեր:',
    img: 'https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png',
    categories: ['all', 'gift', 'arca'],
    stats: [],
  },
  {
    id: 'evoca-gift-card',
    name: 'Evoca Gift Card',
    description: 'Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:',
    img: 'https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png',
    categories: ['all', 'gift', 'arca'],
    stats: [],
  },
  {
    id: 'digital-gift-card',
    name: 'Digital Gift Card',
    description: 'Սիրելի մարդկանց համար նվեր ընտրելը պատասխանատու ու հաճելի գործ է, բայց նաև ժամանակատար ու նյարդայնացնող, հատկապես երբ չգիտես՝ կհավանի՞, թե՞ ոչ: Մենք առաջարկում ենք իդեալական նվերի տարբերակ:',
    img: 'https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png',
    categories: ['all', 'gift', 'digital', 'mastercard'],
    stats: [],
  },
  {
    id: 'visa-infinite',
    name: 'Visa Infinite',
    description: 'Visa Infinite-ը Visa վճարային համակարգի ամենաբարձր դասի քարտն է:',
    img: 'https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png',
    categories: ['all', 'premium', 'visa'],
    stats: [
      { label: 'Կանխիկացում բանկի կանխիկացման կետերում', val: '1%' },
      { label: 'Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում', val: '1.2%' },
      { label: 'Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում', val: '1.5% (min 2,500 ֏)' },
      { label: 'Տարեկան սպասարկում', val: '100,000 ֏' },
    ],
  },
  {
    id: 'visa-vision',
    name: 'Visa Vision',
    description: 'Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բազմաթիվ առավելությունները:',
    img: 'https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png',
    categories: ['all', 'visa'],
    stats: [],
  },
  {
    id: 'mastercard-gold',
    name: 'Mastercard Gold',
    description: 'Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով:',
    img: 'https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png',
    categories: ['all', 'premium', 'mastercard'],
    stats: [
      { label: 'Կանխիկացում բանկի կանխիկացման կետերում մինչև 2 մլն ֏', val: '0%' },
      { label: 'Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում', val: '0.8%' },
      { label: 'Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում', val: '1% (min 1,500 ֏)' },
      { label: 'Տարեկան սպասարկում', val: '15.000 ֏' },
    ],
  },
  {
    id: 'mastercard-standard',
    name: 'Mastercard Standard',
    description: 'Աշխարհի ցանկացած կետում, որտեղ էլ լինես, քո ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն:',
    img: 'https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png',
    categories: ['all', 'mastercard'],
    stats: [
      { label: 'Կանխիկացում բանկի կանխիկացման կետերում մինչև 1 մլն ֏', val: '0%' },
      { label: 'Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում', val: '0.8%' },
      { label: 'Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում', val: '1% (min 1,500 ֏)' },
      { label: 'Քարտի տարեկան սպասարկում', val: '5000 ֏' },
    ],
  },
  {
    id: 'mastercard-world-digital',
    name: 'Mastercard World Digital',
    description: 'Mastercard World Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում: Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում:',
    img: 'https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png',
    categories: ['all', 'digital', 'mastercard'],
    stats: [
      { label: 'Կանխիկացում բանկի բանկոմատներից', val: '2%' },
      { label: 'Կանխիկացում ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով', val: '2.5%' },
      { label: 'Տարեկան սպասարկում', val: '1000 ֏' },
    ],
  },
  {
    id: 'unionpay-business-platinum',
    name: 'UnionPay Business Platinum',
    description: 'Այս պրեմիում դասի քարտը կդառնա Ձեր գործընկերը հաջողության ճանապարհին:',
    img: 'https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png',
    categories: ['all', 'premium', 'unionpay'],
    stats: [
      { label: 'Կանխիկացում', val: '0.5%' },
      { label: 'Քարտի ժամկետ', val: '5 տարի' },
      { label: 'Տարեկան սպասարկման վճար', val: '15000 ֏' },
      { label: 'Կիրառություն', val: 'Ամենուր' },
    ],
  },
  {
    id: 'myler-gift-card',
    name: 'MyLer Gift Card',
    description: 'Մեկ քարտ, անսահմանափակ արկածներ:',
    img: 'https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png',
    categories: ['all', 'gift', 'arca'],
    stats: [],
  },
];

const FILTERS = [
  { id: 'all', label: 'Բոլորը' },
  { id: 'premium', label: 'Պրեմիում' },
  { id: 'gift', label: 'Նվեր քարտեր' },
  { id: 'digital', label: 'Թվային քարտեր' },
  { id: 'arca', label: 'arca', isLogo: true, icon: 'https://www.evoca.am/images-cache/menu/1/17485004055849/50x24.png' },
  { id: 'visa', label: 'VISA', isLogo: true, icon: 'https://www.evoca.am/images-cache/menu/1/16137249251612/50x24.png' },
  { id: 'mastercard', label: 'Mastercard', isLogo: true, icon: 'https://www.evoca.am/images-cache/menu/1/16137249504065/50x24.png' },
  { id: 'unionpay', label: 'UnionPay', isLogo: true, icon: 'https://www.evoca.am/images-cache/menu/1/17288945044615/50x24.png' },
];

export default function AllCards() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCards = CARDS_DATA.filter((card) =>
    card.categories.includes(activeFilter)
  );

  return (
    <div className="w-full bg-white text-[#1d1d1f] font-['Noto_Sans_Armenian','Noto_Sans',sans-serif] py-10 px-4 sm:px-8 xl:px-20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Էջի Վերնագիր */}
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-[#1d1d1f]">Քարտեր</h1>

        {/* Ֆիլտրերի Կոճակներ */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#6a00d1] text-white shadow-md'
                    : 'bg-[#f4f4f6] text-[#1d1d1f] hover:bg-[#e8e8ec]'
                }`}
              >
                {f.isLogo ? (
                  <img src={f.icon} alt={f.label} className="h-5 object-contain" />
                ) : (
                  f.label
                )}
              </button>
            );
          })}
        </div>

        {/* Քարտերի Ցանկ */}
        <div className="space-y-16">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-14 border-b border-gray-100 pb-12"
            >
              {/* Քարտի Նկարը */}
              <div className="w-full max-w-[380px] lg:max-w-[415px] flex-shrink-0">
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Քարտի Տվյալները */}
              <div className="flex-1 space-y-5 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f]">{card.name}</h2>
                <p className="text-gray-600 text-base max-w-2xl leading-relaxed">{card.description}</p>

                {/* Ցուցանիշներ / Ստատիստիկա */}
                {card.stats.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
                    {card.stats.map((st, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#6a00d1]">{st.val}</div>
                        <div className="text-xs text-gray-500 leading-snug">{st.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Մանրամասն Կոճակ */}
                <div className="pt-4">
                  <Link
                    to={`/cards/${card.id}`}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#f0e6fa] text-[#6a00d1] font-bold text-sm hover:bg-[#6a00d1] hover:text-white transition-colors"
                  >
                    Մանրամասն
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}