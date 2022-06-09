import React from "react";

function SectionTop() {
  return (
    <div className="relative w-full h-full">
      <div className="items-center justify-center text-center absolute lg:flex lg:flex-col lg:w-full">
        <div className="text-white text-6xl font-bold mt-16">
          WEEKEND FROM HOME
        </div>
        <div className="text-white text-xl font-bold mt-4 italic">
          Stay active with a little workout.
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-lg mt-48 left-15 absolute center px-16 py-4 bg-white rounded-full">
            Let's Go
          </div>
          <img
            src="assets/png/Bitmap-1.png"
            className="object-contain w-[1200px] mt-16 h-[300px]"
            alt="astronaut"
          />
        </div>
      </div>
        <img
          src="assets/png/BG_1.png"
          className="object-none h-[600px] lg:h-full lg:object-fit"
          alt="bg-black-blue"
        />
    </div>
  );
}

export default SectionTop;
