import ChinaActive from '@/assets/china-filled.png'
import ChinaInactive from '@/assets/china-empty.png'
import FranceActive from '@/assets/france-filled.png'
import FranceInactive from '@/assets/france-empty.png'
import SpainActive from '@/assets/spain-filled.png'
import SpainInactive from '@/assets/spain-empty.png'
import ImageChina from '@/assets/image.jpg'
import ImageFrance from '@/assets/france-image.jpg'
import ImageSpain from '@/assets/spain-image.jpg'

export const languages = [
    { id: 111, language: "spanish", title: "Spanish", flagInactive: SpainInactive, flagActive: SpainActive},
    { id: 222, language: "french", title: "French", flag: "FR", flagInactive: FranceInactive, flagActive: FranceActive },
    { id: 333, language: "chinese", title: "Chinese", flag: "CN", flagInactive: ChinaInactive, flagActive: ChinaActive},
  ]

export const user = [
  {
    user_id: 12345,
    name: 'Hanna',
    user_languages: [
      {
        board_id: 23654, language: languages[0]
      },
      {
        board_id: 23655, language: languages[1]
      },
      {
        board_id: 23656, language: languages[2]
      }
    ],
  }
]

export const boards = [
  {
    board_id: 23654,
    user_id: 12345,
    language: user.find(mylang => mylang.user_id === 12345)?.user_languages[0].language,
    title: user.find(mylang => mylang.user_id === 12345)?.user_languages[0].language.title,
    image: ImageSpain
  },
  {
    board_id: 23655,
    user_id: 12345,
    language: user.find(mylang => mylang.user_id === 12345)?.user_languages[1].language,
    title: user.find(mylang => mylang.user_id === 12345)?.user_languages[1].language.title,
    image: ImageFrance
  },
  {
    board_id: 23656,
    user_id: 12345,
    language: user.find(mylang => mylang.user_id === 12345)?.user_languages[2].language,
    title: user.find(mylang => mylang.user_id === 12345)?.user_languages[2].language.title,
    image: ImageChina
  }
]


export const carriers = [
    {
      id: 123,
      carrierType: "selection",
      description: 'Some short stories i collected',
      image: undefined,
      parentCarrierId: 23656,
      language: boards.find(myboard => myboard.user_id === 23656)?.language,
      title: "Chinese Short Stories",
      createdAt: "2025-04-28T09:00:00Z",
      updatedAt: "2025-04-28T09:00:00Z"
    },
    {
      id: 213,
      carrierType: "album",
      description: 'Some videos i collected',
      image: undefined,
      parentCarrierId: 23656,
      title: "Chinese Listening Practice",
      createdAt: "2025-04-28T09:10:00Z",
      updatedAt: "2025-04-28T09:10:00Z"
    },
    {
      id: 321,
      carrierType: "folder",
      description: 'Some content i collected',
      image: undefined,
      parentCarrierId: 23656,
      title: "My Materials",
      createdAt: "2025-04-28T09:20:00Z",
      updatedAt: "2025-04-28T09:20:00Z"
    }
  ]

export const files = [
  {
    file_id: 19876,
    parentCarrierId: 123,
    language: boards[2].language,
    createdAt: "2025-04-28T09:20:00Z",
    updatedAt: "2025-04-28T09:20:00Z",
    content: {
      title: '开会',
      text: '今天下午我要开会， 这个会很重要， 但是我没准备好。 中午， 我没时间吃东西， 就在办公室里一边喝咖啡、 吃面包， 一边准备开会的东西。 终于， 在开会前， 我准备好了。',
    }
  }
]

export const block = [
  {
    block_id: 10098,
    blockType: 'text',
    parentCarrierID: null,
    createdAt: "2025-04-28T09:20:00Z",
    updatedAt: "2025-04-28T09:20:00Z",
    content: files[0]
  }
]

export const CarrierText = [
  {id: 'board', text: 'This is your board. Inside this board you can add any type of content, but you can only have a single board per language.'},
  {id: 'selection', text: 'This is a selection. Inside a selection you can only add text files. You can have as many text files as you want.'},
  {id: 'album', text: 'This is an album. You can add video and audio files. '},
  {id: 'blog', text: 'This is a blog. Inside a blog you can only add pages and raw media (selections, albums and folders are not permitted). You can have as many blogs as you want.'},
  {id: 'folder', text: 'This is a folder. Inside a folder you can add any type of content, but pages. You can have as many folders as you want.'}
]