import React, { useState, useEffect } from "react";
import NameMedicine from "./NameMedicine";
import { listMedicineDocs } from "../../service/client";
import MedicineForm from "../ivMedicine/MedicineForm";
export default function MedicineTake({ setCurrentMedicineDoc }) {
  const [medicineDocs, setMedicineDocs] = useState(null);
  useEffect(() => {
    if (!medicineDocs) {
      listMedicineDocs().then((docs) => setMedicineDocs(docs));
    }
  });

  if (!medicineDocs) {
    return <></>;
  }
  return (
    <div className="bg-black opacity-90 rounded-md -space-y-px text-white">
      <h4 className="text-white mt-4 mb-4">Medicine</h4>
      {medicineDocs.map((doc) => {
        return (
          <div key={`form-${doc.id}`}>
            <MedicineForm doc={doc} />
          </div>
        );
      })}
    </div>
  );
}
