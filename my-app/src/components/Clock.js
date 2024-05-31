import { useEffect, useState } from "react";
import "./Clock.css";

export default function Clock() {
  const [clockTime, setClockTime] = useState(new Date(Date.now()));

  useEffect(() => {
    setTimeout(() => {
      setClockTime(new Date(Date.now()));
    }, 1000);
  });

  function getDigits(num) {
    return num.toString().padStart(2, "0");
  }

  return (
    <div className="clock">
      <span>
        {getDigits(clockTime.getHours())} :{getDigits(clockTime.getMinutes())} :{" "}
        {getDigits(clockTime.getSeconds())}
      </span>
    </div>
  );
}
