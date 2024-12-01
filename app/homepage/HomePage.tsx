import React from "react";
import Feature from "./feature/page";
import Offering from "./offering/page";
import Blog from "./blog/page";
import Testimonial from "./testimonial/Testimonial";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <div className="home-page">
      <Feature />
      <Offering />
      <Blog />
      <Testimonial />
    </div>
  );
};

export default HomePage;
