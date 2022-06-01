import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArtikelCard from "../components/ArtikelCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="hero-container h-96 w-screen py-72 px-36 flex flex-row">
        <div className="left-section flex flex-col  w-1/2 flex flex-row  justify-center">
          <h1 className="text-green-500 text-6xl font-semibold">
            Nutri Mental
          </h1>
          <div className="border-b-2 border-gray-200 my-3"></div>
          <p className="text-gray-700">
            Nutrimental merupakan aplikasi untuk mendeteksi emosi dari tampilan
            wajah dengan memanfaatkan Deep Learning dan machine learning
            sehingga dapat membantu untuk pengembangan diri yang lebih baik.
          </p>
        </div>
        <div className="right-section flex flex-col  w-1/2 flex flex-row items-center justify-center">
          <div className="h-86 w-86  ml-20  flex justify-center items-center">
            <img
              className="h-full w-full relative  rounded-full"
              src="/assets/home-image.png"
              alt=""
            />
          </div>
        </div>
        <div className="right-section"></div>
      </div>

      <div className="service px-36 my-5 ">
        <div className="service-header">
          <h1 className="text-2xl text-gray-700 ">Layanan</h1>
          <div className="border-b-2 border-gray-200 my-4"></div>
        </div>

        <div className="service-card-container w-full flex flex-row ">
          <Link href="/pendeteksi-wajah">
            <a className="service-card mx-2 border-2 h-56 w-1/2 bg-gray-100 hover:bg-gray-200 cursor-pointer flex flex-row justify-center items-center">
              <div className="logo-container h-12 w-12 mr-2 ">
                <img className="w-full h-full" src="/assets/face.png" alt="" />
              </div>
              <p className="text-2xl text-gray-700 ">Pendeteksi Wajah</p>
            </a>
          </Link>
          <a
            href="#artikel"
            className="service-card mx-2 border-2 h-56 w-1/2 bg-gray-100 hover:bg-gray-200 cursor-pointer flex flex-row justify-center items-center"
          >
            <div className="container flex flex-row justify-center items-center">
              <div className="logo-container h-8 w-8 mr-2 ">
                <img
                  className="w-full h-full"
                  src="/assets/article.png"
                  alt=""
                />
              </div>
              <p className="text-2xl text-gray-700">Artikel</p>
            </div>
          </a>
        </div>
      </div>

      <div className="service px-36 my-10 mb-20" id="artikel">
        <div className="service-header">
          <h1 className="text-2xl text-gray-700 ">Artikel</h1>
          <div className="border-b-2 border-gray-200 my-4"></div>
        </div>

        <div className="service-card-container w-full flex gap-4 flex-row grid grid-cols-3">
          <ArtikelCard
            title="A Mental Trick to Make Any Task Less Intimidating"
            link="https://forge.medium.com/a-mental-trick-to-make-any-task-less-intimidating-71ab2b25d663"
          ></ArtikelCard>
          <ArtikelCard
            title="This Meditation Exercise Builds Mental Muscle and Cures Procrastination"
            link="https://betterhumans.pub/this-meditation-exercise-builds-mental-muscle-and-cures-procrastination-2f15faade9f3"
          ></ArtikelCard>
          <ArtikelCard
            title="Mental Models I Find Repeatedly Useful"
            link="https://medium.com/@yegg/mental-models-i-find-repeatedly-useful-936f1cc405d"
          ></ArtikelCard>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
