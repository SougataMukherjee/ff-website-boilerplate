import React from "react";
import "./Testimonial.scss";
import Card from "@/components/card/Card";
const Testimonial = () => {
  return (
    <section className="ff-homepage-testimonial-wrapper">
      <div className="ff-homepage-testimonial-text">
        <div>
          Customer <span className="highlight-text">Testimonials</span>
        </div>
        <div>
          Leverage FireFlink’s Automation Center of Excellence (ACOE) to Elevate
          your Test Maturity Model
        </div>
      </div>
      <div className="ff-homepage-testimonial-blog">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="ff-homepage-testimonial-journey">
        <div className="ff-homepage-testimonial-journey-div"></div>
      </div>
    </section>
  );
};

export default Testimonial;
