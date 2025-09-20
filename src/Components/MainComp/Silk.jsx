import React from "react";

const Silk = ({ name }) => {
  return (
    <div className="w-[100%] h-[full] realtive flex items-center justify-center">
      <img
        className="w-full h-full absolute top-0 left-0 md:hidden"
        src="./page1.gif"
        alt=""
      />
       <img
        className="w-full h-full absolute top-0 left-0 hidden md:block"
        src="./page.gif"
        alt=""
      />
      <div className=" p-4 relative inline-block translate-y-[45vh] ">
       <center>
         <h2 className="text-black text-2xl font-bold sm:text-3xl md:text-5xl md:text-white">
         sorry! {name} page Not Build Yet !
        </h2>
       </center>
      </div>
    </div>
  );
};

export default Silk;
