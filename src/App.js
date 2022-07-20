<<<<<<< HEAD
import './App.css';
import TDcontent from './component/TDcontent';
import Navbar from './component/Navbar';
import SelectDropBox from './component/SelectDropBox';
import SortDropBox from './component/SortDropBox';

function App() {
  return (
    <div className="App">
      <Navbar />

      <section className='travelDestination01'>
        <div className='des-con conSmall'>
          <h1>여행지</h1>
          <SelectDropBox />
          
          <SortDropBox />
          <TDcontent />
          <TDcontent />
          <TDcontent />
          <TDcontent />
        </div>
      </section>
    </div>
=======
import React from "react";
import AppRouter from "./components/Router";

function App() {
  return (
    <AppRouter></AppRouter>
>>>>>>> b8c1bf3946d6cb3cd58fb22a315b10396440b263
  );
}

export default App;
