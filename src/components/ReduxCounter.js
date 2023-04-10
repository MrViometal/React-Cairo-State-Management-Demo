import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import counterActions from "../store/actions/CounterActions";
import Counter from "./Counter/Counter";

function ReduxCounter() {
  const inputRef = useRef();
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleReset = () => {
    dispatch(counterActions.reset());
  };

  const handleSetCount = () => {
    const inputCount = parseInt(inputRef.current.value);
    dispatch(counterActions.setCount(inputCount));
  };

  return (
    <Counter
      type="Redux"
      inputRef={inputRef}
      count={count}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
      handleSetCount={handleSetCount}
    />
  );
}

export default ReduxCounter;
