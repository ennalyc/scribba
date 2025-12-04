import React from 'react'
import { Modal } from '@/types/modalItem'
const AddModal = ({options}: {options: Modal}) => {
  return (
    <div className='bg-neutral-200 text-neutral-500 py-3 w-40 rounded-xl text-sm'>
        {
            options.modalItems.map((item, index) => (
                <ul key={index} className='flex flex-col mx-3 justify-center'>
                    <li className='h-9 flex flex-row gap-3 items-center hover:bg-neutral-300 hover:text-neutral-600 hover:rounded-sm'>
                    {item.icon}
                    {item.title}
                    </li>
                </ul>
            ))
        }
    </div>
  )
}

export default AddModal