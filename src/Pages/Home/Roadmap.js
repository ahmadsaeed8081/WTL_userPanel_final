import React from "react";
import { PhaseIcon1, PhaseIcon2, PhaseIcon3 } from "../../assets/Icons";

const Roadmap = () => {
  return (
    <div id="roadmap" className="road-map-section flex py-14">
      <div className="wrap wrapWidth flex flex-col items-center gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-white md:text-2xl text-xl md:text-start text-center">
            Roadmap
          </h1>
          <img src="./images/separator.svg" alt="separator" className="w-20" />
        </div>
        <div className="flex items-center w-full relative">
          <div className="sm:flex hidden items-center justify-center">
            <img src="./images/video_bg-left.png" className="h-[260px]" />
          </div>
          <div className="map-grid w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            <div className="map-item flex flex-col items-center gap-6 p-10">
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-black">Phase 1</h1>
                <img
                  src="./images/separator-black.svg"
                  alt="separator"
                  className="w-16"
                />
              </div>
              <div className="flex items-center justify-center sm:h-16 sm:w-16 h-12 w-12">
                <PhaseIcon1 />
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black font-pop sm:text-sm text-xl sm:leading-5 leading-9">
                  1) Token Research <br />
                  2) Website Build <br /> 3) Token Audit <br /> 4) Token
                  Generation <br /> 5) Social Activation <br /> 6) Marketing &
                  PR
                </p>
              </div>
            </div>
            <div className="map-item flex flex-col items-center gap-6 p-10">
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-black">Phase 2</h1>
                <img
                  src="./images/separator-black.svg"
                  alt="separator"
                  className="w-16"
                />
              </div>
              <div className="flex items-center justify-center sm:h-16 sm:w-16 h-12 w-12">
                <PhaseIcon2 />
              </div>
              <div className="flex flex-col w-full sm:gap-1 gap-4">
                <p className="text-black font-pop sm:text-sm text-xl leading-5">
                  1) Private Sale
                </p>
                <p className="text-black font-pop sm:text-sm text-xl leading-5">
                  2) WTL SWAP Launch
                </p>
                <p className="text-black font-pop sm:text-sm text-xl leading-5">
                  3) Coin Market Cap Listing
                </p>
                <p className="text-black font-pop sm:text-sm text-xl leading-5">
                  4) Airdrop Launch
                </p>
                <p className="text-black font-pop sm:text-sm text-xl leading-5">
                  5) Pre Sale
                </p>
                <p className="text-black font-pop sm:text-sm text-xl leading-5">
                  6) Token Listing in Top Exchange with ample liquidity
                </p>
                <p className="text-black font-pop sm:text-sm text-xl leading-5">
                  7) Social Dominance
                </p>
              </div>
            </div>
            <div className="map-item flex flex-col items-center gap-6 p-10">
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-black">Phase 3</h1>
                <img
                  src="./images/separator-black.svg"
                  alt="separator"
                  className="w-16"
                />
              </div>
              <div className="flex items-center justify-center sm:h-16 sm:w-16 h-12 w-12">
                <PhaseIcon3 />
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black font-pop sm:text-sm text-xl sm:leading-5 leading-9">
                  1) Coin Gecko and Crypto Rank Listing
                  <br />
                  2) Multi Chain Deployment <br />
                  3) Staking Rewards <br />
                  4) Burning Rewards <br />
                  5) Governance Voting Right <br />
                  6) Social Mastery <br />
                  7) Token Listing in Multiple Biggest Exchanges
                </p>
              </div>
            </div>
          </div>
          <div className="sm:flex hidden items-center justify-center">
            <img src="./images/video_bg-right.png" className="h-[260px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
