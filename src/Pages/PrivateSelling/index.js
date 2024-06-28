import React from "react";
import Layout from "../../routes/Layout";
import Timer from "../../components/Timer";
import {
  DownArrowIcon,
  RightArrowIcon,
  RightArrowIcon2,
} from "../../assets/Icons";
import ArrowDownIcon from "../../assets/Icons/ArrowDrownIcon";

const PrivateSelling = () => {
  const list = [
    { label: "Total Lockes", value: "0000" },
    { label: "Total Claimed", value: "0000" },
    { label: "Total Unlocked", value: "0000" },
  ];
  return (
    <Layout>
      <div className="private-selling-page flex justify-center min-h-screen bg-[#0E0F14] py-[100px]">
        <div className="wrap flex flex-col items-center gap-14 w-full p-6 max-w-[1200px]">
          <div className="box border border-dotted border-themeColor p-8 flex flex-col gap-4 rounded-xl sm:w-[400px] w-full">
            <div className="bg-themeColor p-3 rounded-lg">
              <Timer />
            </div>
            <h1 className="text-white font-pop text-sm font-light text-center">
              $8,067,263,69 / $8,404,811
            </h1>
            <div className="flex flex-col w-full gap-2">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-themeColor text-sm font-pop">Stage</h1>
                <h1 className="text-themeColor text-sm font-pop">Remaining</h1>
              </div>
              <div className="flex items-center justify-between w-full">
                <h1 className="text-white text-xs font-extralight font-pop">
                  NaN
                </h1>
                <h1 className="text-white text-xs font-extralight font-pop">
                  0
                </h1>
              </div>
              <div className="w-full h-3 rounded-full border border-white/10 overflow-hidden">
                <div
                  className="bg-themeColor h-full "
                  style={{ width: "70%" }}
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <h1 className="text-white text-sm font-extralight font-pop">
                  1 WTL = 0.0015
                </h1>
                <h1 className="text-white text-sm font-extralight font-pop">
                  Next = 0.0018
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex flex-col w-full gap-2">
                  <label className="font-pop text-sm font-light">
                    USDT Pay
                  </label>
                  <div className="flex items-center p-2 rounded-lg border border-themeColor gap-2">
                    <input
                      type="text"
                      className="cleanbtn w-full font-pop"
                      placeholder="0"
                    />
                    <div className="flex items-center justify-center gap-1 w-[74px]">
                      <img
                        src="/images/usdt.png"
                        className="h-5 w-5 object-contain"
                      />
                      <h1 className="text-white text-xs font-pop">USDT</h1>
                    </div>
                  </div>
                </div>
                {/* <div className="sm:flex hidden items-center justify-center mt-4">
                  <RightArrowIcon2 />
                </div> */}
                <div className="flex items-center justify-center mt-4">
                  <ArrowDownIcon />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label className="font-pop text-sm font-light">
                    WTL you receive
                  </label>
                  <div className="flex items-center p-2 rounded-lg border border-themeColor gap-2">
                    <input
                      type="text"
                      className="cleanbtn w-full font-pop"
                      placeholder="0"
                    />
                    <div className="flex items-center justify-center gap-1 w-[74px]">
                      <img
                        src="/images/logo.svg"
                        className="h-5 w-5 object-contain"
                      />
                      <h1 className="text-white text-xs font-pop">WTL</h1>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-white font-pop text-[11px] font-extralight text-center">
                you do not have enough Matic to pay for this transaction
              </p>
              <button className="btn bg-themeColor text-black font-pop text-sm !py-2 capitalize">
                Buy Now
              </button>
              <p className="text-white font-pop text-[11px] font-extralight text-center">
                Launch On Unique Swaps And Quek Swap Soon
              </p>
            </div>
          </div>
          <div className="selling-grid w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {list.map((item, index) => (
              <div
                key={index}
                className="grid-item flex flex-col items-center justify-center gap-3 relative"
              >
                <h1 className="text-white text-xl capitalize">{item.label}</h1>
                <h3 className="text-white text-base">{item.value}</h3>
                <div
                  className={`items-center justify-center absolute bottom-[10px] ${
                    index === 2 ? "flex" : "hidden"
                  }`}
                >
                  <button className="btn-claim text-black font-pop">
                    Claim
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivateSelling;
