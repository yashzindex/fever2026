"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import SimpleBtn from "./SimpleBtn";

const navLinks = [
  { label: "Platform", href: "/" },
  { label: "Success Stories", href: "/" },
  { label: "About", href: "/" },
  { label: "Contact", href: "/" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleCollapse = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="py-6 xl:py-10 relative">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/" className="w-32 md:w-36 pr-2 relative z-50">
            <Image src={logo} alt="icon" />
          </Link>

          {/* Hamburger for mobile */}
          <button
            className="lg:hidden cursor-pointer relative z-[60] flex flex-col justify-center items-center w-8 h-8"
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
            className={`max-lg:w-full max-lg:absolute max-lg:top-0 max-lg:right-0 max-lg:z-50 ${
              menuOpen ? "max-lg:left-0" : "max-lg:-left-[100%]"
            } transition-all duration-300`}
          >
            <div className="max-lg:pt-20">
              <ul className="max-lg:w-full flex max-lg:flex-col max-lg:justify-center max-lg:items-center gap-8 lg:gap-12 max-lg:py-10 max-lg:backdrop-blur-3xl max-lg:bg-background max-lg:border-t max-lg:border-foreground">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm font-graphikMedium hover:underline underline-offset-1 transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="lg:hidden">
                  <SimpleBtn
                    btnText="Book a meeting"
                    btnLink="/"
                    btnClass=""
                    arrowClass=""
                  />
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
