import React from "react";
import Image from "next/image";
import mailBg from "@/public/images/mailBg.jpg";

const MailBg = () => {
  return (
    <section className="relative py-32 md:py-40 xxl:py-48 3xl:py-56">
      <div className="absolute inset-0 h-full w-full -z-[1]">
        <Image
          src={mailBg}
          alt="image"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="md:max-w-xl text-background">
            <h6 className="text-xl md:text-2xl 2xl:text-30 leading-tight tracking-[-0.3px]">
              Your competitors aren’t standing still <br /> — book a meeting
              today.
            </h6>
          </div>

          {/* email */}
          <div className="relative max-w-2xl xxl:pl-7">
            <label htmlFor="email" className="sr-only"></label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-5 lg:pr-44 lg:py-7 lg:pl-8 w-full lg:h-full rounded-2xl placeholder:text-sm text-background text-base max-lg:leading-snug outline-none backdrop-blur-md border border-background/15"
            />

            <button className="relative cursor-pointer max-lg:mt-3 mx-auto lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-3 outline-none rounded-xl py-3 lg:py-5 px-6 bg-background text-foreground text-sm font-graphikMedium hover:bg-background/80 transition-all duration-300">
              Book an intro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailBg;
