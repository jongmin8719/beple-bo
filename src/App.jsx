import Header from '@components/layout/Header'
import ContainerWrap from '@components/layout/ContainerWrap'
import PageWrap from '@components/layout/PageWrap'
import MainPage from '@pages/main'
import { Outlet, useLocation } from 'react-router-dom'

// 스타일시트
import '@style/common.scss'
import '@style/index.scss'

function App() {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <PageWrap>
      <Header logo={null} pageTitle='BEPLE' />

      <ContainerWrap className='main-page'>
        {/* 메인 페이지 렌더링 */}      
        {isMainPage && (<MainPage />)}

        {/* 서브 페이지 렌더링 */}      
        <Outlet />
      </ContainerWrap>
    </PageWrap>
  )
}

export default App
