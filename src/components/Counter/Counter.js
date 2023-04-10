import React, { useState, useRef } from "react";
import "./counter.css";

function Counter({
  type,
  count,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleSetCount,
  inputRef,
}) {
  return (
    <div className="counter">
      <h1>Counter ({type})</h1>
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

export default Counter;
