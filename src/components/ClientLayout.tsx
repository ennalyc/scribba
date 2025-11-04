'use client';
import { useState } from 'react';
import SideBar from '@/components/sidebar/SideBar';
import { useSidebarStore } from '@/store/sidebarStore';
import Link from 'next/link';
import { SquareMenu } from 'lucide-react';
import Image from 'next/image';
import logo from '@/scribba-black-logo.png'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { toggleSidebar, isSidebarOpen } = useSidebarStore();
  return (
    <>
    {
      isSidebarOpen ? (
        <div className="flex flex-row">
          <SideBar />
          <main className={`transition-all duration-300 flex-1`}>
            {children}
          </main>
        </div>
      ): (
          <main className={`transition-all duration-300 w-full`}>
            <div className='fixed z-10 p-6 flex flex-row gap-2 items-center'>
              <Link href={'/'}>
                <Image className='h-8 w-24 object-contain' src={logo} alt='logo'/>
              </Link>
              <SquareMenu onClick={() => toggleSidebar()} className='text-black' size={18}/>
          </div>
            {children}
          </main>
      )
    }
    </>
  );
}
