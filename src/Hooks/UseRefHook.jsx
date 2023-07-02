import React from "react";
import { useRef, useState } from "react";

const UseRefHook = () => {
  const ref1 = useRef();
  const [val, setVal] = useState("");
  return (
    <div>
      <h1 ref={ref1}>Name | </h1>
      <input
        type="text"
        placeholder="enter the name!"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        onClick={() => {
          ref1.current.innerHTML = "Hello | " + val;
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default UseRefHook;