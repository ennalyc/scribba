import React from 'react'
import Tooltip from './Tooltip'
import { CarrierText, carriers } from '@/lib/mockData'


function TextBox({title, type, hasText, carID}: {title: string | undefined, type: string | undefined, hasText: boolean, carID: number | undefined}) {
  const carrierText = CarrierText.find(mytext => mytext.id === type)
  const description = carriers.find(desc => desc.id === carID)?.description
  return (
    <div className='justify-center items-start flex flex-col flex-1 w-full my-6 mx-8'>
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
             <p className='text-gray-400 text-lg mt-1'>{description}</p>
             :
             <p className='text-gray-400 text-lg mt-1'>{carrierText?.text}</p>
           }
        </div>
    </div>
  )
}

export default TextBox