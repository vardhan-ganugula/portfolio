import React from 'react'

function ProjectFeedback() {
  const handleFeedback = () => {
    
  }
  return (
    <section className='w-full p-5'>
        <h2 className='mb-2 text-white text-xl'> Feedback</h2>
        <form className='flex gap-5' onSubmit={handleFeedback}>

        <input type="text" name="feedbackText" id="feedbackText" 
            className='bg-zinc-950 px-5 py-2 w-[400px] border rounded text-white' />
        <button className='bg-orange-500 px-5 rounded-sm text-white py-2'>submit</button>
        </form>

    </section>
  )
}

export default ProjectFeedback