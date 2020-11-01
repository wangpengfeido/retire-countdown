import React from "react";

import "./App.scss";
import { dateFilter } from "./utils/time-utils";
import { useCurrentTime } from "./utils/hooks/useCurrentTime";

const RETIRE_TIME = new Date("2024/2/10 00:00:00.000");
const RETIRE_TIME_LUNAR = "二零二四年春节";

const App = () => {
  const currentTime = useCurrentTime();

  return (
    <div className="app">
      <div className="title">预退休倒计时</div>
      <div className="desc">
        <div>
          预计退休时间：{dateFilter(RETIRE_TIME, "YYYY-MM-dd HH:mm:ss")}
          &nbsp;&nbsp;&nbsp;&nbsp;即
          {RETIRE_TIME_LUNAR}
        </div>
        <div>当前时间：{dateFilter(currentTime, "YYYY-MM-dd HH:mm:ss")}</div>
      </div>
      <div className="countdown">10天20分</div>
    </div>
  );
};

export default App;
