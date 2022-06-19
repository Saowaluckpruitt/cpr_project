import React from "react";

export default function NameMedicine({ name }) {
  return (
    <div className="border border-lime rounded-md px-3 py-2  mt-2 ml-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
      <h3> {name}</h3>
    </div>
  );
}
