import React from 'react'

const PageInfo = ({title, description}: {title: string | undefined, description: string}) => {
  return (
    <div className='px-8 flex flex-col justify-start gap-2'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-lg text-neutral-500'>{description}</p>
        <hr className='text-neutral-300 mt-2'/>
    </div>
  )
}

export default PageInfo