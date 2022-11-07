import React from "react";
import Nav from "../Nav/Nav";
import Logo from "../../Assets/Images/Brand/logo copy.png";
import "./styles.scss";
const Header = () => {
  return (
    <div className="header-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-4">
            <div className="header-logo">
              <img src={Logo} alt="" />
            </div>
          </div>

          <div className="col-lg-10 col-8">
            <div className="header-right-container">
              <Nav />
              <button href="#" class="btn-border-gradient" style={{marginRight:"10px"}}>
                <span>Sign Up</span>
              </button>
              <button
                href="#"
                class="btn-border-gradient"
                data-toggle="modal"
                data-target="#login-modal"
              >
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
