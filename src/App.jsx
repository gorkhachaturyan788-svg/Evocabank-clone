import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./components/Blog";
import News from "./components/News";
import EvocaLife from "./components/EvocaLife";
import AboutGeneral from "./components/AboutGeneral";
import InstantPayments from "./components/InstantPayments";
import EvocabankPayments from "./components/EvocabankPayments";
import InternationalOperators from "./components/InternationalOperators";
import UtilityPayments from "./components/UtilityPayments";
import InternetTvPayments from "./components/InternetTvPayments";
import RoadPolicePayments from "./components/RoadPolicePayments";
import LoanOrganizationsPayments from "./components/LoanOrganizationsPayments";
import Loans from "./components/Loans";
import CreditHistoryScore from "./components/CreditHistoryScore";
import ImportantInfo from "./components/ImportantInfo";
import AllCards from "./components/AllCards";
import CardService from "./components/CardService";
import SocialCards from "./components/SocialCards";
import EvocaBenefits from "./components/EvocaBenefits";
import EvocaSalary from "./components/EvocaSalary";
import DepositsList from "./components/DepositsList";
import DepositsInfo from "./components/DepositsInfo";
import ClassicDeposit from "./components/ClassicDeposit";
import EvocaSavingsAccount from "./components/EvocaSavingsAccount";
import AccountService from "./components/AccountService";
import NonResidentService from "./components/NonResidentService";
import MoneyTransfers from "./components/MoneyTransfers";
import PaymentSystems from "./components/PaymentSystems";
import Cart from "./pages/Cart";

// Բիզնես բաժնի իմպորտներ
import BusinessLoans from "./components/BusinessLoans";
import EvocaLeasing from "./components/EvocaLeasing";
import SpecialOffer from "./components/SpecialOffer";
import BusinessAccountOpening from "./components/BusinessAccountOpening";
import BusinessMetalAccounts from "./components/BusinessMetalAccounts";

// Մյուս էջերի իմպորտներ
import InvestmentServices from "./components/InvestmentServices";
import Bonds from "./components/Bonds";
import HKDServices from "./components/HKDServices";
import RepoTransactions from "./components/RepoTransactions";
import EvocaInvest from "./components/EvocaInvest";
import EvocaTouch from "./components/EvocaTouch";

// Չատ և Լոգին
import AdminChat from "./components/AdminChat";
import LoginPage from "./pages/LoginPage";
import ChatWidget from "./components/ChatWidget";

// Online քարտեզ
import MapPage from "./pages/MapPage";

function Layout() {
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/\/+$/, "") || "/";
  const hideChrome =
    normalizedPath === "/cards/benefits" ||
    normalizedPath === "/login" ||
    normalizedPath.startsWith("/instant-payments");

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white font-['Noto_Sans_Armenian','Noto_Sans',Arial,sans-serif] antialiased">
      {!hideChrome && <Header />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Բլոգ և Նորություններ */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/*" element={<News />} />

          {/* Հիմնական բաժինների ավտոմատ վերահղում դեպի առաջին ենթաբաժին */}
          <Route path="/business" element={<Navigate to="/business/loans" replace />} />
          <Route path="/about" element={<Navigate to="/about/general" replace />} />
          <Route path="/career" element={<Navigate to="/career/life" replace />} />

          {/* Մեր մասին / Ընդհանուր տեղեկատվություն */}
          <Route path="/about/general" element={<AboutGeneral />} />
          <Route path="/about/*" element={<AboutGeneral />} />

          {/* Կարիերա / Evoca Լայֆ */}
          <Route path="/career/life" element={<EvocaLife />} />
          <Route path="/career/*" element={<EvocaLife />} />

          {/* Ակնթարթային վճարումներ */}
          <Route path="/instant-payments" element={<InstantPayments />} />
          <Route path="/instant-payments/evocabank" element={<EvocabankPayments />} />
          <Route path="/instant-payments/international" element={<InternationalOperators />} />
          <Route path="/instant-payments/utility" element={<UtilityPayments />} />
          <Route path="/instant-payments/internet-tv" element={<InternetTvPayments />} />
          <Route path="/instant-payments/road-police" element={<RoadPolicePayments />} />
          <Route path="/instant-payments/loan-orgs" element={<LoanOrganizationsPayments />} />
          <Route path="/instant-payments/*" element={<InstantPayments />} />

          {/* Login */}
          <Route path="/login" element={<LoginPage />} />

          {/* Admin chat */}
          <Route path="/admin/chat" element={<AdminChat user={user} />} />

          {/* Loans */}
          <Route path="/loans" element={<Loans />} />
          <Route path="/loans/all" element={<Loans />} />
          <Route path="/loans/history-score" element={<CreditHistoryScore />} />
          <Route path="/loans/important-info" element={<ImportantInfo />} />

          {/* Business Loans & Leasing */}
          <Route path="/business/loans" element={<BusinessLoans />} />
          <Route path="/business/loans/business-loans" element={<BusinessLoans />} />
          <Route path="/business/leasing" element={<EvocaLeasing />} />
          <Route path="/business/leasing/evoca-leasing" element={<EvocaLeasing />} />
          <Route path="/business/leasing/special-offer" element={<SpecialOffer />} />

          {/* Business Accounts */}
          <Route path="/business/accounts/opening" element={<BusinessAccountOpening />} />
          <Route path="/business/accounts/metal" element={<BusinessMetalAccounts />} />

          {/* Cards */}
          <Route path="/cards" element={<AllCards />} />
          <Route path="/cards/all" element={<AllCards />} />
          <Route path="/cards/service" element={<CardService />} />
          <Route path="/cards/social" element={<SocialCards />} />
          <Route path="/cards/salary" element={<EvocaSalary />} />
          <Route path="/business/cards/salary" element={<EvocaSalary />} />
          <Route path="/cards/benefits" element={<EvocaBenefits />} />

          {/* Deposits */}
          <Route path="/deposits" element={<DepositsList />} />
          <Route path="/deposits/all" element={<DepositsList />} />
          <Route path="/deposits/classic" element={<ClassicDeposit />} />
          <Route path="/business/deposits" element={<DepositsList />} />
          <Route path="/business/deposits/classic" element={<ClassicDeposit />} />
          <Route path="/deposits/info" element={<DepositsInfo />} />

          {/* Accounts */}
          <Route path="/accounts" element={<EvocaSavingsAccount />} />
          <Route path="/accounts/savings" element={<EvocaSavingsAccount />} />
          <Route path="/accounts/service" element={<AccountService />} />
          <Route path="/accounts/metal" element={<BusinessMetalAccounts />} />
          <Route path="/accounts/non-resident" element={<NonResidentService />} />

          {/* Transfers */}
          <Route path="/transfers" element={<MoneyTransfers />} />
          <Route path="/transfers/money" element={<MoneyTransfers />} />
          <Route path="/transfers/systems" element={<PaymentSystems />} />

          {/* Securities */}
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

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Online map */}
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </main>

      <ChatWidget user={user} />

      {!hideChrome && <Footer />}
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