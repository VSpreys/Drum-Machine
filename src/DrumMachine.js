import './DrumMachine.css';
import PodBank from './PadBank';
import React, { useState } from "react";
import ControlsContainer from './ControlsContainer';

function DrumMachine() {
  const [state, setState] = useState({
    power: true,
    soundType: 1,
    volume: "0.3",
  });
  const [display, setDisplay] = useState("\u00A0");
  return (
    <div className="inner-container" id="drum-machine">
      <PodBank state={state} setDisplay={setDisplay} />
      <div className="logo">
        <img src="/small_logo-transformed.png" alt="logo"></img>
      </div>
      <ControlsContainer
        state={state}
        setState={setState}
        display={display}
        setDisplay={setDisplay}
      />
    </div>
  );
}

export default DrumMachine;
