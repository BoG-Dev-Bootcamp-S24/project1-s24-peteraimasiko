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
    return ( <div className='flex justify-evenly'>
       <button onClick={(e) => {buttonClicked(e); setArriving(!arriving ? true : false)}}>Arriving</button>
       <button onClick={(e) => {buttonClicked(e); setScheduled(!scheduled ? true : false)}}>Scheduled</button>
       <button id='east' onClick={(e) => {buttonClicked(e); 
         setEastBound(!eastbound ? true : false); 
         }}>Eastbound</button>
       <button id='west' onClick={(e) => {buttonClicked(e); setWestBound(!westbound ? true : false); 
       }}>Westbound</button>
     </div>)
   }
  

  function buttonClicked(e) {
    if (e.target.classList.contains("selected")) {
      // setFilters(filters.filter((value) => {
      //   return value !== e.target.innerHTML
      // }))
      e.target.classList.remove("selected")
    } else {
      // setFilters([...filters, e.target.innerHTML])
      e.target.classList.add("selected")
    }
  }

  // function NorthSouth() {
  //   return (<div className='flex justify-evenly'>
  //     <button onClick={(e) => {buttonClicked(e); setArriving(!arriving ? true : false)}}>Arriving</button>
  //     <button onClick={(e) => {buttonClicked(e); setScheduled(!scheduled ? true : false)}}>Scheduled</button>
  //     <button id='north' onClick={(e) => {buttonClicked(e); setNorthBound(!northbound ? true : false); setSouthBound(false); southButton.classList.remove("selected")}}>Northbound</button>
  //     <button id='south' onClick={(e) => {buttonClicked(e); setSouthBound(!southbound ? true : false); setNorthBound(false); northButton.classList.remove("selected")}}>Southbound</button>
  //   </div>)
  // }
 
  
  function NorthSouth() {
    return (<div className='flex justify-evenly'>
      <button onClick={(e) => {buttonClicked(e); setArriving(!arriving ? true : false)}}>Arriving</button>
      <button onClick={(e) => {buttonClicked(e); setScheduled(!scheduled ? true : false)}}>Scheduled</button>
      <button id='north' onClick={(e) => {buttonClicked(e); setNorthBound(!northbound ? true : false); }}>Northbound</button>
      <button id='south' onClick={(e) => {buttonClicked(e); setSouthBound(!southbound ? true : false); }}>Southbound</button>
    </div>)
  }
 


  // useEffect(() => {
  //   if (filters.length !== 0) {
  //     filters.forEach((value) => {
  //       switch (value) {
  //         case "Arriving":
  //           // return (arrivalsdata.filter((arrival) => {
  //           //   return arrival.WAITING_TIME === "Arriving"
  //           // }).map((arrival) => {
  //           //   return <Train arrival={arrival} color={color}/>
  //           // }));
  //           setArrivalsData(arrivalsdata.filter((arrival) => {
  //               return arrival.WAITING_TIME === "Arriving"
  //           }))
  //           break;
  //         case "Scheduled":
  //           setArrivalsData(arrivalsdata.filter((arrival) => {
  //             return arrival.WAITING_TIME !== "Arriving"
  //           }));
  //           break;
  //         case "Northbound":
  //           setArrivalsData(arrivalsdata.filter((arrival) => {
  //             return arrival.DIRECTION === "N"
  //           }));
  //           break;
  //         case "Southbound":
  //           setArrivalsData(arrivalsdata.filter((arrival) => {
  //             return arrival.DIRECTION === "S"
  //           }));
  //           break;
  //         case "Eastbound":
  //           setArrivalsData(arrivalsdata.filter((arrival) => {
  //             return arrival.DIRECTION === "E"
  //           }));
  //           break;
  //         case "Westbound":
  //           setArrivalsData(arrivalsdata.filter((arrival) => {
  //             return arrival.DIRECTION === "W"
  //           }));
  //           break;
  //         default:
  //           break;
  //       }
  //     })
  //   } else {
  //     setArrivalsData(totalArrivalData)
  //   }
    
  // }, [filters])
  return (
    <div className='flex flex-col w-full'>
      {direction === "E" ? EastWest() : NorthSouth()}
      {loading ? (
        <div>Loading...</div>
      ) : arrivalsdata ? (
        arrivalsdata.filter((arrival) => {
          return ((!arriving || scheduled) || arrival.WAITING_TIME === "Arriving") &&
          ((!scheduled || arriving) || arrival.WAITING_TIME !== "Arriving" ) &&
          ((!eastbound || westbound) || arrival.DIRECTION === "E") &&
          ((!westbound || eastbound) || arrival.DIRECTION === "W") &&
          ((!northbound || southbound) || arrival.DIRECTION === "N") &&
          ((!southbound || northbound)|| arrival.DIRECTION === "S")
        }).filter((arrival) => {
          if (currentStation !== "all") {
            return arrival.STATION.includes(currentStation.toUpperCase())
          } else {
            return true;
          }
          
        }).map((arrival) => {
          return <Train arrival={arrival} color={color}/>
        })
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