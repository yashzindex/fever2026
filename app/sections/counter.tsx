import React from "react";

const Counter = () => {
  return (
    <section className="relative py-8 sm:py-10 md:py-14 xl:py-16 xxl:py-20 2xl:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-5 md:p-8 flex flex-col gap-3 text-center">
            <span className="font-perfectly text-3xl sm:text-4xl md:text-42 lg:text-46 xl:text-6xl xxl:text-7xl 2xl:text-80">
              600,000+
            </span>
            <p>households reach</p>
          </div>
          <div className="p-5 md:p-8 flex flex-col gap-3 text-center">
            <span className="font-perfectly text-3xl sm:text-4xl md:text-42 lg:text-46 xl:text-6xl xxl:text-7xl 2xl:text-80">
              3x
            </span>
            <p>increase customer revenue</p>
          </div>
          <div className="p-5 md:p-8 flex flex-col gap-3 text-center">
            <span className="font-perfectly text-3xl sm:text-4xl md:text-42 lg:text-46 xl:text-6xl xxl:text-7xl 2xl:text-80">
              100MW+
            </span>
            <p>flexibility unlocked</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
