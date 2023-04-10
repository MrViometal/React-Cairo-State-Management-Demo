import React, { useState, useRef } from "react";
import "./counter.css";

function NormalCounter() {
  const inputRef = useRef();
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleSetCount = () => {
    const inputCount = parseInt(inputRef.current.value);
    setCount(inputCount);
  };

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <div className="count">{count}</div>
      <div className="buttons">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="set">
        <input type="number" ref={inputRef} />
        <button onClick={handleSetCount}>Set</button>
      </div>
    </div>
  );
}

export default NormalCounter;
