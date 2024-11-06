import React from 'react'

import startIcon from '../../assets/images/Star.png'
import { Link, useParams } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { BASE_URL } from "../../../config";
import customHook from "../../hooks/customHook";
import Error from "../Error/Error.jsx"
import Loader from "../../Loader/Loading.jsx"


const DoctorCard = ({ doctor }) => {
  const { id } = useParams()
  console.log(id)
  const { name, averageRating, photo, specialization, totalRating, totalPatients, hospital } = doctor
  return (
    <>
      <div className='p-3 lg-p:5'>
        <div >
          <img src={photo} alt='photo'></img>
        </div>
        <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-3'>{name}</h2>
        <div className='mt-2 lg:mt-4 flex items-center justify-between'>
          <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:px-6 text -[12px] leading-4 lg:text-[16px] lg:leading-7 rounded font-semibold">{specialization}</span>

          <div className="container flex items-center gap-[6px] ">
            <span className=' flex items-center gap-[6px] text-[14px] leading-6 lg:text=[16px] lg:leading-6 font-semibold text-headingColor '><img src={startIcon}></img>{Math.round((averageRating * 10) / 10)}  ({totalRating})</span>
          </div>
        </div>
        <div className='mt-[18px] lg:mt-5 flex items-center justify-between '>
          <div>
            <h3 className='text-[16px]leading-7 lg:text-[18px] lg-leading-[30px] font-[600]'>+{totalPatients}</h3>
            <p className="text-[14px] leading-6 font-[400] text-textColor">At {hospital}</p>
          </div>
          <Link to={`/doctor/${doctor._id}`} className='w-[44px] h-[44px] rounded-full border border-solid hover:bg-primaryColor border-[#181A1E] ml-[240px] mt-[30px] mx-auto flex items-center justify-center group hover:border-none'>
            <BsArrowRight className='group-hover:text-white w-6 h-5' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default DoctorCard