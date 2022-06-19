import React from "react";
import EtTube from "./EtTube";
import CLine from "./CLine";
import Ekg from "./Ekg";

export default function GroupEtEkgCline({ cprCycle }) {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8  my-bg1">
      <EtTube cprCycle={cprCycle} />
      <CLine cprCycle={cprCycle} />
      <Ekg cprCycle={cprCycle} />
    </div>
  );
}
