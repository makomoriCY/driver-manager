import React from 'react'
import './BoxPage.css'
const BoxPage = ({title,pi}) => {
    return (
        <div className='box__page' >
            <img src={pi} alt="" />
            <h5>{title}</h5>
        </div>
    )
}

export default BoxPage
