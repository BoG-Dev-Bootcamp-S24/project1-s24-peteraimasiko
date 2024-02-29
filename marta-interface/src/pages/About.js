import React from 'react'
import { useNavigate } from 'react-router'

import marta from "../marta.jpg"


function About() {

    const navigate = useNavigate()
  return (
    <div className='w-full'>
        <div className='grid grid-flow-col grid-cols-5 m-5'>
          <p className='justify-self-center col-start-3 text-4xl'>MARTA</p>
          <p onClick={() => navigate("/")} className='justify-self-center self-center col-start-5 cursor-grab'>Back to Home</p>
        </div>
        <div className='flex justify-around'>
          <div className='flex flex-col p-32'>
            <p className='text-2xl'>We are the nation’s ninth largest 
            transit system and the largest of its kind in the Southeast that provides bus, rail, and paratransit service. With 40 years of operations under its belt, MARTA services three of the five core counties in the region and generates $2.6 billion in economic impact to the state of Georgia. Employees of the region’s fastest growing sectors overwhelmingly choose MARTA to get to and from work. People from every 
            demographic across the region trust MARTA with their routine transportation needs.</p>
          </div>

          <img src={marta} className='w-auto h-56 mt-20'></img>


        </div>
    </div>
  )
}

export default About