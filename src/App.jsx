import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import './app.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Stundents from './pages/Stundents/Stundents'
import Payment from './pages/Payment/Payment'
import Login from './pages/Login/Login'

function App() {
  return (
    <>
      {/* <div className="all__wrapper"> */}
        {/* <Sidebar /> */}
        {/* <div className="body-all"> */}
          {/* <Header /> */}
          {/* <main className='main-all'> */}
            {/* <Home /> */}
            {/* <Stundents /> */}
            {/* <Payment /> */}
          {/* </main> */}
        {/* </div> */}
        <Login/>
      {/* </div> */}
    </>
  )
}

export default App