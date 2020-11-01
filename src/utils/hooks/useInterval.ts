import { useEffect, useRef } from "react";

export function useInterval(callback: Function, time?: number) {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    const timer = setInterval(tick, time);
    return () => {
      clearInterval(timer);
    };
  }, [time]);
}

