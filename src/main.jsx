import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InvestmentsPage from './pages/InvestmentsPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx' 

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
      <Route path="/investments" element={<InvestmentsPage></InvestmentsPage>}></Route>
      <Route path= "/login" element={<LoginPage></LoginPage>}> </Route> 
      <Route path= "/Signup" element={<SignupPage></SignupPage>}> </Route> 
      

    </Routes>
  </BrowserRouter>
    
    
    
  </StrictMode>,
)
