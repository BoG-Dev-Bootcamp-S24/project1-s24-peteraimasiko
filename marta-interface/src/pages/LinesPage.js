import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TrainList from "../components/TrainList";

export default function LinesPage({ color }) {
  const [direction, setDirection] = useState("");
  const [stationsdata, setStationsData] = useState(null);
  const [arrivalsdata, setArrivalsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentStation, setCurrentStation] = useState("all");


  const stationsURL = "https://midsem-bootcamp-api.onrender.com/stations/"
  const arrivalsURL = "https://midsem-bootcamp-api.onrender.com/arrivals/"
  


  async function fetchData() {
    setLoading(true)
    try {
      const result = await fetch(stationsURL + color);
      const fetchedData = await result.json();
      setStationsData(fetchedData);
      const results = await fetch(arrivalsURL + color);
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
  }, []);


  return (
    <div className="flex">

      <Navbar stationsdata={stationsdata} loading={loading} setCurrentStation={setCurrentStation}/>
      <TrainList setArrivalsData={setArrivalsData} arrivalsdata={arrivalsdata} direction={direction} loading={loading} color={color}/>


    </div>
  )
}
