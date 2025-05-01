import { useState, useMemo } from "react";

const date = new Date();
export const hours = date.getHours();
export const minutes = date.getMinutes();
export const seconds = date.getSeconds();

const DigitalClock = () => {
  const [hour, setHour] = useState(hours);
  const [minute, setMinute] = useState(minutes);
  const [second, setSeconds] = useState(seconds);

  useMemo(() => {
    setInterval(() => {
      setSeconds((prev) => {
        if (prev === 59) {
          setMinute((prev) => {
            if (prev === 59) {
              setHour((prev) => {
                if (prev === 23) {
                  return 0;
                }
                return prev + 1;
              });
              return 0;
            }
            return prev + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
  }, [setSeconds]);

  return (
    <div className="mx-auto flex w-8/12 items-center justify-center rounded-xl bg-amber-600 p-4">
      <div className="px-2 py-4">
        <p className="text-3xl">
          {hour < 10 && "0"}
          {hour}
        </p>
      </div>
      <p className="text-3xl">:</p>
      <div className="px-2 py-4">
        <p className="text-3xl">
          {minute < 10 && "0"}
          {minute}
        </p>
      </div>
      <p className="text-3xl">:</p>
      <div className="px-2 py-4">
        <p className="text-3xl">
          {second < 10 && "0"}
          {second}
        </p>
      </div>
    </div>
  );
};

export default DigitalClock;
