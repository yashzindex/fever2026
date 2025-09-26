import React from "react";
import Link from "next/link";
import Image from "next/image";
import footerLogo1 from "@/public/images/footerLogo1.svg";
import feverWhite from "@/public/images/feverWhite.svg";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/", label: "Platform" },
  { href: "/", label: "Customer Cases" },
  { href: "/", label: "About Fever" },
  { href: "/", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="pt-20 md:pt-28 xl:pt-38 xxl:pt-48 2xl:pt-64 pb-10 xxl:pb-14 bg-foreground">
      <div className="container">
        <ul className="space-y-2.5 max-md:text-center">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-background text-base leading-normal hover:underline underline-offset-1 transition-all duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 xxl:mt-20 flex max-md:flex-col max-md:gap-3 items-center">
          <div className="flex-1 ">
            <Link href="/" className="inline-flex gap-4">
              <Image
                src={footerLogo1}
                alt="footerLogo1"
                className="h-9 w-9"
              />
              <Image
                src={feverWhite}
                alt="feverWhite"
                className="object-contain"
              />
            </Link>
          </div>

          <div className="flex-1 text-right">
            <div className="text-background max-xxs:text-xs text-sm leading-normal">
              © 2025 ALL RIGHTS RESERVED,{" "}
              <Link
                href="/"
                className="hover:underline underline-offset-1 transition-all duration-300"
              >
                FEVER ENERGY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
