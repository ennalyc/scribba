import React from 'react'
import ImageBox from './ImageBox'
import { files } from '@/lib/mockData'
import TextBox from './TextBox'
import DictBox from './DictBox'
import { Headphones, SquarePen, Languages, CircleCheck } from 'lucide-react'

function TextsPage({currentFile}: {currentFile: string}) {
    const myFile = files.find(mf => mf.file_id === Number(currentFile))
    return (
    <div>
        <ImageBox 
        width='w-auto'
        image={myFile?.image}
        />
        <div className='absolute right-0 flex flex-col float-right items-center gap-3 mt-2'>
            <div className='w-56 text-gray-300 flex flex-row justify-center gap-3'>
            <Headphones size={34}/>
            <SquarePen size={34}/>
            <Languages size={34}/>
            <CircleCheck size={34}/>
            </div>
            <DictBox/>
        </div>
        <TextBox 
        title={`${myFile?.content.title}`}
        type='text-file'
        hasText={true}
        carID={myFile?.file_id}
        />
        <div className='px-9 flex overflow-auto flex-row'>
            <p className='w-3/4'>{myFile?.content.text}</p>
        </div>
    </div>
  )
}

export default TextsPage