import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InvestmentsPage from './pages/InvestmentsPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
      <Route path="/investments" element={<InvestmentsPage></InvestmentsPage>}></Route>

    </Routes>
  </BrowserRouter>
    
    
    
  </StrictMode>,
)
