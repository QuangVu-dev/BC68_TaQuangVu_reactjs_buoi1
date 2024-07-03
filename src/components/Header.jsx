import React from "react";

const Header = () => {
  return (
    <div className="bg-dark">
      <div className="container px-lg-5 d-flex justify-content-between align-items-center">
        <a href="" className="text-white fs-5 py-3 text-decoration-none">
          Start Bootstrap
        </a>
        <div>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: "#FFFFFF" }}
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                style={{ color: "rgba(255, 255, 255, 0.55)" }}
              >
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                style={{ color: "rgba(255, 255, 255, 0.55)" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
