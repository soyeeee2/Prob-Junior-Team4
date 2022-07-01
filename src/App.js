import logo from './logo.svg';
import './App.css';
import TDcontent from './component/TDcontent';

const localOptions = [
	{ value: "seoul", name: "서울특별시" },
  { value: "incheon", name: "인천광역시" },
	{ value: "daejeon", name: "대전광역시" },
  { value: "gwangju", name: "광주광역시" },
  { value: "daegu", name: "대구광역시" },
  { value: "ulsan", name: "울산광역시" },
  { value: "busan", name: "부산광역시" }
];

const SelectBox = (props) =>{
  const handleChange = (e) => {
		// event handler
		console.log(e.target.value);
	};

  return (
    <div className='selct-wrap'>
      <select onChange={handleChange} key={"시/도"} defaultValue={"시/도"}>
        <option disabled={true} value={"시/도"}>시/도</option>
        {props.options.map( (option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}

      </select>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <nav>
        <div className='nav-con con-large'>
          <h1 className="logo">🟡로고</h1>
          <ul className="click">
            <li><a href="#!">여행지</a></li>
            <li><a href="#!">여행계획</a></li>
            <li><a href="#!">여행지추천</a></li>
            <li><a href="#!">마이페이지</a></li>
          </ul>
          <div className="navSearch">
            <input className="inputSearch" type="text"></input>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </div>  
          <ul className="login">
            <li><a href="#!">LOGIN</a></li>
            <li><a href="#!">JOIN US</a></li>
          </ul>
        </div>
        
      </nav>

      <section className='travelDestination01'>
        <div className='des-con con-small'>
          {/* 여기다 만든내용 넣어주세요 */}
          <h1>여행지</h1>
            <div className="selecLabel" >지역 선택 : </div>
            <SelectBox options={localOptions}></SelectBox>

          
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
