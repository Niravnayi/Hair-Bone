import React from "react";

const Card = ({ img, alt, heading, info }) => {
  return (
    <div className="bg-card p-5 h-fit  rounded-2xl">
      <div>
        <div className="h-fit w-full overflow-hidden flex justify-center ">
          <img
            src={img}
            alt={alt}
            className="rounded-2xl h-96 max-[990px]:h-fit  w-fit transform-[0.3s]  hover:scale-[1.1] transition  duration-700"
          />
        </div>
        <div>
          <p className="text-center mt-5 font-medium "> {heading}</p>

          <p className="text-[18px] font-medium text-center">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
