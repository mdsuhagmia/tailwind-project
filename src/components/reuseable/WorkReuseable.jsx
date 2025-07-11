import React from 'react'

const WorkReuseable = ({image, title}) => {
  return (
    <>
      <div className=''>
        <img src={image} alt="" className='pb-4' />
        <h3 className='text-3xl md:text-2xl text-[#282938] pb-3 font-bold font-open'>{title}</h3>
        <p className='text-[#282938be] text-1xl md:text-[10px] lg:text-[16px] pb-4 pr-0 md:pr-6'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
      </div>
    </>
  )
}

export default WorkReuseable