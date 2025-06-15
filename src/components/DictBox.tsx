'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { Volume2 } from 'lucide-react'

interface DictionaryEntry {
    traditional: string;
    simplified: string;
    pinyin: string;
    definitions: string[];
}

interface MeaningResponse {
    word: string;
    meanings: DictionaryEntry[];
}

interface BackendErrorResponse {
    error: string;
}

async function fetchMeaning(word: string) {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001'; 
    const url = `${backendUrl}/meaning?word=${encodeURIComponent(word)}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const errorData = await response.json(); 
            throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data; 

    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}


function DictBox({dictWord}: {dictWord: string}) {
  const [meaningData, setMeaningData] = useState<MeaningResponse | null>(null)
  const [displayError, setDisplayError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false);
   useEffect(() => {
        if (!dictWord) return;

        const handleLookup = async () => {
            setLoading(true);
            setMeaningData(null);
            setDisplayError(null);

            try {
                const result = await fetchMeaning(dictWord);

                if (!result) {
                    setDisplayError('Failed to connect to the dictionary service.');
                } else if ('error' in result) {
                    setDisplayError(result.error);
                } else {
                    setMeaningData(result);
                }
            } catch (err: any) {
                setDisplayError(err.message || 'Unexpected error during lookup.');
            } finally {
                setLoading(false);
            }
        };

        handleLookup();
    }, [dictWord]);
  return (
    !loading && meaningData && meaningData.meanings && meaningData.meanings.length > 0 ?
    meaningData.meanings.map((meaning, index) => (
      <div key={index}>
        <div className='gap-2 p-4 mx-3 mb-3 border border-gray-400 bg-gray-100 w-56 rounded-xl flex flex-col items-start h-94'>
          <div className='h-10 gap-2 flex flex-row justify-start items-baseline w-full'>
            <p className='mt-3 text-3xl font-semibold'>{meaning.simplified}</p>
            <Volume2 className='text-black'/>
          </div>
          <p className='text-sm font-semibold'>{meaning.pinyin}</p>
          <ol className='list-decimal p-4'>
            {meaning.definitions.map((def, index)=>(
              <li key={index}>{def}</li>
            ))}
          </ol>
          <button className='bg-teal-600 text-white rounded-full h-10 w-48'>
            Add to a flashcard
          </button>
        </div>
      </div>
    ))
    :
    <div className='mx-3 mb-3 border border-gray-400 bg-gray-100 w-56 rounded-xl flex flex-col items-center h-94'>
      <p className='mt-3 text-sm text-gray-400'>Select a word or a phrase.</p>
    </div>
  )
}

export default DictBox