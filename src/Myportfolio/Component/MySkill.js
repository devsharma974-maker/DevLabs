import React, { useState, useEffect } from "react";
import skil1 from "../Assets/skills/skill1.svg";
import skil2 from "../Assets/skills/skill2.svg";
import skil3 from "../Assets/skills/skill3.svg";
import skil4 from "../Assets/skills/skil4.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const MySkill = () => {
  const [percentage, setPercentage] = useState(0);
 useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,   // allow multiple times
      mirror: true,  // 👈 animate out on scroll up
    });

    // refresh AOS after load
    AOS.refresh();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 96) return prev + 1;
        clearInterval(interval);
        return 96;
      });
    }, 10); // Adjust speed by changing the interval time
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div id="skills">
        <p
          className="fw-semibold mb-3 fs-5"
          style={{
            color: "#000000",
            fontSize: "0.875rem",
            letterSpacing: "0.1em",
          }}
           data-aos="fade-left" data-aos-delay="300" data-aos-offset="200" data-aos-duration="1500"
        >
          My Skills
        </p>
        <h2
          className="display-2 fw-bold lh-2"
          style={{
            color: "#000000",
            fontSize: "clamp(2rem, 4.5vw, 5rem)",
          }}
           data-aos="fade-left" data-aos-delay="400" data-aos-offset="300" data-aos-duration="1700"
        >
          Elevating Brands
          <br />
          &nbsp;&nbsp;&nbsp; Intuitive{" "}
          <span className="orangeColor">Design</span>
        </h2>
      </div>

      <div className="row g-3">
        {[
          { skill: skil1, percentage: 80, name: "Figma", dataAos: "zoom-in" },
          { skill: skil2, percentage: 70, name: "Photoshop", dataAos: "zoom-in" },
          { skill: skil3, percentage: 90, name: "Illustrator", dataAos: "zoom-in" },
          { skill: skil4, percentage: 90, name: "CoralDraw", dataAos: "zoom-in" },
        ].map((item, index) => (
          <div
            className="col-12 col-md-4"
            key={index}
            {...(item.dataAos ? { 'data-aos': item.dataAos } : {})}
          >
            <div className="service-card rounded-4 p-4 h-100 text-center">
              <img
                src={item.skill}
                alt={`skill${index + 1}`}
                className="mb-3"
              />
              <h2 className="fw-bold mb-3 text-dark">{item.percentage}%</h2>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-3">
        <div className="col-12">
          <h4 className="fw-bold my-4 text-dark">What I Build With</h4>
          <div className="service-card rounded-4 p-4">
            <ul>
              <li className="mb-3">
                <h4 className="fw-bold mb-3 text-dark">HTML</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {percentage}%
                  </div>
                </div>
              </li>
              <li className="mb-3">
                <h4 className="fw-bold mb-3 text-dark">CSS</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
              </li>
              <li className="mb-3">
                <h4 className="fw-bold mb-3 text-dark">React</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkill;
