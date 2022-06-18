import React from "react";

export default function Detail({ text }) {
  return (
    <div>
      <h3 className="font-semibold text-white">
        <a href="#">
          <span className="absolute inset-0"></span>
          Detail
        </a>
      </h3>
      <div className="text-white">{text}</div>
    </div>
  );
}
