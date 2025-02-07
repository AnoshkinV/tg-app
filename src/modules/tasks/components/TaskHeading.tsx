import React from 'react'

const TaskHeading = () => {
    return (
        <>
            <div className='flex-center task-heading'>
                <img src="/assets/images/heading.png" alt='img' />
                <div className='inner-width'>
                    <h2>Launch with YouHodler</h2>
                    <p>Submit your project</p>
                </div>
                <button className='invite-btn btn'>Invite Friends</button>
                <div className='inner-width'>
                <h3>Say Hi to YouHodler</h3>
                <div className='task-item'>How it works?</div>
            </div>
            
            </div>
           


        </>

    )
}

export default TaskHeading