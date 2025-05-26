import React from 'react'
import ImageBox from './ImageBox'
import TextBox from './TextBox'
import {carriers, files } from '@/lib/mockData'

function CarrierPages({carrierID}: {carrierID: number}) {
    const currentCarrier = carriers.find(c => c.id === carrierID)
    const carrierImage = currentCarrier?.image
    const carrierTitle = currentCarrier?.title

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
                        hasText={true}
                        carID={carrierID}
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
                        hasText={true}
                        carID={carrierID}
                        />
                    </div>
                }
        </div>
    </>
  )
}


export default CarrierPages