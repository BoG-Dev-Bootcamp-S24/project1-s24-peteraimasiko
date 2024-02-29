import React from 'react'
import LinesPage from './LinesPage'
import { useNavigate } from 'react-router'
import gojo from '../marta.jpg'

function Home() {

  const navigate = useNavigate()  

  return (
    <div className='w-full h-full'>
        <div className='grid grid-flow-col grid-cols-5 m-5'>
          <p className='justify-self-center col-start-3 text-4xl'>MARTA</p>
          <p onClick={() => navigate("/about")} className='justify-self-center self-center col-start-5 cursor-grab'>About MARTA</p>
        </div>
        <div className='flex justify-around'>
          <div className='flex flex-col p-32'>
            <p className='text-4xl'>View Routes Schedule</p>
            <br/>
            <ul>
              <li><button onClick={() => navigate("/linespage/gold")}>Gold Line</button></li>
              <li><button onClick={() => navigate("/linespage/red")}>Red Line</button></li>
              <li><button onClick={() => navigate("/linespage/blue")}>Blue Line</button></li>
              <li><button onClick={() => navigate("/linespage/green")}>Green Line</button></li>
            </ul>
          </div>

          <img src={gojo} className='w-auto h-56 mt-20'></img>


        </div>
        
    </div>
    
  )
}

export default Home