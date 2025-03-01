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
import blogimg1 from "../assets/About/blogimg3.webp";
import blogimg2 from "../assets/About/blogimg1.webp";
import blogimg3 from "../assets/About/blogimg2.webp";
import hero from "../assets/Ad/saloon.webp";
import Card from "../components/Card";
import testimonial from "../assets/social/testimonial.mp4";
import cliant1 from "../assets/social/testi-img1.webp";
import cliant2 from "../assets/social/testi-img2.webp";
import { VelocityScroll } from "../components/ui/scroll-based-velocity";
import BlogCard from "../components/BlogCard";

const Home = () => {
  return (
    <>
      <main>
        <section className=" h-fit m-5 mt-10 flex justify-center items-center gap-20 max-[990px]:flex-col ">
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
              <Link to="/contact">
                <Button variant="secondary" className="button">
                  Schedule Visit
                </Button>
              </Link>
              <button className="button2">
                <Link to="/services">See Services </Link>
              </button>
            </div>
          </div>

          <div>
            <Carousel />
          </div>
        </section>

        <section className=" h-fit flex flex-col justify-center items-center mt-20 text-center">
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
                Located in the heart of Ahmedabad, we blend the <br /> latest
                trends with timeless techniques to create <br /> styles that
                feel uniquely you.
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
            <div
              className="w-full  flex justify-center"
              data-aos="zoom-in"
              data-aos-offset="00"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <img
                src={slider2}
                alt="aboutImg2"
                width={300}
                className="rounded-xl "
              />
            </div>
          </div>
        </section>

        <section className="h-fit flex flex-col   mt-20 ">
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
        </section>

        <section className="my-10 px-0 w-full">
          <VelocityScroll
            text="▸Bio products  ▸Professional approach  ▸Relax  ▸Healthy hair"
            default_velocity={2}
            className="font-Gambetta  text-center text-4xl font-medium tracking-[-0.02em] text-secondary drop-shadow-sm  md:text-7xl md:leading-[6rem]"
          />
        </section>

        <section className="my-5">
          <div>
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
              <Link to="mailto:hairbone787@gmail.com">hairbone787@gmail.com</Link>
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

        <section className="flex max-[990px]:flex-col max-[990px]:items-center max-[990px]:text-center gap-12 my-10 py-10">
          <div className="flex flex-col flex-1 justify-center p-5">
            <h3 className="">Services</h3>
            <p className=" text-4xl font-medium mt-3">
              We believe every client is <br />
              <span className="font-Gambetta"> unique</span> and deserves the
              most <br />
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

        <section className="w-auto h-auto">
          <div>
            <h3 className="text-center m-5">Testimonials</h3>
            <p className="text-center text-4xl font-normal mb-5">
              What other are saying
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center place-content-center p-5 gap-10 w-full  h-full ">
            <div className="">
              <video autoPlay loop muted className="rounded-3xl">
                <source src={testimonial} type="video/mp4" />
              </video>
            </div>

            <div className="  bg-card rounded-3xl p-5 h-full ">
              <div className="flex flex-col  justify-between h-full max-md:max-w-[400px]">
                <p className="md:leading-snug md:text-3xl text-xl">
                  The attention to detail and personal care is unmatched. Plus,
                  I love that they use eco-friendly products. I’ve found my
                  go-to salon, and I wouldn’t trust my hair with anyone else!”
                </p>
                <div className="relative mt-5">
                  <div>
                    <p className="font-normal max-md:text-xl ">Caroline M</p>
                    <p className="font-normal mt-2 text-xl max-md:text-sm">
                      Hair-Bone CLIENT
                    </p>
                  </div>
                  <div className="bg-primary absolute -right-[2rem] top-0 p-3 rounded-2xl">
                    <img
                      src={cliant1}
                      alt="cliant-img"
                      className="rounded-3xl md:w-24 min-[320px]:w-20"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="  bg-secondary t rounded-3xl p-5 h-full ">
              <div className="flex flex-col  justify-between h-full max-md:max-w-[400px]">
                <p className="md:leading-snug md:text-3xl text-xl text-primary">
                  Hair&Bone is hands down the best salon in Amsterdam! From the
                  moment I walked in, I felt welcomed and relaxed. The
                  atmosphere is so inviting, and the stylists really take the
                  time to understand what you want.
                </p>
                <div className="relative mt-5">
                  <div>
                    <p className="font-normal italic max-md:text-xl text-primary ">
                      Sophie J.
                    </p>
                    <p className="font-normal mt-2 text-xl max-md:text-sm text-primary">
                      Hair-Bone CLIENT
                    </p>
                  </div>
                  <div className="bg-primary absolute -right-[2rem] top-0 p-3 rounded-2xl">
                    <img
                      src={cliant2}
                      alt="cliant-img"
                      className="rounded-3xl md:w-24 min-[320px]:w-20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fef6f1] text-[#3b2311] py-16 px-5 md:px-24 text-start h-fit">
          {/* Quote section */}
          <div className="max-w-3xl mx-auto mb-5">
            <p className="font-serif text-8xl">“</p>
            <p className="md:text-5xl text-3xl !leading-snug  font-medium">
              From the moment I walked in, I felt welcomed and relaxed. The
              atmosphere is so inviting, and the stylists really
              <span className="italic"> take the time </span>to understand what
              you want.
            </p>
          </div>

          {/* Stats section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 !mt-10">
            <div className="text-center">
              <p className="text-5xl font-serif">8</p>
              <p className="text-sm  uppercase tracking-wide font-Satoshi">
                dedicated specialists
              </p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-serif">10+</p>
              <p className="text-sm font-Satoshi uppercase tracking-wide">
                years of experience
              </p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-serif">1</p>
              <p className="text-sm font-Satoshi uppercase tracking-wide">
                amazing location
              </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="text-center ">
              <h3>Blog</h3>
              <p className="my-5 text-4xl font-noraml">Check our articles</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-5 gap-4 ">
              <BlogCard
                button="tips"
                heading={"Reviving Your natural glow: haircolor rituals"}
                img={blogimg1}
              />
              <BlogCard
                button="news"
                heading={"Reviving Your natural glow: haircolor rituals"}
                img={blogimg2}
              />
              <BlogCard
                button="tips"
                heading={"Reviving Your natural glow: haircolor rituals"}
                img={blogimg3}
              />
            </div>
            <div className="text-center mt-5">
              <Link to="/blog">
                <button className="button2"> See All</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
