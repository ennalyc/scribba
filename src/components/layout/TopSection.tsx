'use client'
import React, { useState } from 'react'
import AddButton from '../ui/AddButton'
import HeaderButton from '../ui/HeaderButton'
import Header from './Header'
import { useSidebarStore } from '@/store/sidebarStore'

const TopSection = ({hasEdit, page}: {hasEdit: boolean, page: string}) => {
    const { isSidebarOpen } = useSidebarStore()

    const [headerFile, setHeaderFile] = useState(null)
    const [headerPreview, setHeaderPreview] = useState<string | null>(null)
    
    const handleHeaderUpload = (e: any) => {
    
    if (e) {
        const previewUrl = URL.createObjectURL(e)
        setHeaderFile(e)
        setHeaderPreview(previewUrl)
    } else {
        setHeaderPreview(null)
    }
    }

    const isHeaderAdded = !!headerFile
    
    return (
        <>
        {
            isHeaderAdded ? (
                <div className='flex flex-col w-full gap-6'>
                    <Header
                    image={headerPreview}
                    />
                    <div className='px-8 flex flex-row gap-3 items-center text-neutral-500 text-md'>
                    <p>{page}</p>
                    <HeaderButton
                    onFileSelect={handleHeaderUpload}
                    wasHeaderAdded={isHeaderAdded}
                    />
                    <AddButton/>
                </div>
                </div>
            ): (
                <div className={`${!isSidebarOpen ? 'ml-32' : ''} flex flex-row px-8 mt-6 gap-3 items-center text-neutral-500 text-md`}>
                    <p>{page}</p>
                    <HeaderButton
                    onFileSelect={handleHeaderUpload}
                    wasHeaderAdded={isHeaderAdded}
                    />
                    <AddButton/>
                </div>
            )
        }
        </>
    )
}

export default TopSection