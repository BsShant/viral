import React from "react";
import Header from "../../Components/Header/Header";
import LandingAbout from "../../Components/LandingAbout/LandingAbout";
import LandingGallery from "../../Components/LandingGallery/LandingGallery";
import LandingMenu from "../../Components/LandingMenu/LandingMenu";
import ReactOwlCarousel from "react-owl-carousel";
import Slider1 from "../../Assets/Images/Slider/1533361221.png";
import Slider2 from "../../Assets/Images/Slider/1533361232.png";
import Slider3 from "../../Assets/Images/Slider/1533361241.png";
import "./styles.scss";
import LandingBrands from "../../Components/LandingBrands/LandingBrands";
import LandingHow from "../../Components/LandingHow/LandingHow";
import LandingInfluencer from "../../Components/LandingInfluencer/LandingInfluencer";
import LandingContact from "../../Components/LandingContact/LandingContact";
import Footer from "../../Components/Footer/Footer";

const LandingPage = () => {
  const sliderData = [
    {
      image: Slider1,
    },
    {
      image: Slider2,
    },
    {
      image: Slider3,
    },
  ];
  return (
    <div className="landing-page-container">
      <div className="landing-hero">
        <Header />
        <section className="banner-slider">
          <div className="container" style={{ height: "100%" }}>
            <div className="row" style={{ height: "100%" }}>
              <div className="col-md-6 col-12">
                <div className="banner-left-side">
                  <h3 className="welcome-text">WELCOME TO VIRAL TROOP</h3>
                  <div className="banner-tag">YOUR MARKETING SOLDIERS</div>
                  <div className="banner-button">
                    <div className="landing-hero-button-container">
                      <a className="btn-border-gradient">
                        <span>Start Your Campaign</span>
                      </a>
                      <a href="#" className="btn-border-gradient">
                        <span>Become a Soldier</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 banner-right-side">
                <div className="slider-wrap">
                  <ReactOwlCarousel
                    className="owl-theme hero-slider"
                    nav={false}
                    dots={false}
                    responsiveClass={true}
                    animateOut={"fadeOut"}
                    animateIn={"fadeIn"}
                    autoplayTimeout={3000}
                    responsive={{
                      0: {
                        items: 1,
                        dots: false,
                        autoplay: true,
                        loop: true,
                      },
                      768: {
                        items: 1,
                        dots: false,
                        autoplay: true,
                        loop: true,
                      },
                      992: {
                        items: 1,
                        dots: false,
                        autoplay: true,
                        loop: true,
                      },
                      1024: {
                        items: 1,
                        dots: false,
                        autoplay: true,
                        loop: true,
                      },
                    }}
                  >
                    {sliderData.map((sd, index) => {
                      return (
                        <div className="item bg-cover" key={index}>
                          <img src={sd.image} alt="" />
                        </div>
                      );
                    })}
                  </ReactOwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <LandingBrands />
      <LandingHow />
      <LandingInfluencer />
      <LandingContact />
      <Footer />
    </div>
  );
};

export default LandingPage;
