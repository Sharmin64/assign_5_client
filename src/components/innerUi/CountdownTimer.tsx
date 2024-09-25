import React, { useState, useEffect } from "react";
import { calculateTimeLeft } from "../../logics/countDown";

interface CountdownTimerProps {
  timeSlot: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeSlot }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(timeSlot));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(timeSlot));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeSlot]);

  if (!timeLeft) return <span>Slot time passed!</span>;

  return (
    <div>
      <p>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </p>
    </div>
  );
};

export default CountdownTimer;
