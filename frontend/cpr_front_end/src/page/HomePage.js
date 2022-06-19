import React from "react";
import { createCprCycle } from "../service/client";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto   flex justify-center  flex-wrap bg-black">
      <button className="buttonAnime  md:mt-50">Start CPR</button>
    </div>
  );
}
