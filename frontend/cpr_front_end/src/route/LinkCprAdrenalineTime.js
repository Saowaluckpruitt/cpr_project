import React from "react";

export default function LinkCprAdrenalineTime() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 ">
      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8 bg-black opacity-90">
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
        <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 bg-black opacity-90 border-2 border-lime">
          <div className="border-2 border-lime text-white bg-black text-center">
            <h4>Adrenaline Time</h4>
            <span>Show time</span>
          </div>
          <div className="flex justify-around mt-5 pt-10 pb-50">
            <button className="border-2 border-lime bg-black text-white">
              Start
            </button>
            <div className="Ar-effect">
              <div className="Arcircle"> </div>
              <div className="Arcircle"></div>
              <div className="Arcircle"></div>
              <div className="Arcircle"></div>
            </div>
            <button className="border-2 border-lime text-white">Stop</button>
          </div>

          <div
            aria-hidden="true"
            className="bg-gradient-to-b from-transparent to-black opacity-50"
          ></div>
        </div>
        <div className=" pb-10 pt-10 pl-36">
          <button className="border-2 border-lime bg-black text-white">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
