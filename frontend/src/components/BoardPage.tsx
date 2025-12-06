'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import DefaultPage from './DefaultPage'
import Illustration from '@/assets/413.Dreamers.png'
import ImageBox from './ImageBox'
import TextBox from './TextBox'
import CarrierCard from './CarrierCard'
import TopSection from './layout/TopSection'
import PageInfo from './layout/PageInfo'

function BoardPage({mylanguage} : {mylanguage: string | undefined}) {
    
    return (
        <div className='w-full flex flex-col gap-4'>
            <TopSection
            hasEdit={false}
            page="Board"
            />
            <PageInfo
            title={mylanguage}
            description='This is your board. Inside this board you can add any type of content, but you can only have a single board per language.'
            />
        </div>
    )
}

export default BoardPage

