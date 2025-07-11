import React, { useState } from 'react'
import icon from '../assets/icon.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import mask from '../assets/mask.png'
import man from '../assets/man.png'
import FeaturesReuseable from '../components/reuseable/FeaturesReuseable'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const faqData = [
  {
    id: 1,
    question: "How much time does it take?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    question: "What is your class naming convention?",
    answer: "We use the BEM (Block Element Modifier) naming convention to maintain consistency."
  },
  {
    id: 3,
    question: "How do you communicate?",
    answer: "We communicate via Slack, Zoom, or Email depending on the client's preference."
  },
  {
    id: 4,
    question: "I have a bigger project. Can you handle it?",
    answer: "Absolutely! We have a dedicated team to handle large scale projects."
  },
  {
    id: 5,
    question: "What is your class naming convention?",
    answer: "We stick to BEM and Tailwind utility-first class approach for structure and style."
  }
]


const Features = () => {

  let [show, setShow] = useState(true)
  let handleLeft = ()=>{
    setShow(!show)
  }
  let handleright = ()=>{
    setShow(!show)
  }

  const [openIndex, setOpenIndex] = useState(null)
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index)
    }
  return (
   <>
    <section className='bg-[#F4F6FC]'>
      <div className='max-w-xl mx-auto text-center px-4 md:px-6 lg:px-8'>
        <h6 className='pt-10 md:pt-30 lg:pt-35 text-[#282938] text-md font-bold font-poppins pb-3'>Features</h6>
        <h2 className='pb-14 md:pb-20 lg:pb-20 text-[#282938] text-4xl font-bold font-open'>Design that solves problems, one product at a time</h2>
      </div>

      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 pb-16'>
          <FeaturesReuseable logo={icon} title="Uses Client First"/>
          <FeaturesReuseable logo={icon1} title="Two Free Revision Round"/>
          <FeaturesReuseable logo={icon2} title="Template Customization"/>
          <FeaturesReuseable logo={icon3} title="24/7 Support"/>
          <FeaturesReuseable logo={icon4} title="Quick Delivery"/>
          <FeaturesReuseable logo={icon5} title="Hands-on approach"/>
        </div>
      </div>
    </section>

    <section className='bg-[#f4f6fc8b]'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center md:text-left pt-12 md:pt-16'>
        <div>
          <h2 className='text-4xl md:text-2xl lg:text-4xl text-[#282938] max-w-xs mx-auto font-bold font-open pb-4'>What our clients say about us</h2>
          <p className='text-[#282938c0] text-xl font-normal font-poppins max-w-xs mx-auto pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </div>

        <div className='col-span-2'>
          <h2 className='text-3xl md:text-2xl lg:text-3xl font-bold font-open pb-8'>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h2>

          <div className='flex justify-between pb-14'>
            {show ? <><div className='flex gap-4'>
              <img src={mask} alt="" />
              <div>
                <h4 className='font-bold font-open'>Jenny Wilson</h4>
                <h6 className='font-normal font-poppins text-sm'>Vice President</h6>
              </div></div></> : <><div className='flex gap-4'>
              <div className=''><img src={man} alt="" className='w-[50px] h-[52px]'/></div>
              <div>
                <h4 className='font-bold font-open'>Simon Adams</h4>
                <h6 className='font-normal font-poppins text-sm'>Developer</h6>
              </div></div></>}
            

            <div className='flex gap-4 pt-4'>
              <IoIosArrowBack onClick={handleLeft} className='text-2xl hover:text-red-700 cursor-pointer'/>
              <IoIosArrowForward onClick={handleright} className='text-2xl hover:text-red-700 cursor-pointer'/>
            </div>
          </div>

        </div>
      </div>
    </section>


    <section className='bg-[#f4f6fc8b]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-12 md:pt-16'>
        <div className='hidden md:block'>
          <h2 className='text-4xl md:text-3xl lg:text-4xl text-[#282938] max-w-xs me-auto font-bold font-open pb-4'>Frequently asked questions</h2>
          <div className='pb-4 pt-4 max-w-xs me-auto'>
            <a className='text-[#fff] text-xl font-normal font-poppins   bg-blue-500 py-2 px-6 rounded-2xl hover:bg-blue-600' href="#">Contact us</a>
          </div>
        </div>
        <div className='md:hidden text-center'>
          <h2 className='text-4xl md:text-2xl lg:text-4xl text-[#282938] max-w-xs mx-auto font-bold font-open pb-4'>Frequently asked questions</h2>
          <div className='pb-4 pt-4 max-w-xs mx-auto'>
            <a className='text-[#fff] text-xl font-normal font-poppins   bg-blue-500 py-2 px-6 rounded-2xl hover:bg-blue-600' href="#">Contact us</a>
          </div>
        </div>

        <div>
        <div className="max-w-2xl mx-auto mb-20 border border-blue-500 rounded-md divide-y divide-gray-200">
              {faqData.map((item, index) => (
                <div key={item.id} className="flex items-start justify-between px-6 py-5">
                  <div className="flex gap-4">
                    <span className="text-blue-600 font-bold text-lg w-8">{String(item.id).padStart(2, '0')}</span>
                    <div>
                      <h2 className="text-base md:text-lg font-semibold text-gray-900">
                        {item.question}
                      </h2>
                      {openIndex === index && (
                        <p className="text-gray-600 mt-2 max-w-md text-sm">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  </div>
        
                  <div onClick={() => toggleFAQ(index)} className="text-xl text-gray-700 cursor-pointer mt-1">
                    {openIndex === index ? <IoClose className='hover:text-amber-600' /> : <FaPlus className='hover:text-blue-600'/>}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default Features