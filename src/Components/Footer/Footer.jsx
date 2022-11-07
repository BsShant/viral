import React from "react";
import "./styles.scss";
import Image1 from "../../Assets/Images/Slider/1541400580.png";
import Image2 from "../../Assets/Images/Slider/1534078686.png";
import ReactOwlCarousel from "react-owl-carousel";
import LogoWhite from "../../Assets/Images/Brand/Logo-white.png";
const Footer = () => {
  const footerSliderData = [{ image: Image1 }, { image: Image2 }];
  return (
    <footer className="clearfix footer">
      <div className="footer-info">
        <div className="container">
          <div className="row">
            <div className="footer-left col-sm-6 col-12">
              <div className="footer-logo">
                <img src={LogoWhite} alt="" />
              </div>
              <div className="row">
                <div className="col-sm-6 col-6  pl-0">
                  <h4 className="title">About</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="#">Brands &amp; Agencies</a>
                    </li>
                    <li>
                      <a href="#how-it-works">How it Works</a>
                    </li>
                    <li>
                      <a href="#">Success Stories</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-6  pl-0">
                  <h4 className="title">Resources</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Help</a>
                    </li>
                    <li>
                      <a href="#">For Brands</a>
                    </li>
                    <li>
                      <a href="#">For Influencers</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-right col-sm-6 col-xs-12">
              <ReactOwlCarousel
                className="owl-theme footer-images"
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
                {footerSliderData.map((sd, index) => {
                  return (
                    <div className="item">
                      <img src={sd.image} alt="" />
                    </div>
                  );
                })}
              </ReactOwlCarousel>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          Viral Troop &copy; 2018. All Rights Reserved | Terms of Use |{" "}
          <a href="<?php echo e(route('page','privacy-policy')); ?>">
            Privacy Policy
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
