import React from "react";

import "./App.scss";
import { dateFilter, timestampToDays } from "./utils/time-utils";
import { fillLeft } from "./utils/fill-left";
import { useCurrentTime } from "./utils/hooks/useCurrentTime";

const RETIRE_TIME = new Date("2024/2/10 00:00:00.000");
const RETIRE_TIME_LUNAR = "二零二四年春节";

const App = () => {
  const currentTime = useCurrentTime(10);

  const remainingTime = RETIRE_TIME.getTime() - currentTime.getTime();
  const formattedRemainingTime = timestampToDays(remainingTime);

  return (
    <div className="app">
      <div className="title">预退休倒计时</div>
      <div className="retire-time">
        <div className="retire-time-solar">
          预退休时间：{dateFilter(RETIRE_TIME, "YYYY-MM-dd HH:mm:ss")}
        </div>
        <div className="retire-time-lunar">即{RETIRE_TIME_LUNAR}</div>
      </div>
      <div className="current-time">
        当前时间：{dateFilter(currentTime, "YYYY-MM-dd HH:mm:ss")}
      </div>
      <div className="countdown">
        {remainingTime > 0 ? (
          <>
            <div>{`${fillLeft(formattedRemainingTime.days, 4)}天${fillLeft(
              formattedRemainingTime.hours,
              2
            )}小时`}</div>
            <div>{`${fillLeft(formattedRemainingTime.minutes, 2)}分钟${fillLeft(
              formattedRemainingTime.seconds,
              2
            )}秒${fillLeft(formattedRemainingTime.milliseconds, 3)}毫秒`}</div>
          </>
        ) : (
          "可以退休啦！！！"
        )}
      </div>
    </div>
  );
};

export default App;

