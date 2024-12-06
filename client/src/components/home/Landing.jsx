import React from "react";
import Featured from "./Featured";

const Landing = () => {
  return (
    <>
      <section className="bg-[url('/src/assets/flat-lay-recycling.jpg')] bg-cover bg-no-repeat bg-blend-darken bg-black bg-opacity-60 h-[95%] flex flex-colgap-5 justify-center items-center">
        <div className="align-elements flex py-36  text-white">
          <div className="w-1/2 ">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-sm md:text-xl lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              corporis adipisci doloremque eum doloribus quod accusamus enim
              laborum molestiae officia!
            </p>
          </div>
        </div>
      </section>
      <div className="bg-white stats stats-vertical lg:stats-horizontal shadow w-full flex rounded-none">
        <div className="stat text-gray-700">
          <div className="stat-title text-gray-700">Creations</div>
          <div className="stat-value">12K</div>
        </div>

        <div className="stat text-gray-700">
          <div className="stat-title text-gray-700">Members</div>
          <div className="stat-value">1,200+</div>
        </div>

        <div className="stat text-gray-700">
          <div className="stat-title text-gray-700 ">
            Plastic waste collected
          </div>
          <div className="stat-value">31K</div>
        </div>
      </div>
      <section className="align-elements mt-10">
        <Featured />
      </section>
    </>
  );
};

export default Landing;
