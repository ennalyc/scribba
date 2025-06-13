import React from 'react'
import ImageBox from './ImageBox'
import { files } from '@/lib/mockData'
import TextBox from './TextBox'

function TextsPage({currentFile}: {currentFile: string}) {
    const myFile = files.find(mf => mf.file_id === Number(currentFile))
    return (
    <div>
        <ImageBox 
        width='w-auto'
        image={myFile?.image}
        />
        <TextBox 
        title={`${myFile?.content.title}`}
        type='text-file'
        hasText={true}
        carID={myFile?.file_id}
        />
        <div className='px-8'>
            <p className='w-3/4'>{myFile?.content.text}</p>
        </div>
    </div>
  )
}

export default TextsPage