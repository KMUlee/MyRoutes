import { useEffect, useState } from "react";
import { formatNumber2 } from "../../utils/functions";
// return `${formatNumber2(now.getHours())}:${formatNumber2(now.getMinutes())}:${formatNumber2(now.getSeconds())}`;

export default function SmalltimeModal() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [curTime, setCurTime] = useState(new Date());
  const getStringTimeFromDate = (date) => {
    return `${formatNumber2(date.getHours())}:${formatNumber2(date.getMinutes())}:${formatNumber2(date.getSeconds())}`;
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="w-[248px] h-[56px] bg-white rounded-full relative shadow-2xl">
      <div className="w-full h-full flex justify-around items-center px-[15px]">
        <p className="text-2xl font-bold">{days[curTime.getDay()]}</p>
        <p className="text-2xl font-bold">{getStringTimeFromDate(curTime)}</p>
        <button className="flex" onClick={() => setCurTime(new Date())}>
          <img
            src="/icons/reload.png"
            alt="current-time"
            width={32}
            height={32}
          />
        </button>
      </div>
    </div>
  );
}
