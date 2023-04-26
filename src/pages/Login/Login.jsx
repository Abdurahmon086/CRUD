import React, { useState } from 'react'
import logo from '../../../public/Logo.svg'

import './index.scss'
import LOGIN from '../../Settings/api'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const redirect = useNavigate()

    const userLogin = (e) => {
        e.preventDefault()

        const loginData = {
            username: user,
            password: password
        }

        if (user.length === 0 || password.length === 0) {
            alert('Please enter your username or your password')
        } else {
            LOGIN.auth(loginData).then(res => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.token)
                    redirect('/')
                }
            })
        }
    }

    return (
        <div className='login'>
            <div className="login__wrapper">
                <img src={logo} alt="CRUD OPERATIONS logo" width={330} height={39} />

                <h4 className="login__title">Sign In</h4>
                <p className="login__text">Enter your credentials to access your account</p>


                <form className='login__form form' onSubmit={(e) => userLogin(e)} >
                    <div className="form__inner">
                        <label htmlFor="username" className='form__text'>Username</label>
                        <input onChange={(e) => setUser(e.target.value)} type="text" name='username' placeholder='Enter your username' className='form__input' />
                    </div>
                    <div className="form__inner">
                        <label htmlFor="password" className='form__text'>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder='Enter your password' className='form__input' />
                    </div>
                    <button type='submit' className='form__btn'>SIGN IN</button>
                </form>
                <p className='login__text-bottom'>Forgot your password? <a href='#'> Reset Password</a></p>
            </div>
        </div>
    )
}

export default Login