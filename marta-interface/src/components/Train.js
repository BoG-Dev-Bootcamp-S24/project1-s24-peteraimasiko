import React from 'react'

function Train({ arrival, color }) {
  return (
    <div className='flex'>
      <div className=' m-5 text-3xl'>{arrival.STATION[0]}</div>
      <div className='flex flex-col'>
        <p>{arrival.STATION} ➤ {arrival.DESTINATION}</p>
        <div className='flex justify-between'>
          <p className=''>{color.charAt(0).toUpperCase() + color.slice(1)}</p>
          <p>{arrival.DELAY === "T0S" ? "Delayed" : "On Time"}</p>
        </div>
      </div>
      <div className='text-xl m-9'>{arrival.WAITING_TIME}</div>
    </div>
  )
}

export default Train