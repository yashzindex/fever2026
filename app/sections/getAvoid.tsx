import React from "react";
import Image, { StaticImageData } from "next/image";
type ListItem = string;

interface SectionContent {
  title: string;
  subText: string;
  list: ListItem[];
}

interface GetAvoidProps {
  getContent: SectionContent;
  avoidContent: SectionContent;
  getImage: StaticImageData;
  avoidImage: StaticImageData;
}

const GetAvoid: React.FC<GetAvoidProps> = ({
  getContent,
  avoidContent,
  getImage,
  avoidImage,
}) => {
  return (
    <section className="relative py-8 sm:py-10 md:py-14 xl:py-16 xxl:py-20 2xl:py-24">
      <div className="container">
        <div className="sm:px-6 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* What You Get Section */}
            <div className="relative rounded-2xl overflow-hidden bg-white pt-11 px-6 pb-40 md:pb-56 lg:pb-52 xxl:pb-60">
              <div className="mb-8 xxl:mb-11 text-center">
                <p className="text-sm mb-3">{getContent.subText}</p>
                <h3 className="text-2xl sm:text-3xl md:text-[34px] xl:text-4xl 2xl:text-46 font-perfectly leading-tight">
                  {getContent.title}
                </h3>
              </div>
              <div>
                <div className="flex max-sm:flex-col gap-2 sm:gap-5">
                  <div className="flex-1 space-y-2">
                    {getContent.list.slice(0, 3).map((item, index) => (
                      <div
                        key={index}
                        className="relative pl-8 after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:size-[5px] after:bg-foreground after:left-2 after:rounded-full text-sm md:text-base xl:text-lg xxl:text-xl 2xl:text-22"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 space-y-2">
                    {getContent.list.slice(3).map((item, index) => (
                      <div
                        key={index}
                        className="relative pl-8 after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:size-[5px] after:bg-foreground after:left-2 after:rounded-full text-sm md:text-base xl:text-lg xxl:text-xl 2xl:text-22"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-[15%] sm:left-[20%] right-[15%] sm:right-[20%] h-36 md:h-48 lg:h-44 xxl:h-52">
                <Image src={getImage} alt="get-image" className="h-full getShadow" />
              </div>
            </div>

            {/* What You Avoid Section */}
            <div className="relative rounded-2xl bg-[#1B1C1F] pt-11 px-6 pb-40 md:pb-56 lg:pb-52 xxl:pb-60">
              <div className="mb-8 xxl:mb-11 text-center">
                <p className="text-background text-sm mb-3">
                  {avoidContent.subText}
                </p>
                <h3 className="text-background text-2xl sm:text-3xl md:text-[34px] xl:text-4xl 2xl:text-46 font-perfectly leading-tight">
                  {avoidContent.title}
                </h3>
              </div>
              <div>
                <div className="flex max-sm:flex-col gap-2 sm:gap-5">
                  <div className="flex-1 space-y-2">
                    {avoidContent.list.slice(0, 3).map((item, index) => (
                      <div
                        key={index}
                        className="relative pl-8 after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:size-[5px] after:bg-background after:left-2 after:rounded-full text-sm md:text-base xl:text-lg xxl:text-xl 2xl:text-22 text-background"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 space-y-2">
                    {avoidContent.list.slice(3).map((item, index) => (
                      <div
                        key={index}
                        className="relative pl-8 after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:size-[5px] after:bg-background after:left-2 after:rounded-full text-sm md:text-base xl:text-lg xxl:text-xl 2xl:text-22 text-background"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-[8%] sm:left-[20%] right-[8%] sm:right-[20%] h-36 md:h-48 lg:h-44 xxl:h-52">
                <Image src={avoidImage} alt="avoid-image" className="h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAvoid;
