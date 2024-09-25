'use client'

import { Elements } from '@stripe/react-stripe-js';
import { useSearchParams } from 'next/navigation'
import React from 'react'
import React from 'react'

function Paymet() {

  const searchParam=useSearchParams();
  const amount = searchParam.get('amount')
   const stripePromise = loadStripe(process.env.Next_PUBLIC_STRIPE_PUBLISHABLE_KEY)
   const options = {
     mode: 'Payment',
     amount:Math.round(amount*100),
     currency:'USD',
   }
  return (
    <Elements stripe={stripePromise} options={options}>
    
    
    
    </Elements>
  )
}

export default Paymet