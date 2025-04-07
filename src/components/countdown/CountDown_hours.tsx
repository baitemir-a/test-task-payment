import styles from "./Countdown.module.css";
import { useState, useEffect } from 'react';

const CountdownWithHours = ({ initialTimeInSeconds }: { initialTimeInSeconds: number }) => {
  const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const formatTime = (timeInSeconds: number ) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className={styles.countdownContainer}>
      <p className={styles.countdown}>
        {hours}:{minutes}:{seconds}
      </p>
    </div>
  );
};

export default CountdownWithHours;
