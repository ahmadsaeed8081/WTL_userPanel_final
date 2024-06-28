import React from "react";
import { CheckIcon, UserIcon } from "../../assets/Icons";

const HowToBuy = () => {
  return (
    <div className="how-to-buy flex py-20">
      <div className="wrap wrapWidth flex flex-col items-center gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-white md:text-2xl text-xl md:text-start text-center">
            How to Buy
            <span className="text-themeColor"> WTL Tokens</span>
          </h1>
          <img src="./images/separator.svg" alt="separator" className="w-20" />
        </div>
        <div className="flex items-center flex-col sm:flex-row sm:gap-10 gap-24 w-full">
          <div className="left-side flex sm:flex-[0.8] flex-1 w-full">
            <div className="vertical-map flex relative w-full">
              <div className="border-r border-white border-dashed min-h-[400px]"></div>
              <div className="flex flex-col gap-6 absolute justify-between left-[-16px]">
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-themeColor text-black p-2">
                    01
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-lg text-white">Connect Your Wallet</h1>
                    <p className="font-pop text-[12px] text-white">
                      Download a compatible cryptocurrency wallet. Visit our
                      website and connect your digital wallet.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-themeColor text-black p-2">
                    02
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-lg text-white">Set Up Your Wallet</h1>
                    <p className="font-pop text-[12px] text-white">
                      Set up your wallet and securely store your private keys
                      and recovery phrases.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-themeColor text-black p-2">
                    03
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-lg text-white">Fund Your Wallet</h1>
                    <p className="font-pop text-[12px] text-white font-pop">
                      Transfer cryptocurrency (such as BNB or USDT) to your
                      wallet. You can buy these from popular exchanges like
                      Coinbase, Binance, or Kraken.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-themeColor text-black p-2">
                    04
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-lg text-white">Buy WTL Tokens</h1>
                    <p className="font-pop text-[12px] text-white">
                      Visit our website and click on the "Buy WTL Token"
                      button.  Enter the amount of WTL Tokens you wish to buy,
                      review the details, and confirm your purchase.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 absolute1 bottom-[-80px]1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-themeColor text-black p-2">
                    <CheckIcon />
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="btn-buy flex items-center justify-center gap-3 px-4 py-3">
                      {/* <div className="flex items-center justify-center">
                        <UserIcon />
                      </div> */}
                      <label className="text-white text-xs">Buy Now</label>
                    </button>
                    {/* <button className="btn bg-themeColor text-black text-xs">
                      Buy Now
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side flex flex-1">
            <video
              width="100%"
              height="500"
              controls
              className=" rounded-2xl border-2 border-themeColor"
            >
              <source src="./images/howbuy.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
