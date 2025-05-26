import React from 'react'
import Tooltip from './Tooltip'
import { CarrierText } from '@/lib/mockData'


function TextBox({title, type, hasText}: {title: string | undefined, type: string | undefined, hasText: boolean}) {
  const carrierText = CarrierText.find(mytext => mytext.id === type)?.text
  return (
    <div className='justify-center items-start flex flex-col flex-1 w-5/6 my-6 mx-8 p-3'>
            <div className='z-1'>
            <div className='relative flex flex-col w-60 h-12'>
                <div className='flex gap-2 items-center'>
                    <h1 className='text-5xl font-bold'>{title}</h1>
                    <Tooltip
                    type={type}
                    />
                </div>
            </div>
            <h3 className='text-gray-500 text-2xl mt-1'>Your {title} board</h3>
           {
            hasText ?
             <p className='text-gray-400 text-lg mt-1'>{carrierText}</p>
             :
             null
           }
        </div>
    </div>
  )
}

export default TextBox