import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper/modules';
import { ChevronUp, ChevronDown, ArrowRight } from 'lucide-react';

// ներմուծում ենք Swiper-ի ոճերը
import 'swiper/css';

export default function EvocaCardSlider() {
  const cards = [
    {
      id: 1,
      image: 'https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png',
      title: 'Evoca Gift Card',
    },
    {
      id: 2,
      image: 'https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png',
      title: 'Digital Gift Card',
    },
    {
      id: 3,
      image: 'https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png',
      title: 'Visa Infinite',
    },
    {
      id: 4,
      image: 'https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png',
      title: 'Evoca Travel Card',
    },
    {
      id: 5,
      image: 'https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png',
      title: 'Evoca Premium',
    },
    {
      id: 6,
      image: 'https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg',
      title: 'Evoca Black',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Ձախ կողմ՝ Ուղղահայաց Սլայդեր և Կառավարման Սլաքներ */}
        <div className="w-full md:w-5/12 flex flex-col items-center">
          
          {/* Վերևի սլաք (Lucide ChevronUp) */}
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="mb-3 p-2 rounded-full bg-purple-50 hover:bg-purple-100 text-[#5b15bc] transition-colors duration-200 cursor-pointer shadow-sm"
            aria-label="Previous card"
          >
            <ChevronUp size={24} strokeWidth={2.5} />
          </button>

          {/* Սլայդերի բլոկ */}
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            direction={'vertical'}
            slidesPerView={3}
            spaceBetween={15}
            centeredSlides={true}
            loop={true}
            mousewheel={true}
            modules={[Mousewheel, Navigation]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="h-[400px] w-full cursor-grab active:cursor-grabbing"
          >
            {cards.map((card, index) => {
              const isCenter = index === activeIndex;
              return (
                <SwiperSlide key={card.id} className="flex items-center justify-center">
                  <div 
                    className={`transition-all duration-300 rounded-2xl p-3 bg-white border border-gray-100 flex flex-col items-center shadow-md w-full ${
                      isCenter ? 'scale-105 border-purple-600 shadow-xl ring-2 ring-purple-100' : 'opacity-50 scale-95'
                    }`}
                  >
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-44 h-24 object-contain mb-1 drop-shadow-md"
                    />
                    <span className="text-xs font-bold text-gray-700">{card.title}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Ներքևի սլաք (Lucide ChevronDown) */}
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="mt-3 p-2 rounded-full bg-purple-50 hover:bg-purple-100 text-[#5b15bc] transition-colors duration-200 cursor-pointer shadow-sm"
            aria-label="Next card"
          >
            <ChevronDown size={24} strokeWidth={2.5} />
          </button>

        </div>

        {/* Աջ կողմ՝ Ակտիվ քարտի մեծ ցուցադրություն և Lucide կոճակ */}
        <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left">
          
          <div className="mb-8 w-full flex justify-center md:justify-start">
            <img 
              src={cards[activeIndex].image} 
              alt={cards[activeIndex].title} 
              className="max-h-72 w-auto object-contain drop-shadow-2xl transition-all duration-500 transform hover:scale-105"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            {cards[activeIndex].title}
          </h2>

          <button className="bg-[#5b15bc] hover:bg-[#4a109d] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-200 active:scale-95 flex items-center gap-2 group cursor-pointer">
            <span>Մանրամասն</span>
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>

        </div>

      </div>
    </div>
  );
}