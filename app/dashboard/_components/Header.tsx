'use client'

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {
   const path= usePathname();

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Image src='/logo.svg' alt='logo' width={100} height={100}/>
        <ul className=' hidden md:flex gap-6'>
            <li className={`hover:text-blue-500 hover:font-bold hover:transition-all ${path==='/dashboard' && 'text-blue-500 font bold'}`}>Dashboard</li>
            <li className={`hover:text-blue-500 hover:font-bold hover:transition-all ${path==='/dashboard/questions' && 'text-blue-500 font bold'}`}>Questions</li>
            <li className={`hover:text-blue-500 hover:font-bold hover:transition-all ${path==='/dashboard/upgrade' && 'text-blue-500 font bold'}`}>Upgrade</li>
            <li className={`hover:text-blue-500 hover:font-bold hover:transition-all ${path==='/dashboard/how' && 'text-blue-500 font bold'}`}>How it works?</li>
        </ul>
        <UserButton/>


    </div>
  )
}

export default Header