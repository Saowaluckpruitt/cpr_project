import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto   flex justify-center  flex-wrap bg-black my-bg bgpy">
      <Link to="/cprCycle" className="buttonAnime  md:mt-50">
        Start CPR
      </Link>
    </div>
  );
}
