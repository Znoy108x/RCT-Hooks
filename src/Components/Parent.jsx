import React, { useState, useCallback } from "react";
import Child from "./Child";

const Parent = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState([]);

  const DumDumFunc = useCallback(() => {
    console.log("Hello Abhay Bisht!!!");
  }, count2);

  return (
    <div>
      <Child a={count2} b={DumDumFunc} />
      <button onClick={() => setCount1(count1 + 1)}>Increment {count1}</button>
    </div>
  );
};

export default Parent;
