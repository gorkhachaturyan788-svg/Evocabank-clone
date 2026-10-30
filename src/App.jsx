import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Loans from './components/Loans';
import CreditHistoryScore from './components/CreditHistoryScore';
import ImportantInfo from './components/ImportantInfo';
import AllCards from './components/AllCards'; // Քարտերի բաղադրիչը

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] antialiased">

        {/* Header-ն ավտոմատ թարմանում է ըստ ընթացիկ URL-ի (location.pathname) */}
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Վարկերի էջեր */}
            <Route path="/loans" element={<Loans />} />
            <Route path="/loans/all" element={<Loans />} />
            <Route path="/loans/history-score" element={<CreditHistoryScore />} />
            <Route path="/loans/important-info" element={<ImportantInfo />} />

            {/* Քարտերի էջեր */}
            <Route path="/cards" element={<AllCards />} />
            <Route path="/cards/all" element={<AllCards />} />

            {/* Այլ էջեր կամ սխալ հասցեներ կարող եք ավելացնել այստեղ */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;