import React from 'react'
import ImageBox from './ImageBox'
import TextBox from './TextBox'
import FileCard from './FileCard'
import {carriers, files } from '@/lib/mockData'
import Link
 from 'next/link'
function CarrierPages({carrierID}: {carrierID: number}) {
    const currentCarrier = carriers.find(c => c.id === carrierID)
    const mylanguage = currentCarrier?.language
    const carrierTp = currentCarrier?.carrierType
    const carrierImage = currentCarrier?.image
    const carrierTitle = currentCarrier?.title
    const carrierFiles = files.filter(cf => cf.parentCarrierId === currentCarrier?.id)
    const isEmpty = carrierFiles.length === 0
    return (
    <>
        <div className='flex flex-col w-auto'>
                {
                    isEmpty ?
                    (
                        currentCarrier?.carrierType === 'album' ?
                    <div className='flex flex-col'>
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
                    <div className='flex flex-col'>
                        <ImageBox
                        image={carrierImage}
                        width={'w-auto'}
                        />
                        <TextBox
                        title={carrierTitle}
                        type={currentCarrier?.carrierType}
                        hasText={true}
                        carID={carrierID}
                        />
                    </div>
                    )
                    :
                    (
                        currentCarrier?.carrierType === 'album' ?
                    <div className='flex flex-col z-1'>
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
                    <div className='flex flex-col'>
                        <ImageBox
                        image={carrierImage}
                        width={'w-auto'}
                        />
                        <TextBox
                        title={carrierTitle}
                        type={currentCarrier?.carrierType}
                        hasText={true}
                        carID={carrierID}
                        />
                        {
                            carrierTp === 'selection' ?
                            <div className='flex flex-row w-full px-8 mb-2 justify-between font-medium text-md'>
                                <p>Selectioned texts</p>
                                <div className='gap-4 flex flex-row'>
                                    <p>Total</p>
                                    <p>New</p>
                                    <p>Learning</p>
                                </div>
                            </div>
                            :
                            null
                        }
                        {
                            files.map((file) => (
                                <div className='px-8 flex flex-col gap-2' key={file.file_id}>
                                    <Link href={`/boards/${mylanguage}/${carrierID}/${file.file_id}`}>
                                        <FileCard 
                                        fileImage={file.image}
                                        fileName={file.content.title}
                                        fileID={file.file_id}
                                        />
                                    </Link>
                                </div>
                            )
                        )
                        }
                    </div>
                    )
                }
        </div>
    </>
  )
}


export default CarrierPages