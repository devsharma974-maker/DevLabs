import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // allow multiple times
      mirror: true, // 👈 animate out on scroll up
    });

    // refresh AOS after load
    AOS.refresh();
  }, []);
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
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-offset="200"
          data-aos-duration="1500"
        >
          My Services
        </p>
        <h2
          className="display-2 fw-bold lh-2"
          style={{
            color: "#000000",
            fontSize: "clamp(2rem, 4.5vw, 5rem)",
          }}
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-offset="100"
          data-aos-duration="1700"
        >
          Elevating Brands
          <br />
          &nbsp;&nbsp;&nbsp; Intuitive{" "}
          <span className="orangeColor">Design</span>
        </h2>
      </div>

      <div className="row g-3">
        <div
          className="col-12"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-offset="100"
          data-aos-duration="1700"
        >
          <div className="service-card rounded-4 p-4 h-100">
            <h2 className="fw-bold mb-3 text-dark">UX/UI Design</h2>
            <p>
              Designing intuitive, user-focused interfaces that prioritize
              functionality & seamless navigation.
            </p>
          </div>
        </div>

        <div
          className="col-12"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-offset="100"
          data-aos-duration="1700"
        >
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

        <div
          className="col-12"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-offset="100"
          data-aos-duration="1700"
        >
          <div className="service-card rounded-4 p-4 h-100">
            <h2 className="fw-bold mb-3 text-dark">Responsive Web Design</h2>
            <p>
              Creating clear and structured wireframes to visualize user flows
              and interactions effectively.
            </p>
          </div>
        </div>

        <div
          className="col-12"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-offset="100"
          data-aos-duration="1700"
        >
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
