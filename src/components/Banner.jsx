import React from "react";

const Banner = () => {
  return (
    <div className="py-5">
      <div className="container px-lg-5">
        <div className="p-3 text-left" style={{ backgroundColor: "#E8ECEF" }}>
          <div className="m-3 m-lg-5">
            <h1
              className="display-5 fw-light"
              style={{ fontSize: "3rem", letterSpacing: "1px" }}
            >
              A Warm Welcome!
            </h1>
            <p className="fs-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              dolores, quam, expedita quia illo quis, dolore magni impedit
              officia pariatur quod. Voluptate libero delectus laudantium
              explicabo iusto voluptates ad vel!
            </p>
            <a href="#" className="btn btn-primary btn-lg">
              Call to action
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
