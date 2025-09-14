import React from "react";

const Services = () => {
  return (
    <>
      <div id="services">
        <p
          className="fw-semibold mb-3 fs-5"
          style={{
            color: "#000000",
            fontSize: "0.875rem",
            letterSpacing: "0.1em",
          }}
        >
          My Services
        </p>
        <h2
          className="display-2 fw-bold lh-2"
          style={{
            color: "#000000",
            fontSize: "clamp(2rem, 4.5vw, 5rem)",
          }}
        >
          Elevating Brands
          <br />
          &nbsp;&nbsp;&nbsp; Intuitive{" "}
          <span className="orangeColor">Design</span>
        </h2>
      </div>

      <div className="row g-3">
        <div className="col-12">
          <div className="service-card rounded-4 p-4 h-100">
            <h2 className="fw-bold mb-3 text-dark">UX/UI Design</h2>
            <p>
              Designing intuitive, user-focused interfaces that prioritize
              functionality & seamless navigation.
            </p>
          </div>
        </div>

        <div className="col-12">
          <div className="service-card rounded-4 p-4 h-100">
            <h2 className="fw-bold mb-3 text-dark">
              User Research & Prototyping
            </h2>
            <p>
              Conducting in-depth research and building prototypes to validate
              design concepts before development.
            </p>
          </div>
        </div>

        <div className="col-12">
          <div className="service-card rounded-4 p-4 h-100">
            <h2 className="fw-bold mb-3 text-dark">Responsive Web Design</h2>
            <p>
              Creating clear and structured wireframes to visualize user flows
              and interactions effectively.
            </p>
          </div>
        </div>

        <div className="col-12">
          <div className="service-card rounded-4 p-4 h-100">
            <h2 className="fw-bold mb-3 text-dark">Usability Testing</h2>
            <p>
              Testing real users to refine and improve interfaces for better
              user experience and engagement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
