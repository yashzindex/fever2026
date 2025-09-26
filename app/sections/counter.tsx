import React from "react";

const Counter = () => {
  // Array of counters with their values and labels
  const counters = [
    { value: "600,000+", label: "households reach" },
    { value: "3x", label: "increase customer revenue" },
    { value: "100MW+", label: "flexibility unlocked" }
  ];

  return (
    <section className="relative py-8 sm:py-10 md:py-14 xl:py-16 xxl:py-20 2xl:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {counters.map((counter, index) => (
            <div key={index} className="p-5 md:p-8 flex flex-col gap-3 text-center">
              <span className="font-perfectly text-3xl sm:text-4xl md:text-42 lg:text-46 xl:text-6xl xxl:text-7xl 2xl:text-80">
                {counter.value}
              </span>
              <p className="text-sm">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
