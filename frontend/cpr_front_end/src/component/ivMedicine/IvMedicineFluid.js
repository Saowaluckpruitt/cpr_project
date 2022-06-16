import React from "react";
import IvFluid from "./IvFluid";
import MedicineTake from "./MedicineTake";

export default function IvMedicineFluid() {
  return (
    <fieldset className="flex flex-shrink-0  flex-wrap justify-around">
      <MedicineTake />
      <IvFluid />
    </fieldset>
  );
}
