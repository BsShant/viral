import React from "react";
import "./styles.scss";
import EmailImage from "../../Assets/Images/Contact/email.png";
import PhoneImage from "../../Assets/Images/Contact/phone.png";
import PaperPlaneImage from "../../Assets/Images/Contact/paper-plane.png";
import MapImage from "../../Assets/Images/Contact/map.png";

const LandingContact = () => {
  return (
    <section className="contact-us">
      <div className="container">
        <h1 className="title text-center">Contact Us</h1>
        <div className="description text-center">
          So, we understand you are not ready for your project yet! Drop us your
          concerns and we will be in touch with you to help create a master
          plan. After all no battle is won without right planing and this Social
          Media traffic war is No Joke.
        </div>
        <div className="contact-form row">
          <div className="contact-field col-sm-7 col-xs-12">
            <h3 className="title">Contact Us</h3>
            <form method="post">
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="form-group">
                    <div>
                      <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="form-group">
                    <div>
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="form-group">
                    <div>
                      <input
                        type="text"
                        name="company_name"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="form-group">
                    <div>
                      <input
                        type="text"
                        name="phone_no"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-xs-12">
                  <div className="form-group">
                    <div>
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        data-parsley-type="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-xs-12">
                  <div className="form-group">
                    <div>
                      <textarea
                        rows="3"
                        name="message"
                        placeholder="Message"
                        data-parsley-required
                      ></textarea>
                      <button type="submit" className="btn pull-right">
                        <img
                          src={PaperPlaneImage}
                          className="img-responsive"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="contact-info col-sm-5 col-xs-12">
            <h4 className="title text-center">Contact Information</h4>
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">
                  <img src={MapImage} alt="" />
                </span>
                <span className="text"> No Address</span>
              </div>
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">
                  <img src={PhoneImage} alt="" />
                </span>
                <span className="text"> No Phone</span>
              </div>
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">
                  <img src={EmailImage} alt="" />
                </span>
                <span className="text"> No Email</span>
              </div>
            </div>
            <div className="contact-info-footer text-center">
              <a href="#">
                <i className="fa fa-facebook fa-2x animate-icon"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram fa-2x animate-icon"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter fa-2x animate-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingContact;
