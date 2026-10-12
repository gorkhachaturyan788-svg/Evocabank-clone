import React, { useState } from 'react';

export default function EvocaCalculator() {
  const [activeTab, setActiveTab] = useState('loan'); // 'loan' կամ 'deposit'
  
  // Վարկի վիճակը
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanTerm, setLoanTerm] = useState(12); // ամիս
  const [loanRate, setLoanRate] = useState(15); // %
  const [repaymentType, setRepaymentType] = useState('annuity'); // 'annuity' կամ 'equal'

  return (
    <div className="min-h-screen bg-[#f4f7fc] flex items-center justify-center p-6 font-sans">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
        
        {/* Վերնագիր */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Հաշվիչներ
        </h2>

        {/* Ներդիրներ (Tabs): Վարկ / Ավանդ */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('loan')}
            className={`pb-3 px-6 font-semibold text-lg transition-colors relative cursor-pointer ${
              activeTab === 'loan' ? 'text-gray-900 border-b-2 border-purple-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Վարկ
          </button>
          <button
            onClick={() => setActiveTab('deposit')}
            className={`pb-3 px-6 font-semibold text-lg transition-colors relative cursor-pointer ${
              activeTab === 'deposit' ? 'text-gray-900 border-b-2 border-purple-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Ավանդ
          </button>
        </div>

        {/* Հաշվիչի բովանդակություն */}
        {activeTab === 'loan' ? (
          <div className="space-y-6">
            
            {/* Վերին տող (Գումար և Ժամկետ) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Վարկի գումար */}
              <div className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500 font-medium">Վարկի գումար</span>
                  <span className="text-xl font-bold text-gray-900">
                    {loanAmount.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="50000000" 
                  step="100000"
                  value={loanAmount} 
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer mb-1"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>0</span>
                  <span>50000000</span>
                </div>
              </div>

              {/* Ժամկետ */}
              <div className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500 font-medium">Ժամկետ</span>
                  <span className="text-xl font-bold text-gray-900">{loanTerm} ամիս</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="1200" 
                  value={loanTerm} 
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer mb-1"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>1 ամիս</span>
                  <span>1200 ամիս</span>
                </div>
              </div>

            </div>

            {/* Ստորին տող (Տոկոսադրույք և Մարման ձև) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              {/* Տարեկան տոկոսադրույք */}
              <div className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500 font-medium">Տարեկան տոկոսադրույք</span>
                  <span className="text-xl font-bold text-gray-900">{loanRate} %</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="36" 
                  value={loanRate} 
                  onChange={(e) => setLoanRate(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer mb-1"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>1 %</span>
                  <span>36 %</span>
                </div>
              </div>

              {/* Մարման ձև */}
              <div className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm flex flex-col justify-center">
                <span className="text-xs text-gray-400 font-medium mb-3">Մարման ձև</span>
                <div className="flex items-center gap-6">
                  
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="repayment" 
                      checked={repaymentType === 'annuity'} 
                      onChange={() => setRepaymentType('annuity')}
                      className="w-5 h-5 accent-purple-600"
                    />
                    <span className="text-sm font-semibold text-gray-800">Հավասարաչափ</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="repayment" 
                      checked={repaymentType === 'equal'} 
                      onChange={() => setRepaymentType('equal')}
                      className="w-5 h-5 accent-purple-600"
                    />
                    <span className="text-sm font-semibold text-gray-800">Անուիտետ</span>
                  </label>

                </div>
              </div>

            </div>

            {/* Նախազգուշացում և Հաշվել կոճակ */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-4 gap-4 border-t border-gray-100">
              <p className="text-xs text-gray-400 max-w-md">
                Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ։[cite: 4]
              </p>

              <button className="bg-[#5b15bc] hover:bg-[#4a109d] text-white font-semibold py-3 px-12 rounded-2xl shadow-lg transition-all duration-200 active:scale-95 cursor-pointer">
                Հաշվել
              </button>
            </div>

          </div>
        ) : (
          <div className="py-12 text-center text-gray-500">
            Ավանդի հաշվիչի պարամետրերը (այստեղ կարող եք ավելացնել ավանդի տրամաբանությունը)
          </div>
        )}

      </div>
    </div>
  );
}