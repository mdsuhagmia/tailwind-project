import React from 'react'

const FeaturesReuseable = ({logo}) => {
  return (
    <div className='bg-white shadow-xl rounded-xl pl-8 pr-6'>
      <img src={logo} alt="" className='pt-10 pb-4' />
      <h3 className='text-[#282938] text-2xl pb-4 font-bold font-open'>Uses Client First</h3>
      <p className='text-[#282938b1] pb-10'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
    </div>
  )
}

export default FeaturesReuseable