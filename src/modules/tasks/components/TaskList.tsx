import { observer } from 'mobx-react-lite'
import React, { JSX } from 'react'
import { taskStore } from '../TaskStore'


const TaskButton = ({ text, onClick }: { text: string, onClick?: () => void }) => (
    <button className='task-btn btn' onClick={onClick} disabled={!onClick}>
        {text}
    </button>
)

const taskActions: Record<string, (id: number) => JSX.Element | null> = {
    notCompleted: (id) => (
        <TaskButton
            text={"Complete Task"}
            onClick={() => taskStore.updateTaskStatus(id, "completed")}
        />
    ),
    completed: (id) => (
        <TaskButton
            text={"Claim 🎁"}
            onClick={() => taskStore.updateTaskStatus(id, "claimed")}
        />
    ),
    claimed: () => <span>Claimed</span>
}

const TaskList = observer(() => {
    return (
        <div className='m-side'>
            <h3>Main steps</h3>
            {
                taskStore.tasks.map(task =>
                    <div className='stroke' key={task.id}>
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