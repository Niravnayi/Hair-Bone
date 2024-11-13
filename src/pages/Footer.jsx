import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#3b2311] text-[#f0e6e1] py-12 px-8 md:px-24 mt-10 ">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Left section */}
          <div className="mb-10 md:mb-0">
            <h2 className="text-2xl italic text-primary">
              Hair & <span className="font-light">Bone</span>
            </h2>
            <div className="mt-4 space-y-2">
              <p className="text-primary font-normal text-xl">
                <span className="inline-block mr-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 9L13.5 12L18 9"
                      stroke="#FFF8F3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 13.5H5"
                      stroke="#FFF8F3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M0.999999 10.5H5"
                      stroke="#FFF8F3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 7.5V7C5 5.89543 5.89543 5 7 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H7C5.89543 19 5 18.1046 5 17V16.5"
                      stroke="#FFF8F3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                Hair&Bone@gmail.com
              </p>
              <p className="text-primary font-normal text-xl">
                <span className="inline-block mr-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.1183 14.702L14 15.5C11.2183 14.1038 9.50003 12.5 8.50003 10L9.26998 5.8699L7.81455 2L4.06363 2C2.93608 2 2.04817 2.93178 2.21657 4.04668C2.63698 6.83 3.87656 11.8765 7.50003 15.5C11.3052 19.3052 16.7858 20.9564 19.802 21.6127C20.9668 21.8662 22 20.9575 22 19.7655L22 16.1812L18.1183 14.702Z"
                      stroke="#FFF8F3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                +91 97732 77350
              </p>
              <p className="text-primary font-normal text-xl">
                <span className="inline-block mr-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                      stroke="#FFF8F3"
                      stroke-width="1.5"
                    />
                    <path
                      d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z"
                      fill="#FFF8F3"
                      stroke="#FFF8F3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Pragatinagar, Nirnay Nagar, Ahmedabad
              </p>
            </div>
            <Link to="/auth">
              <button className="mt-4 px-6 py-2 border border-[#f0e6e1] rounded-full hover:bg-[#f0e6e1] hover:text-[#3b2311] transition">
                Login
              </button>
            </Link>
          </div>

          {/* Links section */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {/* Column 1 */}
            <div>
              <h3 className="text-primary">Main pages</h3>
              <ul className="mt-4 space-y-2 list-none">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-primary">Other</h3>
              <ul className="mt-4 space-y-2 list-none">
                <li>
                  <Link to="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Legal
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    404
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className=" text-primary">CMS</h3>
              <ul className="mt-4 space-y-2 list-none">
                <li>
                  <Link to="#" className="hover:underline">
                    Service inner
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Blog post
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Blog tag
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Product
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 border-t border-[#f0e6e1] pt-6 text-center md:text-left">
          <p className="text-lg text-primary">
            Template designed with love by{" "}
            <Link to="#" className="hover:underline font-Gambetta">
              Nirav
            </Link>
            , powered by Hair & Bone
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
