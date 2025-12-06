import { Folder, PanelsTopLeft, LibraryBig, TvMinimalPlay, ScrollText, Film, Headphones } from "lucide-react"

export const pagesAndItems = [
    {
        pageType: "Board",
        modalItems: [
            {
                title: "New Folder",
                icon: <Folder size={20}/>,
            },
            {
                title: "New Blog",
                icon: <PanelsTopLeft size={20}/>,
            },
            {
                title: "New Selection",
                icon: <LibraryBig size={20}/>,
            },
            {
                title: "New Album",
                icon: <TvMinimalPlay size={20}/>,
            },
            {
                title: "New Text",
                icon: <ScrollText size={20}/>,
            },
            {
                title: "New Video",
                icon: <Film size={20}/>,
            },
            {
                title: "New Audio",
                icon: <Headphones size={20}/>,
            },
        ]
    },
    {
        pageType: "Folder",
        modalItems: [
            {
                title: "New Folder",
                icon: <Folder size={20}/>,
            },
            {
                title: "New Blog",
                icon: <PanelsTopLeft size={20}/>,
            },
            {
                title: "New Selection",
                icon: <LibraryBig size={20}/>,
            },
            {
                title: "New Album",
                icon: <TvMinimalPlay size={20}/>,
            },
            {
                title: "New Text",
                icon: <ScrollText size={20}/>,
            },
            {
                title: "New Video",
                icon: <Film size={20}/>,
            },
            {
                title: "New Audio",
                icon: <Headphones size={20}/>,
            },
        ]
    },
    {
        pageType: "Blog",
        modalItems: [
            {
                title: "New Text",
                icon: <ScrollText size={20}/>,
            },
            {
                title: "New Video",
                icon: <Film size={20}/>,
            },
            {
                title: "New Audio",
                icon: <Headphones size={20}/>,
            },
        ]
    },
    {
        pageType: "Selection",
        modalItems: [
           {
                title: "New Text",
                icon: <ScrollText size={20}/>,
            },
        ]
    },
    {
        pageType: "Album",
        modalItems: [
            {
                title: "New Video",
                icon: <Film size={20}/>,
            },
            {
                title: "New Audio",
                icon: <Headphones size={20}/>,
            },
        ]
    }
]