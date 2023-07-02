import React from "react";
import { useState } from "react";

const UseStateHook = () => {
  const [value, setValue] = useState(0);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="w-full flex flex-col space-y-32">
      <span>Current Value | {value}</span>
      <div className="flex flex-row items-center justify-center space-x-20">
        <button onClick={() => setValue(value + 1)}>Inc (+)</button>
        <button onClick={() => setValue(value - 1)}>Dec (+)</button>
      </div>
      <span>Input Value is | {inputValue}</span>
      <input
        type="text"
        value={inputValue}
        placeholder="Write Something!!"
        onChange={(e) => setInputValue(e.target.value)}
        className="w-1/4 mx-auto bg-slate-100 text-center"
      />
    </div>
  );
};

export default UseStateHook;
