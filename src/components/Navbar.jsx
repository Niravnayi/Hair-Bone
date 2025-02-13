import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-5 h-fit">
      <header className="h-fit">
        <div className="mx-auto h-fit max-w-screen-xl sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" to="#">
                <span className="sr-only">Logo</span>
                <img src={logo} alt="logo" className="w-36 md:w-44 mt-3" />
              </Link>
            </div>

            <div className="hidden min-[990px]:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm list-none">
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
                      to="/About"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <SignedOut>
                <button className="button2">
                  <SignInButton />
                </button>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>

              <div className="block min-[990px]:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <X /> : <MenuIcon />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-primary shadow-md p-5 min-[990px]:hidden"
          >
            <nav>
              <ul className="flex flex-col gap-4 text-center list-none">
                <li>
                  <Link
                    className="text-secondary transition hover:text-[#747282]"
                    to="/"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary transition hover:text-[#747282]"
                    to="/Services"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary transition hover:text-[#747282]"
                    to="/Contact"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary transition hover:text-[#747282]"
                    to="/About"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
