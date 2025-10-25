import React from 'react'

import CarrierPages from '@/components/CarrierPages';

export async function generateStaticParams() {
    
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