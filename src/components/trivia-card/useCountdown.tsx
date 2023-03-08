import { useEffect, useRef, useState, useCallback } from "react";

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

  const resetCountdown = useCallback(() => {
    setCountdown(0);
    clearIntervalId();
  }, []);

  const handleSetCountdown = useCallback((countdown: number) => {
    setCountdown(countdown);
  }, []);

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
    setCountdown: handleSetCountdown,
    resetCountdown,
  };
};
