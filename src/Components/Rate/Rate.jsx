import React from "react";
import "./Rate.scss";
import img1 from "../../Assets/Images/starts.png";
import img2 from "../../Assets/Images/dote.png";

const Rate = () => {
  return (
    <section className="rate">
      <div className="site-container rate__container d-flex flex-column align-items-center">
        <img src={img1} alt="" />
        <blockquote>
          “Kate’s courses are a game changer. She’s thorough, organized, and
          explains things in a no-nonsense way that makes it easy for
          anyone—beginners to experts—to learn something from her courses and
          take their game to the next level.”
        </blockquote>
        <p>James Brown, Influencer</p>
        <img src={img2} alt="" />
      </div>
    </section>
  );
};

export default Rate;
