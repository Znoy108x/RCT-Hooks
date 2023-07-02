import React, { useRef } from "react";
import Button from "../Components/Button";

const UseImperativeHook = () => {
  const ButtonRef = useRef();
  return (
    <div>
      <button onClick={() => ButtonRef.current.alterToggle()}>
        Button from Parent
      </button>
      <Button ref={ButtonRef} />
    </div>
  );
};

export default UseImperativeHook;