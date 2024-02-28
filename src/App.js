import { useState } from 'react';
import './App.css';
import TextField from './compoents/TextField';


function App() {
  const[mode,setMode]=useState({
    color:'black',
    backgroundColor:'white'
  });

  const darkmode =()=>{
    if(mode.color==='white'){
      setMode({
        color:'black',
        backgroundColor:'white'
      });
    
    }else{
      setMode({
        color:'white',
        backgroundColor:'black'
      });
    
    }
  }
 
  return (

      <div style={mode}>
        <h1 className="mb-3 text-center rounded-2" id='textutils'>TextUtils</h1>
            <div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" onClick={darkmode} role="switch" id="flexSwitchCheckDefault"/>
                <label class="form-check-label" for="flexSwitchCheckDefault">Enable dark mode</label>
              </div>
              <TextField heading="Enter your text here"/> 
            </div>
        </div>
   
  );
}

export default App;
