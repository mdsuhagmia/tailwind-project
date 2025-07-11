import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const SubFooter = () => {
  return (
    <section className='bg-[#1C1E53] pt-12'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-10 lg:gap-20'>
          <div className=''>
            <img src={logo} alt="" />
            <p className='text-[#ffffffd1] text-[10px] md:text-[16px] lg:text-[18px] pr-4 md:pr-8 lg:pr-32 pt-4 pb-[36px] md:pb-[86px] font-poppins'>We are always open to discuss your project <br /> and improve your online presence.</p>
            
          <div className='hidden lg:block bg-[#FCD980] h-[95px] w-[450px] rounded-[3px]'>
            <div className='flex mx-auto gap-16'>
                <div className='pl-8 pt-3'>
                  <h5 className='text-[20px] font-open font-normal text-black pb-2'>Email me at</h5>
                  <p>contact@website.com</p>
                </div>
                <div className='pt-3'>
                  <h5 className='text-[20px] font-open font-normal text-black pb-2'>Call us</h5>
                  <p>0927 6277 28525</p>
                </div>
            </div>
          </div>
          </div>
          <div className='hidden md:block lg:block'>
            <h2 className='text-4xl text-white'>Lets Talk!</h2>
            <p className='text-[#ffffffd1] text-[18px] pr-8 lg:pr-32 py-4 font-poppins'>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
            <ul className='flex gap-6 md:mb-16'>
              <li><a href="#"><FaFacebook className='text-white'/></a></li>
              <li><a href="#"><FaTwitter className='text-white'/></a></li>
              <li><a href="#"><FaInstagramSquare className='text-white'/></a></li>
              <li><a href="#"><FaLinkedin className='text-white'/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubFooter