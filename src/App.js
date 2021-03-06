import React from "react";
import "./App.css";
import Grid from "./Components/Grid/Grid";
import Things from "./Components/Things/Things"
import Button from './Components/Button/Button.js'
import Counter from './Components/Counter.js'



// import Timer from "./Components/Timer/Timer.js";
// import Things from "./Components/Things/Things.js";
// import Form from "./Components/Form/Form.js";

// import Button from './Components/Button/Button.js'
// import Counter from './Components/Counter.js'

function App() {

  return (
    <div className="app">
      <Grid />
      <Things />
      <Button/>
      <Counter/>

    </div>
  );
}

export default App;
