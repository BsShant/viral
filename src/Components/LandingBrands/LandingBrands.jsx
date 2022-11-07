import React from "react";
import "./styles.scss";
import Image1 from "../../Assets/Images/SliderBrand/1541400633.png";
import Image2 from "../../Assets/Images/SliderBrand/1541400655.png";
import Image3 from "../../Assets/Images/SliderBrand/1541400679.png";
import Image4 from "../../Assets/Images/SliderBrand/1541400697.png";
import Image5 from "../../Assets/Images/SliderBrand/1541400716.png";
import Image6 from "../../Assets/Images/SliderBrand/1541400762.png";
import ReactOwlCarousel from "react-owl-carousel";

const LandingBrands = () => {
  const brandData = [
    {
      image: Image1,
    },
    {
      image: Image2,
    },
    {
      image: Image3,
    },
    {
      image: Image4,
    },
    {
      image: Image5,
    },
    {
      image: Image6,
    },
  ];
  return (
    <section className="brand">
      <ReactOwlCarousel
        className="owl-theme brand-item"
        nav={false}
        responsiveClass={true}
        loop={true}
        margin={10}
        autoplay={true}
        slideTransition={"linear"}
        autoplayTimeout={1000}
        autoplayHoverPause={true}
        autoplaySpeed={1000}
        navRewind={false}
        dots={false}
        center={true}
        responsive={{
          0: {
            items: 3,
          },
          768: {
            items: 6,
          },
          992: {
            items: 6,
          },
          1024: {
            items: 6,
          },
        }}
      >
        {brandData.map((bd, index) => {
          return (
            <div className="item bg-cover" key={index}>
              <img src={bd.image} alt="" />
            </div>
          );
        })}
      </ReactOwlCarousel>

      <div className="brand-quotes bg-cover text-center">
        <div className="container">
          <h3 className="title">
            WE POWER CAMPAIGNS FOR A PERSONAL MISSION TO THE WORLD LARGEST
            BRANDS
          </h3>
          <div className="description">
            We can create viral Campaign for a bathroom singer who just turned
            out a great song and wants exposure to the world largestbrands that
            roll out Humongous missions. No Job is big or small for us. Our
            soldiers are ready to battle for you and your company as long as
            you’r in need.
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingBrands;
