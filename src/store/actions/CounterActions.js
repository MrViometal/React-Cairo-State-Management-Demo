const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const reset = () => {
  return {
    type: "RESET",
  };
};

const setCount = (count) => {
  return {
    type: "SET_COUNT",
    payload: count,
  };
};

const counterActions = {
  increment,
  decrement,
  reset,
  setCount,
};

export default counterActions;
