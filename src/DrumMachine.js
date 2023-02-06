import './DrumMachine.css';
import PodBank from './PadBank';
import ControlsContainer from './ControlsContainer';

function DrumMachine() {
  return (
    <div class="inner-container" id="drum-machine">
      <PodBank />
      <div class="logo">
        <img src="/small_logo-transformed.png" alt="logo"></img>
      </div>
      <ControlsContainer />
    </div>
  );
}

export default DrumMachine;
