import React from 'react'
import './Taskbar.css'
import { observer } from 'mobx-react-lite'
import { taskStore } from '../../store/TaskStore'

const Taskbar = observer(() => {
  return (
    <div className='tasks inner-width'>
      {taskStore.tasks.map(task =>
        <div className='task-item' key={task.id}>
          <span>{task.title}</span>
          {task.status === "notCompleted" && (
            <button onClick={() => taskStore.updateTaskStatus(task.id, "completed")}>Complete Task</button>
          )}
          {task.status === "completed" && (
            <button onClick={() => taskStore.updateTaskStatus(task.id, "claimed")}>Claim Reward</button>
          )}
          {task.status === "claimed" && (
            <span>Reward Claimed</span>
          )}
          
        </div>
      )}
    </div>
  )
})

export default Taskbar