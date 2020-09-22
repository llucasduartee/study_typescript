import React, { useState } from "react";
import Display from "./components/display";
import Buttons from "./components/buttons";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <Display counter={counter} />
        <Buttons counter={counter} setCounter={setCounter} />
      </header>
    </div>
  );
}

export default App;
