import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row  h-16 w-screen justify-between bg-green-500 px-20 justify-center items-center">
      <div className="header flex flex-row text-white font-semibold text-lg hover:text-yellow-300 cursor-pointer">
        <div className="logo-container h-8 w-8 mr-2">
          <img className="w-100 h-100" src="/assets/logo.png" alt="" />
        </div>
        <Link href="/">
          <h1>NutriMental</h1>
        </Link>
      </div>

      <div className="menu flex flex-row">
        <Link href="/pendeteksi-wajah">
          <h1 className="mx-5 text-white font-semibold cursor-pointer hover:text-yellow-300">
            Pendeteksi Wajah
          </h1>
        </Link>
        <Link href="/tentang-kami">
          <h1 className="mx-5 text-white font-semibold cursor-pointer hover:text-yellow-300">
            Tentang Kami
          </h1>
        </Link>
      </div>
    </div>
  );
}
