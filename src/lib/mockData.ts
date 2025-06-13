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
    language: 'chinese',
    createdAt: "2025-04-28T09:20:00Z",
    updatedAt: "2025-04-28T09:20:00Z",
    content: {
      title: '开会',
      text: "我有一个“对家”，名字叫顾依凉。他是二线演员，长得帅，演技也好。不管是演男一、男二还是男三，大家都说他演得棒，影评人写长文夸他，公司发很多宣传稿，微博上也全是夸他的话。而我，卫言梓，是三线演员。虽然我也长得还可以，但演技很一般。只要我演了什么，网友就说“这人又来了”，不红也不糊，看了都想换台。他接受采访的时候，会说很多角色心理、剧情发展，还说自己要努力拿奖。而我接受采访，只会被问八卦，连说自己是“演员”都不太敢。说实话，在娱乐圈里，他就像天上的月亮，我就是地上的小白菜。虽然我们都是一个公司的，年龄也差不多，还一起出道。但我们一点都不熟，公司也没把我们捆绑炒作。然后就慢慢有人开始比较我们两个了，说我们是“对家”。我也不懂为什么。我们走的路线不一样，资源也没冲突，他演技也比我好很多。我也想不出来我们为什么会有对立。我和顾依凉出道三年，只见过几次，连微信都没有加，说话也没几句。我们每次见面，就是点头、微笑，用眼神交流。如果不是微博下面老有人在吵，说我们是“死对头”，我都不知道我还有个这么厉害的“对家”。",
      words: {
        total: 234,
        new: 3,
        learning: 10
      }
    },
    image: undefined,
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
  {id: 'folder', text: 'This is a folder. Inside a folder you can add any type of content, but pages. You can have as many folders as you want.'},
  {id: 'text-file', text: "This is a blank text file. You can edit the text by clicking on the edit button. If you wish to add an audio file you can, but it won't synchronize with the text. If that's what you want, you need to create a record inside an album."}
]