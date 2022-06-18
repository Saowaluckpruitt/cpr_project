import React from "react";

export default function MedicineName({ name }) {
  return (
    <div className="sm:flex sm:items-baseline sm:justify-between">
      <h2 className="text-2xl font-extrabold tracking-tight text-white">
        {name}
      </h2>
    </div>
  );
}
