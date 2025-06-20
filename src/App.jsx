import { useState } from 'react'
import { Link, Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import './style/common.scss'
import Header from './components/common/Header.jsx'
import ContainerWrap from './components/common/ContainerWrap.jsx'

function App() {

  return (
    <>
      <Header />
      <ContainerWrap />
    </>
  )
}

export default App
