import React from 'react';
import './App.css';
import HomePage from "./Pages/HomePage";
import {Routes, Route } from "react-router-dom";
import MainPage from './Pages/MainPage';
import DanishCousine from './Pages/DanishCousine';
import Cafe from './Pages/Cafe';
import Aarhus from './Pages/Aarhus';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/Main" element={<MainPage />}/>
      <Route path="/Cousine" element={<DanishCousine />}/>
      <Route path="/Cafe" element={<Cafe />}/>
      <Route path="/Aarhus" element={<Aarhus />}/>
    </Routes>
  );
}

export default App;
