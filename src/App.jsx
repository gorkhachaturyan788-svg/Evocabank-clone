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

// Импортируем бизнес-кредиты
import BusinessLoans from './components/BusinessLoans'; // <-- Импорт BusinessLoans

// Импортируем остальные страницы из components
import InvestmentServices from './components/InvestmentServices'; 
import Bonds from './components/Bonds'; 
import HKDServices from './components/HKDServices'; 
import RepoTransactions from './components/RepoTransactions';
import EvocaInvest from './components/EvocaInvest'; 
import EvocaTouch from './components/EvocaTouch'; 

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

          {/* Роуты для Бизнес-кредитов */}
          <Route path="/business/loans" element={<BusinessLoans />} />
          <Route path="/business/loans/business-loans" element={<BusinessLoans />} />

          <Route path="/cards" element={<AllCards />} />
          <Route path="/cards/all" element={<AllCards />} />
          <Route path="/cards/service" element={<CardService />} />
          <Route path="/cards/social" element={<SocialCards />} />
          <Route path="/cards/salary" element={<EvocaSalary />} />
          <Route path="/business/cards/salary" element={<EvocaSalary />} />
          
          {/* Evoca Benefits */}
          <Route path="/cards/benefits" element={<EvocaBenefits />} />

          {/* Депозиты */}
          <Route path="/deposits" element={<DepositsList />} />
          <Route path="/deposits/all" element={<DepositsList />} />
          <Route path="/deposits/info" element={<DepositsInfo />} />

          {/* Счета */}
          <Route path="/accounts" element={<EvocaSavingsAccount />} />
          <Route path="/accounts/savings" element={<EvocaSavingsAccount />} />
          <Route path="/accounts/service" element={<AccountService />} />
          <Route path="/accounts/metal" element={<MetalAccounts />} />
          <Route path="/accounts/non-resident" element={<NonResidentService />} />

          {/* Переводы */}
          <Route path="/transfers" element={<MoneyTransfers />} />
          <Route path="/transfers/money" element={<MoneyTransfers />} />
          <Route path="/transfers/systems" element={<PaymentSystems />} />

          {/* Ценные бумаги */}
          <Route path="/securities/investment" element={<InvestmentServices />} />
          <Route path="/business/securities/investment" element={<InvestmentServices />} />
          <Route path="/securities/bonds" element={<Bonds />} />
          <Route path="/business/securities/bonds" element={<Bonds />} />
          <Route path="/securities/hkd" element={<HKDServices />} />
          <Route path="/business/securities/hkd" element={<HKDServices />} />
          <Route path="/securities/repo" element={<RepoTransactions />} />
          <Route path="/business/securities/repo" element={<RepoTransactions />} />
          <Route path="/securities/evocainvest" element={<EvocaInvest />} />
          <Route path="/business/securities/evocainvest" element={<EvocaInvest />} />

          {/* EvocaTOUCH */}
          <Route path="/evoca-touch" element={<EvocaTouch />} />
          <Route path="/business/evoca-touch" element={<EvocaTouch />} />

          {/* Корзина */}
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