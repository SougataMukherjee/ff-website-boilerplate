import React from "react";
import Card from "@/components/card/Card";
import "./Blog.scss";
const Blog = () => {
  return (
    <section className="ff-homepage-blog-wrapper">
      <div className="ff-homepage-blog-text-section">
        <div>
          {"FireFlink's"} intuitive
          <span className="highlight-text">features</span> are designed to be{" "}
        </div>
        <div>
          loved by your <span className="highlight-text">QA team!</span>
        </div>
      </div>
      <div className="ff-homepage-blog-btn-section">
        <button>FireFlink Platform</button>
        <button>FireFlink Cloud</button>
      </div>
      <div className="ff-homepage-blog-accordion-section"></div>
      <div className="ff-homepage-blog-section">
        <div className="ff-homepage-blog-heading">Our Latest Blog’s</div>
        <div className="ff-homepage-blog">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="ff-homepage-blog-btn">
          <button>View all Blogs</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
