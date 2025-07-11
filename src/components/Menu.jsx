import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import Features from '../pages/Features';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

const Menu = () => {
  let [isOpen, setIsOpen] = useState(false)

  let togggleMenu = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <nav className='bg-[#1C1E53] text-white relative md:fixed w-full z-50'>
      <div className='max-w-7xl ms-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-18 items-center'>
          <div>
            <a href="#"><img src={logo} alt="" /></a>
          </div>
          <div className='hidden md:flex space-x-6'>
            <ul className='flex gap-2'>
              <li><Link to={"/"}  as={<Home/>} className="hover:bg-indigo-900 transition-discrete duration-1000 pt-1 pb-2 px-4 hover:rounded-full">Home</Link></li>
              <li><Link  to={"/features"}  as={<Features/>} className="hover:bg-indigo-900 transition-discrete duration-1000 pt-1 pb-2 px-4 hover:rounded-full">Features</Link></li>
              <li><Link  to={"/features/blog"}  as={<Blog/>} className="hover:bg-indigo-900 transition-discrete duration-1000 pt-1 pb-2 px-4 hover:rounded-full">Blog</Link></li>
              <li><Link  to={"/features/blog/contact"}  as={<Contact/>} className="hover:bg-indigo-900 transition-discrete duration-1000 pt-1 pb-2 px-4 hover:rounded-full">Contact</Link></li>
            </ul>
          </div>
         { /* Mobile Menu */ }
          <div className='md:hidden'>
            <button onClick={togggleMenu}>
              {isOpen ? <MdClose className='text-4xl' /> : <IoMenu className='text-4xl' /> }
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden'>
          <ul className='text-center'>
            <li className='pb-4'><Link to={"/"}  as={<Home/>} className="hover:text-gray-200">Home</Link></li>
            <li className='pb-4'><Link to={"/features"}  as={<Features/>} className="hover:text-gray-200">Features</Link></li>
            <li className='pb-4'><Link to={"/features/blog"}  as={<Blog/>} className="hover:text-gray-200">Blog</Link></li>
            <li className='pb-4'><Link to={"/features/blog/contact"}  as={<Contact/>} className="hover:text-gray-200">Contact</Link></li>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Menu