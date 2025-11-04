import React from 'react'
import { Plus } from 'lucide-react'

const AddButton = () => {
  return (
    <button className='text-neutral-500 text-sm flex flex-row gap-2 h-8 px-4 items-center justify-center border border-neutral-500 rounded-md' type='button'>
        <Plus size={16}/>
        <span>Add</span>
    </button>
  )
}

export default AddButton