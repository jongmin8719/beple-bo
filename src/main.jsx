import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style/common.scss'
import App from './App.jsx'
import Faq from './component/Faq.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/component/faq' element={<Faq />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
