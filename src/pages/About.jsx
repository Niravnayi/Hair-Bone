import React from "react";
import cardimg from "../assets/Slider/slider-img-3.webp";
import cardimg2 from "../assets/Slider/slider-img-1.webp";
import cardimg3 from "../assets/Slider/slider-img-2.webp";
import slider1 from "../assets/Slider/slider-img-1.webp";
import { Link } from "react-router-dom";
import hero from "../assets/Ad/saloon.webp";
import { VelocityScroll } from "../components/ui/scroll-based-velocity";
import FAQ from "../components/FaqSection";
import AOS from "aos";
AOS.init();

const About = () => {
  return (
    <div className="mx-auto p-4 mt-10 ">
      <div className="text-center mt-20">
        <h2 className="font-normal text-3xl md:text-5xl border-b-0 mb-5">
          Born from <span className="font-Gambetta"> passion</span> to{" "}
          <br className="hidden md:block" />
          beautiful hair and skin
        </h2>

        <p className="font-normal text-lg md:text-xl">
          We love getting to know our clients and often host local{" "}
          <br className="hidden md:block" />
          events, charity drives, and styling workshops.
        </p>
      </div>

      <div className="h-fit  mx-auto overflow-hidden flex flex-col md:flex-row justify-center gap-10 mt-10 md:mt-20 px-4">
        <img
          src={cardimg}
          alt="cardimg"
          className="rounded-2xl h-72 md:h-96 w-full md:w-fit transform transition duration-700 hover:scale-110"
        />
        <img
          src={cardimg2}
          alt="Cardimage2"
          className="rounded-2xl h-72 md:h-96 w-full md:w-fit transform transition duration-700 hover:scale-110"
        />
        <img
          src={cardimg3}
          alt="Cardimage3"
          className="rounded-2xl h-72 md:h-96 w-full md:w-fit transform transition duration-700 hover:scale-110"
        />
      </div>

      <div className=" py-12 px-6 md:px-20">
        <div className="bg-card rounded-lg grid grid-cols-1 md:grid-cols-3 text-center p-10 mb-12 gap-6 md:gap-0">
          <div className="md:border-r border-[#d6c9bf]">
            <h2 className="text-6xl font-normal text-[#4b3621] font-serif">
              10
            </h2>
            <p className="text-[#4b3621]">years of experience</p>
          </div>
          <div className="md:border-r border-[#d6c9bf]">
            <h2 className="text-6xl font-normal text-[#4b3621] font-serif">
              1k+
            </h2>
            <p className="text-[#4b3621]">amazing clients</p>
          </div>
          <div>
            <h2 className="text-6xl font-normal text-[#4b3621] font-serif">
              1
            </h2>
            <p className="text-[#4b3621]">beautiful salon</p>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-sm uppercase text-[#4b3621]">our story</h3>
          <h2 className="text-3xl font-semibold text-[#4b3621] my-4">
            Short story of Hair & Bone
          </h2>
          <p className="text-[#4b3621]  text-base">
            Hair & Bone began as a dream between two lifelong friends, Emma and
            Max, both passionate about hair and creativity. They wanted to
            create more than just a salon — they envisioned a place where people
            could feel at home while transforming their look. So, they found a
            cozy spot on Prinsengracht, filled it with plants, art, and warmth,
            and opened their doors to the community.
          </p>
          <p className="text-[#4b3621] text-base mt-4">
            From day one, clients who walked through the doors of Hair & Bone
            could feel the difference. Emma’s natural talent with color and
            Max’s precision cuts quickly gained a loyal following. Word spread
            through the city about their ability to not only style hair but also
            create experiences. The salon became a place where friends gathered
            for a fresh blowout, brides came for their special day, and even
            tourists stopped by for a touch of local flair.
          </p>
          <p className="text-[#4b3621] text-base mt-4">
            As the years passed, Hair & Bone grew, but it never lost its
            intimate, community-driven feel. Emma and Max made sure every client
            left with not only great hair but also a smile. They hosted
            workshops, supported local artists, and stayed committed to
            sustainability, using only eco-friendly products.
          </p>
          <p className="text-[#4b3621] text-base mt-4">
            Today, Hair & Bone is a local icon — not because of its size or
            glamour, but because of its heart. For Emma and Max, it was never
            just about hair. It was about connection, creativity, and bringing
            out the best in everyone who walked through their doors.
          </p>
        </div>
      </div>

      <section className="my-10 px-0 w-full">
        <VelocityScroll
          text="▸Bio products  ▸Professional approach  ▸Relax  ▸Healthy hair"
          default_velocity={2}
          className="font-Gambetta  text-center text-4xl font-medium tracking-[-0.02em] text-secondary drop-shadow-sm  md:text-7xl md:leading-[6rem]"
        />
      </section>

      <section className="my-5">
        <div data-aos="flip-up" data-aos-delay="200" data-aos-duration="1000">
          <img src={hero} alt="heroimg" className="rounded-xl" />
        </div>
      </section>

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
            <Link
              to="https://www.instagram.com/hairbone_salon/"
              target="_blank"
            >
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

      <div>
        <video loop autoPlay muted className="w-full h-auto">
          <source
            src="https://cdn.prod.website-files.com/66db9e540e83281f2a0a89b2%2F66dcf83827d9121c2de6f977_6036068_Person_People_1920x1080-transcode.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <section className="flex max-[990px]:flex-col max-[990px]:items-center max-[990px]:text-center gap-12 my-10 py-10">
        <div className="flex flex-col flex-1 justify-center p-5">
          <h3 className="">Services</h3>
          <p className=" text-4xl font-medium mt-3 ">
            We believe every client is <br />
            <span className="font-Gambetta"> unique</span> and deserves the most{" "}
            <br />
            bespoke attention.
          </p>

          <p className="font-normal text-xl mt-5">
            We use eco-friendly, cruelty-free haircare products and are always
            striving to reduce waste. From our sustainable product line to our
            recycling practices, we’re proud to be a green salon that cares
            about our impact on the environment.
          </p>

          <div className="mt-10">
            <Link to="/about">
              <button className="button2">About Us</button>
            </Link>
          </div>
          <div className="flex gap-10"></div>
        </div>

        <div className="flex- flex justify-between ">
          <img
            src={slider1}
            alt="hero-img1"
            className=" rounded-3xl"
            width={600}
          />
        </div>
      </section>

      <div>
        <FAQ />
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/Contact" target="_top">
          <button className="button2 ">Lets'talk</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
