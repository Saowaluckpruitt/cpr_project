import React, { useEffect, useState } from "react";
import MedicineLibrary from "./MedicineLibrary";
import MedicineDoc from "./MedicineDoc";

export default function Medicine() {
  const [currentMedicineDoc, setCurrentMedicineDoc] = useState(null);
  return (
    <>
      <MedicineLibrary setCurrentMedicineDoc={setCurrentMedicineDoc} />
      {currentMedicineDoc && <MedicineDoc medicineDoc={currentMedicineDoc} />}
    </>
  );
}
