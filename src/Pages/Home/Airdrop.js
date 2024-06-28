import React from "react";

const Airdrop = () => {
  return (
    <div className="airdrop-section flex py-16">
      <div className="wrap wrapWidth flex">
        <div className="flex flex-col items-center gap-10 w-full py-10 sm:px-20 px-3 bg-[#15171D]">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-themeColor md:text-2xl text-xl md:text-start text-center">
              Airdrop Mechanics
            </h1>
            <img
              src="./images/separator.svg"
              alt="separator"
              className="w-20"
            />
            <p className="text-white font-pop text-sm font-extralight sm:w-7/12 w-full text-center">
            Participate in our exclusive airdrop events designed to reward active community members who complete specific tasks within our ecosystem. Keep an eye out for these opportunities, as they allow you to earn WTL Tokens directly into your wallet, enriching your trading experience.

            </p>
          </div>
          <div className="flex items-center gap-10 w-full">
            <div className="sm:flex items-center justify-center hidden">
              <img src="./images/airdrop.png" className="h-[300px] w-[320px]" />
            </div>
            <div className="flex flex-col w-full gap-6">
              <input
                type="text"
                placeholder="Enter Name"
                className="font-pop text-sm font-light border border-white/50 p-2 bg-transparent rounded-lg w-full focus:border-themeColor"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="font-pop text-sm font-light border border-white/50 p-2 bg-transparent rounded-lg w-full focus:border-themeColor"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="font-pop text-sm font-light border border-white/50 p-2 bg-transparent rounded-lg w-full focus:border-themeColor"
              />
              <input
                type="text"
                placeholder="Crypto Address"
                className="font-pop text-sm font-light border border-white/50 p-2 bg-transparent rounded-lg w-full focus:border-themeColor"
              />
              <button className="btn-submit flex items-center justify-center gap-3 px-4 py-3">
                <label className="text-white text-xs">Submit</label>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airdrop;
