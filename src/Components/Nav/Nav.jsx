import React, { useState } from "react";
import "./styles.scss";
import Logo from "../../Assets/Images/Brand/logo.png";

const Nav = () => {
  const [selectedNav, setSelectedNav] = useState("home");
  const navLinks = [
    {
      id: "home",
      name: "Home",
      link: "/home",
    },
    {
      id: "howItWorks",
      name: "How It Works",
      link: "/howItWorks",
    },
    {
      id: "startYourCampaign",
      name: "Start Your Campaign",
      link: "/startYourCampaign",
    },
    {
      id: "becomeASoilder",
      name: "Become A Soilder",
      link: "/becomeASoilder",
    },
  ];
  const handleNavClick = (e) => {
    setSelectedNav(e.id);
  };
  return (
    <div className="nav-container">
          <div className="nav-left">
            {navLinks.map((navItem, index) => {
              return (
                <div
                  key={index}
                  className="single-nav-item"
                  onClick={() => handleNavClick(navItem)}
                >
                  {navItem.name}
                </div>
              );
            })}
          </div>
    </div>
  );
};

export default Nav;
