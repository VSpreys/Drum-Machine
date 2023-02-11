import VolumeSlider from "./VolumeSlider"
import PowerControl from "./PowerControl"
// import SoundControl from "./SoundControl"

function ControlsContainer({ state, setState, display, setDisplay }) {
  return (
    <div className="controls-container">
      <PowerControl state={state} setState={setState} setDisplay={setDisplay} />
      <p id="display">{display}</p>
      <VolumeSlider state={state} setState={setState} setDisplay={setDisplay} />
    </div>
  );
}

export default ControlsContainer;
