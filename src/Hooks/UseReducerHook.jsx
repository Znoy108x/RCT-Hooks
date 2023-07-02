import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1, showText: state.showText };
    case "SHOW_TEXT":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  // Use Reducer Code
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div className="flex flex-col space-y-20">
      <span>Counter | {state.count}</span>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
          dispatch({ type: "SHOW_TEXT" });
        }}
      >
        Inc (+1)
      </button>
      {state.showText && <span>Abhay wrote this amazing code!!</span>}
    </div>
  );
};
export default UseReducerHook;