import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { Button } from "../components/ui/button";
import React from "react";
import slider3 from "../assets/Slider/slider-img-3.webp";
import slider2 from "../assets/Slider/slider-img-2.webp";

const Home = () => {
  return (
    <>
      <div className="h-fit m-5 mt-10 flex justify-center items-center gap-20 max-[990px]:flex-col ">
        <div className="max-[990px]:text-center">
          <h1 className="font-normal">Your local hair salon,</h1>
          {/* <br /> */}
          <h1>
            with
            <span className="font-Gambetta"> world class </span>
            style.
          </h1>
          <div className="mt-5">
            <p className=" font-medium">
              Your go-to salon for stylish transformations –
              <br />
              creating custom looks for our Amsterdam clients
            </p>
          </div>
          <div className="mt-5 flex gap-3 max-[990px]:justify-center">
            <Button variant="secondary" className="button">
              Schedule Visit
            </Button>
            <button className="button2">
              <Link to="/services">See Services </Link>
            </button>
          </div>
        </div>

        <div>
          <Carousel />
        </div>
      </div>

      <div className="h-fit flex flex-col justify-center items-center mt-20 text-center">
        <div>
          <div className="text-center">
            <h3>About Us</h3>
          </div>

          <div className="mt-5">
            <p className="font-medium text-4xl">
              Hair & bone is a place where <br /> you can{" "}
              <span className="font-Gambetta"> relax</span> and unwind.
            </p>

            <p className="leading-6 text-[18px] font-medium ">
              Located in the heart of Amsterdam, we blend the <br /> latest
              trends with timeless techniques to create <br /> styles that feel
              uniquely you.
            </p>
          </div>
          <div className="mt-10">
            <button className="button2">
              <Link to="/about">About Us</Link>
            </button>
          </div>
        </div>

        <div className="flex gap-28 items-center mt-10">
      <div className="overflow-hidden">
        <img src={slider3} alt="aboutImg1" width={500} className=" rounded-xl transform-[0.3s]  hover:scale-[1.2] transition " />
      </div>
      <div>
        <img src={slider2} alt="aboutImg2" width={350} className="rounded-xl" />
      </div>

        </div>
      </div>
    </>
  );
};

export default Home;
