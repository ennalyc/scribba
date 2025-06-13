import React from 'react'
import TextsPage from '@/components/TextsPage'
import { files, carriers} from '@/lib/mockData';

export async function generateStaticParams() {
    return files.map((file) => ({
      language: file.language,
      carrier: file.parentCarrierId.toString(),
      file: file.file_id.toString(),
    }));
  }


function FilePage({params}: {params: {language: string, carrier: string, file: string}}) {
  return (
    <div>
        <TextsPage 
        currentFile={params.file}
        />
    </div>
  )
}

export default FilePage