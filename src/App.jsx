import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import Routers from './router/index'
import {useGuards} from './hooks/useAuthGuard'
import Login from './pages/Login/Login'

function App() {

  const navigate = useNavigate()
  const isAuth = useGuards()
  const {pathname} = useLocation()

  console.log(pathname);
  console.log(isAuth);

  useEffect(() => {

    if (!isAuth) {
      navigate('/login')
    } 

  }, [pathname])


  return (
    <>
      {
        !isAuth ? <Login /> : <Routers />
      }

    </>
  )
}

export default App