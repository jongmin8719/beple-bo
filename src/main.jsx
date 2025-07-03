import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import '@/style/common.scss'
// import '@/style/index.scss'
import App from './App.jsx'
import ContainerWrap from './components/temp/ContainerWrap.jsx'
import TestPage from './pages/test/Page.jsx'
import TestPage2 from './pages/test2/Page.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />}>
            <Route element={<ContainerWrap className='test-page' />}>
              <Route path='/test/page' element={<TestPage />} />
              <Route path='/test2/page' element={<TestPage2 />} />
            </Route>
          </Route>
      </Routes>
  </BrowserRouter>
)
