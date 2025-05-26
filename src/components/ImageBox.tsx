'use-client'
import React from 'react'
import Image from 'next/image'
import { ImagePlus } from 'lucide-react'
import { StaticImageData } from 'next/image'
import { useCarrierStore } from '@/store/carrierStore'
import { boards, carriers } from '@/lib/mockData'

function ImageBox({width, image}: {width: string, image: StaticImageData | undefined}) {
  return (
    <div className={`flex justify-center items-center bg-teal-600 h-44 ${width} m-3 rounded-xl overflow-hidden`}>
        {
          image === undefined ? 
          <ImagePlus className='text-teal-800 h-24 w-24'/>
          :
          <Image src={image} alt='image' className='w-full h-full object-cover'/>
          
        }
    </div>
  )
}

export default ImageBox