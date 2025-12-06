import { create } from 'zustand'

type Item = {
    id: number;
    title: string;
    icon: string;
}

type tooltipStore = {
    isActive: boolean;
    toggleTooltip: () => void;
    board: Item[];
    folder: Item[];
    selection: Item[];
    album: Item[];
    blog: Item[];
}

export const useTooltipStore = create<tooltipStore>((set) => ({
    isActive: false,
    toggleTooltip: () => set((state) => ({ isActive: !state.isActive })),
    board: [
        { id: 1, title: "Album", icon: "Album" },
        { id: 2, title: "Blog", icon: "BookImage" },
        { id: 3, title: "Folder", icon: "Folder" },
        { id: 4, title: "Selection", icon: "ScrollText" }
    ],
    folder: [
        { id: 1, title: "Album", icon: "Album" },
        { id: 2, title: "Blog", icon: "BookImage" },
        { id: 3, title: "Folder", icon: "Folder" },
        { id: 4, title: "Selection", icon: "ScrollText" }
    ],
    selection: [
        { id: 1, title: "Blank text", icon: "File" },
        { id: 2, title: "Copy and paste", icon: "Files" },
        { id: 3, title: "Url", icon: "Link" }
    ],
    album: [
        { id: 1, title: "Audio", icon: "FileAudio" },
        { id: 2, title: "Video", icon: "FileVideo" }
    ],
    blog: [
        { id: 1, title: "Page", icon: "PanelTop" }
    ]
}))
