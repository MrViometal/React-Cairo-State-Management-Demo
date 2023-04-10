import React, { useContext, useRef } from "react";
import { CounterContext } from "../context/CounterContext";
import Counter from "./Counter/Counter";

function ContextCounter() {
  const inputRef = useRef();
  const {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
    handleSetCount,
  } = useContext(CounterContext);

  const onSetCount = () => {
    const countInput = parseInt(inputRef.current.value);
    handleSetCount(countInput);
  };

  return (
    <Counter
      type="useContext"
      inputRef={inputRef}
      count={count}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
      handleSetCount={onSetCount}
    />
  );
}

export default ContextCounter;
