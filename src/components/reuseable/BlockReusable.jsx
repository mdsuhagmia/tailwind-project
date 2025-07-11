import React, { useState } from 'react'

const BlockReusable = ({img, className = ""}) => {
  let [show, setShow] = useState(false)
  return (
    <>
    <div className={`pb-10 md:pb-0 ${className}`}>
      <img src={img} alt="" />
      <h6 className='text-[#282938a1] text-md font-medium font-poppins pt-4 pb-2'>19 Jan 2022</h6>
      <h2 className='text-[#282938] text-xl font-semibold font-poppins pb-2'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>
      <p className='text-[#282938ac] text-[14px] font-normal font-poppins pb-2'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
      {show ? <p className='text-[#282938ac] text-[14px] font-normal font-poppins pb-2'>high-value clients, boost conversions, and grow faster. With greater design control, faster launch times, and fewer technical barriers, he could focus more on marketing, storytelling, and client experience—ultimately transforming how he built and sold his services.</p> : ""}
      <button onClick={() => setShow(!show)} className='py-1 px-4 border-2 border-y-blue-600 rounded-2xl hover:text-amber-300 hover:bg-fuchsia-900 font-bold font-open transition-discrete duration-700 cursor-pointer'>Read More</button>
    </div>
    </>
  )
}

export default BlockReusable