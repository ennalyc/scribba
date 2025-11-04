'use client'
import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'

import blackLogo from '@/scribba-black-logo.png'
import logo from "@/scribba-logo.png"
import SideBarSection from './SideBarSection'
import UserStats from './UserStats'

import { languages, flashcards, others } from '@/constants/sidebarItems'
import { SquareMenu } from 'lucide-react'
import { useSidebarStore } from '@/store/sidebarStore'

const SideBar = () => {
  const { toggleSidebar } = useSidebarStore()

  return (
  <aside className='relative'>
    <div className={`h-screen w-80 bg-black p-6 flex flex-col gap-4`}>
            {/* Logo Section */}
            <div className='flex flex-row justify-between w-full'>
              <Link href={'/'}>
                <Image className='h-4 w-24 object-contain' src={logo} alt='logo'/>
              </Link>
              <SquareMenu onClick={toggleSidebar} className='text-neutral-300' size={18}/>
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
  </aside>
  )
}
export default SideBar