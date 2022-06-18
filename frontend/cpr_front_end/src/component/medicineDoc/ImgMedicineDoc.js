import React from "react";

export default function ImgMedicineDoc({ src, alt }) {
  return (
    <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
      <img
        src={src}
        alt={alt}
        className="object-center object-cover group-hover:opacity-75 w-64 h-64"
      />
      <div
        aria-hidden="true"
        className="bg-gradient-to-b from-transparent to-black opacity-50"
      ></div>
    </div>
  );
}
