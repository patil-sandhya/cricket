import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <div>
      {seconds === 0 ? (
        <p>Time's up!</p>
      ) : (
        <p>{`Countdown: ${seconds} seconds`}</p>
      )}
    </div>
  );
};

export default CountdownTimer;
