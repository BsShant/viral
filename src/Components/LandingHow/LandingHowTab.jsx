import React, { useState } from "react";
import { Tabs } from "antd";
import Image1 from "../../Assets/Images/How/brand-step1.png";
import Image2 from "../../Assets/Images/How/brand-step2.png";
import Image3 from "../../Assets/Images/How/brand-step3.png";
import Image4 from "../../Assets/Images/How/brand-step4.png";
import Image5 from "../../Assets/Images/How/brand-step5.png";

const { TabPane } = Tabs;

const LandingHowTab = () => {
  const landingHowKeys = ["brand", "influencer"];
  const [landingHow, setLandingHow] = useState("brand");
  const onChange = (key) => {
    setLandingHow(key);
  };
  const brandData = [
    {
      image: Image1,
      title: "Step 1",
      info: "Register as a brand.",
    },
    {
      image: Image2,
      title: "Step 2",
      info: "Create a campaign.",
    },
    {
      image: Image3,
      title: "Step 3",
      info: "Prepare your soldiers (influencers).",
    },
    {
      image: Image4,
      title: "Step 4",
      info: "Schedule and make payment.",
    },
    {
      image: Image5,
      title: "Step 5",
      info: "Go Viral!",
    },
  ];

  const influencerData = [
    {
      image: Image1,
      title: "Step 1",
      info: "Register and become a soilder.",
    },
    {
      image: Image2,
      title: "Step 2",
      info: "Set rates and browse campaigns",
    },
    {
      image: Image3,
      title: "Step 3",
      info: "Bid a campaign.",
    },
    {
      image: Image4,
      title: "Step 4",
      info: "Create Traffic.",
    },
    {
      image: Image5,
      title: "Step 5",
      info: "Receive payment",
    },
  ];
  return (
    <div className="landing-how-tab-container">
      <Tabs
        className="landing-how-tab"
        activeKey={landingHow}
        onChange={onChange}
      >
        <TabPane
          className="container landing-how-tab-body"
          tab={
            <div className="landing-how-tab-title border-radius-right-none">
              <span>Brands</span>
            </div>
          }
          key="brand"
        >
          <div className="container-fluid" id="brand-steps">
            {brandData.map((bd, index) => {
              return (
                <div className="step text-center" key={index} index={index}>
                  <div className="step-icon">
                    <img src={bd.image} alt="" />
                  </div>
                  <h3 className="title">{bd.title}</h3>
                  <span className="description">{bd.info}</span>
                </div>
              );
            })}
          </div>
          <div className="steps-footer description text-center">
            Browse our brave soldiers or Influencers by industry, content,
            location and audience analysis and search our database of everyday
            growing influencers based on any keyword to match the niche.
          </div>
        </TabPane>

        <TabPane
          className="container landing-how-tab-body"
          tab={
            <div className="landing-how-tab-title border-radius-left-none">
              <span>Influencer</span>
            </div>
          }
          key="influencer"
        >
          <div className="container-fluid" id="brand-steps">
            {influencerData.map((bd, index) => {
              return (
                <div className="step text-center col-sm-2 col-xs-12" key={index} index={index}>
                  <div className="step-icon">
                    <img src={bd.image} alt="" />
                  </div>
                  <h3 className="title">{bd.title}</h3>
                  <span className="description">{bd.info}</span>
                </div>
              );
            })}
          </div>
          <div className="steps-footer description text-center">
            Browse campaign posted by different Brands and select the ones your
            interested in. Fulfill the requirements and get paid in an instant.
            Your time and dedication unlocks unlimited earning possibilities.
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default LandingHowTab;
