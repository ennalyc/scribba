'use client'
import React, { useState } from 'react'
import Image from "next/image"
import logo from "@/scribba-logo.png"
import { ChevronsLeft, ChevronsRight, Plus, WalletCards, ChartArea, NotebookText, Settings } from 'lucide-react'
import Link from 'next/link'
import { CN, FR, MX } from 'country-flag-icons/react/3x2'
import { languages } from "@/lib/languages"
import { useSidebarStore } from '@/store/sidebarStore'


const SideBar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore()
  
  //Isso aqui são dados mockados!!!
    const flagComponents = {
      CN,
      FR,
      MX
    }
    const flashcards = [
      {title: "Chinese Immersion", id: 1},
      {title: "French Immersion", id: 2}
    ]

    const user = [
      {name: "Hanna", level: 2, progression: "mid-beginner"}
    ]
    return (
        <>
        {isSidebarOpen ? 
        
        <div className={`bg-gray-100 justify-center items-center top-0 left-0 fixed p-6 w-64 h-full border-r border-gray-200
        transform transition-transform duration-300 ${!isSidebarOpen && '-translate-x-full'} mr-64`}>
          <div className='flex justify-between items-center'>
            <Link href={'/'}><Image src={logo} alt='logo' className='h-6 w-20 object-contain'/></Link>
            <ChevronsLeft color='gray' size={16} onClick={toggleSidebar} className='hover:bg-gray-300 w-8 rounded-lg'/>
          </div>

          <div className='my-4 mb-4 flex gap-2 text-gray-500 mb-4'>
            <div className='h-12 w-12 bg-gray-300 rounded-full'>
            </div>
            <div className='items-center justify-center gap-2'>
              <div className='flex justify-between'>
                <h4 className='text-sm'>{user[0].name}</h4>
                <h4 className='text-sm'>Level {user[0].level}</h4>
              </div>
              <div className='h-2 w-34 bg-gray-300 rounded-xl'>
              </div>
              <div className='flex justify-between'>
                <h4 className='text-sm'>{user[0].progression}</h4>
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center text-gray-500'>
            <h3>Languages</h3>
            <Link href={""}>
              <Plus color='gray' size={16} className='hover:bg-gray-300 w-8 rounded-lg'/>
            </Link>
          </div>
            <div className='mt-2'>
              {languages.map((lang)=>{
                const Flag = flagComponents[lang.flag as keyof typeof flagComponents]
                return (
                  <div key={lang.id} className='flex items-center h-8 w-48 hover:bg-gray-300 text-gray-500 hover:text-gray-900 rounded-sm'>
                  <Link href={`/board/${lang.language}`} className='flex items-center gap-1 px-2'>
                    <Flag className="h-6 w-6" />
                    <h3>{lang.title}</h3>
                  </Link>
                </div>
                )
              })}
            </div>

            <div className='flex justify-between items-center text-gray-500 mt-2'>
              <h3>Flashcards</h3>
              <Link href={""}>
                <Plus color='gray' size={16} className='hover:bg-gray-300 w-8 rounded-lg px-2'/>
              </Link>
          </div>

          <div className='mt-2'>
            {
              flashcards.map((titleof) => (
                <div className="flex gap-1 items-center h-8 w-48 hover:bg-gray-300 text-gray-500 hover:text-gray-900 rounded-sm" key={titleof.id}>
                    <WalletCards color='gray' size={16}/>
                    <h3>{titleof.title}</h3>
                </div>
              ))
            }
          </div>

          <div className='text-gray-500 mt-2'>
              <h3>Others</h3>
          </div>
          <div className='mt-2'>
              <Link href={""} className='flex gap-1 h-8 w-48 items-center hover:bg-gray-300 text-gray-500 hover:text-gray-900 rounded-sm'>
                <ChartArea color='gray' size={16}/>
                <h3>Progress</h3>
              </Link>
              <Link href={""} className='flex gap-1 h-8 w-48 items-center hover:bg-gray-300 text-gray-500 hover:text-gray-900 rounded-sm'>
                <NotebookText color='gray' size={16}/>
                <h3>Vocabulary</h3>
              </Link>
              <Link href={""} className='flex gap-1 h-8 w-48 items-center hover:bg-gray-300 text-gray-500 hover:text-gray-900 rounded-sm'>
                <Settings color='gray' size={16}/>
                <h3>Settings</h3>
              </Link>
          </div>
      </div>
      : 
      <div className='flex gap-2 justify-start w-64 items-center absolute m-6'>
        <Link href={'/'}><Image src={logo} alt='logo' className='h-6 w-20 object-contain'/></Link>
        <ChevronsRight color='black' size={16} onClick={toggleSidebar} className='hover:bg-gray-400 w-8 rounded-lg transform transition-transform duration-30 translate-x-0'/>
      </div>
      }
        </>
    )
}

export default SideBar