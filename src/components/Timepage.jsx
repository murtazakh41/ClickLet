import React, { useEffect, useState } from "react";

const Timepage = () => {
  const [time, setTime] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            } else {
              hours = 23;

              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const boxStyle =
    "bg-white p-4 rounded-xl shadow-md w-24 text-center";

  return (
    <div className="py-10 text-center bg-gray-100 rounded-lg mt-10">
      <h3 className="text-3xl font-bold mb-3">Flash Sale Starts Now</h3>
      <p className="text-gray-600">
        5% off selected items with code: <b>FLASH5</b>
      </p>

      <div className="mt-6 flex justify-center gap-6 flex-wrap">
        <div className={boxStyle}>
          <h1 className="text-4xl font-bold">
            {time.days.toString().padStart(2, "0")}
          </h1>
          <p>Days</p>
        </div>

        <div className={boxStyle}>
          <h1 className="text-4xl font-bold">
            {time.hours.toString().padStart(2, "0")}
          </h1>
          <p>Hours</p>
        </div>

        <div className={boxStyle}>
          <h1 className="text-4xl font-bold">
            {time.minutes.toString().padStart(2, "0")}
          </h1>
          <p>Minutes</p>
        </div>

        <div className={boxStyle}>
          <h1 className="text-4xl font-bold text-red-500">
            {time.seconds.toString().padStart(2, "0")}
          </h1>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Timepage;