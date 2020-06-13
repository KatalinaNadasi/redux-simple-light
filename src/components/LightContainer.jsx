import React from "react";
import {connect} from "react-redux";

// 4- Use state passed as props in a component (mapStateToProps)
const mapStateToProps = state => ({light: state});

// 5- Change the state and dispatch it
const mapDispatchToProps = dispatch => ({
  onSwitch: () => dispatch({type: "SWITCH"})
});

const LightComponent = ({light, onSwitch}) => (<div>
  <p>{light}</p>
  <button onClick={onSwitch}>switch</button>
</div>);

// 6- Export the connection to have state and changes it
export default connect(mapStateToProps, mapDispatchToProps)(LightComponent);
