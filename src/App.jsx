import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Loans from './components/Loans';
import CreditHistoryScore from './components/CreditHistoryScore'; // Ներմուծում ենք վարկային պատմության բաղադրիչը

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] antialiased">

        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Վարկերի էջեր */}
            <Route path="/loans" element={<Loans />} />
            <Route path="/loans/history-score" element={<CreditHistoryScore />} />
            <Route path="/loans/*" element={<Loans />} />

            {/* Ապագա էջերի համար placeholder-ներ կամ վերահասցեավորում */}
            <Route path="/business" element={<Home />} />
            <Route path="/instant-payments" element={<Home />} />
            <Route path="/about/*" element={<Home />} />
            <Route path="/career/*" element={<Home />} />

            {/* Չգտնված էջերը ուղղորդում են գլխավոր էջ */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;