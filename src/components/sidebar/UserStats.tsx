import React from 'react'

const UserStats = () => {
  return (
    <div className='text-neutral-300 w-full flex flex-row justify-center items-center gap-2'>
        <div className='h-15 w-15 bg-neutral-300 border-2 border-white my-2 rounded-md'/>
        <div className='w-3/4'>
            <span className='font-semibold'>Hanna</span>
            <div >
                <div className='text-sm flex flex-row justify-between'>
                <span>
                    Mid-beginner
                </span>
                <span>
                    488/560
                </span>
            </div>
            <div className='w-full flex justify-start px-1 items-center bg-neutral-300 rounded-xl h-4'>
                <div className='bg-cyan-600 w-3/4 rounded-xl h-2'></div>
            </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default UserStats