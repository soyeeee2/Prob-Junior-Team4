import React from 'react';
import '../styles/App.css';
import TDcontent from '../components/TDcontent';
import Navbar from '../components/Navbar';
import SortDropBox from '../components/SortDropBox';
import TDheader from '../components/TDheader';
import SelectDropBox from '../components/SelectDropBox';

function TDhome() {
  return (
    <div className="TDhome">
      <Navbar />
      <section className='travelDestination01'>
        <TDheader />
        <div className="SelectBox conSmall">
          <SelectDropBox />
          <ul className="TagBox">
          <li>페스티벌</li>
          <li>힐링</li>
          <li>박물관&#38;미술관</li>
          <li>액티비티</li>
          <li>가족여행</li>
          <li>드라마&#38;영화 촬영지</li>
          </ul>
        </div>
        <div className='conSmall'>
          <SortDropBox />
          <TDcontent />
          <TDcontent />
          <TDcontent />
          <TDcontent />
        </div>
      </section>
    </div>
  );
}

export default TDhome;