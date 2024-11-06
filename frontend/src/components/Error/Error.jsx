import React from 'react'

const Error = (errMessage) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <h3 className="text-headingColor leading-[30px] font-semibold text-[20px]">{errMessage}</h3>
    </div>
  )
}

export default Error
