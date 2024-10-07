import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
/*import HomePage from './pages/HomePage.jsx'*/
import Navbar from './components/Navbar.jsx'
import LineGraph from './components/LineGraph.jsx'
/*import AmountBox from './components/AmountBox.jsx'*/
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    
    <div className='w-3/5'>
      <LineGraph></LineGraph>
    </div>
    
    
  </StrictMode>,
)
