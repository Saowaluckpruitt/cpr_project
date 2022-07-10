import React, { useEffect, useState } from "react";
import MedicineLibrary from "./MedicineLibrary";
import MedicineDoc from "./MedicineDoc";

export default function Medicine({ cprCycle }) {
  const [currentMedicineDoc, setCurrentMedicineDoc] = useState(null);
  return (
    <>
      <MedicineLibrary setCurrentMedicineDoc={setCurrentMedicineDoc} />
      {currentMedicineDoc && <MedicineDoc medicineDoc={currentMedicineDoc} />}
    </>
  );
}
// line 9 when click btn   setCurrentMEdDoc    at libary it will show meddicineDoc coz it change state in currentMedicineDoc
