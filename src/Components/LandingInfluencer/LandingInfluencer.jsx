import React from "react";
import "./styles.scss";
import Image1 from "../../Assets/Images/Influencer/1.jpg";
import Image2 from "../../Assets/Images/Influencer/2.jpg";
import Image3 from "../../Assets/Images/Influencer/3.jpg";
import Image4 from "../../Assets/Images/Influencer/4.jpg";
import Image5 from "../../Assets/Images/Influencer/5.jpg";
import ReactOwlCarousel from "react-owl-carousel";

const LandingInfluencer = () => {
  const influencerData = [
    { image: Image1, follower: "4.3K Followers" },
    { image: Image2, follower: "4.3K Followers" },
    { image: Image3, follower: "4.3K Followers" },
    { image: Image4, follower: "4.3K Followers" },
    { image: Image5, follower: "4.3K Followers" },
  ];
  return (
    <section class="top-influencer text-center">
      <h1 class="title">TRUSTED UNLIMITED NETWORK</h1>
      <div class="description">
        Don’t fall for big, fake fans, followers, flashy network numbers or
        promises with no data analysis to back the results. With Viral Troop you
        have access to a near infinite growing number of influencers and can
        leverage a legacy of close relationships within our highly curated
        network. No more getting tricked by false numbered pages or accounts.
        Here our soldiers are Genuine, governed by Captains and Generals. After
        all we are Gurkhas!!
      </div>
      <ReactOwlCarousel
        className="owl-theme influencer-items"
        nav={false}
        responsiveClass={true}
        loop={true}
        margin={10}
        autoplay={true}
        slideTransition={"linear"}
        autoplayTimeout={2500}
        dots={false}
        center={true}
        stagePadding={20}
        animateOut={"fadeOut"}
        animateIn={"fadeIn"}
        responsive={{
          0: {
            items: 2,
          },
          768: {
            items: 5,
          },
          992: {
            items: 5,
          },
          1024: {
            items: 5,
          },
        }}
      >
        {influencerData.map((id, index) => {
          return (
            <div class="item">
              <img src={id.image} alt="" />
              <div>
                <span class="items-text">
                  <b>1.3K Followers</b>
                </span>
                <div class="items-icon">
                  <a href="#">
                    <i class="fa fa-instagram fa-2x animate-icon"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter fa-2x animate-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </ReactOwlCarousel>
    </section>
  );
};

export default LandingInfluencer;
