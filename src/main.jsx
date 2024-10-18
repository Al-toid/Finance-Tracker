import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
/*import HomePage from './pages/HomePage.jsx'*/
import Navbar from './components/Navbar.jsx'
import LineGraph from './components/LineGraph.jsx'
import AmountBox from './components/AmountBox.jsx'
import { amountData } from './mock_data.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-gray-300 h-screen'>
    <Navbar />
    <div className='flex w-7/12 justify-around pt-5' >
      <AmountBox title={amountData.balance.label} amount={amountData.balance.amount}></AmountBox>
      <AmountBox title={amountData.expenses.label} amount={amountData.expenses.amount}></AmountBox>
    </div>
    
    <div className='w-7/12 pt-5'>
      <LineGraph></LineGraph>
    </div>
    </div>
    
    
  </StrictMode>,
)
