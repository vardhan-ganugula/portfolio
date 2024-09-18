import React from 'react'

function Loading() {
  return (
    <>
        <div className='w-screen h-screen bg-zinc-900 text-white relative flex items-center justify-center top-0 left-0'> 
            <div className='w-[200px] h-[200px] flex items-center justify-center rounded-full border-t-4 border-white' id='loader'>
                <div className='w-2/3 h-2/3 border-b-4 rounded-full'>

                </div>
            </div> 
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y/2'>
                Loading
            </div>
        </div>
    
    </>
  )
}

export default Loading