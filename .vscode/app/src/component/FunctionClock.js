import React, { useState } from "react";
import { useEffect } from "react";

export default function FunctionClock() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {});

  useEffect(() => {
    console.log("com");
    const timerId = setInterval(tick, 1000);
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <h1>It is {date.toLocaleTimeString()}.</h1>
    </div>
  );
}
