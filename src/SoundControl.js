function SoundControl({ state, setState, setDisplay }) {
  const handleSoundType = () => {
      setState({ ...state, soundType: state.soundType === 1 ? 2 : 1 });
      setDisplay(state.soundType === 1 ? "Smooth Piano Kit" : "Heater Kit");
    };
  return (
    <div class="sound-mode">
      <div class="control">
        <p>Bank</p>
        <div class="select" onClick={handleSoundType} disabled={!state.power}>
          <div
            class="inner"
            style={{ float: state.soundType === 1 ? "left" : "right" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default SoundControl;
