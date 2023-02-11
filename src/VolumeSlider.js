function VolumeSlider({ state, setState, display, setDisplay }) {
    const handleVolume = (event) => {
        setState({ ...state, volume: event.target.value });
        setDisplay(`Volume: ${parseInt(parseFloat(event.target.value) * 100)}`);
        setTimeout(() => {
            setDisplay("\u00A0");
        }, 1500);
  };
  return (
    <div class="volume-slider">
          <input max="1" min="0" step="0.01" type="range" value={ state.volume } onChange={handleVolume} disabled={!state.power}></input>
    </div>
  );
}

export default VolumeSlider;
