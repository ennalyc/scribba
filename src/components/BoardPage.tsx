'use client'
import React from 'react'
import Link from 'next/link'
import DefaultPage from './DefaultPage'
import Illustration from '@/assets/413.Dreamers.png'
import ImageBox from './ImageBox'
import TextBox from './TextBox'
import CarrierCard from './CarrierCard'
import { boards, carriers, user } from '@/lib/mockData'

function BoardPage({mylanguage} : {mylanguage: string | undefined}) {
    const userId = 12345
    const currentUser = user.find(u => u.user_id === userId)
    const currentLanguage = currentUser?.user_languages.find(l => l.language.language === mylanguage)
    const myBoardID = currentLanguage?.board_id
    const boardImage = boards.find(board => board.board_id === myBoardID)?.image
    const userCarriers = myBoardID ? carriers.filter(carrier => carrier.parentCarrierId === myBoardID) : []
    const isEmpty = userCarriers.length === 0

    return (
        <div>
            {
                isEmpty ?
                <DefaultPage 
                title={mylanguage}
                illustration={Illustration}
                mytype={'board'}
                />
                :
        
                <div className='flex flex-col z-1 w-full pr-6'>
                    <div>
                    <ImageBox
                    image={boardImage}
                    width={'w-full'}
                    />
                    <TextBox
                    title={mylanguage}
                    type={'board'}
                    hasText={false}
                    />
                </div>
                <div className='flex-1 mx-8 p-3'> 
                    <div className='flex flex-wrap gap-3 justify-start items-start'>
                        {
                        userCarriers.map((car) => (
                        <div key={car.id} className='rounded-xl hover:bg-gray-200'>
                            <Link href={`/board/${mylanguage}/${car.carrierType}+${car.id}`}>
                                <CarrierCard 
                                carrierImage={null}
                                carrierType={car.carrierType}
                                carrierTitle={car.title}
                                />
                            </Link>
                        </div>
                    ))
                }
                    </div>
                </div>
                </div>
            }

        </div>
    )
}

export default BoardPage

