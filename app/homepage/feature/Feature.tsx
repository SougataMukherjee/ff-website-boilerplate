"use client";
import React from "react";
import { useGlobalContext } from "@/Context/GlobalContext";
import "./Feature.scss";
import Image from "next/image";
// import { Button } from "pixel-react";
const Feature = () => {
  const { user } = useGlobalContext();
  console.log("user: ", user);
  return (
    <section className="ff-homepage-feature-wrapper">
      <div className="ff-homepage-feature-text-section">
        <div className="ff-homepage-feature-main-text">
          <span>Experience 4x faster test automation</span>
          <span> using FireFlink AI</span>
        </div>
        <div className="ff-homepage-feature-sub-text">
          <span>
            A heavily AI-infused test automation platform, that allows testers
            to develop automation scripts
          </span>
          <span>
            faster than ever! Experience speed, accuracy, and enhanced ROI with
            FireFlink!
          </span>
        </div>
        <div>
          <button className="ff-homepage-feature-button">
            Schedule a free demo
          </button>
          {/* <Button
            variant="primary"
            label="select"
            size="medium"
            onClick={() => console.log("click")}
          /> */}
        </div>
      </div>
      <div className="ff-homepage-feature-img-section">
        <Image
          src={"/images/homepage_feature.svg"}
          width={1156}
          height={720}
          alt="homepage-feature-image"
          className="ff-homepage-feature-img"
        />
      </div>
    </section>
  );
};

export default Feature;
