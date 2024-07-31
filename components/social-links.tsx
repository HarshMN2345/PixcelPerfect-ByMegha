import type { NextPage } from "next";

export type SocialLinksType = {
  className?: string;
};

const SocialLinks: NextPage<SocialLinksType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-gray-700 flex flex-col items-center justify-start py-20 px-5 box-border gap-[64px] shrink-0 max-w-full z-[2] text-left text-5xl text-white font-title-medium mq800:gap-[32px] mq450:gap-[16px] ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-[24px] max-w-full mq800:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-10 w-10 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/mdilinkedin.svg"
          />
          <div className="relative inline-block min-w-[95px] mq450:text-lgi">
            Linkedin
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[7px]">
          <img
            className="h-10 w-10 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/magebehance.svg"
          />
          <div className="relative inline-block min-w-[100px] mq450:text-lgi">
            Behance
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-10 w-10 relative overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/iconparksoliddribble@2x.png"
          />
          <div className="relative inline-block min-w-[82px] mq450:text-lgi">
            Dribble
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-10 w-10 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/letsiconsinstafill.svg"
          />
          <div className="relative inline-block min-w-[114px] mq450:text-lgi">
            Instagram
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[16px] text-base">
        <div className="relative leading-[19.2px]">
          © 2024 PixelPerfect. All rights reserved.
        </div>
        <div className="h-[19px] relative [text-decoration:underline] font-medium inline-block">{`Terms & Conditions`}</div>
      </div>
    </footer>
  );
};

export default SocialLinks;
