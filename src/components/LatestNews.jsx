import React from 'react';

const newsData = [
  {
    id: 1,
    image: 'https://www.evoca.am/images-cache/news/1/17915391966329/439x320.png',
    category: 'Կենսակերպ',
    title: 'Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր',
    date: '08.10.2026',
  },
  {
    id: 2,
    image: 'https://www.evoca.am/images-cache/news/1/17912685600228/439x320.png',
    category: 'Կենսակերպ',
    title: 'Evocabank-ը՝ TRF 2026-ի ֆինանսական գործընկեր',
    date: '06.10.2026',
  },
  {
    id: 3,
    image: 'https://www.evoca.am/images-cache/news/1/17913736819959/439x320.jpg',
    category: 'Կենսակերպ',
    title: 'Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր',
    date: '06.10.2026',
  },
];

const LatestNews = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Վերնագրի հատված և «Բոլոր նորությունները» կոճակ */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#222222]">
            Վերջին նորությունները
          </h2>

          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-[#F0E6FA] text-[#5D00C6] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#e4d4f8] transition-all duration-200"
          >
            <span>Բոլոր նորությունները</span>
            <span className="text-lg">›</span>
          </a>
        </div>

        {/* Նորությունների քարտերի ցանցը */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group cursor-pointer"
            >
              {/* Նկար */}
              <div className="relative w-full h-60 overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Բովանդակություն */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  {/* Կատեգորիա (կանաչ գծիկով) */}
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-[#76B947] rounded-full inline-block"></span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Վերնագիր */}
                  <h3 className="text-lg font-bold text-[#222222] group-hover:text-[#5D00C6] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Ամսաթիվ */}
                <div className="text-xs text-gray-400 font-medium pt-2">
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestNews;