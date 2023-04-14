import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BY_AMOUNT_INCREMENT,
  DECREMENT,
  INCREMENT,
} from "../../constants/counter";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  const incrementValue = Number(incrementAmount) || 0;
  console.log("count", count);
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch({ type: DECREMENT })}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch({ type: INCREMENT })}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch({ type: BY_AMOUNT_INCREMENT, payload: incrementAmount })
          }
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
