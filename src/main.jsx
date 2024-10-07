import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
/*import HomePage from './pages/HomePage.jsx'*/
import Navbar from './components/Navbar.jsx'
import Graph from './components/Graph.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Graph></Graph>
    
  </StrictMode>,
)
