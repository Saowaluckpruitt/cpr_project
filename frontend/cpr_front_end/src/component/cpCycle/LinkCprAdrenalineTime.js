import React from "react";
import CprTime from "./CprTime";
import AdrenalineTime from "./AdrenalineTime";

export default function LinkCprAdrenalineTime() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 ">
      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8 bg-black opacity-90">
        <CprTime />
        <AdrenalineTime />

        <div className=" pb-10 pt-10 pl-36">
          <button className="border-2 border-lime bg-black text-white">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
