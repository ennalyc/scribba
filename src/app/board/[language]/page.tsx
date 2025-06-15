import React from 'react'
import { user, boards, carriers } from '@/lib/mockData'
import { languages } from "@/lib/languages";
import DefaultPage from '@/components/DefaultPage';
import BoardPage from '@/components/BoardPage';

export async function generateStaticParams() {
    return languages.map((lang) => ({
      language: lang.title,
    }));
  }


const LanguageBoardPage = ({ params }: { params: { language: string } }) => {   
    return (
    <BoardPage
    mylanguage={params.language}
    />
  )
}

export default LanguageBoardPage