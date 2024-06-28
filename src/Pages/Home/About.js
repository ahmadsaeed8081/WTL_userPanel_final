import React from "react";

const About = () => {
  return (
    <div id="aboutus" className="about-section flex flex-col pb-20">
      <div className="wrap wrapWidth flex items-center gap-8 sm:flex-row flex-col">
        <div className="flex items-center justify-end flex-1">
          <img src="./images/about-bg.png" className="h-[340px]" />
        </div>
        <div className="flex flex-1 flex-col gap-5 sm:items-start items-center">
          <h1 className="text-white font-normal text-2xl sm:text-start text-center">
            Trade Smarter, Trade Better with
            <span className="text-themeColor"> WTL!</span>
          </h1>
          <img src="./images/separator.svg" alt="separator" className="w-20" />
          <p className="font-pop text-white font-extralight text-sm leading-7 sm:text-start text-center">
          WTL Token is your gateway to participating in World Trading Leagues at discounted rates. You can use these tokens to pay for your league fees, making it more affordable to join the competitions. Additionally, all referral rewards and league prizes are paid out in WTL Tokens, so the more you participate and engage with the community, the more tokens you can earn. Community members and token holders can also use WTL Tokens to purchase official World Trading Leagues merchandise and accessories at special discounted prices. This adds another layer of utility to the tokens, making them more than just a tool for trading and investing.

          </p>
          <div className="flex items-center sm:justify-start justify-center">
            <button className="btn-connect flex items-center justify-center gap-3 px-4 py-3">
              <label className="text-white text-xs">White Paper</label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
