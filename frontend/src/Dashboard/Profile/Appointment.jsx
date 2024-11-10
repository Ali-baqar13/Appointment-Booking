import React, { useRef } from 'react'

const Appointment = () => {
  const menuRef = useRef(null)
  const toggle = () => { menuRef.current.classList.toggle("show__rem") }
  return (
    <section className="navi" ref={menuRef}>

      <div className="remi w-[70%] h-[80%] ml-[130px] mt-[70px]">
        <div className="w-full max-w-[570px] mx-auto rounded-lg  md:p-10">
          <span onClick={toggle} className="font-bold top-5 right-5 absolute hover:bg-red-500 hover:text-white w-10 h-10 px-4 py-1">X</span>
          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'> Hello Want to <span className='text-primaryColor'> Book </span> An Appointment ? </h3>
          <form className="w-full pt-10">
            <div className="w-full mb-5">
              <input className="w-full px-4 py-3 border-b border-solid border-[#1f478261] focus:outline-none focus:border-b-primaryColortext text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md" placeholder="Ticket Price" />
            </div>
            <div className="w-full mb-5">
              <input className="w-full px-4 py-3 border-b border-solid border-[#1f478261] focus:outline-none focus:border-b-primaryColortext text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md" placeholder="Appointment Date" />
            </div>
            <div className="w-full mb-5">
              <input className="w-full px-4 py-3 border-b border-solid border-[#1f478261] focus:outline-none focus:border-b-primaryColortext text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md" placeholder="Payment" />
            </div>
            <button className='btn w-full'>Request an Appointment</button>
          </form>
        </div>
      </div>

    </section>
  )
}

export default Appointment