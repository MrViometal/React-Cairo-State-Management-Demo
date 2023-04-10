import { createContext, useState } from "react";

export const CounterContext = createContext();

export function CounterProvider({ children }) {
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

  const handleSetCount = (value) => {
    setCount(value);
  };

  return (
    <CounterContext.Provider
      value={{
        count,
        handleIncrement,
        handleDecrement,
        handleReset,
        handleSetCount,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}
