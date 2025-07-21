import Header from '@components/layout/Header'
import ContainerWrap from '@components/layout/ContainerWrap'
import PageWrap from '@components/layout/PageWrap'
import { useLocation, Outlet } from 'react-router-dom'

// 스타일시트
import '@style/common.scss'
import '@style/index.scss'

function App() {
  const location = useLocation();

  return (
    <PageWrap>
      <Header logo={null} pageTitle='BEPLE' />

      {/* 페이지 렌더링 */}
      <Outlet />
    </PageWrap>
  )
}

export default App
