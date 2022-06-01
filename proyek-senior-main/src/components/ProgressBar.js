import React from "react";

export default function ProgressBar(props) {
  return (
    <div className="progress-bar w-full flex flex-col ">
      <p className="mb-2">{props.title}</p>
      <div className="w-full bg-gray-200 rounded-md">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1.5  rounded-md"
          style={{ width: `${props.value}%` }}
        >
          {props.value}%
        </div>
      </div>
    </div>
  );
}
