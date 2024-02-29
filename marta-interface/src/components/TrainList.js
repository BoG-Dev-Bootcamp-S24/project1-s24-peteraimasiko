import React, { useEffect, useState } from 'react'
import Train from './Train'
export default function TrainList({currentStation, arrivalsdata, direction, loading, color}) {

  const [filters, setFilters] = useState([])

  const [arriving, setArriving] = useState(false)
  const [scheduled, setScheduled] = useState(false)
  const [eastbound, setEastBound] = useState(false)
  const [westbound, setWestBound] = useState(false)
  const [southbound, setSouthBound] = useState(false)
  const [northbound, setNorthBound] = useState(false)


  const eastButton = document.getElementById("east");
  const westButton = document.getElementById("west");
  const southButton = document.getElementById("south");
  const northButton = document.getElementById("north");
  /*

    add a filter function attached to arrivalsdata that filter between arriving and the rest.

  */





  
  // function EastWest() {
  //  return ( <div className='flex justify-evenly'>
  //     <button onClick={(e) => {buttonClicked(e); setArriving(!arriving ? true : false)}}>Arriving</button>
  //     <button onClick={(e) => {buttonClicked(e); setScheduled(!scheduled ? true : false)}}>Scheduled</button>
  //     <button id='east' onClick={(e) => {buttonClicked(e); 
  //       setEastBound(!eastbound ? true : false); 
  //       setWestBound(false);
  //       westButton.classList.remove("selected")
        
  //       }}>Eastbound</button>
  //     <button id='west' onClick={(e) => {buttonClicked(e); setWestBound(!westbound ? true : false); setEastBound(false);
  //     eastButton.classList.remove("selected")
  //     }}>Westbound</button>
  //   </div>)
  // }

  function EastWest() {
    return ( <div className='flex justify-evenly mt-2 p-2 pb-3 border-b-[2px] border-black'>
       <button className='no-selected' onClick={(e) => {buttonClicked(e); setArriving(!arriving ? true : false)}}>Arriving</button>
       <button className='no-selected' onClick={(e) => {buttonClicked(e); setScheduled(!scheduled ? true : false)}}>Scheduled</button>
       <button className='no-selected' id='east' onClick={(e) => {buttonClicked(e); 
         setEastBound(!eastbound ? true : false); 
         }}>Eastbound</button>
       <button className='no-selected' id='west' onClick={(e) => {buttonClicked(e); setWestBound(!westbound ? true : false); 
       }}>Westbound</button>
     </div>)
   }
  

  function buttonClicked(e) {
    if (e.target.classList.contains("selected")) {
      const stringa = "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2";
      const stringarr = stringa.split(" ")
      e.target.classList.remove(...stringarr)
      e.target.classList.remove("selected")
      e.target.classList.add("no-selected")
    } else {
      e.target.classList.add("selected")
      const stringa = "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2";
      const stringarr = stringa.split(" ")
      e.target.classList.add(...stringarr)
      e.target.classList.remove("no-selected")
    }
  }

  function newarr () {
    return (arrivalsdata.filter((arrival) => {
      return ((!arriving || scheduled) || arrival.WAITING_TIME === "Arriving") &&
      ((!scheduled || arriving) || arrival.WAITING_TIME !== "Arriving" ) &&
      ((!eastbound || westbound) || arrival.DIRECTION === "E") &&
      ((!westbound || eastbound) || arrival.DIRECTION === "W") &&
      ((!northbound || southbound) || arrival.DIRECTION === "N") &&
      ((!southbound || northbound)|| arrival.DIRECTION === "S")
    }).filter((arrival) => {
      if (currentStation !== "all") {
        if (currentStation === "Lakewood/Ft. McPherson") {
          return arrival.STATION.includes("LAKEWOOD")           
        }
        if (currentStation === "Hamilton E. Holmes") {
          return arrival.STATION.includes("HE")  
        }
        if (currentStation === "GWCC/CNN Center") {
          return arrival.STATION.includes("DOME")  
        }
        if (currentStation === "Edgewood") {
          return arrival.STATION.includes("CANDLER")  
        }
        return arrival.STATION.includes(currentStation.toUpperCase())
      } else {
        return true;
      } 
    }));
  }


  function NorthSouth() {
    return (<div className='flex justify-evenly mt-2 p-2 pb-3 border-b-[2px] border-black'>
      <button className='no-selected' onClick={(e) => {buttonClicked(e); setArriving(!arriving ? true : false)}}>Arriving</button>
      <button className='no-selected' onClick={(e) => {buttonClicked(e); setScheduled(!scheduled ? true : false)}}>Scheduled</button>
      <button className='no-selected' id='north' onClick={(e) => {buttonClicked(e); setNorthBound(!northbound ? true : false); }}>Northbound</button>
      <button className='no-selected' id='south' onClick={(e) => {buttonClicked(e); setSouthBound(!southbound ? true : false); }}>Southbound</button>
    </div>)
  }
 
  return (
    <div className='flex flex-col w-full'>
      {direction === "E" ? EastWest() : NorthSouth()}
      {loading ? (
        <div>Loading...</div>
      ) : arrivalsdata ? (
        (newarr().length !== 0 ? (newarr().map((arrival) => {
          return <Train arrival={arrival} color={color}/>
        })) : <div className='m-0 flex items-center justify-center text-5xl mt-28'>No trains are available homie.</div> )
      ) : (
        <div>Error fetching data</div>
      )}
      
    </div>
  )
}



// return (filters.forEach(element => {
//   switch (element) {
//     case "Arriving":
//       return (arrivalsdata.filter((arrival) => {
//         return arrival.WAITING_TIME === "Arriving"
//       }).map((arrival) => {
//         return <Train arrival={arrival} color={color}/>
//       }));
//       break;
//     case "Scheduled":
//       return (arrivalsdata.filter((arrival) => {
//         return arrival.WAITING_TIME !== "Arriving"
//       }).map((arrival) => {
//         return <Train arrival={arrival} color={color}/>
//       }));
//       break;
//     case "Northbound":
//       return (arrivalsdata.filter((arrival) => {
//         return arrival.DIRECTION === "N"
//       }).map((arrival) => {
//         return <Train arrival={arrival} color={color}/>
//       }));
//       break;
//     case "Southbound":
//       return (arrivalsdata.filter((arrival) => {
//         return arrival.DIRECTION === "S"
//       }).map((arrival) => {
//         return <Train arrival={arrival} color={color}/>
//       }));
//       break;
//     case "Eastbound":
//       return (arrivalsdata.filter((arrival) => {
//         return arrival.DIRECTION === "E"
//       }).map((arrival) => {
//         return <Train arrival={arrival} color={color}/>
//       }));
//       break;
//     case "Westbound":
//       return (arrivalsdata.filter((arrival) => {
//         return arrival.DIRECTION === "W"
//       }).map((arrival) => {
//         return <Train arrival={arrival} color={color}/>
//       }));
//       break;
//     default:
//       break;
//   }