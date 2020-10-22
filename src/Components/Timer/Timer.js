import React, { useState } from "react";
import "./index.css";

// creating a 60 second timer using React hooks
function Timer() {
  let [seconds, setSeconds] = useState(60);
  let interval;
  //
  // this version (seconds-1) doesn't work because the seconds state variable isn't being decremented
  // each time decrementSeconds is invoked
  // const decrementSeconds = () => setSeconds(seconds-1)

  // this seems to work fine
  // const decrementSeconds = () => setSeconds(--seconds);
  // const startCountdown = () => setInterval(() => setSeconds(--seconds), 1000);

  const startCountdown = () => {
    interval = setInterval(() => setSeconds(--seconds), 1000);
  };

  // this isn't working
  const pauseCountdown = () => {
    clearInterval(interval);
  };

  return (
    <div className="timer">
      <h2>Timer</h2> <p>{seconds}</p>
      <button onClick={startCountdown}>start countdown</button>
      <button onClick={pauseCountdown}>pause countdown</button>
    </div>
  );
}

export default Timer;
