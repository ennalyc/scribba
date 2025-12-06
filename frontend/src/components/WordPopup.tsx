import React from 'react'
import { Flashcards } from '@/lib/mockData'

function WordPopup({wordPop}: {wordPop: string}) {
    const myWord = Flashcards.find(word => word.word === wordPop)
    return (
    <div className='absolute bg-gray-200 border border-gray-400 rounded-lg p-2 flex flex-col items-start'>
        <p className='font-semibold'>{myWord?.word}</p>
        <p>{myWord?.definition}</p>
    </div>
  )
}

export default WordPopup