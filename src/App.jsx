import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import './app.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Stundents from './pages/Students/Students'
import Payment from './pages/Payment/Payment'
import Error from './pages/Error/Error'
import { context } from './context/Context'
import LANG from './lang/lang'

function App() {

  const [leng, setLeng] = useState(localStorage.getItem('leng') || 'eng')
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light')

  const darkMode = {
    backgroundColor: mode === "Dark" ? '#686565' : '',
  }

  return (
    <>
      <context.Provider value={{ leng, mode, language: LANG[leng] }}>
        <BrowserRouter>
          <div className="all__wrapper" style={darkMode} >
            <Sidebar mode={mode} leng={leng} language={LANG[leng]} />
            <div className="body-all">
              <Header setLeng={setLeng} setMode={setMode} />
              <main className='main-all'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/students' element={<Stundents />} />
                  <Route path='/payment' element={<Payment />} />
                  <Route path='*' element={<Error />} />
                </Routes>
              </main>
            </div>
          </div>
        </BrowserRouter >
      </context.Provider>
    </>
  )
}

export default App