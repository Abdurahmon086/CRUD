import React from 'react'
import bookmark from '../../../public/bookmark.svg'
import graduationCap from '../../../public/graduation-cap.svg'
import Vector from '../../../public/Vector.svg'
import usd from '../../../public/usd.svg'
import './index.scss'
import { useContext } from 'react'
import { context } from '../../context/Context'

function Home() {

    const { mode, language } = useContext(context);
   
    const darkMode = {
        backgroundColor: mode === "Dark" ? '#686565' : '',
    }
    return (
        <section style={{ height: "100%" }}>
            <div className="hero" style={darkMode}>
                <div className="hero__wrapper">
                    <ul className='hero__list'>
                        <li className='hero__card card'>
                            <div className="card__top">
                                <img src={graduationCap} alt="graduationCap icon" />
                                <p className='card__text'>{language.students}</p>
                            </div>
                            <span className='card__sp'>243</span>
                        </li>
                        <li className='hero__card card'>
                            <div className="card__top">
                                <img src={bookmark} alt="bookmark icon" />
                                <p className='card__text'>{language.course}</p>
                            </div>
                            <span className='card__sp'>13</span>
                        </li>
                        <li className='hero__card card'>
                            <div className="card__top">
                                <img src={usd} alt="usd icon" />
                                <p className='card__text'>{language.payment}</p>
                            </div>
                            <span className='card__sp'>INR 556,000</span>
                        </li>
                        <li className='hero__card card'>
                            <div className="card__top">
                                <img src={Vector} alt="Vector icon" />
                                <p className='card__text'>{language.user}</p>
                            </div>
                            <span className='card__sp'>3</span>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Home