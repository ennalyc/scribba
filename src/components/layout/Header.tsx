import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

const Header = ({image}: {image: string | null}) => {
  return (
    <div className='relative w-full h-40'>
    {
        image && (
            <Image fill src={image} alt='header' className='object-cover'/>
        )
    }
    </div>
  )
}

export default Header