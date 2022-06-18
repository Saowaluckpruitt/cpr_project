import React from "react";
import EtTube from "./EtTube";
import CLine from "./CLine";
import Ekg from "./Ekg";

export default function GroupEtEkgCline() {
  return (
    <div className="w-full min-h-80  aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none block mt-10 ">
      <EtTube />
      <CLine />
      <Ekg />
    </div>
  );
}
