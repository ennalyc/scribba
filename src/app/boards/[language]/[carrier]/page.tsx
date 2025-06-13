import React from 'react'
import { languages } from '@/lib/languages'
import { carriers, boards } from '@/lib/mockData'
import CarrierPages from '@/components/CarrierPages';

export async function generateStaticParams() {
    return carriers.map((carrier) => ({
      language: carrier.title,
      carrier: carrier.id.toString(),
    }));
  }

function CarrierPage({ params }: { params: { language: string, carrierType: string, carrier: string } }) {
  console.log(params.carrier)
  return (
        <div>
          <CarrierPages 
          carrierID={Number(params.carrier)}
          />
        </div>
  )
}

export default CarrierPage