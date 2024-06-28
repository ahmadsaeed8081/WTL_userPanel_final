import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserIcon, CrossIcon } from "../../assets/Icons";

const SidebarLandingPage = ({ openSidebar, setOpenSidebar }) => {
  console.log("openSidebar...", openSidebar);
  const navBarItems = [
    { label: "Home", link: "#home" },
    { label: "About us", link: "#aboutus" },
    { label: "Tokenomics", link: "#tokenomics" },
    { label: "Road Map", link: "#roadmap" },
    { label: "Team", link: "#team" },
    { label: "Faq", link: "#faq" },
  ];

  useEffect(() => {
    document.body.addEventListener("click", () => {
      document.body.style.overflowY = "auto";
      setOpenSidebar(false);
    });
  }, []);

  return (
    <div
      className={`sidebar-home fixed  anim ${openSidebar ? "show" : "hide"}`}
    >
      <div
        className={`side-block flex flex-col anim ${
          openSidebar ? "show" : "hide"
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="hdr flex items-center justify-between">
          <img src="./images/logo.svg" className="h-16 w-16" />
          <div
            className="icon-close flex aic jc"
            onClick={(e) => {
              setOpenSidebar(false);
            }}
          >
            <CrossIcon />
          </div>
        </div>
        <div>
          <div className="items flex aic flex-col">
            {navBarItems.map((item, index) => (
              <a
                href={item.link}
                className={`list-items flex`}
                onClick={(e) => {
                  setOpenSidebar(false);
                }}
              >
                <div className="li font-pop">{item.label}</div>
              </a>
            ))}
          </div>
        </div>
        <div className="flex md:hidden items-center justify-center">
          <button className="btn-connect flex items-center justify-center gap-3 px-4 py-3">
            <div className="flex items-center justify-center h-3 w-3">
              <UserIcon />
            </div>
            <label className="text-white text-xs">Connect Wallet</label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarLandingPage;
