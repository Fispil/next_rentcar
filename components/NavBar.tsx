import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <header className='sticky top-0 w-full z-10 bg-zinc-50 ' >
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 '>
        <div>
          <Link href='/' className='flex justify-center items-center'>
            <Image src='/logo.svg' alt='Logo' width={118} height={18} className='object-contain' />
          </Link>
        </div>
        <div className='flex justify-between items-center w-6/12'>
          <Link href='/aboutus' className='flex justify-center items-center hover:text-red-600'>About us</Link>
          <Link href='catalog' className='flex justify-center items-center hover:text-red-600'>Catalog</Link>
          <Link href='profile' className='flex justify-center items-center hover:text-red-600'>Profile</Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar