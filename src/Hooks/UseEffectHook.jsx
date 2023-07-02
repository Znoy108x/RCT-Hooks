import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const UseReducerHook = () => {
  const [data, setData] = useState([]);
  const API1 = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    setData(data);
  };

  useEffect(() => {
    API1();
    console.log("Hello abhay!!");
  }, []);
  return (
    <div className="flex flex-wrap gap-y-10 overflow-x-hidden overflow-y-scroll gap-x-9">
      {data.length > 0 && data.map((item) => <img src={item.thumbnailUrl} className="h-20 w-20"/>)}
    </div>
  );
};
export default UseReducerHook;