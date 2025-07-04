import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from '@/routes/index'
// 컴포넌트
import ContainerWrap from './components/layout/ContainerWrap'
// 스타일시트
import '@/style/common.scss'
import '@/style/index.scss'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path={routes[0].path} element={routes[0].element}>
            <Route element={<ContainerWrap className='test-page' />}>
              {
                routes
                .filter(route => route.showInNav)
                .map((route, index) => (
                  <Route key={index} path={route.path} element={route.element} />
                ))
              }
            </Route>
          </Route>
      </Routes>
  </BrowserRouter>
)
