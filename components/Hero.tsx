import React from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
      <div className="header absolute top-0 left-0 p-4">
        <div className="w-24">
          <img src="./header-logo.svg" alt="Logo" />
        </div>
      </div>
      <div className="text-center h-full w-full md:w-3/4 flex flex-col items-center flex-wrap">
        <div className="h-full w-full flex justify-center items-center">
          <div className="w-full ">
            <img
              src="./combined.svg"
              className="w-[100vw] md:w-[60vw] "
              alt="Black Circle"
            />
            {/* <div className="top-1/2 left-1/4 overflow-hidden absolute w-screen  -translate-y-1/2">
              <p className=" text-white font-bold text-xl md:text-5xl text-left ml-4 md:ml-20 uppercase z-50">
                Spreading the foss
              </p>
              <p className=" text-white font-bold text-xl md:text-5xl text-left ml-4 md:ml-20 uppercase z-50">
                message & having fun
              </p>
            </div> */}
          </div>

          {/* <div className="-ml-32 md:-ml-32 z-40 relative overflow-hidden">
            <img
              src="./Ellipse 2.png"
              className="w-[35rem] md:w-[35rem]"
              alt="White Circle"
            />
          
          </div> */}
          {/* <p className="hidden md:block  absolute text-white font-bold text-3xl md:text-6xl text-left ml-4 md:ml-20 uppercase z-50">
            <span className="text-black">
              Spreadi<span className="text-white">ng the foss</span>
            </span>
            <br />
            <span className="text-black">messag</span>
            <span className="text-white">e & having fun</span>
          </p>
          <p className="absolute md:hidden text-white font-bold text-3xl md:text-5xl text-left ml-4 md:ml-20 uppercase z-50">
            <span
              className="text-white"
              style={{ WebkitTextStroke: "1px black" }}>
              Spreading the foss
            </span>
            <br />
            <span
              className="text-white"
              style={{ WebkitTextStroke: "1px black" }}>
              message & having fun
            </span>
          </p> */}
        </div>
      </div>
      <div className="relative w-full md:w-[30vw] text-md md:text-2xl font-bold text-gray-400 flex flex-col justify-center items-center h-full mt-4 md:mt-0">
        <p className="text-center md:text-left">
          Foss club from SJCET Palai, focused on promoting Free and Open source
          projects and in creating a culture of Developmental freedom
        </p>
        <div className="flex w-full justify-around items-center mt-10">
          <div className="w-10 h-10 rounded-full bg-[#D9D9D9]"></div>
          <div className="w-10 h-10 rounded-full bg-[#D9D9D9]"></div>
          <div className="w-10 h-10 rounded-full bg-[#D9D9D9]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
