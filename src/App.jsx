import Header from '@components/temp/header'
import PageWrap from '@components/temp/pageWrap'
import { Outlet } from 'react-router-dom'

// 스타일시트
import '@style/common.scss'
import '@style/main.scss'

function App() {

  return (
    <PageWrap>
      <Header logo={null} />
      <Outlet />
    </PageWrap>
  )
}

export default App
