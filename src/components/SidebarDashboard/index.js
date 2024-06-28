import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  CrossIcon,
  S1Icon,
  S2Icon,
  S3Icon,
  S4Icon,
  S5Icon,
  S7Icon,
  S8Icon,
  S9Icon,
  S10Icon,
} from "../../assets/Icons";

const SidebarDashboard = ({ openSidebar, setOpenSidebar }) => {
  const navBarItems = [
    {
      lbl: "dashboard",
      icon: <S1Icon />,
      slug: "/dashboard/home",
      comingSoon: false,
    },
    {
      lbl: "Private Selling",
      icon: <S2Icon />,
      slug: "/dashboard/private-selling",
      comingSoon: false,
    },
    {
      lbl: "Buy / Sell",
      icon: <S3Icon />,
      slug: "/dashboard/buy-sell",
      comingSoon: false,
    },
    {
      lbl: "Flexible Staking",
      icon: <S4Icon />,
      slug: "/dashboard/flexible-staking",
      comingSoon: false,
    },
    {
      lbl: "Fixed Staking",
      icon: <S5Icon />,
      slug: "/dashboard/fixed-staking",
      comingSoon: false,
    },
    {
      lbl: "Burning",
      icon: <S7Icon />,
      slug: "/dashboard/burning",
      comingSoon: false,
    },
    {
      lbl: "Kyc",
      icon: <S8Icon />,
      slug: "/dashboard/kyc",
      comingSoon: false,
    },
    {
      lbl: "History",
      icon: <S9Icon />,
      slug: "/dashboard/history",
      comingSoon: false,
    },
    {
      lbl: "Dow",
      icon: <S10Icon />,
      slug: "#",
      comingSoon: true,
    },
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
          <img src="/images/logo.svg" className="h-16 w-16" />
          <div
            className="icon-close flex items-center justify-center"
            onClick={(e) => {
              setOpenSidebar(false);
            }}
          >
            <CrossIcon />
          </div>
        </div>

        <div className="items flex items-center flex-col">
          {navBarItems.map((item, index) => (
            <NavLink
              to={item.slug}
              className={`list-items flex`}
              onClick={(e) => {
                setOpenSidebar(false);
              }}
            >
              <div className="li font-pop">{item.lbl}</div>
              {item.comingSoon && (
                <div className="text-xs font-extralight font-pop bg-themeColor rounded-full text-black text-center p-1">
                  Coming soon
                </div>
              )}
            </NavLink>
          ))}
        </div>
        <div className="sidebar-btm flex items-center px-4 py-5 ">
          <button className="btn-logout border-2 border-black btn !rounded-full font-pop w-full text-themeColor2 font-semibold text-xl">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarDashboard;
