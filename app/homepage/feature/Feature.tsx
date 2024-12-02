"use client";
import React from "react";
import { useGlobalContext } from "@/Context/GlobalContext";
import "./Feature.scss";
import Image from "next/image";
import { Button } from "pixel-react";

const Feature = () => {
  const { user } = useGlobalContext();
  console.log("user: ", user);

  return (
    <section className="ff-homepage-feature-wrapper">
      <article className="ff-homepage-feature-text-section">
        <header className="ff-homepage-feature-main-text font-semibold-900">
          <span className="font-bold">
            Experience 4x faster test automation
          </span>
          <span>using FireFlink AI</span>
        </header>

        <aside className="ff-homepage-feature-sub-text font-regular-500">
          <span>
            A heavily AI-infused test automation platform, that allows testers
            to develop automation scripts
          </span>
          <span>
            faster than ever! Experience speed, accuracy, and enhanced ROI with
            FireFlink!
          </span>
        </aside>

        <section>
          <Button
            className="ff-homepage-feature-button"
            variant="secondary"
            label="Schedule a free demo"
            size="large"
            onClick={() => console.log("click")}
          />
        </section>
      </article>

      <figure className="ff-homepage-feature-img-section">
        <Image
          src={"/images/homepage_feature.svg"}
          width={1156}
          height={720}
          alt="homepage-feature-image"
          className="ff-homepage-feature-img"
        />
      </figure>
    </section>
  );
};

export default Feature;
