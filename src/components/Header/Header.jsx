import React, { useContext } from 'react'
import './index.scss'
import next from '../../../public/caret-circle-down.svg'
import bell from '../../../public/bell.svg'
import moon from '../../../public/moon.svg'
import sun from '../../../public/sun.svg'
import { context } from '../../context/Context'

function Header(porps) {
    const { setLeng, setMode } = porps;
    const { mode, language } = useContext(context)
    const darkMode = {
        backgroundColor: mode === "Dark" ? '#474444' : '',
    }


    return (
        <header style={darkMode}>
            <div className="head" >
                <img src={next} alt="neaxt icon" />

                <div className="head__right">
                    <form action="#">
                        <div className="head__inner">
                            <input type="search" name='search' placeholder={language.search} className='head__input' />
                        </div>
                    </form>
                    <div className="head__choose">
                        <img src={bell} alt="bell icon" className='head__svg' />
                        <select ame="theme" id="theme" className='head__select' onChange={(e) => { setMode(e.target.value), localStorage.setItem('theme', e.target.value) }} >
                            <option disabled selected>{language.selectTheme}</option>
                            <option> Light </option>
                            <option> Dark </option>

                        </select>
                        <select name="lang" id="lang" className='head__select' onChange={(e) => { setLeng(e.target.value), localStorage.setItem('leng', e.target.value) }}>
                            <option disabled selected >{language.selectLanguage}</option>
                            <option value='eng'>ENG</option>
                            <option value='uzb'>UZB</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header