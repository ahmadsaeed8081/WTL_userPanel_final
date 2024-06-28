import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
} from "../../assets/Icons";

const TeamSection = () => {
  return (
    <div id="team" className="team-section flex py-14">
      <div className="wrap wrapWidth flex flex-col items-center gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-white md:text-2xl text-xl md:text-start text-center">
            The Leadership <span className="text-themeColor">Team</span>
          </h1>
          <img src="./images/separator.svg" alt="separator" className="w-20" />
        </div>
        <div className="w-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
          <div className="flex flex-col items-center gap-6">
            <img
              src="./images/t1.png"
              alt="img"
              className="h-[180px] w-[180px] rounded-full bg-contain"
            />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-white font-pop text-base">
                Cameron Williamson
              </h1>
              <h3 className="text-[#A4B4C3] text-xs font-extralight font-pop">
                Founder & CO
              </h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-4 w-4">
                  <FacebookIcon />
                </div>
                <div className="flex items-center justify-center h-4 w-4">
                  <TwitterIcon />
                </div>
                <div className="flex items-center justify-center h-4 w-4">
                  <InstagramIcon />
                </div>
                <div className="flex items-center justify-center h-4 w-4">
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <img
              src="./images/t2.png"
              alt="img"
              className="h-[180px] w-[180px] rounded-full bg-contain"
            />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-white font-pop text-base">Eleanor Pena</h1>
              <h3 className="text-[#A4B4C3] text-xs font-extralight font-pop">
                Head of Design
              </h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-4 w-4">
                  <FacebookIcon />
                </div>
                <div className="flex items-center justify-center h-4 w-4">
                  <TwitterIcon />
                </div>
                <div className="flex items-center justify-center h-4 w-4">
                  <InstagramIcon />
                </div>
                <div className="flex items-center justify-center h-4 w-4">
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <img
              src="./images/t3.png"
              alt="img"
              className="h-[180px] w-[180px] rounded-full bg-contain"
            />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-white font-pop text-base">Bessie Cooper</h1>
              <h3 className="text-[#A4B4C3] text-xs font-extralight font-pop">
                Vp People
              </h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-4 w-4">
                  <FacebookIcon />
                </div>
                <div className="flex items-center justify-center h-4 w-4">
                  <TwitterIcon />
                </div>
                <div className="flex items-center justify-center h-4 w-4">
                  <InstagramIcon />
                </div>
                <div className="flex items-center justify-center h-4 w-4">
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <img
              src="./images/t4.png"
              alt="img"
              className="h-[180px] w-[180px] rounded-full bg-contain"
            />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-white font-pop text-base">
                Darlene Robertson
              </h1>
              <h3 className="text-[#A4B4C3] text-xs font-extralight font-pop">
                Product Manager
              </h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-4 w-4">
                  <FacebookIcon />
                </div>
                <div className="flex items-center justify-center h-4 w-4">
                  <TwitterIcon />
                </div>
                <div className="flex items-center justify-center h-4 w-4">
                  <InstagramIcon />
                </div>
                <div className="flex items-center justify-center h-4 w-4">
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
