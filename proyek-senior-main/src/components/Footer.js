import React from "react";

export default function Footer() {
  return (
    <div className="py-28 w-screen bg-green-500 px-36 flex flex-row jutify-item items-center">
      <div className="left-section w-2/3 mx-5">
        <div className="logo-container flex flex-row">
          <div className="logo-container h-8 w-8 mr-2">
            <img className="w-100 h-100" src="/assets/logo.png" alt="" />
          </div>
          <h1 className="text-white text-xl font-semibold mb-2">
            Nutri Mental
          </h1>
        </div>

        <p className="text-white ">
          Nutrimental merupakan aplikasi untuk mendeteksi emosi dari tampilan
          wajah dengan memanfaatkan Deep Learning dan machine learning sehingga
          dapat membantu untuk pengembangan diri yang lebih baik.
        </p>
      </div>
      <div className="rifht-section w-1/3 mx-5 ml-20">
        <h1 className="text-white text-xl font-semibold mb-2">Hubungi Kami</h1>
        <p className="text-white ">+62 85 882 64 684</p>
        <p className="text-white ">nutri.mental@gmail.com</p>
      </div>
      <div className="right-section"></div>
    </div>
  );
}
