import React from "react";
import { UserIcon } from "../../assets/Icons";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div id="home" className="hero-section flex relative">
      <div className="shadow-dot absolute"></div>
      <div className="wrap wrapWidth gap-10 flex items-center md:flex-row flex-col text-white">
        <div className="flex flex-1 flex-col gap-6 md:items-start items-center md:py-0 py-10">
          <h1 className="text-white md:text-5xl text-3xl md:text-start text-center md:leading-[61px] leading-9">
            Trade, Triumph, and Transcend with{" "}
            <span className="text-themeColor">WTL Token!</span>{" "}
          </h1>
          <img src="./images/separator.svg" alt="separator" className="w-20" />
          <p className="font-pop text-white font-extralight text-sm leading-7 md:text-start text-center">
          Get ready for a game-changing disruption in crypto, forex, and stock trading. WTL Token isn't just any cryptocurrency - it's leading the charge to redefine how traders operate. Wield the power of this innovative digital asset and elevate your strategies to soar past the competition.

          <br></br>With WTL Token's cutting-edge ecosystem, you'll command elite tools, and powerful analytics, and tap into a driven community laser-focused on maximizing your proficiency. Leave restrictions behind and welcome a future where your trading mastery knows no limits. The time to reshape your financial trajectory begins now with WTL Token.
          </p>
          <Link
            to="/dashboard/home"
            className="btn-buy flex items-center justify-center gap-3 px-4 py-3"
          >
            <div className="flex items-center justify-center">
              <img src="../images/logo.svg" className="h-5 w5" />
              {/* <UserIcon /> */}
            </div>
            <label className="text-white text-xs">Buy WTL Token Now</label>
          </Link>
        </div>
        <div className="flex flex-1">
          <img
            src="./images/hero-bg.svg"
            alt="/"
            className="md:h-full md:w-full h-[400px] animate-heartbeat"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
