import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light container">
      <div className="d-flex justify-content-left">
        <a className="navbar-brand" href="/">
          <img
            src="/thobtailorLogo.png"
            alt=""
            width="auto"
            height="50"
            className="d-inline-block align-text-top"
          />
        </a>
        <a
          className="btn btn-outline-primary d-flex align-items-center"
          href="/size"
          style={{ fontSize: "23px" }}
        >
          New Size
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
