'use client'
import React from 'react'
import ImageBox from '@/components/ImageBox';
import TextBox from '@/components/TextBox'
import Image, { StaticImageData } from 'next/image';

function DefaultPage({title, illustration, mytype}: {title: string | undefined, illustration: StaticImageData, mytype: string}) {
    
    return (
    <>
        <div className='flex flex-col z-1 w-full pr-6'>
        <ImageBox 
        image={undefined}
        width={'w-full'}/>
        <TextBox 
        title={title}
        type={mytype}
        hasText={true}
        carID={undefined}
        />
        <Image src={illustration} alt='illustation' className='z-0 h-80 w-80 opacity-50 self-center object-fill'/>
        </div>
    </>
  )
}

export default DefaultPage