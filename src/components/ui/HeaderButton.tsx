import React , { useState } from 'react'
import { Plus, Edit } from 'lucide-react'
const HeaderButton = ({onFileSelect, wasHeaderAdded}: {onFileSelect: (e: any) => void, wasHeaderAdded: boolean}) => {
  
  const handleChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      onFileSelect(file)
    }
  }
  return (
    <>
    <input onChange={handleChange} id='header-upload' accept='image' type="file" className='hidden'/>
    <label htmlFor='header-upload' className='text-neutral-500 text-sm flex flex-row gap-2 h-8 px-4 items-center justify-center border border-neutral-500 rounded-md'>
        {
          wasHeaderAdded ? (
            <>
            <Edit size={16}/>
            <span>Edit Header</span>
            </>
          ):(
            <>
            <Plus size={16}/>
            <span>Add Header</span>
            </>
          )
        }
    </label>
    </>
  )
}

export default HeaderButton