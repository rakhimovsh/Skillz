import React from "react";
import "./Courses.scss";
import Button from "../Button/Button";
import img1 from "../../Assets/Images/courses_img1.jpg";
import img2 from "../../Assets/Images/courses_img2.jpg";
import img3 from "../../Assets/Images/courses_img3.jpg";

const Courses = () => {
  return (
    <section className="courses">
      <div className="site-container courses__container d-flex flex-column align-items-center">
        <h2 className="courses__title">Featured Courses</h2>
        <p className="courses__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <Button>View All Courses</Button>
        <ul className=" list-unstyled p-0 mt-5 courses__list">
          <li className="courses__item">
            <img src={img1} alt="" width={393} height="197" />
            <div className="courses__item-inner p-4">
              <h3>How to Increase Your Engagement on Instagram</h3>
              <p>Katie Murphy</p>
              <p>$ 59.99 USD</p>
              <a href="/">Learn More</a>
            </div>
          </li>
          <li className="courses__item">
            <img src={img2} alt="" width={393} height="197" />
            <div className="courses__item-inner p-4">
              <h3>Business 101: Setting up Your Taxes</h3>
              <p>Bessie Cooper</p>
              <p>
                <span className="text-secondary">$ 69.99 USD</span> $ 39.99 USD
              </p>
              <a href="/">Learn More</a>
            </div>
          </li>
          <li className="courses__item">
            <img src={img3} alt="" width={393} height="197" />
            <div className="courses__item-inner p-4">
              <h3>iPhone Photography: Tips, Tricks and Best Practices</h3>
              <p>Dianne Russell</p>
              <p>
                <span className="text-secondary">$ 69.99 USD</span> $ 39.99 USD
              </p>
              <a href="/">Learn More</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Courses;
