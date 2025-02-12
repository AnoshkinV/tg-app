import { observer } from 'mobx-react-lite'
import React from 'react'
import "./FriendScreen.css"

interface IFriend {
  id: number,
  name: string,
  reward: number
}

const friendList: IFriend[] = [
  { id: 1, name: "Alex Merser", reward: 500 },
  { id: 2, name: "Dante", reward: 500 },
  { id: 3, name: "Andreano Chelintano", reward: 500 },
  { id: 4, name: "Zheka Naglockov", reward: 500 }
]

const Friends = observer(() => {
  return (
    <div className='inner-width m-side'>
      <div className='fs-container'>
        <div className='fs-header'>
          <h1>Invite your firend</h1>
          <p>You can invite friends using your referral link:</p>
        </div>
        <button className='btn alt-btn'>Invite friends</button>
        <div className='friends-list'>
          <h2>Friends ({friendList.length})</h2>
          <div className='list-head'>
            <h3>Name</h3>
            <h3>Reward</h3>
          </div>
          {friendList.map(f => (
            <div className='friend-item' key={f.id}>
              <span>{f.name}</span>
              <span>{f.reward} sats</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Friends