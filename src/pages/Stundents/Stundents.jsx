import React from 'react'
import sort from '../../../public/sort.svg'
import person from '../../../public/person.jpg'
import pen from '../../../public/pen.svg'
import del from '../../../public/delet.svg'
import './index.scss'

function Stundents() {
    return (
        <section className='student'>
            <div className="student__wrapper">
                <div className="student__top">
                    <h2 className="student__title">Students List</h2>
                    <div className="student__top-right">
                        <img src={sort} alt="sort icon" />
                        <button className='student__btn'>ADD NEW STUDENT</button>
                    </div>
                </div>
                <div className="student__bottom card">
                    <table className='card__table-wrapper'>
                        <thead className='card__table--head'>
                            <tr className='card__head-row'>
                                <th className='card__head-text'></th>
                                <th className='card__head-text'> Name</th>
                                <th className='card__head-text'> Email</th>
                                <th className='card__head-text'>Phone</th>
                                <th className='card__head-text'>Enroll Number</th>
                                <th className='card__head-text'>Date of admission</th>
                                <th className='card__head-text'></th>
                            </tr>
                        </thead>
                        <tbody className='card__table--body'>
                            <tr className='card__body-row'>
                                <td className='card__body-img'><img src={person} alt="person image" /></td>
                                <td className='card__body-text'>Karthi</td>
                                <td className='card__body-text'>karthi@gmmail.com</td>
                                <td className='card__body-text'>7305477760</td>
                                <td className='card__body-text'>1234567305477760</td>
                                <td className='card__body-text'>08-Dec, 2021</td>
                                <td className='card__body-icon'><img src={pen} alt="pen icon" /> <img src={del} alt="delete icon" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Stundents