import type { NextPage } from "next";

export type PartnerTypesType = {
  className?: string;
};

const PartnerTypes: NextPage<PartnerTypesType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-col items-start justify-start pt-16 px-[69px] pb-[71px] box-border gap-[40px] max-w-full z-[1] text-left text-21xl text-primary font-title-medium mq800:gap-[20px] mq800:pt-[42px] mq800:px-[34px] mq800:pb-[46px] mq800:box-border mq450:pt-[27px] mq450:pb-[30px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[3px] pl-0">
        <h2 className="m-0 relative text-inherit leading-[60px] font-medium font-inherit mq800:text-13xl mq800:leading-[48px] mq450:text-5xl mq450:leading-[36px]">
          Our Partners Hire us for...
        </h2>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start gap-[16px] max-w-full grid-cols-[repeat(3,_minmax(299px,_1fr))] text-13xl text-gray-900 mq800:grid-cols-[minmax(299px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(299px,_519px))]">
        <div className="h-[549px] rounded-xl bg-lavender-100 overflow-hidden flex flex-col items-start justify-start pt-10 px-4 pb-56 box-border gap-[32px] max-w-full mq1125:pt-[26px] mq1125:pb-[146px] mq1125:box-border mq450:gap-[16px] mq450:pt-5 mq450:pb-[95px] mq450:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] shrink-0">
            <div className="self-stretch relative font-semibold mq800:text-7xl mq450:text-lgi">
              MVP Design
            </div>
            <div className="self-stretch relative text-sm leading-[24px]">{`We design stunning MVPs to impress investors & validate your idea with early users.`}</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border gap-[16px] shrink-0 max-w-full text-sm text-primary">
            <div className="self-stretch rounded-81xl bg-lavender-200 flex flex-row items-center justify-center p-3 box-border max-w-full">
              <div className="flex-1 flex flex-row items-center justify-start gap-[4px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative min-h-[18px]"
                  alt=""
                  src="/svg.svg"
                />
                <div className="flex-1 relative leading-[18px] font-medium inline-block max-w-[calc(100%_-_22px)]">
                  Stand out with a premium user experience
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-81xl bg-lavender-200 flex flex-row items-center justify-center p-3 box-border max-w-full">
              <div className="flex-1 flex flex-row items-center justify-start gap-[4px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative min-h-[18px]"
                  alt=""
                  src="/svg.svg"
                />
                <div className="flex-1 relative leading-[18px] font-medium inline-block max-w-[calc(100%_-_22px)]">
                  Streamlined process to go to market fast
                </div>
              </div>
            </div>
            <div className="rounded-81xl bg-lavender-200 flex flex-row items-center justify-center p-3 box-border max-w-[103%] shrink-0">
              <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[4px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative min-h-[18px]"
                  alt=""
                  src="/svg.svg"
                />
                <div className="relative tracking-[-0.01px] leading-[18px] font-medium">
                  Meticulous hand off files for parallel development
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[277px] relative rounded bg-mediumpurple-100 box-border overflow-hidden shrink-0 border-[1px] border-solid border-primary">
            <img
              className="absolute top-[26px] left-[23px] w-80 h-[225px] object-cover"
              loading="lazy"
              alt=""
              src="/image-15@2x.png"
            />
          </div>
        </div>
        <div className="h-[549px] rounded-xl bg-honeydew overflow-hidden flex flex-col items-start justify-start pt-10 pb-56 pr-2 pl-4 box-border gap-[32px] max-w-full mq1125:pt-[26px] mq1125:pb-[146px] mq1125:box-border mq450:gap-[16px] mq450:pt-5 mq450:pb-[95px] mq450:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] shrink-0">
            <div className="self-stretch relative font-semibold mq800:text-7xl mq450:text-lgi">
              Saas Redesign
            </div>
            <div className="self-stretch relative text-sm leading-[24px]">{`We design stunning MVPs to impress investors & validate your idea with early users.`}</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border gap-[16px] shrink-0 max-w-full text-sm text-primary">
            <div className="self-stretch rounded-81xl bg-lightgoldenrodyellow flex flex-row items-center justify-center p-3 box-border max-w-full">
              <div className="flex-1 flex flex-row items-center justify-start py-0 pr-9 pl-0 box-border gap-[4px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative min-h-[18px]"
                  alt=""
                  src="/svg-3.svg"
                />
                <div className="relative leading-[18px] font-medium">
                  Fix user experience issues like retention etc
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-81xl bg-lightgoldenrodyellow flex flex-row items-center justify-center p-3 box-border max-w-full">
              <div className="flex-1 flex flex-row items-center justify-start gap-[4px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative min-h-[18px]"
                  alt=""
                  src="/svg-3.svg"
                />
                <div className="flex-1 relative leading-[18px] font-medium inline-block max-w-[calc(100%_-_22px)]">
                  Differentiate from competitors with a redesign
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-81xl bg-lightgoldenrodyellow flex flex-row items-center justify-center p-3 box-border max-w-full">
              <div className="flex-1 flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[4px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative min-h-[18px]"
                  alt=""
                  src="/svg-3.svg"
                />
                <div className="relative leading-[18px] font-medium">
                  Raise your next round with an upgraded product
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[215px] relative rounded bg-mediumaquamarine box-border overflow-hidden shrink-0 border-[1px] border-solid border-primary">
            <img
              className="absolute top-[25px] left-[36px] w-[294px] h-[222px] object-cover"
              loading="lazy"
              alt=""
              src="/image-151@2x.png"
            />
          </div>
        </div>
        <div className="h-[549px] rounded-xl bg-oldlace overflow-hidden flex flex-col items-start justify-start pt-10 px-4 pb-56 box-border gap-[32px] max-w-full mq1125:pt-[26px] mq1125:pb-[146px] mq1125:box-border mq450:gap-[16px] mq450:pt-5 mq450:pb-[95px] mq450:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] shrink-0">
            <div className="self-stretch relative font-semibold mq800:text-7xl mq450:text-lgi">
              Branding
            </div>
            <div className="self-stretch relative text-sm leading-[24px]">{`We design stunning MVPs to impress investors & validate your idea with early users.`}</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border gap-[16px] shrink-0 max-w-full text-sm text-primary">
            <div className="self-stretch rounded-81xl bg-wheat flex flex-row items-center justify-center p-3 box-border max-w-full">
              <div className="flex-1 flex flex-row items-center justify-start gap-[4px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative min-h-[18px]"
                  alt=""
                  src="/svg-6.svg"
                />
                <div className="relative leading-[18px] font-medium">
                  Custom strategies to establish a unique identity
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-81xl bg-wheat flex flex-row items-center justify-center p-3 box-border max-w-full">
              <div className="flex-1 flex flex-row items-center justify-start py-0 pr-6 pl-0 box-border gap-[3px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative min-h-[18px]"
                  alt=""
                  src="/svg-6.svg"
                />
                <div className="relative leading-[18px] font-medium">
                  Cohesive and compelling brand experiences
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-81xl bg-wheat flex flex-row items-center justify-center p-3 box-border max-w-full">
              <div className="flex-1 flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[4px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative min-h-[18px] shrink-0"
                  alt=""
                  src="/svg-6.svg"
                />
                <div className="relative leading-[18px] font-medium">{`Fit the budget of startups & growing businesses`}</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[277px] relative rounded bg-goldenrod-200 box-border overflow-hidden shrink-0 border-[1px] border-solid border-primary">
            <img
              className="absolute top-[26px] left-[23px] w-80 h-[225px] object-cover"
              alt=""
              src="/image-15@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerTypes;
