import { useState } from 'react';
import './App.css';
import LinesPage from './pages/LinesPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='linespage'>
          <Route path='gold' element={<LinesPage color={"gold"}/>}/>
          <Route path='blue' element={<LinesPage color={"blue"}/>}/>
          <Route path='green' element={<LinesPage color={"green"}/>}/>
          <Route path='red' element={<LinesPage color={"red"}/>}/>
        </Route>
        <Route path='about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
