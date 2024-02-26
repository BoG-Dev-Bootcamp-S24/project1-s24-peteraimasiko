import { useState } from 'react';
import './App.css';
import LinesPage from './pages/LinesPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from './pages/FrontPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FrontPage/>} />
        <Route path='linespage'>
          <Route path='gold' element={<LinesPage color={"gold"}/>}/>
          <Route path='blue' element={<LinesPage color={"blue"}/>}/>
          <Route path='green' element={<LinesPage color={"green"}/>}/>
          <Route path='red' element={<LinesPage color={"red"}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
