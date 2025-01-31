import React from 'react'
import './Tabbar.css'

const Tabbar = () => {
    return (
        <div className='tabbar flex-center inner-width'>
            <a href="#"><span>✝</span> Home</a>
            <a href="#"><span>☪</span>Tasks</a>
            <a href="#"><span>✡</span>Friends</a>
            <a href="#"><span>⚛</span>Wallet</a>
        </div>
    )
}

export default Tabbar