'use client'
import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import AddModal from '../modal/AddModal'
import { Modal } from '@/types/modalItem'

const AddButton = ({addOptions}: {addOptions: Modal}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClick = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <div className={`static ${isModalOpen && 'flex flex-row gap-2'}`}>
    <button onClick={handleClick} className={`text-neutral-500 text-sm flex flex-row gap-2 h-8 px-4 items-center justify-center border border-neutral-500 rounded-md hover:bg-neutral-100 ${isModalOpen && 'bg-neutral-100'}`} type='button'>
        <Plus size={16}/>
        <span>Add</span>
    </button>
    <div className='absolute ml-24'>
      {
      isModalOpen && (
        <AddModal
        options={addOptions}
        />
      )
    }
    </div>
    </div>
  )
}

export default AddButton