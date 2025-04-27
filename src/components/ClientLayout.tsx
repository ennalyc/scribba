'use client';

import Sidebar from '@/components/Sidebar';
import { useSidebarStore } from '@/store/sidebarStore';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { isSidebarOpen } = useSidebarStore();

  return (
    <div className="flex">
      <Sidebar />
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} w-full`}>
        {children}
      </main>
    </div>
  );
}
