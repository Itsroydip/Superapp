import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Registration from './pages/Registration.jsx'
import Selection from './pages/Selection.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/Selection" element={<Selection/>} />
          <Route path="*" element={<NotFound/>} />
       </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
