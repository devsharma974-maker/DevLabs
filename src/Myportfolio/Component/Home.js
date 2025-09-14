import React from "react";
import Header from "./Header";
import myimage from "../Assets/about-us.jpeg";
import sicon1 from "../Assets/s-icon1.svg";
import download1 from "../Assets/download1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import AboutUs from "./AboutUs";
import "../css/style.css";
import Services from "./Services";
import MySkill from "./MySkill";
import { Button } from "bootstrap";
import Footer from "./Footer";

const Home = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Header></Header>
      <div
      id="home"
        className="min-vh-100 p-4 bg-white"
        style={{ backgroundColor: "#d9d9d9" }}
      >
        <div className="">
          <div className="container">
            <div className="row align-items-start">
              {/* Left Profile Card */}
              <div className="col-12 col-lg-4">
                <div
                  className="rounded-4 p-4 mx-auto"
                  style={{
                    maxWidth: "400px",
                    borderRadius: "2rem",
                    backgroundColor: "rgba(6, 29, 30, 0.05)",
                  }}
                >
                  {/* Profile Image */}
                  <div className="mb-4">
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
                    className="text-center mb-4 lh-base"
                    style={{ color: "#000000" }}
                  >
                    As a passionate UX/UI designer, I craft meaningful digital
                    experiences that not only resonate with users but also
                    propel business success.
                  </p>

                  {/* Social Icons */}
                  <div className="d-flex justify-content-center gap-3 mb-4">
                    <div
                      className="Social_icon d-flex align-items-center justify-content-center border border-2 border-dark rounded-circle"
                      style={{ width: "48px", height: "48px" }}
                    >
                      <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </div>
                    <div
                      className="Social_icon d-flex align-items-center justify-content-center border border-2 border-dark rounded-circle"
                      style={{ width: "48px", height: "48px" }}
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                    <div
                      className="Social_icon d-flex align-items-center justify-content-center border border-2 border-dark rounded-circle"
                      style={{ width: "48px", height: "48px" }}
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </div>
                  </div>

                  {/* Download Button */}
                  <button
                    className="btn w-100 fw-semibold fs-5 py-3 rounded-pill OrangeBg DownloadButon"
                    style={{
                      color: "#000000",
                    }}
                  >
                    Download Now &nbsp;
                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                  </button>
                  <p className="text-center mt-3">
                    © {currentYear} DevLabs All Rights Reserved.
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className="col-12 col-lg-8">
                <div className="d-flex flex-column gap-5">
                  {/* Header */}
                  <div>
                    <p className="fs-5 mb-3" style={{ color: "#000000" }}>
                      Hi, I'm Devendra Sharma, UX/UI Designer
                    </p>
                    <h3
                      className="display-1 fw-bold lh-2 mb-4"
                      style={{
                        color: "#000000",
                        fontSize: "clamp(2rem, 4.5vw, 5rem)",
                      }}
                    >
                      Designing Intuitive <br />
                      &nbsp;&nbsp;&nbsp;Experiences{" "}
                      <span className="orangeColor">Inspire</span>
                    </h3>
                    <p
                      className="fs-5 lh-base"
                      style={{ color: "#000000", maxWidth: "600px" }}
                    >
                      I transform complex concepts into intuitive, user-friendly
                      designs, serving as your gateway to innovative design,
                      seamless user experiences, and impactful solutions.
                    </p>
                  </div>

                  {/* Let's Work Together Section */}
                  <div className="lets_work rounded-4 p-4 d-flex align-items-center justify-content-between service-card">
                    <h2
                      className="display-6 fw-bold mb-0"
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
