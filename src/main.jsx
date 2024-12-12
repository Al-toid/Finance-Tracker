import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import InvestmentsPage from './pages/InvestmentsPage.jsx';
import RiskForm from './components/RiskForm.jsx';
import TransactionDetailsPage from './pages/TransactionDetailsPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import TestPage from './pages/TestPage.jsx'; 

import { DarkModeProvider } from './context/DarkModeContext'; // Import the provider
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/risk-form" element={<RiskForm />} />
          <Route path="/transaction-details" element={<TransactionDetailsPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  </StrictMode>,
);
