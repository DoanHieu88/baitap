// import logo from './logo.svg';
import './App.css';
import Header from './component/header.js';
import Body from './component/body';
import {useState} from "react";

function App() {  
  const [showBody, setShowBody] = useState(true);

  return (
    <div className="App">
      <Header/>
      {showBody ? (<Body/>) : null}
      <button onClick={()=>{setShowBody(!showBody)}}>toggle Body</button>
    </div>
  );
}

export default App;
