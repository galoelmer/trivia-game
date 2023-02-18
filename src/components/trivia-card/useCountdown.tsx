import { useEffect, useState } from "react";

interface props {
  startCountdown: number;
}

export const useCountdown = ({ startCountdown = 0 }: props) => {
  const [timeLeft, setTimeLeft] = useState<number>(startCountdown);

  const stopCountdown = () => setTimeLeft(0);
  const resetCountdown = () => setTimeLeft(startCountdown);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  return {
    timeLeft: timeLeft.toString(),
    stopCountdown,
    resetCountdown,
  };
};
