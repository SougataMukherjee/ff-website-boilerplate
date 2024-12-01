import React from "react";
import "./Offering.scss";
import Image from "next/image";
const Offering = () => {
  return (
    <section>
      <section className="ff-homepage-offering-brand-section">
        <div className="ff-homepage-offering-brand-text">
          <div className="ff-homepage-offering-brand-main-text">
            Helping Leading Brands Release{" "}
            <span className="highlight-text">Software Faster</span>
          </div>
          <div className="ff-homepage-offering-brand-sub-text">
            <span className="highlight-text">20,000,000+</span> automated tests
            and counting!
          </div>
        </div>
        <div className="ff-homepage-offering-brand-icons">
          <Image
            src={"/images/offering-brand-one.svg"}
            width={1156}
            height={720}
            alt="offering-brand-one"
            className="img"
          />
          <Image
            src={"/images/offering-brand-two.svg"}
            width={1156}
            height={720}
            alt="offering-brand-two"
            className="img"
          />
          <Image
            src={"/images/offering-brand-three.svg"}
            width={1156}
            height={720}
            alt="offering-brand-three"
            className="img"
          />
          <Image
            src={"/images/offering-brand-four.svg"}
            width={1156}
            height={720}
            alt="offering-brand-four"
            className="img"
          />
        </div>
      </section>
      <section className="ff-homepage-offering-skills">
        <div className="ff-homepage-offering-text">
          <div className="ff-homepage-offering-heading-text">
            FireFlink <span className="highlight-text">360 Offering </span>
          </div>
          <div className="ff-homepage-offering-sub-text">
            <span>
              Our vast testing expertise allows us to provide a holistic
              solution to fulfil all of your testing needs in one
            </span>{" "}
            <span>
              place. Explore our offerings to get started with FireFlink now.
            </span>
          </div>
        </div>
        <div className="ff-homepage-offering-training">
          <div className="ff-homepage-offering-training-progress"></div>
          <div className="ff-homepage-offering-training-section">
            <div className="ff-homepage-offering-training-section-heading">
              Training and Upskilling
            </div>
            <ul className="ff-homepage-offering-training-section-sub">
              <li>Test management training - Fullstack, web, mobile, & API</li>
              <li>
                In-depth hands-on guided experience by professional trainers
              </li>
              <li>
                Guidance to create web, mobile, and API test scripts from
                scratch
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Offering;
