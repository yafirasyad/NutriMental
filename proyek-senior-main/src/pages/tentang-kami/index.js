import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function index() {
  return (
    <>
      <Navbar></Navbar>
      <div className="member-container w-screen py-10 px-36 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold text-gray-700 mb-5">
          Tentang Kami
        </h1>
        <div className="border-b-2 border-gray-300 my-3 w-full"></div>

        <div className="member-container grid grid-cols-4 gap-2 my-5">
          <div className="member-card h-auto w-full border-2 p-2 flex flex-col justify-center items-center">
            <img className="mb-2" src="/assets/ave.jpg" alt="" />
            <h1>Ave Syah Shina</h1>
          </div>
          <div className="member-card h-auto w-full border-2 p-2 flex flex-col justify-center items-center">
            <img className="mb-2" src="/assets/diky.jpg" alt="" />
            <h1>Diky Afamby Yodihamzah</h1>
          </div>
          <div className="member-card h-auto w-full border-2 p-2 flex flex-col justify-center items-center">
            <img className="mb-2" src="/assets/yafi.jpg" alt="" />
            <h1>Grinaldy Yafi</h1>
          </div>
          <div className="member-card h-auto w-full border-2 p-2 flex flex-col justify-center items-center">
            <img className="mb-2" src="/assets/krisna.jpg" alt="" />
            <h1>Krisna Mughni</h1>
          </div>
        </div>
        <div className="border-b-2 border-gray-300 my-3 w-full"></div>
      </div>
      <Footer></Footer>
    </>
  );
}
