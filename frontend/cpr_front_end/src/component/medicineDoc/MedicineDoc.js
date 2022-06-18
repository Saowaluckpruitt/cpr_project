import React from "react";
import Detail from "./Detail";
import HowToUse from "./HowToUse";
import ImgMedicineDoc from "./ImgMedicineDoc";
import MedicineName from "./MedicineName";

export default function MedicineDoc({ medicineDoc }) {
  return (
    <div className="bg-black opacity-90">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <MedicineName name={medicineDoc.name} />

        <div className="mt-6 grid h-full grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <ImgMedicineDoc
            src={medicineDoc.medicinePic}
            alt={medicineDoc.name}
          />
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            ></div>
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <Detail text={medicineDoc.detail} />
            </div>
          </div>
          <HowToUse text={medicineDoc.howToUse} />
        </div>
      </div>
    </div>
  );
}
