import React from "react";
import Pads from "./padData";

function PodBank({ state, setDisplay }) {
  const handleClick = (id) => {
    const data = Pads.find(pad => pad.button === id)
    const audio = new Audio(data.sound);
    audio.volume = state.volume;
    audio.play();
    setDisplay(data.display);
  };
  const pads = Pads.map(({ button }) => (
    <div
      className="drum-pad"
      id={button}
      key={button}
      onClick={() => handleClick(button)}
      disabled={!state.power}
    >
      {button}
    </div>
  ));
  return <div className="pad-bank">{pads}</div>;
}

export default PodBank;
