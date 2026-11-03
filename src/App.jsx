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
import EvocaSalary from './components/EvocaSalary';
import DepositsList from './components/DepositsList';
import DepositsInfo from './components/DepositsInfo';
import EvocaSavingsAccount from './components/EvocaSavingsAccount'; 
import AccountService from './components/AccountService'; 
import MetalAccounts from './components/MetalAccounts'; 
import NonResidentService from './components/NonResidentService'; 
import MoneyTransfers from './components/MoneyTransfers'; 
import PaymentSystems from './components/PaymentSystems'; 
import Cart from './pages/Cart'; 

// Ներմուծում ենք Արժեթղթեր և EvocaTOUCH բաժնի էջերը components-ից
import InvestmentServices from './components/InvestmentServices'; 
import Bonds from './components/Bonds'; 
import HKDServices from './components/HKDServices'; 
import RepoTransactions from './components/RepoTransactions';
import EvocaInvest from './components/EvocaInvest'; 
import EvocaTouch from './components/EvocaTouch'; // <-- Ներմուծում ենք EvocaTOUCH բաղադրիչը

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
          <Route path="/cards/salary" element={<EvocaSalary />} />
          <Route path="/business/cards/salary" element={<EvocaSalary />} />
          
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
          <Route path="/accounts/metal" element={<MetalAccounts />} />
          <Route path="/accounts/non-resident" element={<NonResidentService />} />

          {/* Փոխանցումներ էջեր */}
          <Route path="/transfers" element={<MoneyTransfers />} />
          <Route path="/transfers/money" element={<MoneyTransfers />} />
          <Route path="/transfers/systems" element={<PaymentSystems />} />

          {/* Արժեթղթեր / Ներդրումային ծառայություններ */}
          <Route path="/securities/investment" element={<InvestmentServices />} />
          <Route path="/business/securities/investment" element={<InvestmentServices />} />

          {/* Արժեթղթեր / Պարտատոմսեր */}
          <Route path="/securities/bonds" element={<Bonds />} />
          <Route path="/business/securities/bonds" element={<Bonds />} />

          {/* Արժեթղթեր / ՀԿԴ ծառայություններ */}
          <Route path="/securities/hkd" element={<HKDServices />} />
          <Route path="/business/securities/hkd" element={<HKDServices />} />

          {/* Արժեթղթեր / Ռեպո/Հակադարձ Ռեպո գործարքներ */}
          <Route path="/securities/repo" element={<RepoTransactions />} />
          <Route path="/business/securities/repo" element={<RepoTransactions />} />

          {/* Արժեթղթեր / EvocaINVEST */}
          <Route path="/securities/evocainvest" element={<EvocaInvest />} />
          <Route path="/business/securities/evocainvest" element={<EvocaInvest />} />

          {/* EvocaTOUCH */}
          <Route path="/evoca-touch" element={<EvocaTouch />} />
          <Route path="/business/evoca-touch" element={<EvocaTouch />} />

          {/* Զամբյուղի էջ */}
          <Route path="/cart" element={<Cart />} />
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