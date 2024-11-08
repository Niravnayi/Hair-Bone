import React from "react";
import slider1 from "../assets/Slider/slider-img-1.webp";
import slider2 from "../assets/Slider/slider-img-2.webp";
import slider3 from "../assets/Slider/slider-img-3.webp";
import slider4 from "../assets/Slider/slider-img-4.webp";

const images = [slider1, slider2, slider3, slider4];

const Carousel = () => {
  return (
    <div
      className="max-[540px]:w-[300px] w-[500px]"
      style={{
        // height:"0%",
        // width: "500px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: "#36210f",
        borderRadius: "20px",
        padding: "80px 0",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          gap: "20px",
          animation: "scroll 10s linear infinite",
        }}
      >
        {images.concat(images).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "400px",
              borderRadius: "10px",
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% - 20px));
            }
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;
