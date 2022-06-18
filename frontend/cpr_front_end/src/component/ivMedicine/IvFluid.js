import React from "react";
import NameIv from "./NameIv";

export default function IvFluid(cprCycle) {
  return (
    <div className="bg-black opacity-90  mt-5 rounded-md -space-y-px text-white">
      <h2 className="text-white mb-5 text-center">Iv Fluid</h2>
      <NameIv iv="0.9% NaCl" cprCycle={cprCycle} />
      <NameIv iv=" 0.45%Nacl" cprCycle={cprCycle} />
      <NameIv iv="5%DNSS/2" cprCycle={cprCycle} />
      <NameIv iv=" 5%DNSSS" cprCycle={cprCycle} />
      <NameIv iv=" 0.45%DNSS" cprCycle={cprCycle} />
      <NameIv iv=" 10%DW" cprCycle={cprCycle} />
      <NameIv iv="  5%DW" cprCycle={cprCycle} />
      <NameIv iv="   Lacte Ringers" cprCycle={cprCycle} />
    </div>
  );
}
