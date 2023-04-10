import React, { useState, useRef } from "react";
import Counter from "./Counter/Counter";

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
    <Counter
      type="useState"
      inputRef={inputRef}
      count={count}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
      handleSetCount={handleSetCount}
    />
  );
}

export default NormalCounter;
