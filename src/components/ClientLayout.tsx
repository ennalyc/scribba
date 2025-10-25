'use client';

import SideBar from '@/components/sidebar/SideBar';
import { useSidebarStore } from '@/store/sidebarStore';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { isSidebarOpen } = useSidebarStore();

  return (
    <div className="flex">
      <SideBar />
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-24' : 'ml-0'} w-full`}>
        {children}
      </main>
    </div>
  );
}
