import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { Button } from "../components/ui/button";
import slider1 from "../assets/Slider/slider-img-1.webp";
import slider3 from "../assets/Slider/slider-img-3.webp";
import slider2 from "../assets/Slider/slider-img-2.webp";
import cardimg from "../assets/About/cardimg.webp";
import cardimg2 from "../assets/About/cardimg2.webp";
import cardimg3 from "../assets/About/cardimg3.webp";
import hero from "../assets/Ad/saloon.webp";
import Card from "../components/Card";
import { VelocityScroll } from "../components/ui/scroll-based-velocity";

const Home = () => {
  return (
    <>
      <div className=" h-fit m-5 mt-10 flex justify-center items-center gap-20 max-[990px]:flex-col ">
        <div
          className="max-[990px]:text-center"
          data-aos="fade-up-right"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
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

      <div className=" h-fit flex flex-col justify-center items-center mt-20 text-center">
        <div>
          <div className="text-center">
            <h3>About Us</h3>
          </div>

          <div className="mt-5">
            <p className="font-medium text-4xl">
              Hair & bone is a place where <br /> you can{" "}
              <span className="font-Gambetta"> relax</span> and unwind.
            </p>

            <p className="leading-6 text-[18px] font-medium mt-6">
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

        <div className="flex max-[600px]:flex-col gap-10 items-center mt-10">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="overflow-hidden h-fit "
          >
            <img
              src={slider3}
              alt="aboutImg1"
              className=" rounded-xl transform-[0.3s]  hover:scale-[1.1]   duration-500"
            />
          </div>
          <div className="w-full  flex justify-center">
            <img
              src={slider2}
              alt="aboutImg2"
              width={300}
              className="rounded-xl "
            />
          </div>
        </div>
      </div>

      <div className="h-fit flex flex-col   mt-20 ">
        <div>
          <h3 className="max-[990px]:text-center">Services</h3>
          <div className="mt-5 flex max-[990px]:flex-col items-center max-[990px]:text-center gap-6 justify-between">
            <p className=" text-4xl">We offer wide range of services</p>
            <Link to="/services">
              <button className="button2"> See all </button>
            </Link>
          </div>
        </div>

        <div className="flex max-[990px]:flex-col my-5 gap-5">
          <Card
            img={cardimg3}
            alt="cardimg3"
            heading="Haircuts & styling"
            info="Haircuts & styling shape and personalize your look for a fresh appearance."
          />
          <Card
            img={cardimg2}
            alt="cardimg2"
            heading="Hair coloring"
            className=""
            info="Hair coloring adds depth and vibrancy, enhancing or changing your natural shade."
          />
          <Card
            img={cardimg}
            alt="cardimg"
            heading="hair treatments"
            info="Hair treatments nourish and repair, restoring shine and strength to your hair."
          />
        </div>
      </div>

      <div className="my-10 px-0 w-full">
        <VelocityScroll
          text="▸Bio products  ▸Professional approach  ▸Relax  ▸Healthy hair"
          default_velocity={2}
          className="font-Gambetta  text-center text-4xl font-medium tracking-[-0.02em] text-secondary drop-shadow-sm  md:text-7xl md:leading-[6rem]"
        />
      </div>

      <div className="my-5">
        <div>
          <img src={hero} alt="heroimg" className="rounded-xl" />
        </div>
      </div>

      <div className="bg-card p-5 rounded-2xl flex max-md:flex-col max-md:gap-6 justify-between my-5">
        <div>
          <h3>Find us in Ahmedabad</h3>
          <p className="text-xl mt-6 ">
            Commercial complex,Ekta festival,
            <br /> AnkurRd, opp.Gujarat Housing Board,
            <br />
            ISRO Colony, Pragatinagar, Nirnay Nagar,
            <br />
            Ahmedabad, Gujarat 380013.
          </p>
          <p className="text-xl  underline mt-3">
            <Link to="mailto:example@example.com">example@example.com</Link>
          </p>
          <p className="text-xl  underline mt-1">
            <Link to="tel:+9197732 77350">+91 97732 77350</Link>
          </p>
        </div>
        <div className="flex gap-4 items-end">
          <div className="border  border-secondary  p-2 rounded-full">
            <Link to="https://www.instagram.com/hairbone31/">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75ZM7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12Z"
                  fill="#36210F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 3.75C5.65279 3.75 3.75 5.65279 3.75 8V16C3.75 18.3472 5.65279 20.25 8 20.25H16C18.3472 20.25 20.25 18.3472 20.25 16V8C20.25 5.65279 18.3472 3.75 16 3.75H8ZM2.25 8C2.25 4.82436 4.82436 2.25 8 2.25H16C19.1756 2.25 21.75 4.82436 21.75 8V16C21.75 19.1756 19.1756 21.75 16 21.75H8C4.82436 21.75 2.25 19.1756 2.25 16V8Z"
                  fill="#36210F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.0117 5.94132C18.3196 6.21841 18.3446 6.69263 18.0675 7.00051L18.0575 7.01162C17.7804 7.3195 17.3062 7.34446 16.9983 7.06737C16.6904 6.79027 16.6654 6.31606 16.9425 6.00817L16.9525 5.99706C17.2296 5.68918 17.7038 5.66422 18.0117 5.94132Z"
                  fill="#36210F"
                />
              </svg>
            </Link>
          </div>

          <div className="border  border-secondary p-2 rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.53346 3.75L17.3668 20.25H19.4665L6.63317 3.75H4.53346ZM3.16114 4.42882C2.47144 3.54206 3.10337 2.25 4.22677 2.25H6.70653C7.12313 2.25 7.51639 2.44234 7.77216 2.77118L20.8388 19.5712C21.5285 20.4579 20.8966 21.75 19.7732 21.75H17.2934C16.8768 21.75 16.4836 21.5577 16.2278 21.2288L3.16114 4.42882Z"
                fill="#36210F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.4983 2.43945C20.1887 2.16426 19.7146 2.19215 19.4394 2.50174L3.43944 20.5017C3.16425 20.8113 3.19213 21.2854 3.50172 21.5606C3.81131 21.8358 4.28536 21.8079 4.56055 21.4983L20.5605 3.49828C20.8357 3.18869 20.8079 2.71464 20.4983 2.43945Z"
                fill="#36210F"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col flex-1 justify-center">
          <h3 className="">Services</h3>
          <p className=" text-4xl font-normal mt-3">
            We believe every client is{" "}
            <span className="font-Gambetta"> unique</span> and deserves the most
            bespoke attention.
          </p>

          <p className="font-normal text-xl mt-5"> 
            We use eco-friendly, cruelty-free haircare products and are always
            striving to reduce waste. From our sustainable product line to our
            recycling practices, we’re proud to be a green salon that cares
            about our impact on the environment.
          </p>

          <div className="mt-10"> 
            <button className="button2">About Us</button>
          </div>
          <div className="flex gap-10"></div>
        </div>

        <div className="flex-1 ">
          <img src={slider1} alt="hero-img1" className="object-cover"  />
        </div>
      </div>
    </>
  );
};

export default Home;
