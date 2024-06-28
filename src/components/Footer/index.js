import React, { useEffect, useState } from "react";

const Footer = ({ open, setOpen }) => {
  return (
    <div className="footer-comp flex flex-col relative">
      <div className="footer-top flex w-full py-12">
        <div className="wrapWidth wrap flex gap-14 sm:flex-row flex-col">
          <div className="flex flex-col sm:items-start items-center flex-1 gap-5">
            <div className="flex items-center justify-center">
              <img src="./images/logo.svg" className="h-20 w-20" />
            </div>
            <p className="text-sm font-pop font-light sm:text-start text-center">
              <span className="text-themeColor">Disclaimer:</span> WTL Token ko
              World Trading Leagues mein istemal ke liye ek utility coin ke tor
              par design kiya gaya hai. Ham kisi bhi mustaqbil ki qeemat ki koi
              guarantee nahi dete aur token ko uske maqsad ke bahar istemal
              karne se mana karte hain. Sambhal kar istemal karen, kyunki
              cryptocurrency aapke ilaake mein ghair-mamooli ho sakti hai, aur
              mumkin faida tax lag sakta hai. Hamesha apni tehqiqat karen, pehle
              maqool faislay karen.
            </p>
          </div>
          <div className="flex flex-col flex-[0.5] gap-5 sm:items-start items-center">
            <h1 className="text-themeColor text-base">Menu</h1>
            <div className="flex flex-col gap-2 w-full sm:text-start text-center">
              <a href="#home" className="font-pop text-sm">
                Home
              </a>
              <a href="#aboutus" className="font-pop text-sm">
                About us
              </a>
              <a href="#tokenomics" className="font-pop text-sm">
                Tokenomics
              </a>
              <a href="#roadmap" className="font-pop text-sm">
                Road Map
              </a>
              <a href="#team" className="font-pop text-sm">
                Team
              </a>
              <button
                className="font-pop text-sm sm:text-start text-center"
                onClick={(e) => setOpen(true)}
              >
                Contact
              </button>
              <a
                href="https://www.worldtradingleagues.com/"
                target="_blank"
                className="font-pop text-sm"
              >
                World Trading Leagues
              </a>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-8 sm:items-start items-center">
            <div className="flex sm:items-center items-start gap-2 justify-between sm:flex-row flex-col">
              <h1 className="text-themeColor text-base sm:text-start text-center sm:w-max w-full">
                Privacy policy
              </h1>
              <div className="border-r-2 border-white h-4 mx-2 sm:flex hidden"></div>
              <h1 className="text-themeColor text-base sm:text-start text-center sm:w-max w-full">
                Terms and Conditions
              </h1>
            </div>
            <div className="flex items-center gap-3 sm:flex-row flex-col">
              <img src="./images/logo.svg" className="h-16" />
              <p className="text-[#E0E0E0] font-pop text-sm font-light sm:max-w-[250px] max-w-full break-words sm:text-start text-center">
                Reg World Trading Leagues:
                0x33E4d3163e66B46bAbC0faF8B30C6c36DD4Ab9E9
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btm flex w-full">
        <div className="flex items-center justify-center w-full bg-themeColor font-pop text-sm text-black1 p-2">
          Copyright 2024 WTL TOKEN. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
