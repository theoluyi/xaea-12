import React from "react";
import "./App.css";
import Timer from "./Components/Timer/Timer.js";
import Things from "./Components/Things/Things.js";

//
// import Button from './Components/Button/Button.js'
// import Counter from './Components/Counter.js'

function App() {
  return (
    <div className="app">
      <Timer />
      <Things />
    </div>
  );
}

export default App;
