import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import MenuUnit from "./menu-unit";

export type MainMenuType = {
  className?: string;
  g10?: string;
  avatar?: string;
  heading?: string;
  heading1?: string;
  heading2?: string;
  heading3?: string;
  heading4?: string;
  heading5?: string;
  heading6?: string;
  heading7?: string;
  heading8?: string;
  heading9?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propFlex1?: CSSProperties["flex"];
  propFlex2?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight4?: CSSProperties["height"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propFlex3?: CSSProperties["flex"];
  propHeight9?: CSSProperties["height"];
  propHeight19?: CSSProperties["height"];
  propMinWidth2?: CSSProperties["minWidth"];
  propAlignSelf3?: CSSProperties["alignSelf"];
  propWidth2?: CSSProperties["width"];
  propHeight28?: CSSProperties["height"];
  propAlignSelf6?: CSSProperties["alignSelf"];
  propFlex4?: CSSProperties["flex"];
  propMinWidth5?: CSSProperties["minWidth"];
  propAlignSelf7?: CSSProperties["alignSelf"];
  propWidth5?: CSSProperties["width"];
  propHeight32?: CSSProperties["height"];
  propDisplay6?: CSSProperties["display"];
};

const MainMenu: NextPage<MainMenuType> = ({
  className = "",
  propHeight,
  propFlex,
  g10,
  propFlex1,
  propFlex2,
  propAlignSelf,
  propHeight4,
  propMinWidth,
  propAlignSelf1,
  propWidth,
  propFlex3,
  propHeight9,
  propHeight19,
  propMinWidth2,
  propAlignSelf3,
  propWidth2,
  propHeight28,
  propAlignSelf6,
  propFlex4,
  propMinWidth5,
  propAlignSelf7,
  propWidth5,
  avatar,
  propHeight32,
  propDisplay6,
  heading,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
  heading7,
  heading8,
  heading9,
}) => {
  const mainMenuStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const menuRootTwoStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const menuStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const menuItemStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex2,
    };
  }, [propFlex2]);

  const menuTopStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const menu1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight4,
    };
  }, [propHeight4]);

  const analysisStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      alignSelf: propAlignSelf1,
      width: propWidth,
    };
  }, [propMinWidth, propAlignSelf1, propWidth]);

  const menuItemStructureStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex3,
    };
  }, [propFlex3]);

  const customerFlowItemStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight9,
    };
  }, [propHeight9]);

  const menu2Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight19,
    };
  }, [propHeight19]);

  const experimentsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
      alignSelf: propAlignSelf3,
      width: propWidth2,
    };
  }, [propMinWidth2, propAlignSelf3, propWidth2]);

  const menuItem1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight28,
    };
  }, [propHeight28]);

  const menuTop1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf6,
    };
  }, [propAlignSelf6]);

  const menu3Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex4,
    };
  }, [propFlex4]);

  const personalisationStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth5,
      alignSelf: propAlignSelf7,
      width: propWidth5,
    };
  }, [propMinWidth5, propAlignSelf7, propWidth5]);

  const oVERLINEStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight32,
      display: propDisplay6,
    };
  }, [propHeight32, propDisplay6]);

  return (
    <div
      className={`absolute top-[0.1px] left-[0px] bg-white box-border w-[65.8px] h-[249.5px] flex flex-col items-start justify-start pt-[5.8px] px-[5px] pb-[5.9px] gap-[35.1px] z-[1] text-left text-9xs-4 text-text-1 font-title-medium border-r-[0.2px] border-solid border-ui-2 ${className}`}
      style={mainMenuStyle}
    >
      <div
        className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[7.8px]"
        style={menuRootTwoStyle}
      >
        <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-center py-[2.9px] px-0.5 shrink-0">
          <img
            className="w-[46px] h-[9.3px] relative object-cover"
            alt=""
            src={g10}
          />
        </div>
        <div
          className="self-stretch flex-1 flex flex-col items-start justify-start gap-[3.9px] shrink-0"
          style={menuStyle}
        >
          <MenuUnit
            propBackgroundColor="#fff"
            propHeight="5.8px"
            personalisation="/home.svg"
            propHeight1="5.8px"
            propWidth="30.2px"
            heading={heading}
            propHeight2="unset"
            propDisplay="unset"
            propFontSize="3.9px"
            propColor="#7c7c7c"
            propFontWeight="unset"
            propAlignSelf="stretch"
            propMinWidth="unset"
          />
          <div
            className="self-stretch flex-1 flex flex-row items-start justify-start"
            style={menuItemStyle}
          >
            <div
              className="self-stretch flex-1 flex flex-col items-start justify-start"
              style={menuTopStyle}
            >
              <div
                className="self-stretch rounded-[0.97px] flex flex-row items-start justify-start py-[2.9px] px-[3px]"
                style={menu1Style}
              >
                <div
                  className="relative tracking-[0.08em] leading-[6px] font-medium inline-block min-w-[16px]"
                  style={analysisStyle}
                >
                  Analysis
                </div>
              </div>
              <MenuUnit
                propBackgroundColor="#fff"
                propHeight="5.8px"
                personalisation="/analysis.svg"
                propHeight1="5.8px"
                propWidth="37.5px"
                heading={heading1}
                propHeight2="unset"
                propDisplay="unset"
                propFontSize="3.9px"
                propColor="#7c7c7c"
                propFontWeight="unset"
                propAlignSelf="stretch"
                propMinWidth="unset"
              />
              <div
                className="flex-1 flex flex-row items-start justify-start"
                style={menuItemStructureStyle}
              >
                <MenuUnit
                  propBackgroundColor="#3c88ee"
                  propHeight="5.8px"
                  personalisation="/impact.svg"
                  propHeight1="5.8px"
                  propWidth="30.2px"
                  heading={heading2}
                  propHeight2="5.8px"
                  propDisplay="inline-block"
                  propFontSize="16px"
                  propColor="#fff"
                  propFontWeight="500"
                  propAlignSelf="stretch"
                  propMinWidth="unset"
                />
                <div
                  className="h-[11.7px] flex flex-col items-start justify-start pt-[11.6px] px-0 pb-0 box-border ml-[-54.1px]"
                  style={customerFlowItemStyle}
                >
                  <MenuUnit
                    propBackgroundColor="#fff"
                    propHeight="5.8px"
                    personalisation="/customer-flow.svg"
                    propHeight1="5.8px"
                    propWidth="unset"
                    heading={heading3}
                    propHeight2="unset"
                    propDisplay="inline-block"
                    propFontSize="3.9px"
                    propColor="#7c7c7c"
                    propFontWeight="unset"
                    propAlignSelf="unset"
                    propMinWidth="30.2px"
                  />
                </div>
              </div>
              <MenuUnit
                propBackgroundColor="#fff"
                propHeight="5.8px"
                personalisation="/heatmaps.svg"
                propHeight1="5.8px"
                propWidth="30.2px"
                heading={heading4}
                propHeight2="unset"
                propDisplay="unset"
                propFontSize="3.9px"
                propColor="#7c7c7c"
                propFontWeight="unset"
                propAlignSelf="stretch"
                propMinWidth="unset"
              />
              <MenuUnit
                propBackgroundColor="#fff"
                propHeight="5.8px"
                personalisation="/funnel.svg"
                propHeight1="5.8px"
                propWidth="30.2px"
                heading={heading5}
                propHeight2="unset"
                propDisplay="unset"
                propFontSize="3.9px"
                propColor="#7c7c7c"
                propFontWeight="unset"
                propAlignSelf="stretch"
                propMinWidth="unset"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="h-[46.9px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[11.6px] box-border">
              <div
                className="self-stretch rounded-[0.97px] flex flex-row items-start justify-start pt-[3px] px-[3px] pb-[2.8px] shrink-0"
                style={menu2Style}
              >
                <div
                  className="relative tracking-[0.08em] leading-[6px] font-medium inline-block min-w-[24px]"
                  style={experimentsStyle}
                >
                  Experiments
                </div>
              </div>
              <MenuUnit
                propBackgroundColor="#fff"
                propHeight="5.8px"
                personalisation="/overview.svg"
                propHeight1="5.8px"
                propWidth="30.2px"
                heading={heading6}
                propHeight2="unset"
                propDisplay="unset"
                propFontSize="3.9px"
                propColor="#7c7c7c"
                propFontWeight="unset"
                propAlignSelf="stretch"
                propMinWidth="unset"
              />
              <MenuUnit
                propBackgroundColor="#fff"
                propHeight="5.8px"
                personalisation="/test-validation.svg"
                propHeight1="5.8px"
                propWidth="unset"
                heading={heading7}
                propHeight2="unset"
                propDisplay="inline-block"
                propFontSize="3.9px"
                propColor="#7c7c7c"
                propFontWeight="unset"
                propAlignSelf="unset"
                propMinWidth="30.2px"
              />
              <MenuUnit
                propBackgroundColor="#fff"
                propHeight="5.8px"
                personalisation="/admin-test-creation.svg"
                propHeight1="5.8px"
                propWidth="unset"
                heading={heading8}
                propHeight2="unset"
                propDisplay="inline-block"
                propFontSize="3.9px"
                propColor="#7c7c7c"
                propFontWeight="unset"
                propAlignSelf="unset"
                propMinWidth="38px"
              />
            </div>
          </div>
          <div
            className="self-stretch flex flex-row items-start justify-start"
            style={menuItem1Style}
          >
            <div
              className="flex-1 flex flex-col items-start justify-start"
              style={menuTop1Style}
            >
              <div
                className="self-stretch rounded-[0.97px] flex flex-row items-start justify-start py-[2.9px] px-0.5"
                style={menu3Style}
              >
                <div
                  className="relative tracking-[0.08em] leading-[6px] font-medium inline-block min-w-[30px]"
                  style={personalisationStyle}
                >
                  Personalisation
                </div>
              </div>
              <MenuUnit
                personalisation="/personalisation.svg"
                heading={heading9}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[54.1px] rounded-[0.97px] box-border flex flex-row items-start justify-start pt-[3px] px-px pb-[0.3px] gap-[2.9px] text-10xs-9 text-gray-200 border-t-[0.2px] border-solid border-ui-2">
        <img
          className="h-[10.7px] w-[10.7px] relative rounded-[8.82px] object-cover"
          alt=""
          src={avatar}
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[0.9px]">
          <div
            className="self-stretch relative leading-[5px] uppercase font-medium"
            style={oVERLINEStyle}
          >
            Admin
          </div>
          <div className="self-stretch h-1.5 relative text-base leading-[24px] capitalize font-medium text-primary inline-block whitespace-nowrap">
            sTEFAN JOHN
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
