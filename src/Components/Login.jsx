import React, { useContext } from "react";
import { AppContext } from "../Hooks/UseContextHook";

const Login = () => {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <input
        type="text"
        placeholder="Write username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
    </div>
  );
};

export default Login;