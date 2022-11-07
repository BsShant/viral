import React from "react";
import "./styles.scss";
const LandingAbout = () => {
  return (
    <div className="landing-about-container">
      <div className="container">
        <div className="landing-about-inner-container">
          <h2 className="landing-menu-header">Our Story</h2>
          <h4 className="landing-about-sub-header">
            What makes us
            <div className="section-header-bottom"></div>
          </h4>
          <p className="landing-about-detail">
            W strive to make the best biriyani out there With our amazing chefs,
            we have more than 20 food items
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
