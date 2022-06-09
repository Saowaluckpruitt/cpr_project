import React from "react";

export default function MedicineDoc() {
  return (
    <div className="bg-black opacity-90">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-white">
            Medicine
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src="./pic/7.jpg"
              alt="Medicine"
              className="object-center object-cover group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            ></div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            ></div>
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Detial
                  </a>
                </h3>
                <p
                  aria-hidden="true"
                  className="mt-1 text-sm text-white overflow-auto"
                >
                   ผู้ใหญ่ : กรณี Life-threatening anaphylaxis ขนาดเริ่มต้น 0.1
                  - 0.5 mg (0.1 - 0.5 mL) ฉีดเข้าใต้ผิวหนัง หรือเข้ากล้าม ให้ซ
                  ้าได้ทุก 5 - 15 นาที กรณีมี hypotension ให้ 0.1 mg I.V.
                  อย่างช้าๆ ภายใน 5 - 10 นาที ตามด้วย continuous infusion 1- 10
                  mcg/min <br />
                   ทำรกและเด็ก (ยกเว้น ทารกคลอดก่อนก าหนด และ full-term infant)
                  : กรณี bronchodilator 0.01 mg/kg ฉีดเข้าใต้ผิวหนัง ห้ามฉีดแบบ
                  single dose เกินครั ้งละ 0.5 mg ให้ซ ้าได้ทุก 20 นาที จ านวน 3
                  ครั ้ง <br /> ขนำดยำที่ท ำให้เกิดพิษ :
                  การเสียชีวิตจากการได้ยาเกินขนาด ขึ ้นอยู่กับหลายปัจจัย
                  มีรายงานผู้ป่ วยเสียชีวิตจากขนาดยาที่ต ่ากว่า 10 mg I.V.
                  ในขณะที่ มีผู้รอดชีวิตจากการใช้ยาขนาดสูงถึง 30 mg I.V. หรือ
                  110 mg S.C.
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            ></div>
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    How to use
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                   I.V. infusion : เตรียมโดยผสม adrenaline 1 mg (1 amp.) ใน D5W
                  หรือ NSS 250 mL จะได้ความเข้มข้น 4 mcg/mL (dosage range 1 - 4
                  mcg/mL) <br />
                   I.V. direct injection : เตรียมโดยผสม adrenaline 1 mg
                  <br />
                  (1 amp.) ใน NSS หรือ SWFI 9 mL จะได้ความเข้มข้น 100 mcg/mL
                  (dosage range 100 – 1000 mcg ฉีดทุก 5 - 15 นาที ตามข้อบ่งใช้)
                  <br />
                   ยำที่สำมำรถผสมเข้ำกันได้: dopamine, dobutamine, verapamil,
                  amikacin และ furosemide <br />
                   ยำที่ไม่สำมำรถผสมเข้ำกันได้: aminophylline, sodium
                  bicarbonate, alkaline solutions และ hyaluronidase <br />
                   ควำมคงตัว : ยานี ้เมื่อผสมในสารละลายใดๆ จะคงตัวได้ 24
                  ชั่วโมง ทั ้งที่อุณหภูมิห้อง หรือในตู้เย็น <br /> กำรเก็บยำ :
                  เก็บแบบป้องกันแสง ที่อุณหภูมิไม่เกิน 25 องศาเซลเซียส
                  ห้ามเก็บในช่องแช่แข็ง ไม่ควรใช้ยานี
                  ้ในกรณีที่ยาเปลี่ยนสีหรือตกตะกอน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
