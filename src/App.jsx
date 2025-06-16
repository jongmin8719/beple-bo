import { useState } from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import './style/common.scss'
import Faq from './component/Faq'

function App() {
  const navigate = useNavigate()

  const handleFaqClick = (e) => {
    e.preventDefault()
    navigate('/component/faq')
  }

  return (
    <>
      <header className='header'>
        <h1><Link to='/'>Home</Link></h1>
        <nav>
          <ul>
            <li><Link to="/component/faq" onClick={handleFaqClick}>FAQ</Link></li>
          </ul>
        </nav>
      </header>

      <main className='container-wrap'>
        <Routes>
          <Route path="/component/faq" element={<Faq />} />
        </Routes>
      </main>
    </>
  )
}

export default App
