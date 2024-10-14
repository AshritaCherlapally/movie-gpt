import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-2xl md:text-6xl font-bold text-white">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2 text-white">
        {description}
      </p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black text-md md:text-xl py-1 md:py-4 px-3 md:px-12 rounded-lg  md:mx-3 hover:opacity-80 ">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white text-xl p-4 px-12  bg-opacity-50 rounded-lg hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
