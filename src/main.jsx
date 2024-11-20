import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InvestmentsPage from './pages/InvestmentsPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx' 

import './index.css'
import RiskForm from './components/RiskForm.jsx'
import TransactionDetailsPage from './pages/TransactionDetailsPage.jsx'
import LandingPage from './pages/LandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>

      <Route index element={<HomePage></HomePage>}></Route>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
      <Route path="/investments" element={<InvestmentsPage></InvestmentsPage>}></Route>
      <Route path= "/login" element={<LoginPage></LoginPage>}> </Route> 
      <Route path= "/signup" element={<SignupPage />}> </Route>
      <Route path= "/risk-form" element={<RiskForm></RiskForm>}> </Route> 
      <Route path= "/transaction-details" element={<TransactionDetailsPage></TransactionDetailsPage>}> </Route> 
      <Route path= "/landing" element={<LandingPage></LandingPage>}> </Route> 

    </Routes>
  </BrowserRouter>
    
    
    
  </StrictMode>,
)
