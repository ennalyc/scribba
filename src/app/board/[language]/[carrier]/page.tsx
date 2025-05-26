import React from 'react'
import { carriers } from '@/lib/mockData'
import CarrierPages from '@/components/CarrierPages';

export async function generateStaticParams() {
    return carriers.map((carrier) => ({
      carrierType: carrier.carrierType,
      carrierId: carrier.id,
    }));
  }

function CarrierPage({ params }: { params: { carrierType: string, carrierId: number } }) {
    const carrier = carriers.find((c) => c.id === params.carrierId)?.id;
    return (
        <div>
          <CarrierPages 
          carrierID={carrier}
          />
        </div>
  )
}

export default CarrierPage