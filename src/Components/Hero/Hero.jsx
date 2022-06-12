import React from "react";
import Button from "../Button/Button.jsx";
import heroImg from "../../Assets/Images/hero_img.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="site-container hero__inner d-flex">
        <div className="hero__left">
          <p>Featured Course</p>
          <h1>Run your own online learning platform</h1>
          <p className="hero__desc">
            A deep-dive on the Instagram algorythm, hashtags, content strategy,
            and branding.
          </p>
          <p className="hero__author">Kathryn Murphy</p>
          <Button>Learn More</Button>
        </div>
        <img
          className="hero__img"
          src={heroImg}
          alt=""
          width={614}
          height={621}
        />
      </div>
    </section>
  );
};

export default Hero;
