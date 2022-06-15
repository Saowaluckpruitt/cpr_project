import React, { useState } from "react";
import { createAdrenalineTime } from "../../service/client";

export default function AdrenalineTime() {
  const [adrenalineTimeId, setAdrenalineTimeId] = useState(null);
  const [stopTime, setStopTime] = useState(null);

  const startAdrenalineTime = async () => {
    const startTime = new Date();
    const cprCycleId = localStorage.getItem("cprCycleId");
    const adrenalineTime = await createAdrenalineTime(startTime, cprCycleId);
    console.log(adrenalineTime);
    setAdrenalineTimeId(adrenalineTime.id);
    const maxStopTime = new Date(startTime.getTime() + 3 * 60000);
    console.log(maxStopTime);
    setStopTime(maxStopTime);
  };
  const stopAdrenalineTime = async () => {
    const stopTime = new Date();
    await createAdrenalineTime(stopTime);
  };
  return (
    <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 bg-black opacity-90 border-2 border-lime">
      <div className="border-2 border-lime text-white bg-black text-center">
        <h4>Adrenaline Time</h4>
        <span>{stopTime && stopTime.toString()}</span>
      </div>
      <div className="flex justify-around mt-5 pt-10 pb-50">
        <button
          className="border-2 border-lime bg-black text-white"
          onClick={startAdrenalineTime}
        >
          Start
        </button>
        <div className="Ar-effect">
          <div className="Arcircle"> </div>
          <div className="Arcircle"></div>
          <div className="Arcircle"></div>
          <div className="Arcircle"></div>
        </div>
        <button
          className="border-2 border-lime text-white"
          onClick={stopAdrenalineTime}
        >
          Stop
        </button>
      </div>

      <div
        aria-hidden="true"
        className="bg-gradient-to-b from-transparent to-black opacity-50"
      ></div>
    </div>
  );
}
