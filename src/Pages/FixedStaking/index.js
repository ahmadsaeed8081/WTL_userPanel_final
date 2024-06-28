import React, { useState } from "react";
import Layout from "../../routes/Layout";
import { RightArrowIcon } from "../../assets/Icons";
import Timer from "../../components/Timer2/Timer";
import DropDown from "../../components/DropDown";

const FixedStaking = () => {
  const [selectedTab, setSelectedTab] = useState("Stake");
  const dropDownList = [
    { label: "USDT", value: 0 },
    { label: "WTL", value: 0 },
  ];
  const dropDownList2 = [
    { label: "365 Day", value: 1 },
    { label: "30 Day", value: 2 },
    { label: "60 Day", value: 3 },
    { label: "90 Day", value: 4 },
    { label: "200 Day", value: 5 },
  ];
  const dropDownList3 = [
    { label: "7.76", value: 0 },
    { label: "5.2", value: 0 },
    { label: "1.2", value: 0 },
  ];

  const [selectedPeriod, setSelectedPeriod] = useState(dropDownList2[0]);
  const [selectedInvestment, setSelectedInvestment] = useState(
    dropDownList3[0]
  );
  const [selectedValue, setSelectedValue] = useState(dropDownList[0]);

  return (
    <Layout>
      <div className="flexible-staking-page flex min-h-screen bg-[#0E0F14] py-[140px]">
        <div className="wrap flex flex-col items-center gap-4 w-full p-6">
          <div className="tabs flex items-center gap-3">
            <div
              className={`tab-item flex text-sm ${
                selectedTab === "Stake" ? "active" : ""
              }`}
              onClick={(e) => setSelectedTab("Stake")}
            >
              Stake
            </div>
            <div
              className={`tab-item flex text-sm ${
                selectedTab === "Unstake" ? "active" : ""
              }`}
              onClick={(e) => setSelectedTab("Unstake")}
            >
              Unstake
            </div>
            <div
              className={`tab-item flex text-sm ${
                selectedTab === "Reward" ? "active" : ""
              }`}
              onClick={(e) => setSelectedTab("Reward")}
            >
              Reward
            </div>
          </div>
          {selectedTab === "Stake" ? (
            <div className="flex flex-col border border-themeColor w-[360px] rounded-md">
              <div className="flex items-center justify-between w-full p-4">
                <img src="/images/logo.svg" className="h-12 w-12" />
                <h1 className="font-pop text-sm font-normal">
                  World Trading Leagues
                </h1>
              </div>
              <div className="border-b border-themeColor w-full"></div>
              <div className="flex items-center justify-between w-full p-4">
                <h1 className="font-pop text-sm font-normal">Net Staked:</h1>
                <h1 className="font-pop text-sm font-normal">0</h1>
              </div>
              <div className="border-b border-themeColor w-full"></div>
              <div className="flex flex-col w-full p-6 gap-6">
                <div className="flex items-center justify-between w-full py-4">
                  <h1 className="font-pop text-sm font-normal">APR:</h1>
                  <h1 className="font-pop text-sm font-normal">580%</h1>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-pop text-sm font-normal">
                    Choose Lock Period:
                  </label>
                  <DropDown
                    dropDownList={dropDownList2}
                    selectedValue={selectedPeriod}
                    setSelectedValue={setSelectedPeriod}
                  />
                  {/* <div className="flex  items-center gap-2 p-2 border border-white/90 rounded-md">
                    <input
                      type="text"
                      className="cleanbtn w-full font-pop text-sm text-white"
                      placeholder="days"
                    />
                    <div className="flex items-center justify-center">
                      <RightArrowIcon />
                    </div>
                  </div> */}
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between w-full gap-2">
                    <label className="font-pop text-sm font-normal">
                      Select Amount:
                    </label>
                    <label className="font-pop text-sm font-normal">
                      Balance:NaN PLP
                    </label>
                  </div>
                  <div className="flex  items-center gap-2 p-2 border border-white/90 rounded-md">
                    <input
                      type="text"
                      className="cleanbtn w-full font-pop text-sm text-white"
                      placeholder="0"
                    />
                    <div className=" font-pop text-xs font-normal w-[60px] text-white/50">
                      PLP Max
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-8">
                  <button className="btn bg-themeColor text-black2 w-full font-pop capitalize font-medium  text-sm">
                    Approved
                  </button>
                </div>
              </div>
            </div>
          ) : selectedTab === "Unstake" ? (
            <div className="flex flex-col border border-themeColor w-[360px] rounded-md">
              <div className="flex items-center justify-between w-full p-4">
                <img src="/images/logo.svg" className="h-12 w-12" />
                <h1 className="font-pop text-sm font-normal">
                  World Trading Leagues
                </h1>
              </div>

              <div className="flex flex-col w-full p-6 gap-6">
                <div className="flex items-center justify-between w-full py-4">
                  <h1 className="font-pop text-sm font-normal">Penalty</h1>
                  <h1 className="font-pop text-sm font-normal text-[#FF0000]">
                    10%
                  </h1>
                </div>
                <div className="unstake-tab flex flex-col gap-2">
                  <div className="flex flex-col gap-3">
                    <label className="font-pop text-sm font-normal">
                      Previous Investment
                    </label>
                    <DropDown
                      dropDownList={dropDownList3}
                      selectedValue={selectedInvestment}
                      setSelectedValue={setSelectedInvestment}
                    />
                    {/* <div className="flex  items-center gap-2 p-2 border border-white/90 rounded-md">
                      <input
                        type="text"
                        className="cleanbtn w-full font-pop text-sm text-white"
                        placeholder="0.0"
                      />
                    </div> */}
                  </div>
                  <Timer />
                </div>
                <div className="flex items-center justify-center mt-8">
                  <button className="btn bg-themeColor text-black2 w-full font-pop capitalize font-medium  text-sm">
                    Unstake
                  </button>
                </div>
              </div>
            </div>
          ) : selectedTab === "Reward" ? (
            <div className="flex flex-col border border-themeColor w-[360px] rounded-md">
              <div className="flex items-center justify-between w-full p-4">
                <img src="/images/logo.svg" className="h-12 w-12" />
                <h1 className="font-pop text-sm font-normal">
                  World Trading Leagues
                </h1>
              </div>
              <div className="border-b border-themeColor w-full"></div>
              <div className="flex flex-col w-full p-4">
                <div className="flex items-center justify-between">
                  <h1 className="font-pop text-sm font-normal">
                    Total Earning
                  </h1>
                  <h1 className="font-pop text-sm font-normal">128.65892469</h1>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="font-pop text-sm font-normal">
                    Available To Claim
                  </h1>
                  <h1 className="font-pop text-sm font-normal">108.36547893</h1>
                </div>
              </div>
              <div className="border-b border-themeColor w-full"></div>
              <div className="flex flex-col w-full p-6 gap-6">
                <div className="flex flex-col gap-3">
                  <label className="font-pop text-sm font-normal">
                    Investment History
                  </label>

                  <DropDown
                    dropDownList={dropDownList}
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <div className="flex items-center justify-between">
                    <h1 className="font-pop text-sm font-normal">
                      Total Earn Reward
                    </h1>
                    <h1 className="font-pop text-sm font-normal text-themeColor">
                      123.6547963546
                    </h1>
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="font-pop text-sm font-normal">
                      Earning Reward
                    </h1>
                    <h1 className="font-pop text-sm font-normal text-themeColor">
                      123.6547963546
                    </h1>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-8">
                  <button className="btn bg-themeColor text-black2 w-full font-pop capitalize font-medium  text-sm">
                    Approved
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default FixedStaking;
