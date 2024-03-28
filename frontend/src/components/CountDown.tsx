/** @format */

import React, { useState, useEffect } from "react";

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {timeLeft.days !== undefined && (
        <div className="flex gap-2 rounded-md">
          <div className=" flex flex-col p-3 bg-zinc-500 text-white justify-center items-center w-[45px] h-[50px] rounded-md font-bold">
            {timeLeft.days} <p className=" text-xs">Days</p>
          </div>
          <div className=" flex flex-col p-3 bg-zinc-500 text-white justify-center items-center w-[45px] h-[50px] rounded-md font-bold">
            {timeLeft.hours} <p className=" text-xs">Hours</p>
          </div>
          <div className=" flex flex-col p-3 bg-zinc-500 text-white justify-center items-center w-[45px] h-[50px] rounded-md font-bold">
            {timeLeft.minutes} <p className=" text-xs">min</p>
          </div>
          <div className=" flex flex-col p-3 bg-zinc-500 text-white justify-center items-center w-[45px] h-[50px] rounded-md font-bold">
            {timeLeft.seconds} <p className=" text-xs">sec</p>
          </div>
        </div>
      )}
    </div>
  );
};

const targetDate = new Date("2024-03-31T00:00:00Z");
const App: React.FC = () => {
  return (
    <div>
      <Countdown targetDate={targetDate} />
    </div>
  );
};

export default App;
