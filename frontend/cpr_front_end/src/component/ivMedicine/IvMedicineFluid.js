import React from "react";
import IvFluid from "./IvFluid";
import MedicineTake from "./MedicineTake";

export default function IvMedicineFluid({ cprCycle }) {
  return (
    <fieldset className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-shrink-0  flex-wrap justify-around my-bg4">
      <MedicineTake cprCycle={cprCycle} />
      <IvFluid cprCycle={cprCycle} />
    </fieldset>
  );
}
