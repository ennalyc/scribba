'use client'
import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'

import logo from "@/scribba-logo.png"
import SideBarSection from './SideBarSection'
import UserStats from './UserStats'

import { languages, flashcards, others } from '@/constants/sidebarItems'
import { SquareMenu } from 'lucide-react'


const SideBar = () => {

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    return (
      <div className='h-screen w-100 bg-black p-6 flex flex-col gap-4'>
        {/* Logo Section */}
        <div className='flex flex-row justify-between w-full'>
          <Link href={'/'}>
            <Image className='h-4 w-24 object-contain' src={logo} alt='logo'/>
          </Link>
          <SquareMenu className='text-neutral-300' size={18}/>
        </div>

        <UserStats/>

        {/* Language Section */}
        <SideBarSection
        items={languages}
        title='LANGUAGES'
        hasAddFeat={true}
        />

        {/* Flashcards Section */}
        <SideBarSection
        items={flashcards}
        title='FLASHCARDS'
        hasAddFeat={true}
        />

        {/* Miscellaneous Section */}
        <SideBarSection
        items={others}
        title='OTHERS'
        hasAddFeat={false}
        />
      </div>
    )
}

export default SideBar