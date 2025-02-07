import { observer } from 'mobx-react-lite'
import React, { JSX } from 'react'
import { taskStore } from '../TaskStore'

const taskActions: Record<string, (id: number) => JSX.Element | null> = {
    notCompleted: (id) => (
        <button
            className='task-btn btn'
            onClick={() => taskStore.updateTaskStatus(id, "completed")}
        >
            Complete Task
        </button>
    ),
    completed: (id) => (
        <button
            className='task-btn btn'
            onClick={() => taskStore.updateTaskStatus(id, "claimed")}
        >
            Claim 🎁
        </button>
    ),
    claimed: () => <span>Claimed</span>
}

const TaskList = observer(() => {
    return (
        <div>
            <h3>Main steps</h3>
            {
            taskStore.tasks.map(task =>
                <div className='task-item' key={task.id}>
                    <div className='task-content'>
                        <span className='task-title'>{task.title}</span>
                        <span className='task-descripton'>{task.description}</span>
                    </div>
                    {taskActions[task.status]?.(task.id)}
                </div>
            )}
        </div>
    )
})

export default TaskList