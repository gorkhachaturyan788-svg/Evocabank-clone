import React, { useState, useEffect } from 'react';

const faces = [
  "https://www.evoca.am/img/temp/biometric/face3.png",
  "https://www.evoca.am/img/temp/biometric/face1.png",
  "https://www.evoca.am/img/temp/biometric/face2.png"
];

export default function BiometricSection() {
  const [currentFace, setCurrentFace] = useState(0);

  // Արագ և հարթ հերթափոխություն (1.8 վայրկյանը մեկ)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % faces.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Ձախ կողմը՝ Եռանկյունաձև վահանակ և բիոմետրիկ դեմքեր */}
        <div className="relative flex items-center justify-center w-full lg:w-1/2">
          {/* Հետևի կետավոր կլոր շրջանակը */}
          <div className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full border border-dashed border-purple-200 -z-0"></div>
          
          {/* Մանուշակագույն հակառակ եռանկյունի (ճիշտ չափերով և հարթ անկյուններով) */}
          <div className="relative z-10 w-[300px] h-[340px] md:w-[340px] md:h-[390px] bg-[#6500df] overflow-hidden shadow-2xl flex items-center justify-center"
               style={{ clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)", borderRadius: "30px" }}>
            
            {/* Դեմքի նկարը */}
            <img 
              src={faces[currentFace]} 
              alt="Biometric Verification" 
              className="w-full h-full object-cover object-top scale-110 transition-opacity duration-300"
            />

            {/* Շարժվող սպիտակ բիոմետրիկ գծեր և կետեր (Dynamic SVG Mesh) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-90 animate-pulse" viewBox="0 0 300 350">
              <g stroke="white" strokeWidth="1.2" fill="none">
                <polygon points="150,55 105,75 150,115 195,75" className="transition-all duration-500" />
                <polygon points="105,75 80,130 105,145 150,115" />
                <polygon points="195,75 220,130 195,145 150,115" />
                <polygon points="105,145 150,165 150,200 105,180" />
                <polygon points="195,145 150,165 150,200 195,180" />
                <polygon points="105,180 150,200 115,245" />
                <polygon points="195,180 150,200 185,245" />
                <polyline points="80,130 55,175 105,180" />
                <polyline points="220,130 245,175 195,180" />
                <polyline points="115,245 150,275 185,245" />
              </g>
              {/* Հանգույցների շարժվող կետերը */}
              <g fill="white" className="animate-ping">
                <circle cx="150" cy="55" r="3" />
                <circle cx="105" cy="75" r="2.5" />
                <circle cx="195" cy="75" r="2.5" />
                <circle cx="150" cy="115" r="3.5" />
                <circle cx="80" cy="130" r="3" />
                <circle cx="220" cy="130" r="3" />
                <circle cx="150" cy="165" r="3.5" />
                <circle cx="150" cy="200" r="3.5" />
                <circle cx="115" cy="245" r="3" />
                <circle cx="185" cy="245" r="3" />
                <circle cx="150" cy="275" r="3.5" />
              </g>
            </svg>

          </div>
        </div>

        {/* Աջ կողմը՝ Տեքստ, QR կոդ և Կոճակ */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Դարձի՛ր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            Սկանավորի՛ր QR կոդը, ներբեռնի՛ր <span className="font-semibold text-gray-900">EvocaTOUCH</span> հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և ստացի՛ր քարտ։
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-8 w-full">
            {/* QR Կոդի բլոկ */}
            <div className="p-3 bg-white border-2 border-purple-600 rounded-2xl shadow-md flex items-center justify-center">
              <img 
                src="https://www.evoca.am/img/biometric-section-QR-Code.png" 
                alt="Evoca QR Code" 
                className="w-[120px] h-[120px] object-contain"
              />
            </div>

            {/* Իմանալ ավելին կոճակ */}
            <div>
              <button className="bg-[#6500df] hover:bg-[#5200b3] text-white font-medium px-8 py-3.5 rounded-full shadow-lg transition duration-300">
                Իմանալ ավելին
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}