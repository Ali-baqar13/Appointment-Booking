import React from 'react'

const DoctorAbout = ({doctor}) => {
  console.log("data", doctor)
  
  return (
    <div >
        <div>
            <h3 className='text=[20px] leading-[30px] text-headingColor font-semibold flex items-end gap-2'>About Of
            <span className='text-irisBlueColor  font-bold text-[24px] leading-9'>{doctor?.name}</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit sit esse voluptatum incidunt deserunt recusandae odio? Aliquid delectus iusto sequi quos autem quod? Aperiam autem aspernatur magnam eum commodi.
            Pariatur nulla temporibus impedit. Officia ducimus repellendus optio necessitatibus et doloribus quo expedita. Porro magni accusamus quis, totam suscipit illum impedit nulla ducimus libero voluptate ut, nobis vero repellendus sunt.</p>
        </div>
      
    </div>
  )
}

export default DoctorAbout
