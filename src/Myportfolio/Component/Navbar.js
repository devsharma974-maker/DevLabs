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

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    } else {
      // If the element isn't on the current page (for example when
      // Pages serves README or a different page), navigate to the
      // site root with the hash so GitHub Pages will load the app
      // and land on the section.
      const base = process.env.PUBLIC_URL || "/DevLabs";
      window.location.href = `${base}/#${id}`;
    }
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
            <a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About Us</a>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleNavClick(e, "services")}>Services</a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>My Skills</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
