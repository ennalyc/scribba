import { Flag, WalletCards, ChartColumnBig, Cog } from 'lucide-react'
import { Item } from '@/types/item'

export const languages = [
    {
      id: 'zh',
      title: 'Chinese',
      icon: <Flag size={20}/>,
      linkTo: '/board/chinese'
    },
    {
      id: 'fr',
      title: 'French',
      icon: <Flag size={20}/>,
      linkTo: '/board/french'
    }
  ]

export const flashcards = [
    {
      id: 'zh-flash',
      title: 'Chinese Immersion',
      icon: <WalletCards size={20}/>,
      linkTo: '/board/chinese-immersion'
    },
    {
      id: 'fr-flash',
      title: 'French Immersion',
      icon: <WalletCards size={20}/>,
      linkTo: '/board/chinese-immersion'
    }
  ]

export const others = [
    {
      id: 'prog',
      title: 'Progress',
      icon: <ChartColumnBig size={20}/>,
      linkTo: '/progress'
    },
    {
      id: 'vocab',
      title: 'Vocabulary',
      icon: <ChartColumnBig size={20}/>,
      linkTo: '/vocabulary'
    },
    {
      id: 'sett',
      title: 'Settings',
      icon: <Cog size={20}/>,
      linkTo: '/vocabulary'
    }
  ]