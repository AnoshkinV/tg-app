import React from 'react'

const TaskHeading = () => {
    return (
        <>
            <div className='flex-center task-heading m-side'>
                <img src="/assets/images/heading.png" alt='img' />
                <div className='m-side inner-width'>
                    <h2>Launch with YouHodler</h2>
                    <p>Submit your project</p>
                </div>
                <button className='alt-btn btn'>Invite Friends</button>
                <div className='inner-width'>
                    <h3>Say Hi to YouHodler</h3>
                    <div className='stroke'>How it works?</div>
                </div>
            </div>



        </>

    )
}

export default TaskHeading