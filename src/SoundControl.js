function SoundControl({ state, setState, setDisplay }) {
  const handleSoundType = () => {
      setState({ ...state, soundType: state.soundType === 1 ? 2 : 1 });
      setDisplay(state.soundType === 1 ? "Smooth Piano Kit" : "Heater Kit");
    };
  return (
    <div className="sound-mode">
      <div className="control">
        <p>Bank</p>
        <div
          className="select"
          onClick={handleSoundType}
          disabled={!state.power}
        >
          <div
            className="inner"
            style={{ float: state.soundType === 1 ? "left" : "right" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default SoundControl;
