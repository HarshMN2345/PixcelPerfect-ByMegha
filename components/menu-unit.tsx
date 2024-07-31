import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MenuUnitType = {
  className?: string;
  personalisation?: string;
  heading?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propHeight2?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propFontSize?: CSSProperties["fontSize"];
  propColor?: CSSProperties["color"];
  propFontWeight?: CSSProperties["fontWeight"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth?: CSSProperties["minWidth"];
};

const MenuUnit: NextPage<MenuUnitType> = ({
  className = "",
  propBackgroundColor,
  propHeight,
  personalisation,
  propHeight1,
  propWidth,
  heading,
  propHeight2,
  propDisplay,
  propFontSize,
  propColor,
  propFontWeight,
  propAlignSelf,
  propMinWidth,
}) => {
  const menuUnitStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth,
    };
  }, [propHeight1, propWidth]);

  const headingStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
      display: propDisplay,
      fontSize: propFontSize,
      color: propColor,
      fontWeight: propFontWeight,
      alignSelf: propAlignSelf,
      minWidth: propMinWidth,
    };
  }, [
    propHeight2,
    propDisplay,
    propFontSize,
    propColor,
    propFontWeight,
    propAlignSelf,
    propMinWidth,
  ]);

  return (
    <div
      className={`rounded-[0.97px] bg-white overflow-x-auto flex flex-row items-start justify-start pt-[1.5px] pb-[1.4px] pr-3 pl-0 gap-[2.6px] text-left text-9xs-9 text-text-2 font-title-medium ${className}`}
      style={menuUnitStyle}
    >
      <div className="h-[8.8px] w-[1.5px] relative rounded-[0.97px] bg-white shrink-0" />
      <div
        className="h-[5.8px] flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0 box-border"
        style={frameDivStyle}
      >
        <img
          className="w-[5.8px] h-[5.8px] relative overflow-hidden shrink-0"
          alt=""
          src={personalisation}
        />
      </div>
      <div
        className="h-[5.8px] w-[30.2px] shrink-0 flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0 box-border"
        style={frameDiv1Style}
      >
        <div
          className="self-stretch relative leading-[5.85px] capitalize"
          style={headingStyle}
        >
          {heading}
        </div>
      </div>
    </div>
  );
};

export default MenuUnit;
