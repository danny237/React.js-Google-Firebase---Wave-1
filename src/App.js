import React from 'react';
import './App.css';
import Home from "./Home"

function App(){
  const names = {
    first: "Sangam",
    second: "Amrit"
  }
  
  return (
    <div>
      {1?<Home name={names}/>: "Hello World"}
    </div>
  )
}

export default App;