import React, { lazy, Suspense } from 'react';
import Tabbar from './modules/tabbar/Tabbar';
import { screenStore, } from './store/ScreenStore';
import { observer } from 'mobx-react-lite';

const screens = {
  home: lazy(() => import("./modules/home/HomeScreen")),
  taskbar: lazy(() => import("./modules/tasks/TaskScreen")),
  friends: lazy(() => import("./modules/friends/FriendsScreen")),
  wallet: lazy(() => import("./modules/wallet/Wallet")),
};

const App = observer(() => {
  const ScreenComponent = screens[screenStore.screen.type];

  return (
    <div className='App flex-center'>
      <Suspense fallback={<div>Loading...</div>}>
        <ScreenComponent />
      </Suspense>
      <Tabbar />
    </div>
  );
});

export default App;
