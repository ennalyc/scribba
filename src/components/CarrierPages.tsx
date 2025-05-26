import React from 'react'
import ImageBox from './ImageBox'
import TextBox from './TextBox'
import {carriers, files } from '@/lib/mockData'

function CarrierPages({carrierID}: {carrierID: number | undefined}) {
    const currentCarrier = carriers.find(carid => carid.id === carrierID)
    const carrierImage = currentCarrier?.image
    const carrierTitle = currentCarrier?.title
    const myfiles = files.filter(file => file.parentCarrierId === currentCarrier?.id)
    return (
    <>
        <div className='flex flex-col z-1 w-full pr-6'>
                {
                    currentCarrier?.carrierType === 'album' ?
                    <div className='flex flex-col z-1 w-full pr-6'>
                        <ImageBox
                        image={carrierImage}
                        width={'w-44'}
                        />
                        <TextBox
                        title={carrierTitle}
                        type={'album'}
                        hasText={false}
                    />
                    </div>
                    :
                    <div className='flex flex-col z-1 w-full pr-6'>
                        <ImageBox
                        image={carrierImage}
                        width={'w-full'}
                        />
                        <TextBox
                        title={carrierTitle}
                        type={currentCarrier?.carrierType}
                        hasText={false}
                        />
                    </div>
                }
        </div>
    </>
  )
}

export default CarrierPages