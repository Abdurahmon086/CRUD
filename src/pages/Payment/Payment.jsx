import React, { useContext } from 'react'
import './index.scss'
import sort from '../../../public/sort.svg'
import eye from '../../../public/eye.svg'
import { context } from '../../context/Context'

function Payment() {
    const {mode, language} = useContext(context)
    
    const darkColor = {
        color: mode === "Dark" ? '#Fff' : '',
    }
    return (
        <section className='pay'>
            <div className="pay__wrapper">
                <div className="pay__top">
                    <h4 className="pay__title" style={darkColor}>{language.paymentDetails}</h4>
                    <img src={sort} alt="sort icon" />
                </div>
                <div className="pay__bottom card">
                    <table className='card__table-wrapper'>
                        <thead className='card__table--head'>
                            <tr className='card__head-row'>
                                <th className='card__head-text'> {language.name}</th>
                                <th className='card__head-text'> {language.paymentSh}</th>
                                <th className='card__head-text'> {language.billNumber}</th>
                                <th className='card__head-text'> {language.amountPaid}</th>
                                <th className='card__head-text'>{language.blanceAmount}</th>
                                <th className='card__head-text'>{language.date} </th>
                                <th className='card__head-text'></th>
                            </tr>
                        </thead>
                        <tbody className='card__table--body'>
                            <tr className='card__body-row'>
                                <td className='card__body-text'>Karthi</td>
                                <td className='card__body-text'>First</td>
                                <td className='card__body-text'>00012223</td>
                                <td className='card__body-text'>INR 35,000</td>
                                <td className='card__body-text'>INR 55,000</td>
                                <td className='card__body-text'>08-Dec, 2021</td>
                                <td className='card__body-icon'><img src={eye} alt="eye icon" /></td>
                            </tr>
                            <tr className='card__body-row'>
                                <td className='card__body-text'>Karthi</td>
                                <td className='card__body-text'>First</td>
                                <td className='card__body-text'>00012223</td>
                                <td className='card__body-text'>INR 35,000</td>
                                <td className='card__body-text'>INR 55,000</td>
                                <td className='card__body-text'>08-Dec, 2021</td>
                                <td className='card__body-icon'><img src={eye} alt="eye icon" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section >
    )
}

export default Payment