import React from 'react';
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
                    <a href="/" className='sidebar__img'>
                        <img src={logo} alt="CRUD OPERATIONS logo" />
                    </a>
                    <div className="sidebar__top">
                        <img src={person} alt="person image" width={128} height={128} />
                        <h4 className="sidebar__title">Karthi Madesh</h4>
                        <span className='sidebar__sp'>Admin</span>
                    </div>
                    <nav className='sidebar__navbar'>
                        <ul className="sidebar__list">
                            <li className="sidebar__item"><a href="#" className='sidebar__link' ><img src={home} alt="home icon" />    Home</a></li>
                            <li className="sidebar__item"><a href="#" className='sidebar__link' ><img src={bookmark} alt="home icon" />    Course</a></li>
                            <li className="sidebar__item"><a href="#" className='sidebar__link' ><img src={graduation} alt="home icon" />   Students</a></li>
                            <li className="sidebar__item"><a href="#" className='sidebar__link' ><img src={usd} alt="home icon" />   Payment</a></li>
                            <li className="sidebar__item"><a href="#" className='sidebar__link' ><img src={file} alt="home icon" />   Report</a></li>
                            <li className="sidebar__item"><a href="#" className='sidebar__link' ><img src={sliders} alt="home icon" />   Settings</a></li>
                        </ul>
                    </nav>
                    <div className="sidebar__bottom">
                        <a href="#" className='sidebar__login'>Logout <img src={logout} alt="sign out icon" /></a>
                    </div>
                </div>
            </div>
        </sidebar>
    )
}

export default Sidebar