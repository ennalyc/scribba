'use client'
import React, { useState } from 'react'
import ImageBox from './ImageBox'
import { files, Flashcards, user } from '@/lib/mockData'
import TextBox from './TextBox'
import DictBox from './DictBox'
import { Headphones, SquarePen, Languages, CircleCheck } from 'lucide-react'
import WordPopup from './WordPopup'


function TextsPage({currentFile}: {currentFile: string}) {
    const myFile = files.find(mf => mf.file_id === Number(currentFile))
    const myUser = user.find(us => us.user_id === 12345)
    const [myWord, setMyWord] = useState('')
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const flashcardPopup = Flashcards.filter(fl => fl.user_id === myUser)
    const handleClick = (index: number, word: string) => {
        setClickedIndex(index === clickedIndex ? null : index);
        setMyWord(word)
        // toggle selection
    }
    return (
    <div>
        <ImageBox 
        width='w-auto'
        image={myFile?.image}
        />
        <div className='fixed right-0 flex flex-col float-right items-center gap-3 mt-2'>
            <div className='w-56 text-gray-300 flex flex-row justify-center gap-3'>
            <Headphones size={34}/>
            <SquarePen size={34}/>
            <Languages size={34}/>
            <CircleCheck size={34}/>
            </div>
            <DictBox
            dictWord={myWord}
            />
        </div>
        <TextBox 
        title={`${myFile?.content.title}`}
        type='text-file'
        hasText={true}
        carID={myFile?.file_id}
        />
        <div className='flex flex-wrap px-9 mr-56'>
            {myFile?.content?.text?.parsed?.map((word, index) => (
            <div>
                <span onClick={() => handleClick(index, word)} key={index} className={`${clickedIndex === index ? 'bg-teal-600 text-white hover:bg-teal-800' : ''} hover:bg-gray-200 rounded-sm`}>
                {word}
                </span>
            </div>
            ))}

        </div>
    </div>
  )
}

export default TextsPage