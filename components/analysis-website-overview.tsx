import type { NextPage } from "next";
import MainMenu from "./main-menu";

export type AnalysisWebsiteOverviewType = {
  className?: string;
};

const AnalysisWebsiteOverview: NextPage<AnalysisWebsiteOverviewType> = ({
  className = "",
}) => {
  return (
    <div
      className={`ml-[-833.1px] h-[258.2px] w-[341.5px] relative rounded-[10.48px] bg-gray-100 box-border overflow-hidden shrink-0 max-w-full text-left text-10xs-9 text-black font-title-medium border-[4.4px] border-solid border-primary ${className}`}
    >
      <div className="absolute top-[35.1px] left-[71.6px] w-[255.3px] h-[15.6px] flex flex-row items-center justify-between py-0 px-0 box-border gap-[20px] text-7xs-8 text-primary">
        <div className="w-[72px] flex flex-col items-start justify-start gap-[1px]">
          <div className="w-5 h-[9px] relative leading-[150%] font-medium inline-block">
            Impact
          </div>
          <div className="self-stretch h-1.5 relative text-9xs-9 leading-[150%] text-text-2 inline-block">
            Analysis of our impact on your website
          </div>
        </div>
        <div className="w-[79.9px] rounded-[0.97px] bg-white box-border flex flex-col items-start justify-start py-0.5 px-[3px] text-9xs-4 text-royalblue border-[0.2px] border-solid border-ui-6">
          <div className="self-stretch flex flex-row items-center justify-between py-0 pr-px pl-0 gap-[20px]">
            <div className="h-1 w-[47px] relative font-semibold inline-block">
              Apr 01, 2024 - Apr 30, 2024
            </div>
            <div className="w-[4.9px] flex flex-row items-center justify-center py-[0.5px] px-0 box-border h-[4.9px]">
              <img
                className="h-[3.9px] w-[3.7px] relative"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[58.5px] left-[71.6px] rounded-[1.95px] bg-white box-border w-[174px] flex flex-col items-start justify-start pt-[7px] px-[5px] pb-[5px] gap-[7.8px] border-[0.2px] border-solid border-ui-2">
        <div className="w-16 h-1.5 relative text-9xs-9 leading-[5.85px] font-semibold inline-block">
          Conversion Rate per day per page
        </div>
        <div className="w-[107.9px] h-1 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[2.6px] text-gray-021">
          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
            <div className="w-[6.8px] h-px relative bg-royalblue" />
          </div>
          <div className="self-stretch flex-1 relative leading-[3.9px]">
            Webyn conversion Rate
          </div>
          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[0.5px]">
              <div className="h-px w-[2.9px] relative bg-mediumpurple-100" />
              <div className="h-px w-[2.9px] relative bg-mediumpurple-100" />
            </div>
          </div>
          <div className="self-stretch flex-1 relative leading-[3.9px]">
            Original conversion Rate
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-px text-gray-02">
          <div className="flex-1 flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[13.7px]">
            <div className="w-[9.7px] flex flex-col items-start justify-start gap-[3.5px] shrink-0">
              <div className="self-stretch relative leading-[3.9px]">1.2%</div>
              <div className="self-stretch relative leading-[3.9px]">1.0%</div>
              <div className="self-stretch relative leading-[3.9px]">0.8%</div>
              <div className="self-stretch relative leading-[3.9px]">0.6%</div>
              <div className="self-stretch relative leading-[3.9px]">0.4%</div>
              <div className="self-stretch relative leading-[3.9px]">0.2%</div>
              <div className="self-stretch relative leading-[3.9px]">0%</div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start relative text-center">
              <img
                className="h-[29.7px] w-[133.8px] absolute !m-[0] top-[11.9px] left-[-3.4px]"
                loading="lazy"
                alt=""
                src="/graph.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start py-3 px-0 gap-[4px] shrink-0 z-[2]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-2">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                    <div className="h-[36.5px] w-[0.2px] relative rounded-[0.24px] bg-dimgray-200" />
                    <div className="h-[36.5px] w-[0.2px] relative rounded-[0.24px] bg-dimgray-200" />
                    <div className="h-[36.5px] w-[0.2px] relative rounded-[0.24px] bg-dimgray-200" />
                    <div className="h-[36.5px] w-[0.2px] relative rounded-[0.24px] bg-dimgray-200" />
                    <div className="h-[36.5px] w-[0.2px] relative rounded-[0.24px] bg-dimgray-200" />
                  </div>
                </div>
                <div className="self-stretch h-1 flex flex-row items-start justify-start gap-[12px]">
                  <div className="self-stretch flex-1 relative leading-[3.9px]">
                    01 Apr,2024
                  </div>
                  <div className="self-stretch flex-1 relative leading-[3.9px]">
                    08 Apr,2024
                  </div>
                  <div className="self-stretch flex-1 relative leading-[3.9px]">
                    15 Apr,2024
                  </div>
                  <div className="self-stretch flex-1 relative leading-[3.9px]">
                    21 Apr,2024
                  </div>
                  <div className="self-stretch flex-1 relative leading-[3.9px]">
                    28 Apr,2024
                  </div>
                </div>
              </div>
              <img
                className="h-[29.7px] w-[133.8px] absolute !m-[0] top-[11.9px] left-[829.7px]"
                alt=""
                src="/graph.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[58.5px] left-[249.5px] rounded-9xs-9 bg-white box-border w-[77.5px] flex flex-col items-start justify-start pt-1.5 px-[3px] pb-3.5 gap-[7.1px] text-9xs-9 text-text-1 border-[0.2px] border-solid border-ui-2">
        <div className="w-[55px] h-1.5 relative leading-[5.85px] font-semibold inline-block">
          Webyn uplift conversion rate
        </div>
        <div className="w-[69.7px] flex flex-col items-center justify-start pt-0.5 px-0.5 pb-[3.9px] box-border text-3xs-7">
          <div className="self-stretch flex flex-col items-center justify-start gap-[3.4px]">
            <div className="h-[34.6px] flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border relative">
              <img
                className="w-[65.3px] h-[65.3px] relative"
                loading="lazy"
                alt=""
                src="/chart.svg"
              />
              <div className="w-[27px] h-[15px] absolute !m-[0] top-[18.5px] left-[calc(50%_-_11.45px)] tracking-[-0.49px] leading-[14.13px] font-semibold inline-block z-[1]">
                200%
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-2.5 text-9xs-9 text-text-2">
              <div className="self-stretch h-[5px] relative leading-[4.87px] font-medium inline-block">
                Your Score is very good!
              </div>
            </div>
          </div>
        </div>
        <div className="w-[69.7px] h-[5px] flex flex-row items-start justify-between gap-[20px]">
          <div className="self-stretch w-[20.8px] flex flex-row items-start justify-start gap-[1px]">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="w-[6.8px] h-px relative bg-royalblue" />
            </div>
            <div className="self-stretch flex-1 relative font-medium flex items-end">{`Webyn `}</div>
          </div>
          <div className="self-stretch w-2 relative text-text-2 text-right flex items-end">
            12%
          </div>
        </div>
        <div className="w-[69.7px] h-[5px] flex flex-row items-start justify-between gap-[20px]">
          <div className="self-stretch w-[22.8px] flex flex-row items-end justify-start gap-[1px]">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.9px]">
              <div className="w-[6.8px] h-px relative bg-mediumpurple-100" />
            </div>
            <div className="self-stretch flex-1 relative font-medium flex items-end">
              Original
            </div>
          </div>
          <div className="self-stretch w-[7px] relative text-text-2 text-right flex items-end">
            6%
          </div>
        </div>
      </div>
      <div className="absolute top-[0.1px] left-[65.8px] bg-white box-border w-[267px] h-[] flex flex-row items-start justify-end pt-[5.8px] px-[5px] pb-[5.9px] text-gray-200 border-b-[0.2px] border-solid border-ui-2">
        <div className="self-stretch w-[54.1px] rounded-[0.97px] bg-ui-2 flex flex-row items-center justify-start py-[1.8px] pr-1 pl-[3px] box-border gap-[2.9px]">
          <img
            className="h-[10.7px] w-[10.7px] relative rounded-[8.82px] object-cover"
            alt=""
            src="/avatar@2x.png"
          />
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[1px]">
            <div className="self-stretch h-[5px] relative leading-[4.39px] uppercase font-medium flex items-center">
              Merry gilbert
            </div>
            <div className="self-stretch flex-1 flex flex-row items-center justify-start py-0 px-0 gap-[1px] text-9xs-9 text-text-1">
              <div className="self-stretch flex-1 relative leading-[5.85px] capitalize font-medium">
                All pages
              </div>
              <img
                className="h-[3.9px] w-[3.9px] relative overflow-hidden shrink-0"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <MainMenu
        propHeight="unset"
        propFlex="unset"
        g10="/g10@2x.png"
        propFlex1="unset"
        propFlex2="unset"
        propAlignSelf="unset"
        propHeight4="11.8px"
        propMinWidth="unset"
        propAlignSelf1="stretch"
        propWidth="16px"
        propFlex3="unset"
        propHeight9="unset"
        propHeight19="11.8px"
        propMinWidth2="unset"
        propAlignSelf3="stretch"
        propWidth2="24px"
        propHeight28="23.5px"
        propAlignSelf6="stretch"
        propFlex4="1"
        propMinWidth5="unset"
        propAlignSelf7="stretch"
        propWidth5="30px"
        avatar="/avatar-1@2x.png"
        propHeight32="5px"
        propDisplay6="flex"
        heading="Home"
        heading1="Website Analysis"
        heading2="Impact"
        heading3="Customer Flow"
        heading4="Heatmaps"
        heading5="Funnel"
        heading6="Overview"
        heading7="Test Validation"
        heading8="Admin Test creation"
        heading9="Insights"
      />
      <div className="absolute top-[171.8px] left-[71.6px] w-[255.3px] flex flex-row items-start justify-start py-0 px-0 box-border gap-[2.7px] text-9xs-9">
        <div className="flex-1 rounded-[2.92px] bg-white flex flex-col items-start justify-start py-1 px-[5px] gap-[11.7px] border-[0.2px] border-solid border-ui-2">
          <div className="w-[58px] h-1.5 relative leading-[5.85px] font-semibold inline-block">{`Webyn uplifts & improvements`}</div>
          <div className="self-stretch flex flex-row items-center justify-between py-0 pr-px pl-0 gap-[5.57px] text-6xs-8 text-primary">
            <div className="w-11 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[1.9px]">
              <div className="w-3.5 h-2.5 relative leading-[150%] font-semibold inline-block">
                12%
              </div>
              <div className="self-stretch h-1 relative text-9xs-4 text-dark-3-dark flex items-center">
                Uplift avg. session duration
              </div>
            </div>
            <div className="h-[23.6px] w-[0.2px] relative box-border border-r-[0.2px] border-solid border-ui-2" />
            <div className="w-[46px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[1.9px]">
              <div className="w-3.5 h-2.5 relative leading-[150%] font-semibold inline-block">
                12%
              </div>
              <div className="self-stretch h-[5px] relative text-9xs-4 leading-[150%] text-text-2 inline-block">
                Improvement in bounce rate
              </div>
            </div>
            <div className="h-[23.6px] w-[0.2px] relative box-border border-r-[0.2px] border-solid border-ui-2" />
            <div className="w-[50px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[1.9px]">
              <div className="w-3.5 h-2.5 relative leading-[150%] font-semibold inline-block">
                12%
              </div>
              <div className="self-stretch h-[5px] relative text-9xs-4 leading-[150%] text-text-2 inline-block">
                Uplift returning customers rate
              </div>
            </div>
          </div>
        </div>
        <div className="w-[78.7px] rounded-[2.92px] bg-white box-border flex flex-col items-start justify-center py-1 px-[3px] text-text-1 border-[0.2px] border-solid border-ui-2">
          <div className="self-stretch flex flex-col items-start justify-start gap-[3.9px]">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 flex flex-row items-center justify-between gap-[13.31px]">
                <div className="h-[5px] w-[33px] relative font-semibold flex items-end">
                  Avg. Basket Price
                </div>
                <div className="w-[24.6px] flex flex-row items-center justify-end text-right text-text-2">
                  <div className="h-[8.9px] flex-1 rounded-tl-[0.97px] rounded-tr-none rounded-br-none rounded-bl-[0.97px] bg-white box-border overflow-hidden flex flex-row items-center justify-start pt-0.5 px-[3px] pb-[1.9px] border-[0.2px] border-solid border-ui-2">
                    <div className="self-stretch w-[9px] relative flex items-end whitespace-nowrap">
                      €0.0
                    </div>
                  </div>
                  <div className="w-[7.8px] rounded-tl-none rounded-tr-[0.97px] rounded-br-[0.97px] rounded-bl-none bg-primary-1 overflow-hidden shrink-0 flex flex-row items-center justify-center py-[2.5px] pr-0.5 pl-px box-border z-[1]">
                    <img
                      className="h-[3.9px] w-[3.9px] relative overflow-hidden shrink-0 object-contain"
                      alt=""
                      src="/icoutlinearrowback.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[0.2px] relative box-border border-t-[0.2px] border-solid border-ui-2" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[3.9px] text-9xs-4">
              <div className="self-stretch flex flex-row items-center justify-center gap-[1.9px]">
                <img
                  className="h-[5.8px] w-[5.8px] relative min-h-[6px]"
                  alt=""
                  src="/group-48096426.svg"
                />
                <div className="h-1 flex-1 flex flex-row items-center justify-between gap-[20px]">
                  <div className="self-stretch w-6 relative font-medium flex items-end">
                    Total Earnings
                  </div>
                  <div className="self-stretch w-[5px] relative text-text-2 text-right flex items-end whitespace-nowrap">
                    €0
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[1.9px]">
                <img
                  className="h-[5.8px] w-[5.8px] relative min-h-[6px]"
                  alt=""
                  src="/group-48096424.svg"
                />
                <div className="h-1 flex-1 flex flex-row items-center justify-between gap-[20px]">
                  <div className="self-stretch w-8 relative font-medium flex items-end">
                    Revenue per visitor
                  </div>
                  <div className="self-stretch w-[5px] relative text-text-2 text-right flex items-end whitespace-nowrap">
                    €0
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[1.9px]">
                <img
                  className="h-[5.8px] w-[5.8px] relative min-h-[6px]"
                  alt=""
                  src="/group-48096424-1.svg"
                />
                <div className="h-1 flex-1 flex flex-row items-center justify-between gap-[20px]">
                  <div className="self-stretch w-1.5 relative font-medium flex items-end">
                    ROI
                  </div>
                  <div className="self-stretch w-1.5 relative text-text-2 text-right flex items-end">
                    0.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[224.4px] left-[248.3px] text-10xs-4 text-text-2">
        *All the figures are indicative
      </div>
    </div>
  );
};

export default AnalysisWebsiteOverview;
