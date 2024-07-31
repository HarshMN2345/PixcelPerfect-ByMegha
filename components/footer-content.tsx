import type { NextPage } from "next";

export type FooterContentType = {
  className?: string;
};

const FooterContent: NextPage<FooterContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch [background:linear-gradient(#fff,_#fff),_#dff1ff] flex flex-col items-start justify-start py-16 px-20 box-border relative shrink-0 max-w-full text-center text-21xl text-gray-800 font-title-medium mq800:py-[42px] mq800:px-10 mq800:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[254px] w-[254px] absolute !m-[0] bottom-[-139.8px] left-[calc(50%_-_127px)] [filter:blur(400px)] rounded-981xl bg-goldenrod-100" />
        <div className="h-44 w-44 absolute !m-[0] bottom-[-66.8px] left-[-88px] [filter:blur(400px)] rounded-981xl bg-turquoise" />
        <div className="h-56 w-56 absolute !m-[0] right-[26px] bottom-[-26.8px] [filter:blur(400px)] rounded-981xl bg-mediumpurple-100" />
        <div className="flex-1 [backdrop-filter:blur(4px)] rounded-45xl [background:linear-gradient(181.02deg,_#f1f1f1,_#fff)] overflow-hidden flex flex-col items-center justify-start pt-[99.7px] px-5 pb-[109.2px] box-border gap-[24.4px] max-w-full z-[1] mq450:pt-[65px] mq450:pb-[71px] mq450:box-border">
          <div className="w-[569px] h-[569px] relative overflow-hidden shrink-0 hidden max-w-full" />
          <div className="w-[731.4px] flex flex-col items-start justify-start gap-[29.9px] max-w-full shrink-0">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <h2 className="m-0 relative text-inherit font-medium font-inherit mq800:text-13xl mq450:text-5xl">
                Impressed? Let’s chat
              </h2>
            </div>
            <div className="self-stretch relative text-lg-6 leading-[30px] z-[1]">
              We only onboard two clients per month due to the personalized
              nature of our work.
            </div>
          </div>
          <div className="w-[732px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
            <button className="cursor-pointer py-2.5 px-[31px] bg-gray-600 rounded-81xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-goldenrod-200 hover:bg-dimgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-goldenrod-300">
              <a
                href="https://calendly.com/pixcelperfectofficial/demo-call"
                className="no-underline"
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
      </div>
      <div className="w-[254px] h-[254px] absolute !m-[0] bottom-[-354.8px] left-[calc(50%_-_127px)] [filter:blur(400px)] rounded-981xl bg-goldenrod-100" />
      <div className="w-44 h-44 absolute !m-[0] bottom-[-303.8px] left-[17px] [filter:blur(400px)] rounded-981xl bg-turquoise" />
      <div className="w-56 h-56 absolute !m-[0] right-[106px] bottom-[-241.8px] [filter:blur(400px)] rounded-981xl bg-mediumpurple-100" />
    </div>
  );
};

export default FooterContent;
