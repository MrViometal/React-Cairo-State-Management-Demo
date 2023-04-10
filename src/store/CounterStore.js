import { configureStore } from "@reduxjs/toolkit";

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

const initialState = {
  count: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    case "SET_COUNT":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export const CounterStore = configureStore({
  reducer: CounterReducer,
});

export const counterActions = {
  increment,
  decrement,
  reset,
  setCount,
};
