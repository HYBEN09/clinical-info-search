import { useState, useEffect } from 'react';

type UseDebounceReturnType = {
  debouncedValue: string;
  setDebouncedValue: React.Dispatch<React.SetStateAction<string>>;
};

export const useDebounce = (value: string, delay: number): UseDebounceReturnType => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debouncedValue, setDebouncedValue };
};
