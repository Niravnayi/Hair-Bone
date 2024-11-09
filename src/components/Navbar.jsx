import React from "react";
import logo from "../assets/logo.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" py-5 h-fit">
      <header className="h-fit">
        <div className="mx-auto h-fit max-w-screen-xl  sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between ">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" to="#">
                <span className="sr-only">Logo</span>
                <div>
                  <img src={logo} alt="logo" className="w-36 md:w-44 mt-3" />
                </div>
              </Link>
            </div>

            <div className="hidden min-[990px]:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm list-none ">
                  <li>
                    <Link
                      className="text-secondary transition hover:text-[#747282]"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-secondary transition hover:text-[#747282]"
                      to="/Services"
                    >
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-secondary transition hover:text-[#747282]"
                      to="/Contact"
                    >
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-secondary transition hover:text-[#747282]"
                      to="About"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Select>
                      <SelectTrigger className="w-fit text-lg">
                        <SelectValue placeholder="Other" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="border-none">
                          <SelectLabel>Other</SelectLabel>
                          <Link to="/Contact">
                            <SelectItem value="apple">home</SelectItem>
                          </Link>
                          <SelectItem value="banana">blog</SelectItem>
                          <SelectItem value="blueberry">shop</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="button "
                  to="/auth"
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-secondary "
                    to="/auth/register"
                  >
                    Register
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
