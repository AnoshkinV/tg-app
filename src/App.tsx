import React, { lazy, Suspense } from 'react';
import Tabbar from './components/Tabbar/Tabbar';
import { screenStore, } from './store/ScreenStore';
import { observer } from 'mobx-react-lite';

const screens = {
  home: lazy(() => import("./components/Home/Home")),
  taskbar: lazy(() => import("./components/Taskbar/Taskbar")),
  friends: lazy(() => import("./components/Friends/Friends")),
  wallet: lazy(() => import("./components/Wallet/Wallet")),
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
