import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { files } from '@/lib/mockData'

function FileCard({fileImage, fileName, fileID}: {fileImage: StaticImageData | undefined, fileName: string | undefined, fileID: number}) {
    const currentFile = files.find(f => f.file_id === fileID)
    return (
    <div className='w-auto h-16 border border-gray-300 rounded-xl flex flex-row justify-between items-center hover:bg-gray-200 px-3'>
       <div className='flex flex-row items-center gap-4'>
         <div className={`w-10 h-10  ${fileImage ? '' : 'bg-teal-600'} rounded-lg`}>
            {
                fileImage ?
                <Image src={fileImage} alt='image' className='object-cover'></Image>
                :
                null
            }
        </div>
        <p className='font-medium'>{fileName}</p>
       </div>
       <div className='flex flex-row gap-4 text-sm'>
        <span className='text-center h-5 w-12 bg-teal-600/40 rounded-full'>{currentFile?.content.words.total}</span>
        <span className='text-center h-5 w-12 bg-teal-600/50 rounded-full'>{currentFile?.content.words.new}</span>
        <span className='text-center h-5 w-12 bg-teal-600/60 rounded-full'>{currentFile?.content.words.learning}</span>
       </div>
    </div>
  )
}

export default FileCard