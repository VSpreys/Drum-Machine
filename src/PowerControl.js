function PowerControl({ state, setState, setDisplay }) {
  const handlePower = () => {
    setState({ ...state, power: !state.power });
    if (state.power) setDisplay("\u00A0");
  };
  return (
    <div className="control">
      <p>Power</p>
      <div className="select" onClick={handlePower}>
        <div
          className="inner"
          style={{ float: state.power ? "right" : "left" }}
        ></div>
      </div>
    </div>
  );
}

export default PowerControl;
