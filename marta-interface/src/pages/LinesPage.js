import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TrainList from "../components/TrainList";
import { useNavigate } from "react-router";

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
  }, [newcolor]);


  return (
    ( loading ? (<div>loading...</div>) : (
    <div className="flex flex-col">
      <div className="flex justify-around w-3/4 self-center my-3">
        <button className="w-40 bg-yellow-300 hover:bg-yellow-400 text-white font-semibold py-1 px-4 border border-yellow-800 rounded shadow"  onClick={() => {setLoading(true); setCurrentStation("all"); setNewColor("gold"); navigate("/linespage/gold")}}>Gold</button>
        <button className="w-40 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 border border-red-800 rounded shadow" onClick={() => {setLoading(true); setCurrentStation("all"); setNewColor("red"); navigate("/linespage/red")}}>Red</button>
        <button className="w-40 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 border border-blue-800 rounded shadow" onClick={() => {setLoading(true); setCurrentStation("all"); setNewColor("blue"); navigate("/linespage/blue")}}>Blue</button>
        <button className="w-40 bg-green-600 hover:bg-green-700 text-white font-semibold py-1 px-4 border border-green-800 rounded shadow" onClick={() => {setLoading(true); setCurrentStation("all"); setNewColor("green"); navigate("/linespage/green")}}>Green</button>
      </div>
      <div className="text-4xl self-center py-5 border-y-[1px] border-black w-full text-center">{newcolor.toUpperCase()}</div>
      <div className="flex">
        <Navbar stationsdata={stationsdata} loading={loading} setCurrentStation={setCurrentStation}/>
        <TrainList className="w-64" arrivalsdata={arrivalsdata} direction={direction} loading={loading} color={newcolor} currentStation={currentStation}/>
      </div>

    </div>))
  )
}
