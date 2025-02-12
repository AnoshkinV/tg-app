import { observer } from 'mobx-react-lite'
import React from 'react'
import "./HomeScreen.css"

const Home = observer(() => {
  return (
    <div className='flex-center home-bg'>
      <div className='h-container inner-width m-side'>
        <div className="header">
          <span className='flex-center h-btn'>EV</span>
          <h2>YOUHODLER</h2>
          <span className='flex-center h-btn rounded'>?</span>
        </div>
        <div className="flex-center balance-info">
          <p>Your balance</p>
          <h1>0 SATS</h1>
        </div>
        <div className='flex-center btc-btn'>
          <img src='/assets/images/coin.png' alt='coin.png' />
        </div>
        <div className='energy-bar'>
          <span>250/1000</span>
          <div className='progress-container'>
            <div className='progress-bar'></div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Home