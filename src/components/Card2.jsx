import React from "react";

const Card2 = ({ img, alt, heading, info, button }) => {
  return (
    <div className="bg-card p-5 h-fit  rounded-2xl flex  justify-center">
      <div className=" flex max-[990px]:flex-col gap-10">
        <div className="h-fit maw-2/4 overflow-hidden flex justify-center ">
          <img
            src={img}
            alt={alt}
            className="rounded-2xl h-96 max-[990px]:h-fit  w-fit transform-[0.3s]  hover:scale-[1.1] transition  duration-700"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className=" mt-5 font-normal text-4xl mb-10 "> {heading}</p>

          <p className="text-[18px] font-medium  max-w-md">{info}</p>

          <button className="button2 w-fit bg-card mt-4"> {button} </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
