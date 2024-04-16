import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className='flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className='flex items-center gap-1'>
        <Image src="icons/logo.svg" width={32} height={32} alt="Doom" className='max-sm:size-10'/>
        <p className='text-white text-[26px] font-extrabold uppercase max-sm:hidden'>Doom</p>
      </Link>
      <div className='flex justify-between items-center gap-5'>
        <UserButton />
        <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar