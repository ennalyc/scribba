import React from 'react'

import DefaultPage from '@/components/DefaultPage';
import BoardPage from '@/components/BoardPage';


const LanguageBoardPage = ({ params }: { params: string }) => {   
    return (
    <BoardPage
    mylanguage={params}
    />
  )
}

export default LanguageBoardPage