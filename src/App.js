import logo from './logo.svg';
import './App.css';
import TDcontent from './component/TDcontent';
import Navbar from './component/Navbar';
import SelectDropBox from './component/SelectDropBox';


function App() {
  return (
    <div className="App">
      <Navbar />

      <section className='travelDestination01'>
        <div className='des-con conSmall'>
          {/* 여기다 만든내용 넣어주세요 */}
          <h1>여행지</h1>
          <SelectDropBox />
          
          <div className='dropdown'>dropdown box 자리</div>
          <TDcontent />
          <TDcontent />
          <TDcontent />
          <TDcontent />
        </div>
      </section>
    </div>
  );
}

export default App;
