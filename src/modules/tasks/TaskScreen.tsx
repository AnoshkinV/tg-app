import React from 'react'
import './TaskScreen.css'
import { observer } from 'mobx-react-lite'
import TaskList from './components/TaskList'
import TaskHeading from './components/TaskHeading'



const Taskbar = observer(() => {
  return (
    <div className='tasks inner-width'>
      <TaskHeading /> 
      <TaskList />
    </div>
  )
})

export default Taskbar