import React from "react";

const AboutUs = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div id="about">
        <p
          className="fw-semibold mb-3 fs-5"
          style={{
            color: "#000000",
            fontSize: "0.875rem",
            letterSpacing: "0.1em",
          }}
        >
          ABOUT US
        </p>
        <h2
          className="display-2 fw-bold lh-2"
          style={{
            color: "#000000",
            fontSize: "clamp(2rem, 4.5vw, 5rem)",
          }}
        >
          Crafting Seamless <br />
          &nbsp;&nbsp;&nbsp; User{" "}
          <span className="orangeColor">Experiences</span>
        </h2>
      </div>
      <div className="rounded-4 p-4 service-card">
        <h2
          className="display-6 mb-3 fw-bold mb-0"
          style={{ color: "#000000" }}
        >
          Devendra Sharma
        </h2>
        <p>
          With 8 years of experience, I'm Devendra Sharma, a dedicated UX/UI
          Designer passionate about crafting meaningful, user-centered digital
          experiences that boost engagement and drive results. I leverage a
          blend of research, creativity, and technical expertise to deliver
          seamless, visually appealing, and highly functional solutions.
        </p>
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <div className="service-card rounded-4 p-4 h-100">
            <h5 className="fw-bold mb-3 text-dark">UX/UI Design</h5>
            <p>
              Designing intuitive, user-focused interfaces that prioritize
              functionality & seamless navigation.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="service-card rounded-4 p-4 h-100">
            <h5 className="fw-bold mb-3 text-dark">
              User Research & Prototyping
            </h5>
            <p>
              Conducting in-depth research and building prototypes to validate
              design concepts before development.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="service-card rounded-4 p-4 h-100">
            <h5 className="fw-bold mb-3 text-dark">Responsive Web Design</h5>
            <p>
              Creating clear and structured wireframes to visualize user flows
              and interactions effectively.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="service-card rounded-4 p-4 h-100">
            <h5 className="fw-bold mb-3 text-dark">Usability Testing</h5>
            <p>
              Testing real users to refine and improve interfaces for better
              user experience and engagement.
            </p>
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <h2 className="mb-4">Work Experience</h2>
          <div className="service-card rounded-4 p-4 ">
            <div>
              <p>2017-{currentYear}</p>
              <h5 className="fw-bold mb-3 text-dark">UX/UI Designer</h5>
              <p>ReliableSoft Technologies Pvt. Ltd.</p>
              <p>Jodhpur, Rajasthan</p>
            </div>
            <div>
              <p>2015-2020</p>
              <h5 className="fw-bold mb-3 text-dark">UX/UI Designer</h5>
              <p>Noval It Solutions</p>
              <p>Mohali, Punjab</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h2 className="mb-4">Education</h2>
          <div className="service-card rounded-4 p-4 ">
            <div>
              <p>2010-2013</p>
              <h5 className="fw-bold mb-3 text-dark">
                Bachelor's Degree in Animation
              </h5>
              <p>Punjab Technical University</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
