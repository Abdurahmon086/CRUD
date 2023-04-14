import React from 'react';
import { NavLink } from 'react-router-dom';
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

function Sidebar() {
    return (
        <sidebar>
            <div className="sidebar">
                <div className="sidebar__wrapper">
                    <NavLink to="/" className='sidebar__img'>
                        <img src={logo} alt="CRUD OPERATIONS logo" />
                    </NavLink>
                    <div className="sidebar__top">
                        <img src={person} alt="person image" width={128} height={128} />
                        <h4 className="sidebar__title">Karthi Madesh</h4>
                        <span className='sidebar__sp'>Admin</span>
                    </div>
                    <nav className='sidebar__navbar'>
                        <ul className="sidebar__list">
                            <NavLink to="/" className="sidebar__item"><a href='#' className='sidebar__link' ><img src={home} alt="home icon" />    Home</a></NavLink>
                            <NavLink to="/courde" className="sidebar__item"><a href='#' className='sidebar__link' ><img src={bookmark} alt="home icon" />    Course</a></NavLink>
                            <NavLink to="/students" className="sidebar__item"><a href='#' className='sidebar__link' ><img src={graduation} alt="home icon" />   Students</a></NavLink>
                            <NavLink to="/payment" className="sidebar__item"><a href='#' className='sidebar__link' ><img src={usd} alt="home icon" />   Payment</a></NavLink>
                            <NavLink to="/report" className="sidebar__item"><a href='#' className='sidebar__link' ><img src={file} alt="home icon" />   Report</a></NavLink>
                            <NavLink to="/settings" className="sidebar__item"><a href='#' className='sidebar__link' ><img src={sliders} alt="home icon" />   Settings</a></NavLink>
                        </ul>
                    </nav>
                    <div className="sidebar__bottom">
                        <NavLink to="/login" className='sidebar__login'>Logout <img src={logout} alt="sign out icon" /></NavLink>
                    </div>
                </div>
            </div>
        </sidebar>
    )
}

export default Sidebar