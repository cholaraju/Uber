import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
 const headerMenu = [
   { 
     id:1,
     name: 'Ride',
     icon: '/Taxi-icon.svg'
   
   },
   { 
     id:2,
     name: 'Package',
     icon: '/Box-icon.svg'
   }
 
 ]
  return (
    <div className="p-5 pb-3 pl-10 border-b-[4px] border-gray-200 flex item-center justify-between">
      <div className='flex gap-24 items-center'>
      <img src="/Uber-icon.svg" width= {70} height= {70} alt='Logo'/>
      <div className='flex gap-6 items-center'>
      
      {headerMenu.map((item)=>(
        <div className='flex gap-2 items-center' key={item.id}>
        <img src={item.icon} width= {17} height= {17} alt='Logo'/>
        <h2 className="text-[14px] font-medium">{item.name}</h2>
        </div>
      
      ))}
      
      </div>
      </div>
      <UserButton />
    </div>
  )
}

export default Header