import React from "react";
import blockBg1 from "@/public/images/blockBg1.png";
import blockBg2 from "@/public/images/blockBg2.png";
import blockBg3 from "@/public/images/blockBg3.png";
import Image from "next/image";

const Platform = () => {
  return (
    <section className="relative mb-2 md:mb-20 lg:mb-28 xl:mb-36 2xl:mb-44 3xl:mb-52">
      <div className="container">
        <div className="sm:px-6 xl:px-14 py-5">
          <div className="max-md:text-center space-y-5 md:mb-5 xxl:mb-5">
            <p className="text-sm">Platform</p>

            <h4 className="font-perfectly text-3xl sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-6xl 2xl:text-[54px] 3xxl:text-60 leading-tight">
              Why our customers chose Fever.
            </h4>
          </div>

          <div className="space-y-8 py-10">
            {/* first box */}
            <div className="bg-[#1B1C1F] relative rounded-2xl p-6 xxs:p-10 max-lg:!pb-0 xl:p-16 xxl:p-20 lg:min-h-[380px] xl:min-h-[430px] xxl:min-h-[450px] 2xl:min-h-[500px]">
              {/* content */}
              <div className="max-lg:text-center lg:max-w-lg xl:max-w-xl xxl:max-w-2xl">
                <h4 className="text-white font-perfectly text-2xl sm:text-3xl md:text-[34px] xl:text-4xl 2xl:text-46 leading-tight">
                  <span className="block text-[#838385]">First reason.</span>{" "}
                  Own the customer experience.
                </h4>
                <div className="mt-7 text-white text-base lg:text-lg 2xl:text-xl 3xl:text-22 leading-snug space-y-3 xxl:space-y-5">
                  <p>
                    They want to offer a cohesive, high-quality experience under
                    their own brand—on their terms. That means having full
                    control over the services and tariffs they provide, and the
                    ability to customise every part of the customer journey.
                  </p>
                </div>
              </div>
              {/* backkgrounds and images */}
              <div className="relative max-lg:mt-5 max-lg:mx-auto lg:absolute bottom-0 right-5 lg:right-20 xl:right-32 w-44 sm:w-60 lg:w-52 xl:w-60 xxl:w-64 h-64 sm:h-72 lg:h-[80%]">
                <Image src={blockBg1} alt="image" className="h-full w-full" />
              </div>
            </div>
            {/* second box */}
            <div className="bg-white relative overflow-hidden rounded-2xl p-6 xxs:p-10 max-lg:!pt-0 xl:p-16 xxl:p-20 lg:min-h-[380px] xl:min-h-[430px] xxl:min-h-[450px] 2xl:min-h-[500px]">
              {/* backkgrounds and images */}
              <div className="relative max-lg:mb-5 max-lg:mx-auto max-lg:rounded-b-2xl lg:rounded-t-2xl lg:absolute lg:top-10 lg:bottom-0 lg:left-7 lg:w-xs xl:w-sm xxl:w-md 2xl:w-md 3xl:w-[530px] shadow-sm shadow-black">
                <Image
                  src={blockBg2}
                  alt="image"
                  className="w-full h-full max-lg:rounded-b-2xl lg:rounded-t-2xl object-cover"
                />
              </div>
              {/* content */}
              <div className="lg:ml-auto lg:max-w-md xl:max-w-lg xxl:max-w-xl 2xl:max-w-3xl">
                <h4 className="text-foreground font-perfectly text-2xl sm:text-3xl md:text-[34px] xl:text-4xl 2xl:text-46 leading-tight">
                  <span className="block text-[#838385]">Second reason.</span>{" "}
                  Own the customer experience.
                </h4>
                <div className="mt-7 text-foreground text-base lg:text-lg 2xl:text-xl 3xl:text-22 leading-snug space-y-3 xxl:space-y-5">
                  <p>
                    They want to offer a cohesive, high-quality experience under
                    their own brand—on their terms. That means having full
                    control over the services and tariffs they provide, and the
                    ability to customise every part of the customer journey.
                  </p>
                </div>
              </div>
            </div>
            {/* third box */}
            <div className="relative rounded-2xl overflow-hidden p-6 xxs:p-10 xl:p-16 xxl:p-20 lg:min-h-[380px] xl:min-h-[430px] xxl:min-h-[450px] 2xl:min-h-[500px]">
              {/* content */}
              <div className="max-lg:text-center lg:max-w-lg xl:max-w-xl xxl:max-w-2xl">
                <h4 className="text-white font-perfectly text-2xl sm:text-3xl md:text-[34px] xl:text-4xl 2xl:text-46 leading-tight">
                  <span className="block text-[#838385]">Third reason. </span>{" "}
                  Drive real business impact.
                </h4>
                <div className="mt-7 text-white text-base lg:text-lg 2xl:text-xl 3xl:text-22 leading-snug space-y-3 xxl:space-y-5">
                  <p>
                    They look for real impact; measurable savings and earnings
                    for their customers, improved loyalty, and reduced churn.
                  </p>
                  <p>Fever helps make those outcomes a reality.</p>
                </div>
              </div>
              {/* backkgrounds and images */}
              <div
                style={{
                  background:
                    "linear-gradient(277deg, rgba(0, 0, 0, 0) 21.63%, #000 66.18%);",
                }}
                className="absolute inset-0 -z-[1]"
              ></div>
              <div className="absolute inset-0 -z-[2]">
                <Image
                  src={blockBg3}
                  alt="image"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
