import './DrumMachine.css';
import PodBank from './PadBank';

function DrumMachine() {
  return (
    <div class="inner-container" id="drum-machine">
      <PodBank />
      <div class="logo">
        <img src="/small_logo-transformed.png" alt="logo"></img>
      </div>
    </div>
  );
}

export default DrumMachine;
