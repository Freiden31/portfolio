import React, { useState } from "react";
import freiden from "./assets/robrob.png";
import one from "./assets/one.jpeg";
import two from "./assets/two.jpeg";
import three from "./assets/three.jpeg";
import four from "./assets/four.jpeg";
import five from "./assets/five.jpeg";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const isOpen = () => {
    setOpenModal(true);
  };

  const isClose = () => {
    setOpenModal(false);
  };


  return (
    <div className={`w-screen min-h-screen font-mono ${darkMode ? "bg-[#001d3d]" : "bg-[#ebebeb]"}`}>
      <div className={`w-full h-[70px] flex justify-between items-center px-5 sm:px-[10rem] ${darkMode ? "bg-[#ebebeb]" : "bg-[#001d3d]"}`}>
        {/* logo name */}
        <div className={` ${darkMode ? "text-[#001d3d]" : "text-[#ebebeb]"} `}>
          <h2 className="font-bold text-[18px] sm:text-[20px]">freiden</h2>
        </div>

        {/* navigator */}
        <div className={`hidden sm:block ${darkMode ? "text-[001d3d]" : "text-[#ebebeb]"}`}>
          <ul className="flex items-center justify-center gap-8">
            <li>
              <a href="#" className="hover:font-bold cursor-auto">Home</a>
            </li>|
            <li>
              <a href="#" className="hover:font-bold cursor-auto">About</a>
            </li>|
            <li>
              <a href="#" className="hover:font-bold cursor-auto">Documentation</a>
            </li>|
            <li>
              <a href="#" className="hover:font-bold cursor-auto">Projects</a>
            </li>
          </ul>
        </div>

        {/* contact */}
        <div className="flex items-center justify-center">
          <div className={`flex items-center justify-center rounded-md p-2 px-2 sm:px-4   sm:hover:font-semibold active:scale-110 hover:scale-110 transform-transition duration-400 ${darkMode ? "bg-[#001d3d] text-[#ebebeb]" : "bg-[#ebebeb] text-[#001d3d] hover:bg-[#fdf9f9ef]" }`}><a href="#">Contact</a></div>
        </div>
      </div>


        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-5 py-[5rem] sm:py-[12rem]">
          {/* image */}
          <div className="flex items-center justify-center sm:justify-end sm:w-auto">
            <div className={`h-[13rem] sm:h-[26rem] w-[13rem] sm:w-[26rem] rounded-full relative sm:right-[11rem]  sm:mt-[4rem] ${darkMode ? "bg-[#a78a25ff]" : "bg-[#001d3d]"}`}></div>
            <img src={freiden} className="w-[30rem] sm:w-[50rem] h-[16rem] sm:h-[32rem] absolute z-10  mr-3 sm:mt-[4rem] active:scale-115 transform-transition duration-500" onClick={() => setDarkMode(!darkMode)}/>
          </div>

          <div className=" flex-col justify-center sm:items-start text-center mt-5 sm:mt-[4rem] sm:text-left">
            <h1 className={`font-bold text-[30px] sm:text-[60px] leading-light sm:pl-5 ${darkMode ? "text-[#ebebeb]" : "text-[#001d3d]"}`}>Hi, I'm <span className="text-[#a78a25ff]">Freiden</span></h1><br />
            <h1 className={`font-bold text-[18px] sm:text-[28px] mt-[-2rem] sm:pl-5 ${darkMode ? "text-[#ebebeb]" : "text-[#001d3d]"}`}>a Python Developer</h1>
            <div className={`flex- justify-center mt-6 ${darkMode ? "text-[#ebebeb]" : "text-[#001d3d]"}`}>
              <p className="text-[12px] sm:text-[16px] text-justify px-5 sm:max-w-xl leading-relaxed mt-6">
                Hey, I am a junior developer in the Philippines pursuing web development and machine learning.
                Developing web applications for innovative contribution visualizing bigger picture for one's success. 
              </p>
          </div>
          </div>
        </div>

        <div className="p-5 flex items-center justify-center">
            <h2 className="text-[#a78a25ff] text-[20px] font-bold tracking-[0.15em]">
              {"SYSTEM PROJECTS".split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block"
                  style={{
                    animation: `pulse 1s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                    color: "#033c7aff"
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>

            <style>
              {`
                @keyframes pulse {
                0%, 100% { transform: scale(1); color: #033c7aff}
                50% { transform: scale(1.2); color: #ebebeb}
                }
              `}
            </style>
          </div>

        {/* projects */}
        <div className="flex items-center justify-center grid grid-cols-3 py-8">
          <div className="cols-span-1 flex flex-col items-center justify-center gap-2 ">
            <div className="h-3 w-3 rounded-full border-2 border-[rgba(235,235,235,0.5)] shadow-[0_0_20px_3px_rgba(235,235,235,0.2)]"></div>
            <div className="h-[8rem] w-1  bg-[rgba(235,235,235,0.5)] shadow-[0_0_20px_3px_rgba(235,235,235,0.1)]"></div>
            <div className="h-3 w-3 rounded-full border-2 border-[rgba(235,235,235,0.5)] shadow-[0_0_20px_3px_rgba(235,235,235,0.2)]"></div>
            <div className="h-[8rem] w-1  bg-[rgba(235,235,235,0.5)] shadow-[0_0_20px_3px_rgba(235,235,235,0.1)]"></div>
            <div className="h-3 w-3 rounded-full border-2 border-[rgba(235,235,235,0.5)] shadow-[0_0_20px_3px_rgba(235,235,235,0.2)]"></div>
          </div>

          <div className="cols-span-2 flex flex-col justify-center gap-[5rem] ml-[-1.9rem]">
            <div className="w-[14rem] h-[3.5rem] flex items-center justify-center rounded-md border-[rgba(235,235,235,0.5)] hover:shadow-[0_0_10px_3px_rgba(167,138,37,0.5)] active:shadow-[0_0_10px_3px_rgba(167,138,37,0.5)] transition-colors duration-5 ease-in-out shadow-[0_0_10px_3px_rgba(235,235,235,0.5)] mb-5 active:scale-110 hover:scale-110 transition-transform duration-500 hover:text-[#a78a25ff] active:text-[#a78a25ff] ease-in-out duration-5 transition-colors hover:font-semibold active:font-semibold  text-[#ebebeb] text-[14px] " onClick={isOpen}>
              <h2 className="">Anomaly Detection System</h2>
            </div>
            <div className="w-[14rem] h-[3.5rem]  mb-4 rounded-md   border-[rgba(235, 235, 235, 0.5)] shadow-[0_0_10px_3px_rgba(235,235,235,0.5)] active:scale-110  hover:scale-110 transition-transform duration-500"></div>
            <div className="w-[14rem] h-[3.5rem] rounded-md border-[1px]  border-[rgba(235,235,235,0.5)] shadow-[0_0_10px_3px_rgba(235,235,235,0.5)] active:scale-110  hover:scale-110 transition-transform duration-500"></div>
          </div>
          {/* project images hover */}
          {openModal && (
            <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-50" onClick={isClose}>
              <div className="w-[38rem] bg-[#001d3d] rounded-md m-[1rem] p-2 py-8">
                <div className="h-[27rem] w-full overflow-y-auto gap-5 flex flex-col items-center p-6">
                  <h2 className="text-[#ebebeb]">----------- REGISTRATION FORM ----------- </h2>
                  <img src={two} className="h-[15rem] w-full" />
                  <h2 className="text-[#ebebeb]">----------- REGISTRATION FORM ----------- </h2>
                  <img src={one} className="h-[15rem] w-full" />
                  <h2 className="text-[#ebebeb]">----------- REGISTRATION FORM ----------- </h2>
                  <img src={three} className="h-[15rem] w-full" />
                  <h2 className="text-[#ebebeb]">----------- REGISTRATION FORM ----------- </h2>
                  <img src={four} className="h-[15rem] w-full" />
                  <h2 className="text-[#ebebeb]">----------- REGISTRATION FORM ----------- </h2>
                  <img src={five} className="h-[15rem] w-full" />
                  <h2 className=" font-bold text-[#ebebeb]">------------------ <span className="text-[#a78a25ff]"> END </span> ------------------ </h2>
                </div>
              </div>
            </div>
          )}

        </div>

      
    </div>
  )
}

export default App;