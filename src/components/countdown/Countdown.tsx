import { useState, useEffect } from "react";

import styles from "./Countdown.module.css";

const Countdown = ({ minutes }: { minutes: number }) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setTimeLeft(minutes * 60);
  }, [minutes]);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft <= 0) {
      setIsActive(false);
    }

    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60); 
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")} мин : ${String(
      seconds
    ).padStart(2, "0")} сек`;
  };

  return (
    <div className={`${styles.countdown}`}>
      <p>{formatTime(timeLeft)}</p>
    </div>
  );
};

export default Countdown;
