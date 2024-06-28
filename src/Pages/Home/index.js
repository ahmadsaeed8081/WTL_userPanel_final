import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import ContactUsModal from "../../components/ContactUsModal";

import HeroSection from "./HeroSection";
import FeaturedInSection from "./FeaturedInSection";
import Banner from "./Banner";
import About from "./About";
import CoreBenefits from "./CoreBenefits";
import OverViewSection from "./OverViewSection";
import Roadmap from "./Roadmap";
import TeamSection from "./TeamSection";
import HowToBuy from "./HowToBuy";
import Airdrop from "./Airdrop";
import Faqs from "./Faqs";
import JoinUs from "./JoinUs";
import SidebarLandingPage from "../../components/SidebarLadingPage";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [openHomeSidebar, setOpenHomeSidebar] = useState(false);
  return (
    <>
      <Header
        openSidebar={openHomeSidebar}
        setOpenSidebar={setOpenHomeSidebar}
      />
      <SidebarLandingPage
        openSidebar={openHomeSidebar}
        setOpenSidebar={setOpenHomeSidebar}
      />
      <div className="lading-page bg-themeColor2 flex flex-col">
        <HeroSection />
        <FeaturedInSection />
        <Banner />
        <About />
        <CoreBenefits />
        <OverViewSection />
        <Roadmap />
        <TeamSection />
        <HowToBuy />
        <Airdrop />
        <Faqs />
        <JoinUs />

        <Modal open={open} onClose={() => setOpen(false)}>
          <ContactUsModal open={open} setOpen={setOpen} />
        </Modal>
      </div>
      <Footer open={open} setOpen={setOpen} />
    </>
  );
};

export default Main;
