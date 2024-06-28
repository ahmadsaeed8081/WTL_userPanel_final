import React from "react";
import { OverViewGraph } from "../../assets/Icons";

const OverViewSection = () => {
  return (
    <div id="tokenomics" className="overview-section flex py-14">
      <div className="wrap wrapWidth flex flex-col items-center gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-white md:text-2xl text-xl md:text-start text-center">
            Overview of <span className="text-themeColor">Token</span>{" "}
            Distribution
          </h1>
          <img src="./images/separator.svg" alt="separator" className="w-20" />
        </div>
        <p className="text-white font-pop font-extralight text-sm leading-6 sm:w-2/4 w-full text-center">
Our tokenomics are designed to prioritize and empower our community, ensuring stability and long-term growth. Here's how our token distribution looks:

        </p>
        <div className="flex items-center gap-8 w-full md:flex-row flex-col">
          <div className="flex items-center justify-end flex-1">
            <div className="flex items-center justify-center">
              <OverViewGraph />
            </div>
          </div>
          <div className="flex items-center justify-center flex-1">
            <div className="flex flex-col sm:w-2/3 w-full gap-6">
              <div className="flex flex-col w-full gap-2">
                <h1 className="text-white text-xs font-pop">
                  Private Investors{" "}
                  <span className="text-themeColor"> 4.17%</span>
                </h1>
                <div className="h-2 w-full rounded-lg bg-[#7165FF]"></div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <h1 className="text-white text-xs font-pop">
                  Founder(s)/Core Team
                  <span className="text-themeColor"> 17%</span>
                </h1>
                <div className="h-2 w-full rounded-lg bg-[#7165FF]"></div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <h1 className="text-white text-xs font-pop">
                  Future Initiatives
                  <span className="text-themeColor"> 23.83%</span>
                </h1>
                <div className="h-2 w-full rounded-lg bg-[#21F2FF]"></div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <h1 className="text-white text-xs font-pop">
                  Community Pool
                  <span className="text-themeColor"> 55%</span>
                </h1>
                <div className="h-2 w-full rounded-lg bg-themeColor"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverViewSection;
