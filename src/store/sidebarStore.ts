import { create } from 'zustand';

type SidebarStore = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
  sidebarItem: string;
  clickedSidebarItem: (i: string) => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),
  sidebarItem: '',
  clickedSidebarItem: (i) => set({sidebarItem: i})
}));
