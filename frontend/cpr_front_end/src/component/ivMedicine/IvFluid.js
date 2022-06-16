import React from "react";
import NameIv from "./NameIv";

export default function IvFluid() {
  return (
    <div className="bg-black opacity-90  mt-5 rounded-md -space-y-px text-white">
      <h2 className="text-white mb-5 text-center">Iv Fluid</h2>
      <NameIv iv="0.9% NaCl" />
      <NameIv iv=" 0.45%Nacl" />
      <NameIv iv="5%DNSS/2" />
      <NameIv iv=" 5%DNSSS" />
      <NameIv iv=" 0.45%DNSS" />
      <NameIv iv=" 10%DW" />
      <NameIv iv="  5%DW" />
      <NameIv iv="   Lacte Ringers" />
    </div>
  );
}
