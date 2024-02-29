import React, { useState } from 'react'

function Navbar({ stationsdata, loading, setCurrentStation }) {

  const [selected, setSelected] = useState(false);


  return (
    <div className='bg-slate-600 text-white'>
      {loading ? (
        <div>Loading...</div>
      ) : stationsdata ? (

        <ul id="navlist" className='text-center w-max'>
          <li className='px-16 py-5 cursor-grab' onClick={(e) => {
            setCurrentStation("");
            if (!selected) {
              setSelected(true)
              const allSelected = document.querySelectorAll(".selected-nav")
              allSelected.forEach((value) => {
                value.classList.remove("selected-nav")
              })
              e.target.classList.add("selected-nav");

            } else {
              const allSelected = document.querySelectorAll(".selected-nav")
              allSelected.forEach((value) => {
                value.classList.remove("selected-nav")
              })
              e.target.classList.add("selected-nav");
              setSelected(false)
            };
            }}><button className=''>All Stations</button></li>
          {stationsdata.map(station => 
          <li onClick={(e) => 
            {
              setCurrentStation(station);
              if (!selected) {
                setSelected(true)
                const allSelected = document.querySelectorAll(".selected-nav")
                allSelected.forEach((value) => {
                  value.classList.remove("selected-nav")
                })
                e.target.classList.add("selected-nav");

              } else {
                const allSelected = document.querySelectorAll(".selected-nav")
                allSelected.forEach((value) => {
                  value.classList.remove("selected-nav")
                })
                e.target.classList.add("selected-nav");
                setSelected(false)
              };
            }
          } className='px-16 text-center py-5 w-auto cursor-grab'>{station}</li>)}
          
        </ul>
      ) : (
        <div>Error fetching data</div>
      )}
    </div>
  )
}

export default Navbar