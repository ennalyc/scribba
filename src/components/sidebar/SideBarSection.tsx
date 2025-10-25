'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Item } from '@/types/item'
import { Plus } from 'lucide-react'
import { useSidebarStore } from '@/store/sidebarStore'

const SideBarSection = ({ items, title, hasAddFeat }: { items: Item[], title: string, hasAddFeat: boolean }) => {
    const [itemClicked, setItemClicked] = useState('')
    const { clickedSidebarItem, sidebarItem } = useSidebarStore()
    
    const handleItemClick = (item: string) => {
        setItemClicked(item)
        clickedSidebarItem(item)
    }
    return (
    <div className='flex flex-col'> 
        {
            hasAddFeat ? (
                <div className='flex flex-row w-full justify-between text-neutral-300 items-center mb-2'>
                    <span className=' text-sm font-medium'>{title}</span>
                    <Plus size={18}/>
                </div>
            ): (
                <span className='text-neutral-300 text-sm font-medium mb-2'>{title}</span>
            )
        }

        {
            items.map((item) => (
                <ul key={item.id}>
                    <li onClick={() => handleItemClick(item.id)} className={`${ item.id === itemClicked && item.id === sidebarItem ? 'bg-cyan-600 text-black px-3 font-semibold' : 'text-neutral-300 hover:px-3 hover:border hover:border-neutral-700'} flex items-center text-md font-medium h-11 w-full rounded-md`}>
                        <Link href={item.linkTo} className='w-full flex flex-row gap-2 items-center'>
                            {item.icon}
                            {item.title}
                        </Link>
                    </li>
                </ul>
            ))
        }

    </div>
  )
}

export default SideBarSection