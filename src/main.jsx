import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style/common.scss'
import App from './App.jsx'
import PageFaq from './components/faq/Page.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />}>
            <Route path='/components/faq/page' element={<PageFaq />} />
          </Route>
          <Route path='*' element={<div>404</div>} />
      </Routes>
  </BrowserRouter>
)
