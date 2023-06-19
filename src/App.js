import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

import { Calc } from './Components/Calc';

function App() {

  const [inp, setInp] = useState("");
  const [showChild, setShowChild] = useState(false);

  const handleChange = (e)=>{
    setInp(e.target.value);
    setShowChild(false);
  };

  const handleBtnClick = () =>{
    setShowChild(true);
  };

  return (
    <div className="p-5">
      <div className="bg-success-subtle rounded mx-auto text-center p-4 shadow mb-5" style={{height:"300px", width:"350px"}}>
        <h2 className="fw-bold">Age Calculator</h2>
        <label for="date" className="p-3">Enter your date of birth</label><br/>

        <input type="date" id="date" onChange={handleChange} /><br/><br/>

        <button className="btn btn-primary" onClick={handleBtnClick}>Calculate Age</button>

        <div>
          {showChild && <Calc inp={inp} />}
        </div>

      </div>
    </div>
  );
}

export default App;