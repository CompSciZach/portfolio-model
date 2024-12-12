import React from 'react'
// @ts-ignore
import ZachImage from '../assets/PortfolioPicture.jpg'

function Picture() {
    return (
        <div className='zach-picture'>
            <img src={ZachImage} alt="pic of me"/>
        </div>
    )
}

export default Picture