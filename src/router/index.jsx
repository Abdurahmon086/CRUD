import React, { useState }  from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Error from '../pages/Error/Error'
import Payment from '../pages/Payment/Payment'
import Students from '../pages/Students/Students'
import Home from '../pages/Home/Home'
import '../app.css'
import { context } from '../context/Context'
import LANG from '../lang/lang'

function index() {

    const [leng, setLeng] = useState(localStorage.getItem('leng') || 'eng')
    const [mode, setMode] = useState(localStorage.getItem('theme') || 'light')

    const darkMode = {
        backgroundColor: mode === "Dark" ? '#686565' : '',
    }
    return (
        <>
            <context.Provider value={{ leng, mode, language: LANG[leng] }}>
                <div className="all__wrapper" style={darkMode} >
                    <Sidebar mode={mode} leng={leng} language={LANG[leng]} />
                    <div className="body-all">
                        <Header setLeng={setLeng} setMode={setMode} />
                        <main className='main-all'>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/students' element={<Students />} />
                                <Route path='/payment' element={<Payment />} />
                                <Route path='*' element={<Error />} />
                            </Routes>
                        </main>
                    </div>
                </div>
            </context.Provider>
        </>
    )
}

export default index