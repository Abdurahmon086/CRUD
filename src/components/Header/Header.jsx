import React from 'react'
import './index.scss'
import next from '../../../public/caret-circle-down.svg'
import bell from '../../../public/bell.svg'

function Header() {
    return (
        <header>
            <div className="head">
                <img src={next} alt="neaxt icon" />

                <div className="head__right">
                    <form action="#">
                        <div className="head__inner">
                            <input type="search" name='search' placeholder='Search...' className='head__input'/>
                        </div>
                    </form>
                    <img src={bell} alt="bell icon" />
                </div>
            </div>
        </header>
    )
}

export default Header