import React from "react";
import "../css/nvbar.css";
import "../css/style.css";
import logo from "../Assets/logo1.png";
import Navbar from "./Navbar.js";

const Header = () => {
  return (
    <>
      <header>
        <div
          className="header-area homepage1 header position-fixed w-100 bg-white"
          id="header"
          style={{ zIndex: 9999, boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-elements">
                  <div className="site-logo">
                    <a href="index.html">
                      <img src={logo} alt="" />
                    </a>
                  </div>
                  <div className="btn-area d-lg-flex">
                    <Navbar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
