import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import clientBg from "@/public/images/clientBg.jpg";
import clientIcon1 from "@/public/images/clientIcon1.svg";
import clientIcon2 from "@/public/images/clientIcon2.svg";
import clientIcon3 from "@/public/images/clientIcon3.svg";
import clientIcon4 from "@/public/images/clientIcon4.svg";
import clientIcon5 from "@/public/images/clientIcon5.svg";
import clientIcon6 from "@/public/images/clientIcon6.svg";

const clientIcons = [
  clientIcon1,
  clientIcon2,
  clientIcon3,
  clientIcon4,
  clientIcon5,
  clientIcon6,
  clientIcon1,
  clientIcon2,
  clientIcon3,
  clientIcon4,
  clientIcon5,
  clientIcon6,
  clientIcon1,
  clientIcon2,
  clientIcon3,
  clientIcon4,
  clientIcon5,
  clientIcon6,
  clientIcon1,
  clientIcon2,
  clientIcon3,
  clientIcon4,
  clientIcon5,
  clientIcon6,
  clientIcon1,
  clientIcon2,
  clientIcon3,
  clientIcon4,
  clientIcon5,
  clientIcon6,
  clientIcon1,
  clientIcon2,
  clientIcon3,
  clientIcon4,
  clientIcon5,
  clientIcon6,
  clientIcon1,
  clientIcon2,
  clientIcon3,
  clientIcon4,
  clientIcon5,
  clientIcon6,
  clientIcon1,
  clientIcon2,
  clientIcon3,
  clientIcon4,
  clientIcon5,
  clientIcon6,
];

const Client = () => {
  return (
    <section className="relative h-80 md:h-96 xl:h-[440px] 2xl:h-[665px] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src={clientBg} alt="clientBg" className="h-full w-full" />
      </div>

      <div className="pb-10 xl:pb-16 h-full flex items-end">
        <div className="h-fit w-full max-w-[1919px] mx-auto">
          <Marquee>
            {clientIcons.map((icon, index) => (
              <div key={index} className="block mx-8 md:mx-10 2xl:mx-16 ">
                <Image
                  src={icon}
                  alt={`client-icon-${index}`}
                  className="max-w-40"
                />
              </div>
            ))}
          
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Client;
