import React, { useReducer } from "react";
import ThemeContext from "../src/ThemeContext";
import Toolbar from "../src/Toolbar";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

function TestContext() {
  const initialState = {
    count: 0,
  };

  const initialCount = 0;

  const init = (initialCount) => {
    return { count: initialCount };
  };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return init(action.payload);
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  const stateChange = (data) => {
    dispatch({ type: data });
  };
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar sign="+" typeReceived={stateChange} />
      </ThemeContext.Provider>
      <hr></hr>
      <ThemeContext.Provider value={themes.light}>
        <Toolbar sign="-" typeReceived={stateChange} />
      </ThemeContext.Provider>
      <b style={{ margin: 50 }}>{state.count}</b>
    </div>
  );
}

export default TestContext;
