function PowerControl({ state, setState, setDisplay }) {
  const handlePower = () => {
    setState({ ...state, power: !state.power });
    if (state.power) setDisplay("\u00A0");
  };
  return (
      <div class="control">
        <p>Power</p>
        <div class="select" onClick={handlePower}>
          <div
            class="inner"
            style={{ float: state.power ? "right" : "left" }}
          ></div>
        </div>
      </div>
  );
}

export default PowerControl;
