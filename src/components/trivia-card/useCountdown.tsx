import { useEffect, useRef, useState } from "react";

interface props {
  startCountAt: number;
}

export const useCountdown = ({ startCountAt = 0 }: props) => {
  const [countdown, setCountdown] = useState<number>(startCountAt);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const clearIntervalId = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  };

  const resetCountdown = () => {
    setCountdown(0);
    clearIntervalId();
  };

  useEffect(() => {
    if (countdown > 0) {
      intervalId.current = setInterval(() => {
        setCountdown((countdown) => countdown - 1);
      }, 1000);
    }

    return () => clearIntervalId();
  }, [countdown]);

  return {
    countdown: countdown.toString(),
    setCountdown,
    resetCountdown,
  };
};
