import React from 'react'

const Footer = () => {
  return (
    <section className='hidden md:block lg:block bg-[#0a030310]'>
      <div className='max-w-7xl ms-auto h-[72px] flex items-center px-4 md:px-6 lg:px-8'>
        <div>
          <p className='text-[18px] font-poppins'>Copyright 2022, Finsweet.com</p>
        </div>
        <div className='ms-auto'>
          <ul className='flex gap-8'>
            <li><a href="#" className="hover:text-[#000000b3]">Home</a></li>
            <li><a href="#" className="hover:text-[#000000b3]">Features</a></li>
            <li><a href="#" className="hover:text-[#000000b3]">Blog</a></li>
            <li><a href="#" className="hover:text-[#000000b3]">Contact</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer