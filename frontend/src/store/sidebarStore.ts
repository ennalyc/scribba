import { create } from 'zustand';

type SidebarStore = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  sidebarItem: string;
  clickedSidebarItem: (i: string) => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  sidebarItem: '',
  clickedSidebarItem: (i) => set({sidebarItem: i})
}));
