import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="min-h-[100vh] w-full dark:bg-black bg-black dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-100 py-8 p-4 cursor-pointer gap-2 text-center">
          <p className="text-xl sm:text-7xl font-semibold">Mukunda Parajuli</p>
          <p className="text-lg sm:text-xl mx-auto font-semibold w-2/4">
            An Electronics, Communication and Information Engineering student
            with a passion for developing dynamic websites using the MERN stack
            and Next.js
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
