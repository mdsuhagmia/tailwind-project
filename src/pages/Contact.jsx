import React from 'react'
import contact from '../assets/contact.png'

const Contact = () => {
  return (
    <section className='pt-10 md:pt-30 lg:pt-35 pb-8 md:pb-20 lg:pb-25'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='relative'>
            <img src={contact} alt="" className='w-full h-full' />
            <div>
              <div className='bg-[#1c1e53a6] h-full w-full absolute top-0 left-0'>
                <h2 className='text-white text-5xl max-w-md mx-auto px-4 pt-[30%] md:pt-[20%] font-bold font-open'>Building stellar websites for early startups</h2>
                <p className='text-[#ffffffc2] max-w-md mx-auto px-4 pt-10 font-medium font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
              </div>
            </div>
          </div>

          <div className='bg-[#1C1E53] mt-10 md:mt-0'>
            <div className='px-14 md:px-10 lg:px-20 pt-[10%] md:pt-[20%] pb-[10%] md:pb-[5%]'>
              <h3 className='text-3xl text-white font-bold font-open pb-4'>Send inquiry</h3>
              <p className='text-white max-w-sm md:max-w-sm lg:max-w-md pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <input type="text" placeholder='Your Name' className='text-white p-4 border-solid border-2 outline-0 border-[rgba(255,255,255,0.15)] rounded-[8px] w-full mb-4'/>
              <input type="text" placeholder='Email' className='text-white p-4 border-solid border-2 outline-0 border-[rgba(255,255,255,0.15)] rounded-[8px] w-full mb-4'/>
              <input type="text" placeholder='Paste your Figma design URL' className='text-white p-4 border-solid border-2 outline-0 border-[rgba(255,255,255,0.15)] rounded-[8px] w-full mb-4'/>
              <button type='submit' className='ext-white p-2 bg-[#FCD980] rounded-[41px] w-full mb-4 cursor-pointer font-bold hover:bg-[#fcd980e3] mt-4'>Send an Inquiry</button>
              <button type='submit' className='ext-white p-2 bg-[#FCD980] rounded-[41px] w-full mb-4 cursor-pointer font-bold hover:bg-[#fcd980e3]'>Get in touch with us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact