import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import FormData from "form-data";
import ProgressBar from "../../components/ProgressBar";

const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  transition: "border .3s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};
export default function Home() {
  const [files, setFiles] = useState([]);
  const [mood, setMood] = useState([]);
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg",
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <img src={file.preview} alt={file.name} />
    </div>
  ));

  // clean up
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  if (files.length != 0) {
    let formData = new FormData();
    formData.append("file", files[0]);
  }
  const reloadPage = () => {
    location.reload();
  };

  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const uploadFile = () => {
    axios
      .post(
        `https://nutrimental-backend.azurewebsites.net/detect`,
        formData,
        config
      )
      .then((response) => {
        console.log(response);
        setLoading(false);
        setMood(response.data);
        setResult(true);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <>
          <div className="w-screen h-screen bg-white fixed z-10 flex justify-center items-center">
            <p>Loading....</p>
          </div>
        </>
      ) : (
        <></>
      )}
      <Navbar></Navbar>

      <div className="hero-container h-96 w-screen py-72 px-36 flex flex-row">
        <div className="left-section flex flex-col  w-1/2 flex flex-row  justify-center">
          <h1 className="text-green-500 text-6xl font-semibold">
            Apa Yang Kamu Rasakan Saat Ini ?
          </h1>
          <div className="border-b-2 border-gray-200 my-3"></div>
          <p className="text-gray-700 mb-5">
            Kenali Suasana Hati anda bersama NutriMental !
          </p>

          <button className="h-auto flex flex-row py-1 rounded-md justify-center items-center w-1/2 bg-green-500 hover:bg-green-700">
            {" "}
            <a href="#face" className="text-white text-lg pb-1">
              Selengkapnya
            </a>
          </button>
        </div>
        <div className="right-section flex flex-col  w-1/2 flex flex-row items-center justify-center">
          <div className="h-86 w-86 rounded-full ml-20 ">
            <img
              className="h-full w-full  rounded-full"
              src="/assets/face-image.png"
              alt=""
            />
          </div>
        </div>
        <div className="right-section"></div>
      </div>

      <div id="face" className="service px-36 my-5 ">
        <div className="service-header">
          <h1 className="text-2xl text-gray-700 ">Pendeteksi Wajah</h1>
          <div className="border-b-2 border-gray-200 my-4"></div>
        </div>

        <p className="mb-4">
          Mohon Masukkan Gambar di bawah ini dengan file berformat jpg dan
          berukuran kurang dari 2MB untuk nantinya dapat digunakan mengenali
          emosi anda.
        </p>

        {result ? (
          <>
            <div className="result-container w-full flex flex-row mb-4">
              <div className="left-section p-4 w-2/6 h-96 border-2 mx-3 flex flex-row justify-center items-center">
                {thumbs}
              </div>
              <div className="right-section w-4/6 px-5 h-96 border-2 mx-3 flex flex-col justify-center items-center">
                <div className="umur w-full">
                  <p className="mb-2">Umur : {mood[0]}</p>
                </div>
                <ProgressBar title={"Netral"} value={mood[1]}></ProgressBar>
                <ProgressBar title={"Bahagia"} value={mood[2]}></ProgressBar>
                <ProgressBar title={"Sedih"} value={mood[3]}></ProgressBar>
                <ProgressBar title={"Marah"} value={mood[4]}></ProgressBar>
              </div>
            </div>
            <button
              onClick={() => {
                reloadPage();
              }}
              className="h-auto flex flex-row py-1  justify-center items-center w-full bg-green-500 hover:bg-green-700"
            >
              <p className="text-white text-lg pb-1">Coba Kembali</p>
            </button>
          </>
        ) : (
          <>
            {" "}
            <div className="dropzone w-full flex flex-col  ">
              <section>
                <div
                  className="cursor-pointer mb-4"
                  {...getRootProps({ style })}
                >
                  <input {...getInputProps()} />
                  <p>Drag and drop your images here.</p>
                </div>
                <div className="w-full flex flex-col justify-center items-center mb-5">
                  <div className="w-1/3">{thumbs}</div>
                </div>
              </section>
            </div>
            {files.length == 0 ? (
              <></>
            ) : (
              <button
                onClick={() => {
                  setLoading(true);
                  uploadFile();
                }}
                className="h-auto flex flex-row py-1  justify-center items-center w-full bg-green-500 hover:bg-green-700"
              >
                <p className="text-white text-lg pb-1">Deteksi Emosi</p>
              </button>
            )}
          </>
        )}
      </div>

      <Footer></Footer>
    </>
  );
}
