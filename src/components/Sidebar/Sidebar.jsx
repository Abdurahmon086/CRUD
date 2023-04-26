import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './index.scss'
import logo from '../../../public/Logo.svg'
import person from '../../../public/admin.jpg'
import logout from '../../../public/sign-out.svg'
import home from '../../../public/home.svg'
import bookmark from '../../../public/bookmark-side.svg'
import graduation from '../../../public/graduation-side.svg'
import usd from '../../../public/usd-side.svg'
import file from '../../../public/file.svg'
import sliders from '../../../public/sliders.svg'
import { Logout } from '../../hooks/useLogout';

function Sidebar({ mode, language }) {

    const darkMode = {
        backgroundColor: mode === "Dark" ? '#474444' : '',
    }
    const darkColor = {
        color: mode === "Dark" ? '#Fff' : '',
    }

    const navigate = useNavigate()
    return (
        <>
            <div className="sidebar" style={darkMode}>
                <div className="sidebar__wrapper">
                    <NavLink to="/" className='sidebar__img'>
                        <img src={logo} alt="CRUD OPERATIONS logo" />
                    </NavLink>
                    <div className="sidebar__top">
                        <img src={person} alt="person image" width={128} height={128} />
                        <h4 className="sidebar__title" style={darkColor}>Karthi Madesh</h4>
                        <span className='sidebar__sp' style={darkColor}>Admin</span>
                    </div>
                    <nav className='sidebar__navbar'>
                        <ul className="sidebar__list">
                            <li className="sidebar__item"><NavLink to="/" className='sidebar__link' style={darkColor}><img src={home} alt="home icon" />   {language.home}</NavLink></li>
                            <li className="sidebar__item"><NavLink to="/courde" className='sidebar__link' style={darkColor}><img src={bookmark} alt="home icon" />   {language.course}</NavLink></li>
                            <li className="sidebar__item"><NavLink to="/students" className='sidebar__link' style={darkColor}><img src={graduation} alt="home icon" /> {language.students}</NavLink></li>
                            <li className="sidebar__item"><NavLink to="/payment" className='sidebar__link' style={darkColor} ><img src={usd} alt="home icon" /> {language.payment}</NavLink></li>
                            <li className="sidebar__item"><NavLink to="/report" className='sidebar__link' style={darkColor}><img src={file} alt="home icon" />  {language.report}</NavLink></li>
                            <li className="sidebar__item"><NavLink to="/settings" className='sidebar__link' style={darkColor}><img src={sliders} alt="home icon" /> {language.settings}</NavLink></li>
                        </ul>
                    </nav>
                    <div className="sidebar__bottom">
                        <span className='sidebar__login ' style={darkColor} onClick={() => Logout(navigate)}>{language.logout}  <img src={logout} alt="sign out icon" /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar