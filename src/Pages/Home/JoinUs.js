import React from "react";
import { DiscordIcon, TelegramIcon, XIcon } from "../../assets/Icons";

const JoinUs = () => {
  return (
    <div className="join-us-section flex">
      <div className="wrap wrapWidth flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-white text-2xl">Join Our Community</h1>
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/WTLTOKEN"
              target="_blank"
              className="flex items-center justify-center h-8 w-8"
            >
              <TelegramIcon />
            </a>
            <a
              href="https://x.com/WTLTOKEN?t=lRAPo4j0QSr5i4aUr8JtRA&s=08"
              target="_blank"
              className="flex items-center justify-center h-8 w-8"
            >
              <XIcon />
            </a>
            <a
              href="https://discord.gg/DV33pK4rYu"
              target="_blank"
              className="flex items-center justify-center h-8 w-8"
            >
              <DiscordIcon />
            </a>
          </div>
          <button className="btn-join flex items-center justify-center gap-3 px-4 py-3">
            <label className="text-white text-xs">Join Now</label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
