import React from 'react'
import './Tabbar.css'
import { observer } from 'mobx-react-lite';
import { screenStore } from '../../store/ScreenStore'

const Tabbar = observer(() => {
    return (
        <div className='tabbar flex-center inner-width'>
            <button onClick={() => screenStore.go({type: "home"})}>Home</button>
            <button onClick={() => screenStore.go({type: "taskbar"})}>Tasks</button>
            <button onClick={() => screenStore.go({type: "friends"})}>Friends</button>
            <button onClick={() => screenStore.go({type: "wallet"})}>Wallet</button>
        </div>
    );
});

export default Tabbar