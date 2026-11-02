import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Loans from './components/Loans';
import CreditHistoryScore from './components/CreditHistoryScore';
import ImportantInfo from './components/ImportantInfo';
import AllCards from './components/AllCards'; 
import CardService from './components/CardService'; 
import SocialCards from './components/SocialCards'; 
import EvocaBenefits from './components/EvocaBenefits';
import DepositsList from './components/DepositsList';
import DepositsInfo from './components/DepositsInfo';
import EvocaSavingsAccount from './components/EvocaSavingsAccount'; // Հաշիվներ / Evoca խնայողական հաշիվ
import AccountService from './components/AccountService'; // Հաշիվներ / Հաշիվների բացում և սպասարկում
import MetalAccounts from './components/MetalAccounts'; // <--- Հաշիվներ / Առարկայազուրկ մետաղական հաշիվներ

function Layout() {
  const location = useLocation();
  const isBenefitsPage = location.pathname === '/cards/benefits';

  return (
    <div className="flex flex-col min-h-screen bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] antialiased">
      {!isBenefitsPage && <Header />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/loans/all" element={<Loans />} />
          <Route path="/loans/history-score" element={<CreditHistoryScore />} />
          <Route path="/loans/important-info" element={<ImportantInfo />} />
          <Route path="/cards" element={<AllCards />} />
          <Route path="/cards/all" element={<AllCards />} />
          <Route path="/cards/service" element={<CardService />} />
          <Route path="/cards/social" element={<SocialCards />} />
          
          {/* Evoca Benefits էջ */}
          <Route path="/cards/benefits" element={<EvocaBenefits />} />

          {/* Ավանդներ էջեր */}
          <Route path="/deposits" element={<DepositsList />} />
          <Route path="/deposits/all" element={<DepositsList />} />
          <Route path="/deposits/info" element={<DepositsInfo />} />

          {/* Հաշիվներ էջեր */}
          <Route path="/accounts" element={<EvocaSavingsAccount />} />
          <Route path="/accounts/savings" element={<EvocaSavingsAccount />} />
          <Route path="/accounts/service" element={<AccountService />} />
          <Route path="/accounts/metal" element={<MetalAccounts />} /> {/* <--- Նոր էջի ճանապարհը */}
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