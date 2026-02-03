import Hero from '@/components/landing/hero'
import Navbar from '@/components/landing/nav'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col relative'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default page
