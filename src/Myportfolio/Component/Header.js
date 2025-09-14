import React, { useState } from "react";
import "../css/nvbar.css";
import "../css/style.css";
import logo from "../Assets/logo1.png";
import memueicon from "../Assets/menue_icon.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header>
        <div
          className="header-area homepage1 header header-sticky "
          id="header"
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
