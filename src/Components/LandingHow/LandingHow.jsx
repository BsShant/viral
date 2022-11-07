import React from "react";
import LandingHowTab from "./LandingHowTab";
import "./styles.scss";
const LandingHow = () => {
  return (
    <section className="how-it-works tabbable" id="how-it-works">
      <h1 className="title text-center">How It Works</h1>
      <div className="influncer-brand text-center">
        <h3>You are</h3>
      </div>
      <LandingHowTab />

      <div className="bottom-data text-center">
        <a href="{{route('signup')}}" className="btn-border-gradient">
          <span>Register for Free NOW!</span>
        </a>
      </div>
    </section>
  );
};

export default LandingHow;
