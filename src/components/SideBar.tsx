'use client'
import React, { useState } from 'react'
import Image from "next/image"
import logo from "@/scribba-logo.png"
import { ChevronsLeft, ChevronsRight, Plus, WalletCards, ChartArea, NotebookText, Settings, BookHeart } from 'lucide-react'
import Link from 'next/link'
import { languages } from "@/lib/languages"
import { useSidebarStore } from '@/store/sidebarStore'


const SideBar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore()
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  
  //Isso aqui são dados mockados!!!
    const iconComponents = {
      NotebookText,
      Settings,
      ChartArea,
      BookHeart

    }
    const flashcards = [
      {title: "Chinese Immersion", id: 110},
      {title: "French Immersion", id: 220}
    ]

    const user = [
      {name: "Hanna", level: 2, progression: "mid-beginner"}
    ]

    const otherStuff = [
      {id: 101, title: 'Progress', icon: 'ChartArea'},
      {id: 202, title: 'Vocabulary', icon: 'NotebookText'},
      {id: 303, title: 'Input Content', icon: 'BookHeart'},
      {id: 404, title: 'Settings', icon: 'Settings'}
    ]
    return (
        <>
        {isSidebarOpen ? 
        
        <div className={`h-26/27 ml-3 my-3 rounded-xl bg-neutral-100 justify-center items-center top-0 left-0 fixed p-6 w-72 border border-neutral-400
        transform transition-transform duration-300 ${!isSidebarOpen && '-translate-x-full'} mr-75`}>
          <div className='flex justify-between items-center '>
            <Link href={'/'}><Image src={logo} alt='logo' className='h-6 w-20 object-contain'/></Link>
            <ChevronsLeft color='gray' onClick={toggleSidebar} className='hover:bg-neutral-300 w-8 h-4 rounded-lg'/>
          </div>

          <div className='justify-start items-start mt-8 mb-8 flex gap-2 text-neutral-500'>
            <div className='h-14 w-14 bg-neutral-300 rounded-lg border-3 border-neutral-900'>
            </div>
            <div className='items-center justify-center'>
              <h4 className='text-sm text-neutral-900 font-medium'>{user[0].name}</h4>
              <div className='flex justify-between mb-1'>
                <h4 className='text-xs'>{user[0].progression}</h4>
                <h4 className='text-xs'>280/500</h4>
              </div>
              <div className='h-3 w-43 bg-neutral-900 rounded-xl'>
                <div className='h-3 w-16 bg-teal-600 rounded-full flex justify-end items-center overflow-hidden'>
                  <div className='h-1/2 w-2 bg-teal-800 rounded-full'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center text-gray-500 text-sm w-full'>
            <h3>Languages</h3>
            <Link href={""}>
              <Plus color='gray' className='hover:bg-neutral-200 w-8 h-4 rounded-lg'/>
            </Link>
          </div>
            <div className='mt-2'>
              {languages.map((lang)=>(
              <div key={lang.id} onClick={() => setSelectedIndex(lang.id)} className={`${selectedIndex == lang.id ? 'bg-teal-600 text-white hover:bg-teal-700 px-2 font-medium hover:font-medium hover:text-white' : 'bg-neutral-100'} flex items-center h-8 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-950 hover:px-2 rounded-sm text-sm`}>
                  <Link href={`/boards/${lang.language}`} className='flex items-center gap-2'>
                    <Image src={selectedIndex == lang.id ? lang.flagActive : lang.flagInactive} alt='icon' className='h-4 w-4 object-fit'/>
                    <p>{lang.title}</p>
                  </Link>
                </div>
              ))}
            </div>

            <div className='flex w-full justify-between items-center text-neutral-500 mt-2 text-sm'>
              <h3>Flashcards</h3>
              <Link href={""}>
                <Plus color='gray' size={16} className='hover:bg-neutral-300 w-8 rounded-lg px-2'/>
              </Link>
          </div>

          <div className='mt-2'>
            {
              flashcards.map((titleof) => (
                <div onClick={() => setSelectedIndex(titleof.id)} className={`${selectedIndex === titleof.id ? 'bg-teal-600 text-white hover:bg-teal-700 px-2 font-medium hover:font-medium hover:text-white' : 'bg-neutral-100'} flex items-center gap-2 items-center h-8 hover:px-2 hover:bg-neutral-300 text-neutral-500 hover:text-neutral-950 rounded-sm text-sm`} key={titleof.id}>
                    <WalletCards size={16}/>
                    <p>{titleof.title}</p>
                </div>
              ))
            }
          </div>
          <h3 className='text-gray-500 mt-2 text-sm'>Others</h3>
          <div className='mt-2'>
              {otherStuff.map((stuff) => {
                const Icon = iconComponents[stuff.icon as keyof typeof iconComponents]
                return (
                  <Link key={stuff.id} onClick={() => setSelectedIndex(stuff.id)} href={""} className={`${selectedIndex === stuff.id ? 'bg-teal-600 text-white hover:bg-teal-700 px-2 font-medium hover:font-medium hover:text-white' : 'bg-neutral-100'} flex items-center gap-2 items-center h-8 hover:px-2 hover:bg-neutral-300 text-neutral-500 hover:text-neutral-950 rounded-sm text-sm`}>
                    <Icon className='h-4 w-4'/>
                    <p>{stuff.title}</p>
                  </Link>
                )
              })}
          </div>
      </div>
      : 
      <div className='absolute flex gap-2 justify-start w-64 items-center m-9'>
        <Link href={'/'}><Image src={logo} alt='logo' className='h-6 w-20 object-contain'/></Link>
        <ChevronsRight color='black' size={16} onClick={toggleSidebar} className='hover:bg-neutral-200 w-8 rounded-lg transform transition-transform duration-30 translate-x-0'/>
      </div>
      }
        </>
    )
}

export default SideBar