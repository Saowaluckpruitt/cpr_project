import React, { useState, useRef, useEffect } from "react";

export default function TimerStarCpr() {
  const Ref = useRef(null);

  const [timer, setTimer] = useState("00:00");
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
    setTimer("00:30:00");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      formatTime(e);
    }, 1000);
    Ref.current = id;
  };

  const getDateTiime = () => {
    let stopTime = new Date();
    stopTime.setSeconds(stopTime.getSeconds() + 1800);
    return stopTime;
  };

  useEffect(() => {
    clearTime(getDateTiime());
  }, []);
  const onClickStart = (e) => {
    clearTime(getDateTiime());
  };

  return (
    <div className="start border-4 border-lime text-white mx-auto text-center">
      <h2 className="my-text">{timer}</h2>
    </div>
  );
}
