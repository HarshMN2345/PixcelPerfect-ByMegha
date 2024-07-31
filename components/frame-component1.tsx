import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full text-left text-base-7 text-gray-600 font-title-medium mq800:gap-[24px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[48px] max-w-full mq800:gap-[24px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="flex flex-row flex-wrap items-start justify-start gap-[16.1px] max-w-full">
            <div className="rounded-3xl bg-white overflow-hidden flex flex-row items-end justify-start pt-1.5 pb-[7px] pr-[13px] pl-4 gap-[8px] z-[1] border-[1px] border-solid border-gray-1000">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                <img
                  className="w-5 h-[19px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/container.svg"
                />
              </div>
              <div className="relative leading-[24px]">
                UI/UX Design Partner For SaaS
              </div>
              <div className="h-10 w-[303.5px] relative rounded-3xl box-border hidden border-[1px] border-solid border-gray-1000" />
            </div>
            <div className="rounded-3xl bg-white overflow-hidden flex flex-row items-end justify-start pt-1.5 pb-[7px] pr-[13px] pl-4 gap-[8px] z-[1] border-[1px] border-solid border-gray-1000">
              <div className="h-[19px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
                <img
                  className="w-5 h-[19px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/container-1.svg"
                />
              </div>
              <div className="relative leading-[24px]">
                UI/UX Design Partner For SaaS
              </div>
              <div className="h-10 w-[303.5px] relative rounded-3xl box-border hidden border-[1px] border-solid border-gray-1000" />
            </div>
          </div>
        </div>
        <h1 className="m-0 self-stretch relative text-29xl tracking-[0.04em] leading-[64px] font-medium font-inherit text-center mq800:text-19xl mq800:leading-[51px] mq450:text-10xl mq450:leading-[38px]">{`Premium User Engaging and User-Centric Designs for B2B SaaS `}</h1>
      </div>
      <div className="self-stretch relative text-xl tracking-[0.04em] leading-[24px] text-center mq450:text-base mq450:leading-[19px]">{`We create stunning MVPs or redesign your existing product for a superior experience `}</div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <button className="cursor-pointer py-2.5 px-[31px] bg-gray-600 rounded-81xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-goldenrod-200 hover:bg-dimgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-goldenrod-300">
          <a
            href="https://calendly.com/pixcelperfectofficial/demo-call"
            className="[text-decoration:none]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative text-lg leading-[32px] font-medium font-title-medium text-white text-left inline-block min-w-[109px]">
              Get in Touch
            </div>
          </a>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent1;
