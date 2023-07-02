import React, { useEffect } from "react";
import { useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  // Use layout is called before the page is rendered
  useEffect(() => {
    console.log("useEffect");
  }, []);

  // Use Effect is called after the page is rendered
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  return <div></div>;
};

export default UseLayoutEffect;
