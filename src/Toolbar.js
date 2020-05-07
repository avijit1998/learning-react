import React, { props, useContext } from "react";
import ThemeContext from "../src/ThemeContext";
function Toolbar(props) {
  const theme = useContext(ThemeContext);

  const sendType = () => {
    const type = props.sign == "+" ? "increment" : "decrement";
    props.typeReceived(type);
  };

  return (
    <div>
      <button
        style={{ background: theme.background, color: theme.foreground }}
        onClick={sendType}
      >
        {props.sign}
      </button>
    </div>
  );
}

export default Toolbar;
