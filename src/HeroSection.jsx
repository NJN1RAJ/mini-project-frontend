import React, { useState } from "react";
import Steps from "./Steps";

function HeroSection() {
  const [inival, SetInival] = useState("12");
  const [inivalHeart, SetInivalHeart] = useState("--");
  const [clickedStart, setClickedStart] = useState(false);

  return (
    <>
      <div className="p-10 text-white">
        <div className="text-4xl text-white sm:text-4xl lg:text-7xl font-semibold text-center">
          Check <span className="text-blue-500 font-bold">Glucose</span> level
          from your smart phone
        </div>

        <Steps />

        <div className="flex justify-center items-center mt-16 p-3 font-semibold">
          <div className="text-3xl text-center">↑ Swipe To Check ↑</div>
        </div>

        <div className="flex items-center justify-center mt-16">
          <div className=" w-4/5 sm:2/3 flex justify-center items-center gap-2 flex-col border-black border-4 p-4">
            {/* <InputField name="Glucose Value" value={inival} unit="mg/dL" />
            <InputField name="Heart Rate" value={inivalHeart} unit="BPM" />
            <div className="flex gap-10 mt-2 ">
              <button className="bg-red-400 border-2 border-black p-2">
                Reset
              </button> */}
            {clickedStart ? (
              <div>
                <div className="">Measuring...</div>
                {/* insert timeout function to delay the response.
                    Also show graph and glucose and heart rate
                */}
              </div>
            ) : (
              <button className="bg-green-400 border-2 text-black border-black p-2">
                Start
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
