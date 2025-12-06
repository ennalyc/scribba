import React from 'react'

import DefaultPage from '@/components/DefaultPage';
import BoardPage from '@/components/BoardPage';


const LanguageBoardPage = ({ params }: { params: {language: string} }) => {   
    return (
    <BoardPage
    mylanguage={params.language}
    />
  )
}

export default LanguageBoardPage