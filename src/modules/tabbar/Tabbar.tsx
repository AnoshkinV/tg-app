import React, { JSX } from 'react'
import './Tabbar.css'
import { observer } from 'mobx-react-lite';
import { screenStore, ScreenType } from '../../store/ScreenStore'
import { HiHome } from "react-icons/hi";
import { HiClipboard } from "react-icons/hi2";
import { FaUserFriends } from "react-icons/fa";
import { BiBitcoin } from "react-icons/bi";


interface ITab {
    type: ScreenType;
    label: string;
    icon: JSX.Element;
}

const tabs: ITab[] = [
    { type: "home", label: "Home", icon: <HiHome size={30} /> },
    { type: "taskbar", label: "Tasks", icon: <HiClipboard size={30} /> },
    { type: "friends", label: "Friends", icon: <FaUserFriends size={30} /> },
    { type: "wallet", label: "Wallet", icon: <BiBitcoin size={30} /> },
]

const Tabbar = observer(() => {
    return (
        <div className='tabbar flex-center inner-width'>
            {tabs.map(({ type, label, icon }) =>
                <button
                    key={type}
                    onClick={() => screenStore.go({ type: type })}
                >
                    {icon}
                    <span>{label}</span>
                </button>
            )}

            {/* <button onClick={() => screenStore.go({type: "home"})}>Home</button>
            <button onClick={() => screenStore.go({type: "taskbar"})}>Tasks</button>
            <button onClick={() => screenStore.go({type: "friends"})}>Friends</button>
            <button onClick={() => screenStore.go({type: "wallet"})}>Wallet</button> */}
        </div>
    );
});

export default Tabbar