'use client'
import React from 'react'
import { useTooltipStore } from '@/store/tooltipStore'
import { Album, BookImage, Folder, ScrollText, File, Files, Link, FileAudio, FileVideo, PanelTop, Plus, XIcon  } from 'lucide-react'
function Tooltip({ type }: any) {
    const { isActive, toggleTooltip, board, folder, selection, album, blog } = useTooltipStore()
    const types = [
        {id: 1, title: 'album'},
        {id: 2, title: 'blog'},
        {id: 3, title: 'board'},
        {id: 4, title: 'folder'},
        {id: 5, title: 'selection'} 
    ]
    const iconComponents = {
        Album,
        BookImage,
        Folder,
        ScrollText,
        File,
        Files,
        Link,
        FileAudio,
        FileVideo,
        PanelTop
    }
    const getTooltipData = () => {
        switch (type) {
            case 'album':
                return album
            case 'blog':
                return blog
            case 'board':
                return board
            case 'folder':
                return folder
            case 'selection':
                return selection
            default:
                return [] 
        }
    }
    const tooltipItems = getTooltipData()
    return (
        <div className='relative'>
        <button onClick={toggleTooltip} className='flex justify-center items-center bg-gray-200 border border-gray-300 rounded-xl h-8 w-6'>
            <Plus className='text-gray-400 h-4 w-4'/>
        </button>
       <div className={`flex-1 bg-gray-200 w-40 rounded-lg border border-gray-300 absolute ${isActive ? 'visible' : 'invisible'} left-full transform -translate-y-1/6 ml-2 p-4`}>
            <XIcon onClick={toggleTooltip} className='h-3 w-3 text-gray-400 justify-self-end mb-2'/>
            {
                tooltipItems.map((item) =>{
                    const Icon = iconComponents[item.icon as keyof typeof iconComponents]
                    return (
                        <div key={item.id} className='flex w-full pl-2 h-10 gap-2 items-center justify-start text-gray-400 text-lg rounded-md hover:bg-gray-300'>
                            <Icon />
                            <p>{item.title}</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Tooltip