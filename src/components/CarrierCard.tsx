import { StaticImageData } from 'next/image'
import { ImageIcon } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

function CarrierCard({carrierImage, carrierTitle, carrierType} : {carrierImage: StaticImageData | null, carrierTitle: string, carrierType: string}) {
  return (
    <div className='flex-1 w-24 flex flex-col justify-center items-center'>      
        {
          carrierImage ?
          <Image src={carrierImage} alt='image' className='h-16 w-16 object-cover'/>
          :
          <div className='bg-teal-600/70 h-16 w-24 flex rounded-xl justify-center items-center'>
            <ImageIcon className='h-6 w-6 text-teal-700'/>
          </div>
        }
        <p className='w-24 text-md truncate text-gray-600'>{carrierTitle}</p>
    </div>
  )
}

export default CarrierCard