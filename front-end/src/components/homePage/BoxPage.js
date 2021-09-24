import React from 'react'
import './BoxPage.css'
const BoxPage = ({title, subtitle,pi}) => {
    return (
        <div className='box__page' >
            <img src={pi} alt="" />
            <h5>{title}</h5>
            <p>{subtitle}</p>
        </div>
    )
}

export default BoxPage
