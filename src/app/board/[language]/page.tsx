import React from 'react'
import Image from 'next/image';
import Illustration from '@/assets/413.Dreamers.png'
import { languages } from "@/lib/languages";
import { ImagePlus, Plus } from 'lucide-react'

export async function generateStaticParams() {
    return languages.map((lang) => ({
      language: lang.language,
    }));
  }
const LanguageBoardPage = ({ params }: { params: { language: string } }) => {
    const languageData = languages.find((lang) => lang.language === params.language)    
    return (
    <div className='flex-1 gp-2 justify-center items-center'>
        <div className='flex justify-center items-center bg-gray-300 h-56 w-full'>
            <ImagePlus className='text-gray-400 h-24 w-24'/>
        </div>
        <div className='justify-self-center flex-1 w-5/6 my-4 py-4'>
            <div className='flex flex-col w-60 h-12'>
                <div className='flex gap-2 items-center'>
                    <h1 className='text-5xl font-bold'>{languageData?.title}</h1>
                    <div className='flex justify-center items-center bg-gray-300 border border-gray-400 rounded-xl h-8 w-6'>
                        <Plus className='text-gray-400 h-4 w-4'/>
                    </div>
                </div>
            </div>
            <h3 className='text-gray-500 text-2xl mt-1'>Your {languageData?.title} board</h3>
            <p className='text-gray-400 mt-8 text-lg'>This is your board. Inside this board you can add any type of content, but you can only have a single board per language.</p>
            <Image src={Illustration} alt='illustation' className='h-80 w-80 opacity-50 justify-self-center'/>
        </div>
    </div>
  )
}

export default LanguageBoardPage