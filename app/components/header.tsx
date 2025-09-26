"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.svg";
import SimpleBtn from "./SimpleBtn";
import { useState } from "react";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleCollapse = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="py-6 xl:py-10 relative overflow-hidden">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/" className="w-32 md:w-36 pr-2 relative z-50">
            <Image src={logo} alt="icon" />
          </Link>

          {/* Hamburger for mobile */}
          <button
            className="lg:hidden relative z-[60] flex flex-col justify-center items-center w-8 h-8"
            aria-label="Toggle menu"
            onClick={toggleCollapse}
          >
            <span
              className={`block h-0.5 w-6 bg-black mb-1 transition-all ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-3 bg-black mb-1 ml-2 transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-black transition-all ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>

          {/* Desktop menu */}
          <div
            className={`max-lg:absolute max-lg:top-0 max-lg:z-50 max-lg:left-0 max-lg:right-0 ${
              menuOpen
                ? "max-lg:translate-x-0 max-lg:opacity-100"
                : "max-lg:translate-x-full max-lg:opacity-0"
            } transition-all duration-300`}
          >
            <div className="max-lg:pt-20">
              <ul className="max-lg:w-full flex max-lg:flex-col max-lg:justify-center max-lg:items-center gap-8 lg:gap-12 max-lg:py-5 max-lg:backdrop-blur-3xl max-lg:bg-background">
                <li>
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-graphikMedium hover:underline underline-offset-1 transition-all duration-300"
                  >
                    Platform
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-graphikMedium hover:underline underline-offset-1 transition-all duration-300"
                  >
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-graphikMedium hover:underline underline-offset-1 transition-all duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-graphikMedium hover:underline underline-offset-1 transition-all duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop button */}
          <div className="hidden lg:block">
            <SimpleBtn
              btnText="Book a meeting"
              btnLink="/"
              btnClass=""
              arrowClass=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
