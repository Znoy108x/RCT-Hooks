import React, { memo } from "react";

const Child = ({ a, b }) => {
  console.log("Child Component Render!!");
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
};

export default memo(Child);
