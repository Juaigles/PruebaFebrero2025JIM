import React from 'react'
import Buttons from '@/components/Buttons'

const Details = () => {
  return (
    <div className="borderFrame h-screen">

    <div className="wrapper ">
    {Array.from({ length: 8 }).map((_, index) => (
      <div key={index} className="">
        <Buttons />
      </div>
    ))}
  </div>
    </div>
  )
}

export default Details