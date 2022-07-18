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
  );
}

export default App;
