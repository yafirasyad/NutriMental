import React from "react";

export default function ArtikelCard(props) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={props.link}
      className="service-card mx-2 border-2 h-56 w-full bg-gray-100 hover:bg-gray-200 cursor-pointer flex flex-row justify-center items-center"
    >
      <p className="text-xl px-5 text-gray-700 text-center">{props.title}</p>
    </a>
  );
}
