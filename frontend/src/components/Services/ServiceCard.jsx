import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item
  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leding-9 text-headingColor font-[700]">{name}</h2>
      <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>{desc}</p>
      <div className='flex items-center justify-between mt-[30px]'>

        <Link to="/doctor" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:text-white hover:border-none'>
          <BsArrowRight />
        </Link>
        <span className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600px]" style={{ background: `${bgColor}`, color: `${textColor}` }}>{index + 1}</span>
      </div>
    </div>
  )
}

export default ServiceCard

