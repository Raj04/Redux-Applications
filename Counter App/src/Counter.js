import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./Actions";

export const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <p>{count}</p>
        <button type="submit" onClick={() => dispatch(increment())}>
          +
        </button>
        <button type="submit" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <button type="submit" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </>
  );
};
