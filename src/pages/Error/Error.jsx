import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function Error() {
    return (
    <Link  to="/">
        <div title="404" className='body'>404</div>
    </Link>
    )
}

export default Error