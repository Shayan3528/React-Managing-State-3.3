import { useState } from "react";
export default function Panel() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += "hover";
  }
  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <div className = " resultDiv">
        <h1>{score}</h1>
        <button onClick={() => setScore(score + 1)}> Add One</button>
      </div>
    </div>
  );
}
