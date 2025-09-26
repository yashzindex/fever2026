
import React from "react";
import BlackBtn from "../components/BlackBtn";

const Banner = () => {
  return (
    <section className="relative pt-12 md:pt-20 lg:pt-24 xl:pt-32 xxl:pt-36 2xl:pt-44 3xl:pt-52 pb-14 md:pb-20 xl:pb-24 xxl:pb-28 2xl:pb-32">
      <div className="container">
        <div>
          <h1 className="font-perfectly text-3xl sm:text-4xl md:text-42 lg:text-46 xl:text-6xl xxl:text-7xl 2xl:text-80 mb-4">
            The Platform Energy <br /> Companies Trust.
          </h1>
          <div className="w-full md:w-5/6 xl:w-3/6">
            <p className="text-base xxl:text-lg 2xl:text-xl leading-relaxed">
              Energy companies use Fever&apos;s platform to aggregate and operate
              their customers&apos; energy assets, so they can optimise them and turn
              flexibility into revenue.
            </p>
          </div>
          <div className="mt-5">
            <BlackBtn btnText="Book a meeting" btnLink="/" btnClass="" arrowClass="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
