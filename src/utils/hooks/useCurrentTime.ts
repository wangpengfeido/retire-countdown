import { useState } from "react";
import { useInterval } from "./useInterval";

export function useCurrentTime(updateInterval = 1000) {
  const [time, setTime] = useState(new Date());
  useInterval(() => {
    setTime(new Date());
  }, updateInterval);
  return time;
}
