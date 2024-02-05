import { useState } from "react";
import styles from "./counter.module.css";

/**
 * Quiz between two teams
 *
 * Team A
 * Team B
 *
 * Team A Score
 * Team B Score
 */

export function Score(props: {
  teamName: string;
  counterName: "Score" | "Goals";
}) {
  console.log("style", styles);
  const [count, setCount] = useState(10);

  const increaseCountBy1 = () => {
    setCount(count + 1);
  };

  const decreaseCountBy1 = () => {
    if (count != 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  const resetCountTo0 = () => {
    setCount(0);
  };

  return (
    <div className={styles["counter-container"]}>
      <h1>
        {props.teamName}: {props.counterName}
      </h1>

      <div className={styles["count-container"]}>
        <p>{count}</p>
      </div>

      <div className={styles.btn_container}>
        <button onClick={increaseCountBy1}>+1</button>
        <button onClick={decreaseCountBy1}>-1</button>
        <button onClick={resetCountTo0}>0</button>
      </div>
    </div>
  );
}

export function ScoreB() {
  const [count, setCount] = useState(10);

  const increaseCountBy1 = () => {
    setCount(count + 1);
  };

  const decreaseCountBy1 = () => {
    setCount(count - 1);
  };

  const resetCountTo0 = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>TEAM B: SCORE</h1>

      <div>
        <p>{count}</p>
      </div>

      <div>
        <button onClick={increaseCountBy1}>+1</button>
        <button onClick={decreaseCountBy1}>-1</button>
        <button onClick={resetCountTo0}>0</button>
      </div>
    </div>
  );
}
