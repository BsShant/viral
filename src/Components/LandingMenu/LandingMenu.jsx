import React from "react";
import "./styles.scss";
const LandingMenu = () => {
  const menuData = [
    {
      name: "Pizza",
      image: "https://images.deliveryhero.io/image/fd-bd/LH/u2tb-hero.jpg",
    },
    {
      name: "Burger",
      image: "https://images.deliveryhero.io/image/fd-bd/LH/u2tb-hero.jpg",
    },
    {
      name: "Biryani",
      image: "https://images.deliveryhero.io/image/fd-bd/LH/u2tb-hero.jpg",
    },
    {
      name: "Salad",
      image: "https://images.deliveryhero.io/image/fd-bd/LH/u2tb-hero.jpg",
    },
  ];
  return (
    <div className="landing-menu-container">
      <div className="container">
        <div className="landing-menu-inner-container">
          <h2 className="landing-menu-header">Our Menu</h2>
          <h4 className="landing-menu-sub-header">
            We Have Delicious food items
            <div className="section-header-bottom"></div>
          </h4>
          <div className="row landing-menu-main">
            {menuData.map((md, index) => {
              return (
                <div className="col-md-3">
                  <div className="landing-menu-item-container">
                    <div className="landing-menu-image">
                      <img src={md.image} alt="" />
                    </div>
                    <div className="landing-menu-name">{md.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMenu;
