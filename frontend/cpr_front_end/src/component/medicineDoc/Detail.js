import React from "react";

export default function Detail({ text }) {
  return (
    <div>
      <h3 className="font-semibold text-white">Detail</h3>
      <div className="text-white h-full w-full">{text}</div>
    </div>
  );
}
