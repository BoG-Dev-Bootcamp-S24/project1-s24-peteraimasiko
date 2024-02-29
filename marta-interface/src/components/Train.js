import React from 'react'

function Train({ arrival, color }) {
  return (
    <div className='flex border-b-[2px] border-black'>
      <div className='m-2 mt-5 mx-10 text-3xl'>{arrival.STATION[0]}</div>
      <div className='flex flex-col w-max mt-3 '>
        <p className='text-xl font-semibold mb-1'>{arrival.STATION} ➤ {arrival.DESTINATION}</p>
        <div className='flex text-center'>
          <p className={color + " w-20"}>{color.charAt(0).toUpperCase() + color.slice(1)}</p>
          <div className=''>
          <p className={arrival.DELAY === "T0S" ? "text-red-500 text-xl font-bold ml-10 mt-1" : "text-green-600 text-xl font-bold ml-10 mt-1"}>{arrival.DELAY === "T0S" ? "Delayed" : "On Time"}</p>
          </div>
         
        </div>
      </div>
      <div className='flex justify-end flex-grow mr-32'>
        <div className='text-3xl m-9'>{arrival.WAITING_TIME}</div>
      </div>
      
    </div>
  )
}

export default Train