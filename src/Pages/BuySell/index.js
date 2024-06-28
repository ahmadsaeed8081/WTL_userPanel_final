import React, { useState } from "react";
import Layout from "../../routes/Layout";
import {
  RightArrowIcon2,
  DropDownIcon,
  DownArrowIcon,
} from "../../assets/Icons";

const BuySell = () => {
  const tokenList = [
    { label: "USDT", icon: "/images/usdt.png" },
    { label: "WTL", icon: "/images/logo.svg" },
  ];
  const [selectedPay, setSelectedPay] = useState({
    label: "USDT",
    icon: "/images/usdt.png",
  });
  const [selectedReceive, setSelectedReceive] = useState({
    label: "WTL",
    icon: "/images/logo.svg",
  });

  const tblData = [
    {
      sr: "01",
      orderNumb: "0xdu207",
      in: "27,000",
      out: "25,000",
      time: "25,000",
      status: "Approved",
    },
    {
      sr: "02",
      orderNumb: "0xdu207",
      in: "27,000",
      out: "25,000",
      time: "25,000",
      status: "Approved",
    },
    {
      sr: "03",
      orderNumb: "0xdu207",
      in: "27,000",
      out: "25,000",
      time: "25,000",
      status: "Approved",
    },
    {
      sr: "04",
      orderNumb: "0xdu207",
      in: "27,000",
      out: "25,000",
      time: "25,000",
      status: "Approved",
    },
    {
      sr: "05",
      orderNumb: "0xdu207",
      in: "27,000",
      out: "25,000",
      time: "25,000",
      status: "Approved",
    },
    {
      sr: "06",
      orderNumb: "0xdu207",
      in: "27,000",
      out: "25,000",
      time: "25,000",
      status: "Approved",
    },
  ];
  return (
    <Layout>
      <div className="buy-sell-page flex justify-center min-h-screen bg-[#0E0F14] py-[100px]">
        <div className="wrap flex flex-col items-center gap-14 w-full p-6 max-w-[1200px]">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-white text-xl">Swap</h1>
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-pop text-sm font-light">
                Buying 1 WTL = 0.125 USDT
              </h3>
              <h3 className="text-white font-pop text-sm font-light">
                Selling 1 WTL = 0.06 USDT
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-8 w-full sm:flex-row flex-col">
            <div className="flex sm:flex-1 w-full p-4 border border-themeColor">
              <div className="flex flex-col w-full">
                <label className="font-pop text-base">You pay</label>
                <div className="flex items-center justify-between gap-2">
                  <input
                    type="text"
                    className="cleanbtn font-pop text-white flex-1"
                    placeholder="0"
                  />
                  <div className="swap-dropdown flex items-center justify-between p-2 flex-[0.5]">
                    <h3 className="text-black font-pop text-sm font-medium">
                      {selectedPay.label}
                    </h3>
                    <div className="flex items-center justify-center cursor-pointer gap-1">
                      <img
                        src={selectedPay.icon || "/images/usdt.png"}
                        className="h-5 w-5 object-contain"
                        alt="logo"
                      />

                      {/* <div className="flex items-center justify-center">
                        <DropDownIcon />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="sm:flex hidden items-center justify-center cursor-pointer"
              onClick={(e) => {
                if (selectedPay.label === "USDT") {
                  setSelectedPay(tokenList[1]);
                  setSelectedReceive(tokenList[0]);
                } else {
                  setSelectedPay(tokenList[0]);
                  setSelectedReceive(tokenList[1]);
                }
              }}
            >
              <img src="/images/swapIcon.svg" className="h-8 w-8" />
              {/* <RightArrowIcon2 /> */}
            </div>
            <div
              className="flex sm:hidden items-center justify-center cursor-pointer"
              onClick={(e) => {
                if (selectedPay.label === "USDT") {
                  setSelectedPay(tokenList[1]);
                  setSelectedReceive(tokenList[0]);
                } else {
                  setSelectedPay(tokenList[0]);
                  setSelectedReceive(tokenList[1]);
                }
              }}
            >
              {/* <DownArrowIcon /> */}
              <img src="/images/swapIcon2.svg" className="h-8 w-8" />
            </div>
            <div className="flex sm:flex-1 w-full p-4 border border-themeColor">
              <div className="flex flex-col w-full">
                <label className="font-pop text-base">You Receive</label>
                <div className="flex items-center justify-between gap-2">
                  <input
                    type="text"
                    className="cleanbtn font-pop text-white flex-1"
                    placeholder="0"
                  />
                  <div className="swap-dropdown flex items-center justify-between p-2 flex-[0.5]">
                    <h3 className="text-black font-pop text-sm font-medium">
                      {selectedReceive.label}
                    </h3>
                    <div className="flex items-center justify-center cursor-auto gap-1">
                      <img
                        src={selectedReceive.icon || "/images/logo.svg"}
                        className="h-5 w-5 object-contain"
                        alt="logo"
                      />
                      {/* <div
                        className="flex items-center justify-center"
                        onClick={(e) => {
                          if (selectedReceive.label === "WTL") {
                            setSelectedReceive(tokenList[0]);
                            setSelectedPay(tokenList[1]);
                          } else {
                            setSelectedPay(tokenList[0]);
                            setSelectedReceive(tokenList[1]);
                          }
                        }}
                      >
                        <DropDownIcon />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center">
              <h3 className="text-white font-pop text-sm font-light w-40">
                Fee ( 0.15% )
              </h3>
              <h3 className="text-white font-pop text-sm font-light">USDT</h3>
            </div>
            <div className="flex items-center">
              <h3 className="text-white font-pop text-sm font-light w-40">
                Expected Amount
              </h3>
              <h3 className="text-white font-pop text-sm font-light">WTL</h3>
            </div>
          </div>
          <div className="flex items-start w-full">
            <button className="btn-submit flex items-center justify-center gap-3 px-4 py-3">
              <label className="text-white text-xs">Submit</label>
            </button>
          </div>
          <div className="flex flex-col w-full gap-6">
            <h1 className="text-white text-base">Swaping History</h1>
            <div className="tbl flex flex-col items-center w-full border border-white/30">
              <div className="row flex items-center gap-3 bg-themeColor p-3 w-full">
                <div className="row-item flex flex-1 items-center uppercase font-pop text-sm text-black font-medium">
                  SR.NO.
                </div>
                <div className="row-item flex flex-1 items-center uppercase font-pop text-sm text-black font-medium text-center">
                  ORDER NUMBER
                </div>
                <div className="row-item flex flex-1 items-center uppercase font-pop text-sm text-black font-medium text-center">
                  IN
                </div>
                <div className="row-item flex flex-1 items-center uppercase font-pop text-sm text-black font-medium text-center">
                  OUT
                </div>
                <div className="row-item flex flex-1 items-center uppercase font-pop text-sm text-black font-medium text-center">
                  TIME
                </div>
                <div className="row-item flex flex-[0.5] items-center uppercase font-pop text-sm text-black font-medium text-center">
                  Status
                </div>
              </div>
              {tblData.map((item, index) => (
                <div
                  key={index}
                  className="row flex items-center gap-3 p-3 w-full"
                >
                  <div className="row-item flex flex-1 items-center uppercase font-pop text-xs text-white font-normal">
                    {item.sr}
                  </div>
                  <div className="row-item flex flex-1 items-center uppercase font-pop text-xs text-white font-normal">
                    {item.orderNumb}
                  </div>
                  <div className="row-item flex flex-1 items-center uppercase font-pop text-xs text-white font-normal">
                    {item.in}
                  </div>
                  <div className="row-item flex flex-1 items-center uppercase font-pop text-xs text-white font-normal">
                    {item.out}
                  </div>
                  <div className="row-item flex flex-1 items-center uppercase font-pop text-xs text-white font-normal">
                    {item.time}
                  </div>
                  <div className="row-item flex flex-[0.5] items-center uppercase font-pop text-xs text-white font-normal">
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BuySell;
