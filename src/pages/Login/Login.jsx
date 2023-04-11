import React from 'react'
import logo from '../../../public/Logo.svg'

import './index.scss'

function Login() {
    return (
        <div className='login'>
            <div className="login__wrapper">
                <img src={logo} alt="CRUD OPERATIONS logo" width={330} height={39} />

                <h4 className="login__title">Sign In</h4>
                <p className="login__text">Enter your credentials to access your account</p>


                <form action="#" className='login__form form'>
                    <div className="form__inner">
                        <label htmlFor="email" className='form__text'>Email</label>
                        <input type="email" name='email' placeholder='Enter your email' className='form__input' />
                    </div>
                    <div className="form__inner">
                        <label htmlFor="password" className='form__text'>Password</label>
                        <input type="password" name='password' placeholder='Enter your password' className='form__input' />
                    </div>
                    <button type='submit' className='form__btn'>SIGN IN</button>
                </form>
                <p className='login__text-bottom'>Forgot your password? <a href='#'> Reset Password</a></p>
            </div>
        </div>
    )
}

export default Login