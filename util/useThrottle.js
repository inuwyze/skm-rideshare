import { useState, useEffect } from 'react';

const useThrottle = (value, delay) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const [lastTriggeredTime, setLastTriggeredTime] = useState(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      const now = Date.now();
      if (now - lastTriggeredTime >= delay) {
        setThrottledValue(value);
        setLastTriggeredTime(now);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay, lastTriggeredTime]);

  return throttledValue;
};
export default useThrottle;