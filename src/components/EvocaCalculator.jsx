import React, { useState } from 'react';

const EvocaCalculator = () => {
  const [activeTab, setActiveTab] = useState('loan');

  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(1);
  const [rate, setRate] = useState(1);
  const [repaymentType, setRepaymentType] = useState('annuity');

  return (
    <section className="w-full bg-[#fcfbfe] py-8 px-4 flex flex-col items-center select-none font-sans">
      <div className="max-w-[850px] w-full">
        {/* Վերնագիր */}
        <h2 className="text-[28px] font-bold text-[#1d1d1f] mb-6 tracking-tight">
          Հաշվիչներ
        </h2>

        <div className="relative">
          {/* Թաբեր */}
          <div className="flex items-center gap-2 mb-[-1px] z-10 relative">
            <button
              onClick={() => setActiveTab('loan')}
              className={`px-6 py-2.5 rounded-t-xl text-[15px] font-semibold transition-all duration-200 ${
                activeTab === 'loan'
                  ? 'bg-white text-[#1d1d1f] shadow-[0_-4px_12px_rgba(0,0,0,0.03)] border-t border-x border-[#f0edfa]'
                  : 'bg-transparent text-[#7e7e82] hover:text-[#1d1d1f]'
              }`}
            >
              Վարկ
            </button>
            <button
              onClick={() => setActiveTab('deposit')}
              className={`px-6 py-2.5 rounded-t-xl text-[15px] font-semibold transition-all duration-200 ${
                activeTab === 'deposit'
                  ? 'bg-white text-[#1d1d1f] shadow-[0_-4px_12px_rgba(0,0,0,0.03)] border-t border-x border-[#f0edfa]'
                  : 'bg-transparent text-[#7e7e82] hover:text-[#1d1d1f]'
              }`}
            >
              Ավանդ
            </button>
          </div>

          {/* Հիմնական բլոկ */}
          <div className="bg-white rounded-2xl rounded-tl-none p-6 md:p-8 shadow-[0_10px_30px_rgba(100,60,180,0.05)] border border-[#f0edfa]">
            {activeTab === 'loan' ? (
              <div className="space-y-6">
                {/* Դաշտեր */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  
                  {/* Վարկի գումար */}
                  <div>
                    <div className="relative border border-[#e8e6f0] rounded-xl p-3.5 flex justify-between items-center bg-white shadow-sm hover:border-[#6a00e5] transition-colors">
                      <span className="text-[13px] text-[#1d1d1f] font-medium">
                        Վարկի գումար
                      </span>
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(Number(e.target.value))}
                          className="text-right text-[18px] font-bold text-[#1d1d1f] outline-none w-28 bg-transparent"
                        />
                      </div>
                    </div>
                    {/* Range Slider */}
                    <div className="mt-2 relative px-1">
                      <div className="relative flex items-center">
                        <div
                          className="absolute -top-1 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[5px] border-b-[#6a00e5] transition-all"
                          style={{
                            left: `${Math.min((amount / 50000000) * 100, 100)}%`,
                            transform: 'translateX(-50%)',
                          }}
                        />
                        <input
                          type="range"
                          min="0"
                          max="50000000"
                          value={amount}
                          onChange={(e) => setAmount(Number(e.target.value))}
                          className="w-full accent-[#6a00e5] h-1 bg-[#e8e6f0] rounded-lg appearance-none cursor-pointer mt-1"
                        />
                      </div>
                      <div className="flex justify-between text-[11px] text-[#8e8e93] mt-1 font-medium">
                        <span>0</span>
                        <span>50000000</span>
                      </div>
                    </div>
                  </div>

                  {/* Ժամկետ */}
                  <div>
                    <div className="relative border border-[#e8e6f0] rounded-xl p-3.5 flex justify-between items-center bg-white shadow-sm hover:border-[#6a00e5] transition-colors">
                      <span className="text-[13px] text-[#1d1d1f] font-medium">
                        Ժամկետ
                      </span>
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          value={term}
                          onChange={(e) => setTerm(Number(e.target.value))}
                          className="text-right text-[18px] font-bold text-[#1d1d1f] outline-none w-16 bg-transparent"
                        />
                        <span className="text-[16px] font-bold text-[#1d1d1f]">
                          ամիս
                        </span>
                      </div>
                    </div>
                    {/* Range Slider */}
                    <div className="mt-2 relative px-1">
                      <div className="relative flex items-center">
                        <div
                          className="absolute -top-1 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[5px] border-b-[#6a00e5] transition-all"
                          style={{
                            left: `${Math.min(((term - 1) / (1200 - 1)) * 100, 100)}%`,
                            transform: 'translateX(-50%)',
                          }}
                        />
                        <input
                          type="range"
                          min="1"
                          max="1200"
                          value={term}
                          onChange={(e) => setTerm(Number(e.target.value))}
                          className="w-full accent-[#6a00e5] h-1 bg-[#e8e6f0] rounded-lg appearance-none cursor-pointer mt-1"
                        />
                      </div>
                      <div className="flex justify-between text-[11px] text-[#8e8e93] mt-1 font-medium">
                        <span>1 ամիս</span>
                        <span>1200 ամիս</span>
                      </div>
                    </div>
                  </div>

                  {/* Տարեկան տոկոսադրույք */}
                  <div>
                    <div className="relative border border-[#e8e6f0] rounded-xl p-3.5 flex justify-between items-center bg-white shadow-sm hover:border-[#6a00e5] transition-colors">
                      <span className="text-[13px] text-[#1d1d1f] font-medium">
                        Տարեկան տոկոսադրույք
                      </span>
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          value={rate}
                          onChange={(e) => setRate(Number(e.target.value))}
                          className="text-right text-[18px] font-bold text-[#1d1d1f] outline-none w-12 bg-transparent"
                        />
                        <span className="text-[16px] font-bold text-[#1d1d1f]">
                          %
                        </span>
                      </div>
                    </div>
                    {/* Range Slider */}
                    <div className="mt-2 relative px-1">
                      <div className="relative flex items-center">
                        <div
                          className="absolute -top-1 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[5px] border-b-[#6a00e5] transition-all"
                          style={{
                            left: `${Math.min(((rate - 1) / (36 - 1)) * 100, 100)}%`,
                            transform: 'translateX(-50%)',
                          }}
                        />
                        <input
                          type="range"
                          min="1"
                          max="36"
                          value={rate}
                          onChange={(e) => setRate(Number(e.target.value))}
                          className="w-full accent-[#6a00e5] h-1 bg-[#e8e6f0] rounded-lg appearance-none cursor-pointer mt-1"
                        />
                      </div>
                      <div className="flex justify-between text-[11px] text-[#8e8e93] mt-1 font-medium">
                        <span>1 %</span>
                        <span>36 %</span>
                      </div>
                    </div>
                  </div>

                  {/* Մարման ձև */}
                  <div className="flex flex-col justify-center pt-1">
                    <span className="text-[11px] text-[#8e8e93] font-medium mb-2.5">
                      Մարման ձև
                    </span>
                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-2.5 cursor-pointer select-none">
                        <div
                          onClick={() => setRepaymentType('equal')}
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                            repaymentType === 'equal'
                              ? 'border-[#6a00e5] bg-white'
                              : 'border-[#d1d1d6]'
                          }`}
                        >
                          {repaymentType === 'equal' && (
                            <div className="w-2 h-2 rounded-full bg-[#6a00e5]" />
                          )}
                        </div>
                        <span className="text-[14px] font-semibold text-[#1d1d1f]">
                          Զսպանակաձև
                        </span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer select-none">
                        <div
                          onClick={() => setRepaymentType('annuity')}
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                            repaymentType === 'annuity'
                              ? 'border-[#6a00e5] bg-white'
                              : 'border-[#d1d1d6]'
                          }`}
                        >
                          {repaymentType === 'annuity' && (
                            <div className="w-2 h-2 rounded-full bg-[#6a00e5]" />
                          )}
                        </div>
                        <span className="text-[14px] font-semibold text-[#1d1d1f]">
                          Անուիտետ
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Ներքևի մաս */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#f8f7fc]">
                  <p className="text-[12px] text-[#8e8e93] leading-relaxed max-w-[480px]">
                    Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:
                  </p>
                  <button className="w-full sm:w-auto px-8 py-3 bg-[#6a00e5] hover:bg-[#5800c2] text-white font-semibold rounded-full text-[15px] transition-colors shadow-md shadow-[#6a00e5]/20">
                    Հաշվել
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-10 text-center text-[#8e8e93] text-[15px]">
                Ավանդի հաշվիչի բաժին
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvocaCalculator;