import React from "react";

export default function CprTime() {
  return (
    <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 bg-black opacity-90 border-2 border-lime">
      <div className="border-2 border-lime text-white bg-black text-center">
        <h4>CPR Time</h4>
        <span>Show time</span>
      </div>
      <div className="flex justify-around mt-5 py-50">
        <button className="border-2 border-lime bg-black text-white">
          Start
        </button>
        <div className="rythm-effect">
          <div className="circle"> </div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <button className="border-2 border-lime text-white">Stop</button>
      </div>
      <div className=" pb-10 pt-10 pl-36">
        <span className="border-2 border-lime bg-black text-white">
          Check Pulse
        </span>
      </div>
      <div
        aria-hidden="true"
        className="bg-gradient-to-b from-transparent to-black opacity-50"
      ></div>
    </div>
  );
}
