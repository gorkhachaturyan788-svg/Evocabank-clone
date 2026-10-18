import React, { useState } from 'react';

const ratesData = {
  cash: {
    USD: { buy: 359, sell: 363 },
    EUR: { buy: 400, sell: 412 },
    RUB: { buy: 4.1, sell: 4.32 },
  },
  nonCash: {
    USD: { buy: 359, sell: 364 },
    EUR: { buy: 400, sell: 412 },
    RUB: { buy: 4.24, sell: 4.4 },
  },
};

const CurrencyAndAddresses = () => {
  const [activeTab, setActiveTab] = useState('cash');
  
  const [amount, setAmount] = useState('100');
  const [fromCurr, setFromCurr] = useState('USD');
  const [toCurr, setToCurr] = useState('AMD');

  const calculateConverted = () => {
    const numAmount = parseFloat(amount) || 0;
    if (numAmount === 0) return '';

    const currentRates = ratesData[activeTab] || ratesData.cash;

    if (fromCurr === toCurr) return numAmount.toString();

    if (fromCurr === 'AMD') {
      const rate = currentRates[toCurr]?.sell;
      return rate ? (numAmount / rate).toFixed(2) : '';
    }

    if (toCurr === 'AMD') {
      const rate = currentRates[fromCurr]?.buy;
      return rate ? (numAmount * rate).toFixed(2) : '';
    }

    const fromRate = currentRates[fromCurr]?.buy;
    const toRate = currentRates[toCurr]?.sell;
    if (fromRate && toRate) {
      const inAmd = numAmount * fromRate;
      return (inAmd / toRate).toFixed(2);
    }

    return '';
  };

  return (
    <section className="w-full bg-[#f8f9fb] py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="max-w-4xl text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով: 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
            
            <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar gap-2 mb-8">
              <button
                onClick={() => setActiveTab('cash')}
                className={`pb-4 px-4 text-sm md:text-base font-bold whitespace-nowrap transition-all relative ${
                  activeTab === 'cash' ? 'text-[#5D00C6]' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Կանխիկ
                {activeTab === 'cash' && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#5D00C6] rounded-t-full"></div>
                )}
              </button>

              <button
                onClick={() => setActiveTab('nonCash')}
                className={`pb-4 px-4 text-sm md:text-base font-bold whitespace-nowrap transition-all relative ${
                  activeTab === 'nonCash' ? 'text-[#5D00C6]' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Անկանխիկ
                {activeTab === 'nonCash' && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#5D00C6] rounded-t-full"></div>
                )}
              </button>

              <button
                onClick={() => setActiveTab('gold')}
                className={`pb-4 px-4 text-sm md:text-base font-bold whitespace-nowrap transition-all relative ${
                  activeTab === 'gold' ? 'text-[#5D00C6]' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Ոսկու փոխարժեք
                {activeTab === 'gold' && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#5D00C6] rounded-t-full"></div>
                )}
              </button>

              <button
                onClick={() => setActiveTab('rub')}
                className={`pb-4 px-4 text-sm md:text-base font-bold whitespace-nowrap transition-all relative ${
                  activeTab === 'rub' ? 'text-[#5D00C6]' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Ռուբլու կանխիկ մուտք
                {activeTab === 'rub' && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#5D00C6] rounded-t-full"></div>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className={activeTab === 'cash' || activeTab === 'nonCash' ? 'md:col-span-7' : 'md:col-span-12'}>
                {(activeTab === 'cash' || activeTab === 'nonCash') && (
                  <div>
                    <div className="grid grid-cols-3 text-xs font-bold text-gray-400 uppercase pb-3 border-b border-gray-100">
                      <span>Արտարժույթ</span>
                      <span className="text-right">Առք</span>
                      <span className="text-right">Վաճառք</span>
                    </div>

                    <div className="grid grid-cols-3 items-center py-4 border-b border-gray-100 text-sm">
                      <div className="flex items-center gap-2 font-bold text-gray-800">
                        <span className="text-xl">🇺🇸</span> USD
                      </div>
                      <div className="text-right font-bold text-gray-800 flex items-center justify-end gap-1">
                        <span className="text-red-500 text-xs">▼</span> {ratesData[activeTab].USD.buy}
                      </div>
                      <div className="text-right font-bold text-gray-800 flex items-center justify-end gap-1">
                        <span className="text-green-500 text-xs">▲</span> {ratesData[activeTab].USD.sell}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 items-center py-4 border-b border-gray-100 text-sm">
                      <div className="flex items-center gap-2 font-bold text-gray-800">
                        <span className="text-xl">🇪🇺</span> EUR
                      </div>
                      <div className="text-right font-bold text-gray-800 flex items-center justify-end gap-1">
                        <span className="text-red-500 text-xs">▼</span> {ratesData[activeTab].EUR.buy}
                      </div>
                      <div className="text-right font-bold text-gray-800 flex items-center justify-end gap-1">
                        <span className="text-green-500 text-xs">▲</span> {ratesData[activeTab].EUR.sell}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 items-center py-4 border-b border-gray-100 text-sm">
                      <div className="flex items-center gap-2 font-bold text-gray-800">
                        <span className="text-xl">🇷🇺</span> RUB
                      </div>
                      <div className="text-right font-bold text-gray-800 flex items-center justify-end gap-1">
                        <span className="text-red-500 text-xs">▼</span> {ratesData[activeTab].RUB.buy}
                      </div>
                      <div className="text-right font-bold text-gray-800 flex items-center justify-end gap-1">
                        <span className="text-green-500 text-xs">▲</span> {ratesData[activeTab].RUB.sell}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'gold' && (
                  <div>
                    <div className="grid grid-cols-2 text-xs font-bold text-gray-400 uppercase pb-3 border-b border-gray-100">
                      <span>Հարգ</span>
                      <span>Սակագին (Արժեքը ՀՀ Դրամով 1 գրամի համար)</span>
                    </div>
                    {[
                      { sample: '375', price: '17,400' },
                      { sample: '500', price: '23,300' },
                      { sample: '583', price: '27,100' },
                      { sample: '750', price: '34,900' },
                      { sample: '875', price: '40,700' },
                      { sample: '900', price: '41,900' },
                      { sample: '958', price: '44,600' },
                      { sample: '999', price: '46,500' },
                    ].map((item, idx) => (
                      <div key={idx} className="grid grid-cols-2 items-center py-3 border-b border-gray-100 text-sm font-bold text-gray-800">
                        <span>{item.sample}</span>
                        <span>{item.price}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'rub' && (
                  <div>
                    <div className="grid grid-cols-2 text-xs font-bold text-gray-400 uppercase pb-3 border-b border-gray-100">
                      <span>Արժույթ</span>
                      <span>Սակագին</span>
                    </div>
                    <div className="grid grid-cols-2 items-center py-6 text-sm font-bold text-gray-800 border-b border-gray-100">
                      <span>RUB</span>
                      <span>10%</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 text-xs">
                  <span className="text-gray-400">Թարմացվել է՝ 18.10.26</span>
                  <a href="#" className="text-[#5D00C6] font-bold hover:underline">Այլ արժույթներ</a>
                </div>
              </div>

              {(activeTab === 'cash' || activeTab === 'nonCash') && (
                <div className="md:col-span-5 bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-4">
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500">Ունեմ</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0" 
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-800 focus:outline-none focus:border-[#5D00C6]"
                      />
                      <select 
                        value={fromCurr}
                        onChange={(e) => setFromCurr(e.target.value)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent text-sm font-bold text-[#5D00C6] focus:outline-none cursor-pointer"
                      >
                        <option value="USD">USD</option>
                        <option value="AMD">AMD</option>
                        <option value="EUR">EUR</option>
                        <option value="RUB">RUB</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500">Կստանամ</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        readOnly
                        value={calculateConverted()}
                        placeholder="0" 
                        className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-[#5D00C6] focus:outline-none cursor-default"
                      />
                      <select 
                        value={toCurr}
                        onChange={(e) => setToCurr(e.target.value)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent text-sm font-bold text-[#5D00C6] focus:outline-none cursor-pointer"
                      >
                        <option value="AMD">AMD</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="RUB">RUB</option>
                      </select>
                    </div>
                  </div>

                </div>
              )}

            </div>

          </div>

          <div className="lg:col-span-4 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col justify-between h-full">
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-[#222222]">
                Մեր հասցեները
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Բանկի հասցեները, աշխատաժամերը, բանկոմատները
              </p>
            </div>

            <div className="relative my-6 flex justify-center items-center py-4">
              <img 
                src="https://www.evoca.am/img/addresses.png" 
                alt="Addresses Map" 
                className="w-48 h-auto object-contain drop-shadow-md"
              />
              <img 
                src="https://www.evoca.am/img/addresses-pin.png" 
                alt="Map Pin" 
                className="absolute w-12 h-12 object-contain animate-bounce"
              />
            </div>

            <button className="inline-flex items-center justify-center gap-2 bg-[#F0E6FA] text-[#5D00C6] font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-[#e4d4f8] transition-all duration-200 w-full">
              <span>Դիտել քարտեզը</span>
              <span className="text-lg">›</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CurrencyAndAddresses;