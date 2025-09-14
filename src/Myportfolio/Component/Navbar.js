import React, { useState } from "react";
import memueicon from "../Assets/menue_icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/logo1.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="hamburger_menu" onClick={toggleMenu}>
        <img src={memueicon} alt="" />
      </button>
      <div className={`nav-menu ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </button>{" "}
        <br />
        <img src={logo} alt="Logo" className="mb-4 SidbarLogo" />
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#skills">My Skills</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
