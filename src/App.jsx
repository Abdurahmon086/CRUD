import React from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import './app.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Stundents from './pages/Students/Students'
import Payment from './pages/Payment/Payment'
import Login from './pages/Login/Login'
import Error from './pages/Error/Error'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="all__wrapper">
          <Sidebar />
          <div className="body-all">
            <Header />
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
    </>
  ) 
}

export default App