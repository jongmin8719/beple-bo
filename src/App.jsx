import Header from '@components/layout/header'
import PageWrap from '@components/layout/pageWrap'
import { Outlet } from 'react-router-dom'

// 스타일시트
import '@style/common.scss'
import '@style/index.scss'

function App() {

  return (
    <PageWrap>
      <Header logo={null} />
      <Outlet />
    </PageWrap>
  )
}

export default App
