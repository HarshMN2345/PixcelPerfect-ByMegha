import type { NextPage } from "next";
import HamburgerMenu from "./HamburgerMenu";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[24px] max-w-full text-left text-5xl text-gray-600 font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq1125:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <div className="w-11 overflow-hidden shrink-0 flex flex-col items-center justify-center pt-[6.8px] px-1.5 pb-[6.9px] box-border">
            <img
              className="w-[30.6px] h-[30.3px] relative"
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <a className="[text-decoration:none] relative font-medium text-[inherit] mq450:text-lgi">
            Pixcel Perfect
          </a>
        </div>
        {/* 820 breakpoint */}
        {/* Desktop Navigation */}
        <nav className="m-0 w-[491px] flex flex-row items-start justify-start max-w-full mq800:hidden">
          <nav className="m-0 flex-1 flex flex-row items-center justify-between max-w-full gap-[20px] whitespace-nowrap text-left text-lg text-gray-600 font-title-medium mq800:flex-wrap">
            <a className="[text-decoration:none] relative tracking-[0.04em] text-[inherit] inline-block min-w-[80px]">
              Services
            </a>
            <a className="[text-decoration:none] relative tracking-[0.04em] text-[inherit] inline-block min-w-[78px]">
              Portfolio
            </a>
            <a className="[text-decoration:none] relative tracking-[0.04em] text-[inherit] inline-block min-w-[115px]">
              Testimonials
            </a>
            <a href="https://calendly.com/pixcelperfectofficial/demo-call" className="[text-decoration:none] relative tracking-[0.04em] text-[inherit] inline-block min-w-[100px]">
              Contact us
            </a>
          </nav>
        </nav>
        
        {/* Mobile Hamburger Menu */}
        <div className="hidden mq800:block">
          <HamburgerMenu />
        </div>

        <button className="cursor-pointer [border:none] py-2 px-[31px] bg-gray-600 rounded-81xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-100 mq800:hidden">
          <a href="https://calendly.com/pixcelperfectofficial/demo-call"  className="[text-decoration:none] relative text-lg leading-[32px] font-medium font-title-medium text-white text-left inline-block min-w-[94px]">
            Book a call
          </a>
        </button>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        alt=""
        src="/design-element.svg"
      />
    </header>
  );
};

export default FrameComponent;