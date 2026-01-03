import React, { useEffect } from "react";
import Header from "./Header.js";
import myimage from "../Assets/about-us.jpeg";
import resumePDF from "../Assets/resume/Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import AboutUs from "./AboutUs.js";
import "../css/style.css";
import Services from "./Services.js";
import MySkill from "./MySkill.js";
import Footer from "./Footer.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { isMobile } from 'react-device-detect';


const Home = () => {
  const currentYear = new Date().getFullYear();
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
      <Header></Header>
      <div
        id="home"
        className="min-vh-100 p-4 bg-white"
        style={{ backgroundColor: "#d9d9d9" }}
      >
        <div style={{ marginTop: "90px" }}>
          <div className="container">
            <div className="row align-items-start">
              {/* Left Profile Card */}
              <div className="col-12 col-lg-4">
                <div
                  data-aos="slide-right"
                  className="rounded-4 p-4 mx-auto"
                  style={{
                    maxWidth: "400px",
                    borderRadius: "2rem",
                    backgroundColor: "rgba(6, 29, 30, 0.05)",
                    position: isMobile ? "" : "fixed",
                  }}
                >
                  {/* Profile Image */}
                  <div className="mb-3">
                    <img
                      src={myimage}
                      alt="Devendra Sharma - UX/UI Designer"
                      className="w-100 rounded-4"
                      style={{ height: "237px", objectFit: "cover" }}
                    />
                  </div>

                  {/* Name */}
                  <h2
                    className="fs-2 fw-bold text-center mb-3"
                    style={{ color: "#000000" }}
                  >
                    Devendra Sharma
                  </h2>

                  {/* Description */}
                  <p
                    className="text-center mb-3 lh-base"
                    style={{ color: "#000000" }}
                  >
                    As a passionate UX/UI designer, I craft meaningful digital
                    experiences that not only resonate with users but also
                    propel business success.
                  </p>

                  {/* Social Icons */}
                  <div className="d-flex justify-content-center gap-3 mb-3">
                    <a
                      href="https://www.instagram.com/devendras971/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="Social_icon d-flex align-items-center justify-content-center border border-2 border-dark rounded-circle"
                      style={{ width: "48px", height: "48px" }}
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/devendra-sharma-765838109/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="Social_icon d-flex align-items-center justify-content-center border border-2 border-dark rounded-circle"
                      style={{ width: "48px", height: "48px" }}
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="Social_icon d-flex align-items-center justify-content-center border border-2 border-dark rounded-circle"
                      style={{ width: "48px", height: "48px" }}
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </div>

                  {/* Download Button */}
                  <a
                    href={resumePDF}
                    download
                    className="btn w-100 fw-semibold fs-5 py-3 rounded-pill OrangeBg DownloadButon"
                    style={{
                      color: "#000000",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Download Now &nbsp;
                    <FontAwesomeIcon icon={faDownload} />
                  </a>
                  <p className="text-center mt-3 mb-0">
                    © {currentYear} DevLabs All Rights Reserved.
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className="col-12 col-lg-8">
                <div className="d-flex flex-column gap-5">
                  {/* Header */}
                  <div>
                    <p
                      className="fs-5 mb-3"
                      style={{ color: "#000000" }}
                      data-aos="fade-left"
                      data-aos-delay="300"
                      data-aos-offset="200"
                      data-aos-duration="1500"
                    >
                      Hi, I'm Devendra Sharma, UX/UI Designer
                    </p>
                    <h3
                      className="display-1 fw-bold lh-2 mb-3"
                      style={{
                        color: "#000000",
                        fontSize: "clamp(2rem, 4.5vw, 5rem)",
                      }}
                      data-aos="fade-left"
                      data-aos-delay="300"
                      data-aos-offset="200"
                      data-aos-duration="1500"
                    >
                      Designing Intuitive <br />
                      &nbsp;&nbsp;&nbsp;Experiences{" "}
                      <span className="orangeColor">Inspire</span>
                    </h3>
                    <p
                      className="fs-5 lh-base"
                      style={{ color: "#000000", maxWidth: "600px" }}
                      data-aos="fade-left"
                      data-aos-delay="300"
                      data-aos-offset="200"
                      data-aos-duration="1500"
                    >
                      I transform complex concepts into intuitive, user-friendly
                      designs, serving as your gateway to innovative design,
                      seamless user experiences, and impactful solutions.
                    </p>
                  </div>

                  {/* Let's Work Together Section */}
                  <div
                    className="lets_work rounded-4 p-4 d-flex align-items-center justify-content-between service-card"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-offset="200"
                    data-aos-duration="1500"
                  >
                    <h2
                      className="display-4 fw-bold ms-4"
                      style={{ color: "#000000" }}
                    >
                      Let's Work Together
                    </h2>
                    <div
                      className="Social_icon d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "64px",
                        height: "64px",
                      }}
                    >
                      <span
                        className="fs-2 fw-bold"
                        style={{ color: "#000000" }}
                      >
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </span>
                    </div>
                  </div>

                  {/* About Us Section */}
                  <AboutUs></AboutUs>
                  <Services></Services>
                  <MySkill></MySkill>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
