import React from 'react';
import Home from "./Home/Home"
import { State } from './redux/utils';
import { useSelector } from 'react-redux';
import Particles from "./Config/Particles";
import Starter from './Starter/Starter';
import './App.css';

function App() {

  const started = useSelector( (state: State) => state.started)

  return (
    <div id='main-div'>
      <Particles/>
      <div id="sec_div">
        {started ? <Home/> : <Starter/>}
      </div>

    </div>
  );
}

export default App;
