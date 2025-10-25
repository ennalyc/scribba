import React from 'react'
import Tooltip from './Tooltip'



function TextBox({title, type, hasText, carID}: {title: string | undefined, type: string | undefined, hasText: boolean, carID: number | undefined}) {
    return (
    <div className='justify-center items-start flex flex-col flex-1 w-3/4 m-9'>
            <div className='z-1'>
            <div className='relative flex flex-col h-12'>
                <div className='flex gap-2 items-center'>
                    <h1 className='text-5xl font-bold'>{title}</h1>
                    {
                      type != 'text-file' &&
                      <Tooltip
                      type={type}
                      />
                    }
                </div>
            </div>
           {
            hasText ?
             <p className='text-gray-400 text-lg mt-1'>oi</p>
             :
             <p className='text-gray-400 text-lg mt-1'>ola</p>
           }
        </div>
    </div>
  )
}

export default TextBox