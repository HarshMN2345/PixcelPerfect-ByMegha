import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import AnalysisWebsiteOverview from "../components/analysis-website-overview";
import AnalysisWebsiteOverview1 from "../components/analysis-website-overview1";
import PartnerTypes from "../components/partner-types";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import FooterContent from "../components/footer-content";
import SocialLinks from "../components/social-links";

const Desktop: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[69px] pb-[55.3px] box-border max-w-full mq800:pl-[34px] mq800:pr-[34px] mq800:pb-9 mq800:box-border">
        <div className="flex-1 rounded-17xl [background:linear-gradient(180deg,_#f1f1f1,_rgba(247,_244,_242,_0))] flex flex-col items-start justify-start py-6 px-10 box-border gap-[64px] max-w-full mq800:gap-[32px] mq800:pt-5 mq800:pb-5 mq800:box-border mq450:gap-[16px]">
          <FrameComponent />
          <FrameComponent1 />
        </div>
      </section>
      <section className="flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[136px] w-[136px] absolute !m-[0] right-[69px] bottom-[-14px] [filter:blur(400px)] rounded-981xl bg-goldenrod-100" />
        <div className="w-[1366px] flex flex-row items-start justify-start pt-0 pb-[124.4px] pr-[3px] pl-[93px] box-border gap-[32px] max-w-full mq800:gap-[16px] mq800:pl-[23px] mq800:box-border mq450:pb-[81px] mq450:box-border mq1300:flex-wrap mq1300:justify-center mq1300:pl-[46px] mq1300:box-border">
          <AnalysisWebsiteOverview />
          <div className="h-[246.5px] w-[436.2px] flex flex-row items-start justify-start relative max-w-full shrink-0">
            <div className="h-44 w-44 absolute !m-[0] right-[-155.6px] bottom-[-141.2px] [filter:blur(400px)] rounded-981xl bg-mediumpurple-100" />
            <img
              className="h-[246.5px] flex-1 relative rounded-[5.68px] max-w-full overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/inbox.svg"
            />
          </div>
          <AnalysisWebsiteOverview1 />
          <div className="h-[246.5px] w-[436.2px] flex flex-row items-start justify-start relative max-w-full shrink-0">
            <div className="h-44 w-44 absolute !m-[0] right-[109.5px] bottom-[-141.2px] [filter:blur(400px)] rounded-981xl bg-turquoise" />
            <img
              className="h-[246.5px] flex-1 relative rounded-[5.68px] max-w-full overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/inbox-1.svg"
            />
          </div>
          <img
            className="h-[246.5px] w-[436.2px] relative rounded-[5.68px] overflow-hidden shrink-0 max-w-full"
            alt=""
            src="/inbox-2.svg"
          />
          <div className="h-[263.3px] w-[339.4px] rounded-[11.17px] [background:linear-gradient(#1f6b2b,_#1f6b2b),_#ffbdb5] overflow-hidden shrink-0 flex flex-row items-start justify-center pt-[23.1px] px-5 pb-0 box-border max-w-full">
            <div className="w-[154.3px] flex flex-row items-start justify-start pt-[5.2px] px-[5px] pb-[5.3px] box-border bg-[url('/android-l--silver-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="h-[329px] w-[154.3px] relative object-cover hidden"
                alt=""
                src="/android-l--silver-1@2x.png"
              />
              <img
                className="h-[318.5px] flex-1 relative rounded-[5.59px] max-w-full overflow-hidden object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/screen-insert-designs-here@2x.png"
              />
            </div>
          </div>
          <div className="h-[263.3px] w-[339.4px] relative rounded-[11.17px] [background:linear-gradient(#af1a74,_#af1a74),_#ffbdb5] overflow-hidden shrink-0 max-w-full">
            <img
              className="absolute w-[calc(100%_-_27.9px)] top-[15.4px] right-[13.9px] left-[14px] rounded-[8.38px] max-w-full overflow-hidden h-[231.9px] object-cover"
              loading="lazy"
              alt=""
              src="/pl-realised-1@2x.png"
            />
          </div>
        </div>
      </section>
      <PartnerTypes />
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-12 box-border max-w-full text-center text-21xl text-gray-800 font-title-medium mq800:pl-10 mq800:pr-10 mq800:pb-[31px] mq800:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[100px] max-w-full mq800:gap-[50px] mq450:gap-[25px]">
          <h2 className="m-0 self-stretch relative text-inherit tracking-[-1.04px] leading-[63px] font-medium font-inherit mq800:text-13xl mq800:leading-[50px] mq450:text-5xl mq450:leading-[37px]">
            Experience you can trust
          </h2>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[100px] max-w-full text-left text-5xl text-primary mq800:gap-[50px] mq450:gap-[25px]">
            <img
              className="h-[417px] flex-1 relative rounded-[25px] max-w-full overflow-hidden object-cover min-w-[359px] mq800:min-w-full"
              loading="lazy"
              alt=""
              src="/rectangle-34624191@2x.png"
            />
            <div className="flex-1 relative leading-[32px] inline-block min-w-[359px] max-w-full mq800:min-w-full mq450:text-lgi mq450:leading-[26px]">
              <p className="m-0">{`Hi, my name is Siddharth. I’m the Co-Founder & Design Lead at Bricx.`}</p>
              <p className="m-0">
                Growing up, I could never answer the question “What do you want
                to be?”.
              </p>
              <p className="m-0">
                This confusion led me into enrolling in an engineering program
                because that’s what everyone was doing.
              </p>
              <p className="m-0">
                I kept tackling that question but I finally found my answer when
                I first used Adobe Photoshop CS4.
              </p>
              <p className="m-0">
                I fell in love with it. I used to skip classes to create
                Photoshop manipulations.
              </p>
              <p className="m-0">{`I started posting these manipulations on Instagram & quickly garnered over 50,000 followers.`}</p>
              <p className="m-0">
                I couldn’t believe 50,000 people followed me because they liked
                my work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch h-[749px] flex flex-col items-start justify-start pt-0 px-0 pb-[223.8px] box-border max-w-full mq800:h-auto mq800:pb-[94px] mq800:box-border mq1125:pb-[145px] mq1125:box-border">
        <FooterContent />
        <SocialLinks />
      </section>
    </div>
  );
};

export default Desktop;
