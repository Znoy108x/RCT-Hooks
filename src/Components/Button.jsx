import React, { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div className="flex flex-col space-y-20">
      <button onClick={() => setToggle(!toggle)}>Button from child</button>
      {toggle && <span>Toggle</span>}
    </div>
  );
});

export default Button;