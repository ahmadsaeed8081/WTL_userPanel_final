import React, { useState } from "react";
import Layout from "../../routes/Layout";
import DropDown from "../../components/DropDown";
import Timer from "../../components/Timer2/Timer";

const Burning = () => {
  const [activeTab, setActiveTab] = useState("burn");
  return (
    <Layout>
      <div className="bg-[#101010] min-h-screen flex">
        <div className="flex flex-col w-full px-8 py-28">
          <div className="w-full grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-8">
            <div className="flex items-center md:gap-3 gap-1 bg-[#1D1D1D] border border-themeColor rounded md:p-4 p-2 h-32">
              <div className="flex items-center justify-center md:h-24 md:w-24 h-14 w-14 rounded-full bg-themeColor md:p-4 p-2">
                <img src="/images/p1.png" className=" h-full w-full" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="zen-dots1 text-white font-normal md:text-sm text-[10px]">
                  Active POB
                </h1>
                <h2 className="zen-dots1 text-white font-normal text-xs">0</h2>
              </div>
            </div>
            <div className="flex items-center md:gap-3 gap-1 bg-[#1D1D1D] border border-themeColor rounded md:p-4 p-2 h-32">
              <div className="flex items-center justify-center md:h-24 md:w-24 h-14 w-14 rounded-full bg-themeColor md:p-4 p-2">
                <img src="/images/p2.png" className=" h-full w-full" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="zen-dots1 text-white font-normal md:text-sm text-[10px]">
                  Total Burn
                </h1>
                <h2 className="zen-dots1 text-white font-normal text-xs">
                  0.00
                </h2>
              </div>
            </div>
            <div className="flex items-center md:gap-3 gap-1 bg-[#1D1D1D] border border-themeColor rounded md:p-4 p-2 h-32">
              <div className="flex items-center justify-center md:h-24 md:w-24 h-14 w-14 rounded-full bg-themeColor md:p-4 p-2">
                <img src="/images/p3.png" className=" h-full w-full" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="zen-dots1 text-white font-normal md:text-sm text-[10px]">
                  Total Reward
                </h1>
                <h2 className="zen-dots1 text-white font-normal text-xs">
                  0.00
                </h2>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-20">
            <div className="flex flex-col border border-themeColor rounded-xl w-96 overflow-hidden">
              {/* Selection Tabs */}
              <div className="flex items-center w-full top-0 left-0 right-0 h-16">
                <button
                  className={`flex items-center h-full flex-1 justify-center btn  text-black zen-dots1 !rounded-none ${
                    activeTab === "burn"
                      ? "bg-themeColor"
                      : "bg-transparent text-white border-b border-themeColor"
                  }`}
                  onClick={() => setActiveTab("burn")}
                >
                  Burn
                </button>
                <button
                  className={`flex items-center h-full flex-1 justify-center btn  text-black zen-dots1 !rounded-none ${
                    activeTab === "reward"
                      ? "bg-themeColor"
                      : "bg-transparent text-white border-b border-themeColor"
                  }`}
                  onClick={() => setActiveTab("reward")}
                >
                  Reward
                </button>
              </div>
              {/* BUR Block */}
              {activeTab === "burn" ? (
                <div className="flex flex-col w-full">
                  <div className="flex flex-col items-center justify-end border-b border-themeColor mt-10">
                    <div className="flex items-center justify-between w-full p-4">
                      <h1 className="text-white text-sm">Plan Duration</h1>
                      <h1 className="text-white text-sm">1 Year</h1>
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-10 p-4 mt-6">
                    <div className="flex flex-col w-full gap-2">
                      <div className="flex items-center justify-between">
                        <h1 className="text-white text-sm">Minimum : 25000</h1>
                        <h1 className="text-white text-sm font-pop">
                          Balance:0.00 DTL
                        </h1>
                      </div>
                      <div className="flex items-center p-3 rounded-lg border border-white">
                        <input
                          type="number"
                          className="w-full cleanbtn text-white  font-pop"
                          min={0}
                          placeholder="0.0"
                        />
                        <div className="flex items-center justify-center text-white font-light text-xs gap-1 font-pop">
                          DTL{" "}
                          <div className="bg-themeColor text-black text-xs p-1 rounded-md font-light font-pop">
                            Max
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-full gap-4 mt-5">
                        <div className="flex items-center justify-between w-full">
                          <h1 className="zen-dots1 text-white text-xs font-extralight">
                            APY
                          </h1>
                          <h1 className="zen-dots1 text-white text-xs font-extralight">
                            100%
                          </h1>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <h1 className="zen-dots1 text-white text-xs font-extralight">
                            Expected Return
                          </h1>
                          <h1 className="zen-dots1 text-white text-xs font-extralight">
                            0
                          </h1>
                        </div>
                        <button className="btn bg-themeColor mt-12 zen-dots1 text-black font-medium text-lg buttonPrimary">
                          Claim
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Reward Block */
                <div className="reward-block flex flex-col w-full">
                  <div className="flex flex-col w-full gap-10 p-4 mt-6">
                    <div className="flex flex-col w-full gap-2 my-6">
                      <div className="flex items-center justify-between">
                        <h1 className="text-white font-light text-xs">
                          Investment Amount
                        </h1>
                      </div>
                      <input
                        type="text"
                        className="w-full bg-transparent border border-white p-2"
                        placeholder="0"
                      />
                      {/* <DropDown
                        dropDownList={[]}
                        selectedValue={""}
                        setSelectedValue={""}
                      /> */}
                      <Timer />
                    </div>
                    <div className="flex flex-col w-full gap-4">
                      <div className="flex items-center justify-between w-full">
                        <h1 className="zen-dots1 text-white text-xs font-extralight">
                          Earned Reward
                        </h1>
                        <h1 className="zen-dots1 text-white text-xs font-extralight">
                          0
                        </h1>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <h1 className="zen-dots1 text-white text-xs font-extralight">
                          Pending Reward
                        </h1>
                        <h1 className="zen-dots1 text-white text-xs font-extralight">
                          0
                        </h1>
                      </div>
                      <button className="btn bg-themeColor mt-16 text-black font-medium text-base">
                        Claim
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Burning;
