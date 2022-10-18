import React from "react";

const Intro = () => {
  return (
    <div className="w-100 bg-black p-2 text-white flex">
      <div className="w-1/2 h-100 bg-red-400 flex flex-col p-10">
        <p className="w-max ml-[20%]">Hi my name is</p>
        <p className="w-max ml-[20%]">Akshay Choyal</p>
        <p className="w-max ml-[20%]">I'm a Frontend Developer</p>
      </div>
      <div className="w-1/2 h-100 bg-white">home</div>
    </div>
  );
};

export default Intro;
