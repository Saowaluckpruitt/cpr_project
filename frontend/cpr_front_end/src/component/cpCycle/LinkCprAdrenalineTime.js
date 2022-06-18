import React, { useState, useEffect } from "react";
import { createCprCycle } from "../../service/client";
import CprTime from "./CprTime";
import AdrenalineTime from "./AdrenalineTime";
import TimerStarCpr from "../Timer/TimerStarCpr";
import GroupEtEkgCline from "../groupEtEkgCline/GroupEtEkgCline";
import IvMedicineFluid from "../ivMedicine/IvMedicineFluid";
import Medicine from "../medicineDoc/Medicine";

export default function LinkCprAdrenalineTime() {
  const [cprCycle, setCprCylcle] = useState(null);
  useEffect(() => {
    if (!cprCycle) {
      const startTime = new Date();
      const cprCycle = createCprCycle(startTime).then((el) => setCprCylcle(el));
    }
  });

  if (!cprCycle) {
    return <></>;
  }
  return (
    <>
      <div className="max-w-7xl mx-auto   sm:py-24 sm:px-6 lg:px-8 my-bg bgpy ">
        <button
          type="button"
          className="flex items-center justify-center mt-1 mr-1 px-6 py-4 float-right	
          border border-transparent shadow-sm text-base font-medium    text-black bg-lime hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Done
          <svg
            className="ml-3 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </button>
        <TimerStarCpr />
        <div className="mt-20 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8 ">
          <CprTime cprCycle={cprCycle} />
          <AdrenalineTime cprCycle={cprCycle} />
        </div>
      </div>
      <GroupEtEkgCline cprCycle={cprCycle} />
      <IvMedicineFluid cprCycle={cprCycle} />
      <Medicine cprCycle={cprCycle} />
    </>
  );
}
