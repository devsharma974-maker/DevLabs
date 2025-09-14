import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container text-center">
          <p className="mb-0" style={{ color: "#6c757d" }}>
            &copy; {new Date().getFullYear()} DevLabs All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
