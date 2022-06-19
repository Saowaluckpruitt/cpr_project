import React, { useState, useRef, useEffect } from "react";
import { createCprTime, updateCprTime } from "../../service/client";

export default function CprTime({ cprCycle }) {
  const Ref = useRef(null);
  const cprTimeRef = useRef();

  const [timer, setTimer] = useState("00:00:00");
  const [cprTime, setCprTime] = useState(null);

  useEffect(() => {
    const getTimerAlert = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minute = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / 1000 / 60 / 60) % 24);
      return { total, seconds, minute, hours };
    };

    const formatTime = (e) => {
      let { total, seconds, minute, hours } = getTimerAlert(e);
      if (total >= 0) {
        setTimer(
          (hours > 9 ? hours : "0" + hours) +
            ":" +
            (minute > 9 ? minute : "0" + minute) +
            ":" +
            (seconds > 9 ? seconds : "0" + seconds)
        );
      }
    };

    const clearTime = (e) => {
      setTimer("00:02:00");
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
        if (new Date() > e) {
          if (cprTimeRef.current) {
            updateCprTime(cprTimeRef.current.id, new Date());
          }
          createCprTime(cprCycle.startTime, cprCycle.id).then((cprtime) => {
            setCprTime(cprtime);
            cprTimeRef.current = cprtime;
            formatTime(cprtime.createdAt);
            clearTime(getDateTime());
          });
        } else {
          formatTime(e);
        }
      }, 1000);
      Ref.current = id;
    };

    const getDateTime = () => {
      let stopTime = new Date();
      stopTime.setSeconds(stopTime.getSeconds() + 120);
      return stopTime;
    };

    createCprTime(cprCycle.startTime, cprCycle.id).then((cprtime) => {
      setCprTime(cprtime);
      cprTimeRef.current = cprtime;
    });
    clearTime(getDateTime());
  }, [cprCycle]);

  return (
    <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 bg-black opacity-90 border-2 border-lime">
      <div className="border-2 border-lime text-white bg-black text-center">
        <h2>CPR Time</h2>
        <h2>{timer}</h2>
      </div>
      <div className="flex justify-around mt-10 mb-10 py-50">
        <div className="rythm-effect">
          <div className="circle"> </div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}
