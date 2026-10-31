import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Loans from './components/Loans';
import CreditHistoryScore from './components/CreditHistoryScore';
import ImportantInfo from './components/ImportantInfo';
import AllCards from './components/AllCards'; // Քարտերի բաղադրիչը
import CardService from './components/CardService'; // Քարտերի տրամադրում և սպասարկում
import SocialCards from './components/SocialCards'; // Սոցիալական ապահովության վճարային քարտեր

// Ներքին բաղադրիչ՝ ցուցադրելու կամ թաքցնելու Header-ն ու Footer-ը ըստ URL-ի
function Layout() {
  const location = useLocation();
  const isBenefitsPage = location.pathname === '/cards/benefits';

  return (
    <div className="flex flex-col min-h-screen bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] antialiased">
      {!isBenefitsPage && <Header />}

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
          <Route path="/cards/service" element={<CardService />} />
          <Route path="/cards/social" element={<SocialCards />} />
          
          {/* Evoca Benefits էջ, որտեղ Header և Footer չկան */}
          <Route path="/cards/benefits" element={<div className="p-10 text-center text-2xl font-bold"></div>} />

          {/* Այլ էջեր կամ սխալ հասցեներ */}
        </Routes>
      </main>

      {!isBenefitsPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;