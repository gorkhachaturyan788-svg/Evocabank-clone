import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Evoca Travel Card",
    description: "Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը",
    bgColor: "bg-[#e5e7eb]",
    textColor: "text-gray-900",
    descColor: "text-gray-600",
    btnBg: "bg-[#6500df] text-white",
    image: "https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png"
  },
  {
    id: 2,
    title: "Evoca Աշխատավարձային նախագիծ",
    description: "Բեր աշխատավարձդ Evoca։ Տար շատ ավելին...",
    bgColor: "bg-[#6500df]",
    textColor: "text-white",
    descColor: "text-purple-100",
    btnBg: "bg-white text-[#6500df]",
    image: "https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png"
  },
  {
    id: 3,
    title: "Կարճ հեռախոսահամար՝ 8444",
    description: "Բարի գալուստ, Evocabank։ Մենք սպասում ենք Ձեր զանգին...",
    bgColor: "bg-[#0b0b0b]",
    textColor: "text-white",
    descColor: "text-gray-400",
    btnBg: "bg-white text-black",
    image: "https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png"
  },
  {
    id: 4,
    title: "Visa Vision",
    description: "Ձեռք բեր Visa Vision քարտ քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից",
    bgColor: "bg-[#1c1c1e]",
    textColor: "text-white",
    descColor: "text-gray-300",
    btnBg: "bg-white text-black",
    image: "https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg"
  },
  {
    id: 5,
    title: "Visa Infinite",
    description: "Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտը հենց հիմա",
    bgColor: "bg-[#0b0b0b]",
    textColor: "text-white",
    descColor: "text-gray-300",
    btnBg: "bg-white text-black",
    image: "https://www.evoca.am/images-cache/sliders/1/17737433784078/126c54e244e880fd563d8af43979486c-577x485.png"
  }
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[currentIndex];

  return (
    <div className={`w-full min-h-[500px] ${slide.bgColor} transition-colors duration-500 relative flex items-center justify-between px-12 md:px-24 overflow-hidden rounded-bl-[80px]`}>
      
      {/* Ձախ կողմի տեքստային հատված */}
      <div className="max-w-xl z-10">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${slide.textColor}`}>
          {slide.title}
        </h1>
        <p className={`text-lg mb-8 ${slide.descColor}`}>
          {slide.description}
        </p>
        <button className={`${slide.btnBg} px-6 py-3 rounded-full font-medium transition hover:opacity-95 shadow-lg`}>
          Իմանալ ավելին
        </button>
      </div>

      {/* Աջ կողմի նկար */}
      <div className="hidden md:flex items-center justify-center z-10">
        <img 
          src={slide.image} 
          alt={slide.title} 
          className="max-h-[400px] object-contain drop-shadow-2xl"
        />
      </div>

      {/* Ներքևի նավիգացիա և սլայդերի կետեր */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
        <button onClick={prevSlide} className={`${slide.textColor} hover:opacity-75 transition`}>
          <ChevronLeft size={24} />
        </button>

        <div className="flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx ? 'w-6 bg-purple-600' : 'w-2 bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button onClick={nextSlide} className={`${slide.textColor} hover:opacity-75 transition`}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}