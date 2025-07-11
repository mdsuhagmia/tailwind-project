import React from 'react'
import banner from '../assets/banner.png'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import card from '../assets/card.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import WorkReuseable from '../components/reuseable/WorkReuseable'

const Home = () => {

  return (
    <>
    <section className='bg-[#1C1E53]'>
      <div className='max-w-xl md:max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
       <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className=' text-center md:text-left'>
          <h1 className='pt-[60px] md:pt-[156px] text-[40px] md:text-4xl lg:text-5xl font-bold text-white md:pr-6 pb-2'>Building stellar websites for early startups</h1>
          <p className='text-white px-20 md:px-0 md:pr-30 py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <div className='text-black flex gap-6 transition-discrete '>
            <a className='m-auto md:m-0 bg-[#FCD980] py-2 px-6 rounded-2xl hover:bg-[#fcd980cf] duration-700' href="#">View our work</a>
            <a className='hidden md:block bg-[#FCD980] py-2 px-6 rounded-2xl hover:bg-[#fcd980cf] duration-700' href="#">View Pricingk</a>
          </div>
        </div>
        <div>
          <img className='pt-[80px] md:pt-[179px] pb-[117px] w-full' src={banner} alt="" />
        </div>
      </div>
      </div>
    </section>

    <section className='bg-[#F4F6FC]'>
      <div className='max-w-7xl flex justify-center md:justify-start md:text-left md:max-w-7xl mx-auto px-4 md:px-6 lg-px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className=''>
            <h2 className='pt-[60px] md:pt-[80px] lg:pt-[128px] text-5xl font-bold font-open text-[#282938] pb-2'>How we work</h2>
            <p className='text-[18px] max-w-sm md:max-w-sm pb-6 text-[#282938b1] font-medium font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div className='pb-20 transition-discrete'>
              <a className='text-white bg-blue-700 py-2 px-4 rounded-2xl hover:bg-blue-500 duration-1000' href="#">Get in touch with us</a>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-2 md:gap-4 lg:gap-8 md:grid-cols-2 pt-[0] md:pt-[80px] lg:pt-[128px] pb-[0] md:pb-[80px] lg:pb-[60px]'>
            <WorkReuseable image={one} title="Strategy"/>
            <WorkReuseable image={two} title="Wireframing"/>
            <WorkReuseable image={three} title="Design"/>
            <WorkReuseable image={four} title="Development"/>
          </div>
        </div>
      </div>
    </section>

    <section className='bg-white pb-0 md:pb-8 lg:pb-10'>
      <div className='max-w-7xl mx-auto flex justify-between px-4 md:px-6 lg:px-8 py-10 md:py-14 lg:py-16'>
        <h2 className='text-[#282938] text-[20px] md:text-3xl lg:text-4xl font-bold font-open'>View our projects</h2>
        <a className='border-2 border-b-amber-950 text-[#282938] pt-1 pb-1 px-2 md:pt-1 md:pb-1 lg:pt-2 lg:pb-1 lg:px-4 rounded-[7px] hover:bg-cyan-100 font-bold font-poppins text-[12px] md:text-[16px]' href="#">View More</a>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-0 md:gap-4 px-4 md:px-6 lg:px-8 pb-8'>
        <div className='relative col-span-2'>
          <img src={card} alt="" className=' w-full'/>
          <div className='bg-[#1c1e53a6] h-full w-[60%] hover:w-[100%] transition-discrete duration-1000 absolute top-0 left-0 hover:text-[20px] md:hover:text-2xl'>
          <div className='absolute top-[30%] left-[20%] md:top-[30%] md:left-[10%]'>
            <h3 className='text-white font-bold font-open max-w-md'>Workhub office Webflow <br /> Webflow Design</h3>
            <p className='text-[#ffffffde] font-normal font-poppins max-w-md py-4'>Euismod faucibus turpis eu gravida mi. <br /> Pellentesque et velit aliquam </p>
            <div className='pt-4'><a className='text-[#FCD980] border border-amber-300 pt-1 pb-2 px-4 rounded-[7px] hover:bg-amber-900 transition-discrete duration-1000' href="#">View portfolio</a></div>
          </div>
          </div>
        </div>

        <div className=''>
          <div className='my-10 md:my-0 relative'>
            <img src={card1} alt="" className='w-full ' />
             <div className='opacity-0 hover:opacity-[100%] bg-[#1c1e53a6] h-full md:h-full lg:h-full w-full duration-1000 absolute top-0 left-0'>
                
                <h2 className='text-white absolute top-[50%] left-[50%] translate-[-50%] md:translate-none text-2xl md:top-[20%] md:left-[10%] md:text-xl lg:top-[30%] lg:left-[20%] lg:text-2xl font-bold font-open'>Unisaas Website <br /> Design</h2>
                <div className='mt-18 md:mt-0 pt-4 absolute top-[50%] left-[50%] translate-[-70%] md:translate-none md:top-[54%] md:left-[10%] lg:top-[58%] lg:left-[20%]'><a className='text-[#FCD980] border border-amber-300 pt-1 pb-2 px-4 rounded-[7px] hover:bg-amber-900 transition-discrete duration-1000' href="#">View portfolio</a></div>
                
            </div>
          </div>

          <div className='my-10 md:my-0 relative'>
            <img src={card2} alt="" className='w-full mt-[20px]' />
             <div className='opacity-0 hover:opacity-[100%] bg-[#1c1e53a6] h-full md:h-full lg:h-full w-full duration-1000 absolute top-0 left-0'>
                
                <h2 className='text-white absolute top-[50%] left-[50%] translate-[-50%] md:translate-none text-2xl md:top-[20%] md:left-[10%] md:text-xl lg:top-[30%] lg:left-[20%] lg:text-2xl font-bold font-open'>Unisaas Website <br /> Design</h2>
                <div className='mt-18 md:mt-0 pt-4 absolute top-[50%] left-[50%] translate-[-70%] md:translate-none md:top-[54%] md:left-[10%] lg:top-[58%] lg:left-[20%]'><a className='text-[#FCD980] border border-amber-300 pt-1 pb-2 px-4 rounded-[7px] hover:bg-amber-900 transition-discrete duration-1000' href="#">View portfolio</a></div>
                
            </div>
          </div>
       </div>
      </div>
    </section>
    </>
  )
}

export default Home