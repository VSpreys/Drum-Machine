import Pads from "./padData";

function PodBank() {
    const pads = Pads.map(({ button, sound1, sound2 }) => (
      <div className="drum-pad" id={button}>
        {button}
      </div>
    ));
    return (
        <div class="pad-bank">{pads}</div>
    );
}

export default PodBank;
