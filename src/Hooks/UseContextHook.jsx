import React, { createContext, useState } from "react";
import Login from "../Components/Login";
import User from "../Components/User";

export const AppContext = createContext(null);

const UseContextHook = () => {
  const [userName, setUserName] = useState("");
  return (
    <div className="flex space-x-36 items-center">
      <AppContext.Provider value={{ userName, setUserName }}>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  );
};

export default UseContextHook;
