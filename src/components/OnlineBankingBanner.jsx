import React, { useState } from 'react';

const OnlineBankingBanner = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const youtubeEmbedUrl = "https://www.youtube.com/embed/KwAgMHEx8ys?autoplay=1";

  return (
    <div className="relative w-full bg-[#5D00C6] text-white overflow-hidden rounded-tr-[100px] py-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Սարքավորումների հատված (flex gap-ով, որար հեռախոսն անհամեմատ հեռու լինի և չկպչի) */}
        <div className="flex items-end justify-center lg:justify-start w-full lg:w-[58%] gap-6 sm:gap-8">
          
          {/* Նոթբուքի կոնտեյներ */}
          <div className="relative w-full max-w-[500px] aspect-[16/10] bg-[#1a1a1a] rounded-t-xl p-2.5 pb-0 shadow-2xl border-t border-x border-gray-700 z-10 shrink-0">
            {/* Նոթբուքի էկրանը */}
            <div className="relative w-full h-full bg-black overflow-hidden rounded-t-md group cursor-pointer">
              {!isPlaying ? (
                <div 
                  className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
                  style={{ backgroundImage: `url('https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg')` }}
                  onClick={() => setIsPlaying(true)}
                >
                  {/* Play կոճակ */}
                  <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-transform transform group-hover:scale-110 shadow-lg border border-white/50">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white ml-1"></div>
                  </div>
                </div>
              ) : (
                <iframe
                  src={youtubeEmbedUrl}
                  title="Evoca Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Նոթբուքի տակդիր */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[110%] h-3 bg-[#d1d5db] rounded-b-lg shadow-md flex justify-center items-center">
              <div className="w-16 h-1 bg-[#9ca3af] rounded-full"></div>
            </div>
          </div>

          {/* Հեռախոսը՝ ավելի փոքր չափով, բացարձակ առանձնացված (առանց բացասական margin-ների) */}
          <div className="w-24 sm:w-28 md:w-32 mb-2 z-20 shrink-0 drop-shadow-2xl">
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
              alt="Evoca Mobile App" 
              className="w-full h-auto rounded-2xl border-[3px] border-gray-900 shadow-2xl"
            />
          </div>

        </div>

        {/* Տեքստային հատվածը */}
        <div className="w-full lg:w-[38%] space-y-6 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide">
            Օնլայն և մոբայլ բանկինգ
          </h2>
          
          <p className="text-sm sm:text-base text-gray-100 leading-relaxed font-normal">
            Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
            {/* QR Կոդ */}
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <img 
                src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
                alt="QR Code" 
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Ներբեռնման հղումներ */}
            <div className="space-y-2">
              <span className="text-xs text-gray-200 block font-medium">
                Ներբեռնել հավելվածները՝
              </span>
              <div className="flex flex-col sm:flex-row gap-2">
                <a href="#" className="hover:opacity-80 transition">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-9" />
                </a>
                <a href="#" className="hover:opacity-80 transition">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-9" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OnlineBankingBanner;