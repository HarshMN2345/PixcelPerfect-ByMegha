import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-16 box-border max-w-full text-left text-13xl text-primary font-title-medium mq1125:pb-[42px] mq1125:box-border mq450:pb-[27px] mq450:box-border ${className}`}
    >
      <div className="flex-1 [background:linear-gradient(180deg,_#fff,_#fff_42.35%)] flex flex-row items-start justify-start pt-16 px-[69px] pb-[51px] box-border max-w-full mq800:gap-[20px] mq800:pt-[42px] mq800:px-[34px] mq800:pb-[33px] mq800:box-border mq450:pt-[27px] mq450:pb-[21px] mq450:box-border">
        <div className="flex-1 rounded-17xl [background:linear-gradient(180deg,_#f1f1f1,_rgba(247,_244,_242,_0))] flex flex-col items-start justify-start p-10 box-border relative gap-[39px] max-w-full mq800:gap-[19px] mq800:pt-[26px] mq800:pb-[26px] mq800:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch relative leading-[48px] font-medium mq800:text-7xl mq800:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
              Deliver a great user experience to your customers with a
              professionally designed product
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/design-element.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start relative gap-[198px] max-w-full text-5xl mq800:gap-[49px] mq450:gap-[25px] mq1300:flex-wrap mq1300:gap-[99px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border min-w-[365px] max-w-full mq800:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[40px] mq800:gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq800:gap-[16px]">
                  <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[163px] pl-0 gap-[7px] mq800:pr-[81px] mq800:box-border mq450:pr-5 mq450:box-border">
                    <img
                      className="h-7 w-7 relative overflow-hidden shrink-0"
                      alt=""
                      src="/work-icon.svg"
                    />
                    <div className="relative mq450:text-lgi">
                      Work directly with a design lead
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[163px] pl-0 gap-[8px] mq800:pr-[81px] mq800:box-border">
                    <img
                      className="h-7 w-7 relative overflow-hidden shrink-0"
                      alt=""
                      src="/work-icon.svg"
                    />
                    <div className="relative mq450:text-lgi">{`Fair & transparent pricing`}</div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="h-7 w-7 relative overflow-hidden shrink-0"
                      alt=""
                      src="/work-icon.svg"
                    />
                    <div className="relative mq450:text-lgi">{`Professionally-designed websites & web-apps`}</div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[147px] pl-0 gap-[8px] mq800:pr-[73px] mq800:box-border mq450:pr-5 mq450:box-border">
                    <img
                      className="h-7 w-7 relative overflow-hidden shrink-0"
                      alt=""
                      src="/work-icon.svg"
                    />
                    <div className="relative mq450:text-lgi">
                      In-depth developer hand-off files
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[163px] pl-0 gap-[8px] mq450:pr-5 mq450:box-border">
                    <img
                      className="h-7 w-7 relative overflow-hidden shrink-0"
                      alt=""
                      src="/work-icon.svg"
                    />
                    <div className="relative mq450:text-lgi">
                      Niche SaaS expertise
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer py-2.5 px-[31px] bg-gray-600 rounded-81xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-goldenrod-200 hover:bg-dimgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-goldenrod-300">
                  <div className="relative text-lg leading-[32px] font-medium font-title-medium text-white text-left inline-block min-w-[83px]">
                    Let’s chat
                  </div>
                </button>
              </div>
            </div>
            <div className="h-[437px] w-[389px] relative bg-gainsboro min-w-[389px] max-w-full mq800:min-w-full mq1300:flex-1" />
            <div className="h-56 w-56 absolute !m-[0] right-[-72px] bottom-[-138px] [filter:blur(400px)] rounded-981xl bg-mediumpurple-100 z-[1]" />
          </div>
          <div className="w-44 h-44 absolute !m-[0] bottom-[-96px] left-[-52px] [filter:blur(400px)] rounded-981xl bg-turquoise z-[2]" />
          <div className="w-[254px] h-[254px] absolute !m-[0] bottom-[-180px] left-[calc(50%_-_127px)] [filter:blur(400px)] rounded-981xl bg-goldenrod-100 z-[2]" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
