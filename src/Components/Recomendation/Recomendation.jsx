import React from "react";
import "./Recomendation.scss";
import img from "../../Assets/Images/recomendation_img.jpg";
import Button from "../Button/Button";

const Recomendation = () => {
  return (
    <section className="recomendation d-flex align-items-center gap-5">
      <div className="recomendation__left">
        <img src={img} alt="" width={720} />
      </div>
      <div className="recomendation__right">
        <h2>Get personalized learning recommendations</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urnaLorem
          ipsum dolor sit amet.
        </p>
        <Button>Contact Us</Button>
      </div>
    </section>
  );
};

export default Recomendation;
