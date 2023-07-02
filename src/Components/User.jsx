import React, { useContext } from "react";
import { AppContext } from "../Hooks/UseContextHook";

const User = () => {
  const { userName } = useContext(AppContext);
  return <div>{userName}</div>;
};

export default User;
