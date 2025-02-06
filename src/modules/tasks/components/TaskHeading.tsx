import React from 'react'

const TaskHeading = () => {
    return (
        <>
            <div className='flex-center task-heading'>
                <img src="/assets/images/heading.png" alt='img' />
            
            <div className='inner-width'>
                <h2>Launch with Pangolier</h2>
                <p>Submit your project</p>
            </div>

            <button className='invite-btn btn'>Invite Friends</button>
            </div>

        </>

    )
}

export default TaskHeading