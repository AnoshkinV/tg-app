import React from 'react';
import Tabbar from './components/Tabbar/Tabbar';
import Taskbar from './components/Taskbar/Taskbar';

function App() {
  return (
    <div className="App flex-center">
      <Taskbar />
      <Tabbar />
    </div>
  );
}

export default App;
