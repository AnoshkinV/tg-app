import { observer } from 'mobx-react-lite'
import React from 'react'
import "./WalletScreen.css"

const Wallet = observer(() => {
  return (
    <div className='inner-width m-side'>
      <div className='wallet-header flex-center'>
        <span>Hello,</span>
        <h1>Name of Chelik</h1>
      </div>
      <div className='w-balance'>
        <p>Your balance</p>
        <span>5 500</span>
      </div>
      <div className='flex-center w-body'>
        <div className='stroke inner-width w-address'>
          <span>
            1fef1rr4-r4r5v4re6-xrx455
          </span>
        </div>
        <button className='btn alt-btn'>Withdraw</button>
      </div>
      <div className='stroke lang'>
        <span>Language</span>
        <button className='lang-btn'>Eng</button>
      </div>
    </div>
  )
})

export default Wallet