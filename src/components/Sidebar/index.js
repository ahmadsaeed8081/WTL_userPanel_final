import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
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
const Sidebar = () => {
  const navigate = useNavigate();

  const [openSidebar, setOpenSidebar] = useState(true);
  const dispatch = useDispatch();
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
      // setOpenSidebar(false);
    });
  }, []);

  const userLogout = () => {
    navigate("/");
  };

  return (
    <div className={`sidebar-s fixed anim ${openSidebar ? "full-open" : ""}`}>
      <div
        className={`side-block border-r border-[#929292]  flex flex-col anim ${
          openSidebar ? "full-open" : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className={`hdr flex items-center border-b border-[#929292] ${
            openSidebar ? "" : "center"
          }`}
        >
          <img src="/images/logo2.svg" className="h-[81px]" />
        </div>
        <div className="items flex items-center flex-col gap-6">
          <>
            {navBarItems.map((item, index) => (
              <NavLink
                to={item.slug}
                key={index}
                className="list-items flex gap-3"
              >
                <div className="icon flex items-start justify-center ">
                  {item.icon}
                </div>

                {openSidebar && (
                  <div className="text-white text-sm">{item.lbl}</div>
                )}
                {item.comingSoon && (
                  <div className="text-xs font-extralight font-pop bg-themeColor rounded-full text-black text-center p-1">
                    Coming soon
                  </div>
                )}
              </NavLink>
            ))}
          </>
          <div
            className="list-items flex items-center"
            onClick={(e) => userLogout()}
          >
            {/* <div className="icon flex items-start justify-center ">
              <LogoutIcon />
            </div> */}
            <div className="ml-3 li cfff font">Signout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
