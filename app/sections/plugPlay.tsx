import React from "react";
import Image from "next/image";
import SimpleBtn from "../components/SimpleBtn";
import plugBlock2 from "@/public/images/plugBlock2.png";
import plugBlock3 from "@/public/images/plugBlock3.jpg";
import plugBlock5 from "@/public/images/plugBlock5.png";

const PlugPlay = () => {
  return (
    <section className="relative bg-foreground pt-10 md:pt-16 xl:pt-20 xxl:pt-32 2xl:pt-40 pb-10 md:pb-16 xxl:pb-24 2xl:pb-32">
      <div className="container">
        <div className="text-center text-background max-w-3xl xl:max-w-4xl mx-auto mb-9 md:mb-12 xl:mb-16 3xl:mb-24">
          <p className="text-sm mb-5">Platform</p>

          <h4 className="font-perfectly text-3xl sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-6xl 2xl:text-[54px] 3xxl:text-60 leading-tight">
            Fever’s Platform: From Plug-and-Play to Proven Results
          </h4>
          <div className="mt-7 lg:mt-10">
            <SimpleBtn
              btnText="Go to Platform"
              btnLink="/"
              btnClass="inline-flex text-sm"
              arrowClass="invert"
            />
          </div>
        </div>

        <div className="w-full max-w-[1329px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-6">
              <div className="h-full p-8 lg:p-10 rounded-2xl bg-background">
                <div className="w-full max-w-lg space-y-4 text-foreground">
                  <p className="text-sm">Aggregation</p>
                  <h5 className="text-xl xl:text-22 leading-snug">
                    Fever eliminates silos by connecting assets, markets, and
                    stakeholders in one system, unlocking grid value and
                    enabling effortless energy transition.
                  </h5>
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="h-full p-8 lg:p-10 !pb-0 rounded-2xl bg-[#2A2B2F]">
                <div className="w-full max-w-lg space-y-4 text-background mb-4">
                  <p className="text-sm">Plug-and-play integrations</p>
                  <h5 className="text-xl xl:text-22 leading-snug">
                    Launch fast without costly IT overhauls, we support all
                    energy assets that matter.
                  </h5>
                </div>
                <div className="h-36 w-full">
                  <Image
                    src={plugBlock2}
                    alt="image"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-12">
              <div className="h-full relative p-8 lg:p-10 pb-48 xl:pb-52 xxl:!pb-64 rounded-2xl overflow-hidden">
                <div className="w-full max-w-lg space-y-4 text-foreground relative z-10">
                  <p className="text-sm">Market access</p>
                  <h5 className="text-xl xl:text-22 leading-snug">
                    Handle the complexity of qualifying and managing distributed
                    assets.
                  </h5>
                </div>
                {/* background image */}
                <div className="absolute inset-0 h-full w-full">
                  <Image
                    src={plugBlock3}
                    alt="image"
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="h-full rounded-2xl bg-[#0D0D0D]">
                <div className="w-full max-w-sm space-y-4 p-8 lg:p-10 !pb-4  text-background">
                  <p className="text-sm">Reliable automation</p>
                  <h5 className="text-xl xl:text-22 leading-snug">
                    Transparent, compliant, and safe operations.
                  </h5>
                </div>
                <div className="h-36 w-full">
                  <Image
                    src={plugBlock5}
                    alt="image"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="h-full p-8 lg:p-10 rounded-2xl bg-background">
                <div className="w-full max-w-lg space-y-4 text-foreground">
                  <p className="text-sm">Fast results</p>
                  <h5 className="text-xl xl:text-22 leading-snug">
                    Quick wins that demonstrate measurable value and help secure
                    lasting internal support.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-16 2xl:mt-24 text-center">
          <SimpleBtn
            btnText="Go to Platform"
            btnLink="/"
            btnClass="inline-flex text-background"
            arrowClass="invert"
          />
        </div>
      </div>
    </section>
  );
};

export default PlugPlay;
