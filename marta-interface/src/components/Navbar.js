import React from 'react'

function Navbar({ stationsdata, loading, setCurrentStation }) {


  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : stationsdata ? (

        <ul className='text-center'>
          <li><button onClick={() => setCurrentStation("")}>All Stations</button></li>
          {stationsdata.map(station => 
          <li className='px-14'><button onClick={() => 
            setCurrentStation(station)
          }>{station}</button></li>)}
          
        </ul>
      ) : (
        <div>Error fetching data</div>
      )}
    </div>
  )
}

export default Navbar