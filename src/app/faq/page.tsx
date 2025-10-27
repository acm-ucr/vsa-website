"use client";
import { useState } from "react";

const FAQ = () => {
  //let count: number = 0;
  const [count, setCount] = useState(0);
  const increment = () => {
    //count += 1;
    setCount(count + 1);
    console.log("updating count", count);
  };
  return (
    <div className="">
      <p className="text-2xl font-bold">count: {count}</p>
      <button
        className="cursor-pointer border-1 border-black p-1"
        onClick={increment}
      >
        Increment Count
      </button>
    </div>
  );
};

export default FAQ;
