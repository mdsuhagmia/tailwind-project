import React, { useState } from 'react'
import blog from '../assets/blog.png'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import BlockReusable from '../components/reuseable/BlockReusable'

const Blog = () => {
  
  return (
    <section className='bg-[#ffffff24]'>
      <div className='px-4 md:px-6 lg:px-8'><h2 className='text-4xl text-[#282938] pt-10 md:pt-35 text-center md:text-left font-bold font-open pb-6 md:pb-10'>Our blog</h2></div>
      <div className='max-w-sm md:max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12 md:pb-14'>
          <BlockReusable img={blog}/>
          <BlockReusable img={blog1}/>
          <BlockReusable img={blog2} className="block md:hidden lg:block"/>
        </div>
        <div className='md:grid-cols-1 max-w-md mx-auto gap-4 pb-12 md:pb-14'>
          <BlockReusable img={blog2} className="hidden md:block lg:hidden"/>
        </div>
      </div>
    </section>
  )
}

export default Blog