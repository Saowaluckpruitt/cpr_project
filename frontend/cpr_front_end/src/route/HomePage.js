import React from "react";
import { createCprCycle } from "../service/client";

export default function HomePage() {
  const startCpr = async () => {
    const startTime = new Date();
    const cprCycle = await createCprCycle(startTime);

    localStorage.setItem("cprCycleId", cprCycle.id);
  };
  return (
    <div className="max-w-7xl mx-auto   flex justify-center  flex-wrap">
      <button className="buttonAnime  md:mt-50" onClick={startCpr}>
        Start CPR
      </button>
    </div>
  );
}
