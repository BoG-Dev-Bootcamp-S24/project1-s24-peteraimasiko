import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TrainList from "../components/TrainList";
import { useNavigate } from "react-router";
import cat from "../happy-cat-happy-happy-cat.gif"

export default function LinesPage({ color }) {
  const [direction, setDirection] = useState("");
  const [stationsdata, setStationsData] = useState(null);
  const [arrivalsdata, setArrivalsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentStation, setCurrentStation] = useState("all");
  const [newcolor, setNewColor] = useState(color)

  const stationsURL = "https://midsem-bootcamp-api.onrender.com/stations/"
  const arrivalsURL = "https://midsem-bootcamp-api.onrender.com/arrivals/"
  

  const navigate = useNavigate();



  // setTimeout(() => {
  //   responsiveFetchData()
  //   console.log(100)
  // }, 60000)

  // async function responsiveFetchData() {
  //   try {
  //     const result = await fetch(stationsURL + newcolor);
  //     const fetchedData = await result.json();
  //     setStationsData(fetchedData);
  //     const results = await fetch(arrivalsURL + newcolor);
  //     const fetchedDatas = await results.json();
  //     setArrivalsData(fetchedDatas);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }


  async function fetchData() {
    setLoading(true)
    try {
      const result = await fetch(stationsURL + newcolor);
      const fetchedData = await result.json();
      setStationsData(fetchedData);
      const results = await fetch(arrivalsURL + newcolor);
      const fetchedDatas = await results.json();
      setArrivalsData(fetchedDatas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false)
  }

  useEffect( () => {
    fetchData()
    if (color === "green" || color === "blue") {
      setDirection("E")
    } else {
      setDirection("N")
    }
    console.log(newcolor);
    console.log(100)
  }, [newcolor]);


  return (
    ( loading && stationsdata === null ? (<div className="flex flex-col"><p>loading...</p>
    
    </div>) : (
    <div className="flex flex-col">
      <div className="flex justify-around w-3/4 self-center my-4">
        <button className={newcolor === "gold" ? "gold w-40" : "sucks"}  onClick={(e) => {
          if (newcolor !== "gold") {
          setLoading(true); 
          setCurrentStation("all"); 
          setNewColor("gold"); 
          navigate("/linespage/gold")
          }
          }}>Gold</button>
        <button className={newcolor === "red" ? "red w-40" : "sucks"} onClick={(e) => {
          if (newcolor !== "red") {
          setLoading(true); 
          setCurrentStation("all"); 
          setNewColor("red"); 
          navigate("/linespage/red")
          }
          }}>Red</button>
        <button className={newcolor === "blue" ? "blue w-40" : "sucks"} onClick={(e) => {
          if (newcolor !== "blue") {
          setLoading(true); 
          setCurrentStation("all"); 
          setNewColor("blue"); 
          navigate("/linespage/blue")
          }
          }}>Blue</button>
        <button className={newcolor === "green" ? "green w-40" : "sucks"} onClick={(e) => {
          if (newcolor !== "green") {
          setLoading(true); 
          setCurrentStation("all"); 
          setNewColor("green"); 
          navigate("/linespage/green")
          }
          }}>Green</button>
      </div>
      <div className="text-4xl self-center py-5 border-y-[2px] border-black w-full text-center">{newcolor.toUpperCase()}</div>
      {(loading ? (<div className="m-auto mt-24 text-7xl flex flex-col items-center">loading...
      <div className="flex">
      <img className="w-32 h-fit" src={cat}></img>
      <img className="w-24 h-fit"src={cat}></img>
      <img src={cat}></img>
      <img className="w-24 h-fit" src={cat}></img>    
      <img className="w-32 h-fit" src={cat}></img>
    </div></div>) : (
        <div className="flex">
        <Navbar className="h-10" stationsdata={stationsdata} loading={loading} setCurrentStation={setCurrentStation}/>
        <TrainList className="w-64" arrivalsdata={arrivalsdata} direction={direction} loading={loading} color={newcolor} currentStation={currentStation}/>
      </div>
      ))}
      

    </div>))
  )
}
