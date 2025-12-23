import React from "react";
import "./Banner.css";
import img from "../../assets/banner.jpg"

const Banner = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src= {img}
            alt="Winter Sale"
            className="img-fluid sale-img shadow"
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6">
          <h1 className="fw-bold mb-3">
            Winter Sale upto <span className="text-dark">50% Off</span>
          </h1>

          <p className="text-muted mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            consequatur inventore iste ratione ex alias quis magni at optio.
          </p>

          <div className="feature-list">
            <div className="d-flex align-items-center mb-3">
              <div className="icon-circle bg-light-green">
                <i className="bi bi-tag"></i>
              </div>
              <span className="ms-3">Get Offers</span>
            </div>

            <div className="d-flex align-items-center mb-3">
              <div className="icon-circle bg-light-blue">
                <i className="bi bi-credit-card"></i>
              </div>
              <span className="ms-3">Easy Payment method</span>
            </div>

            <div className="d-flex align-items-center mb-3">
              <div className="icon-circle bg-light-purple">
                <i className="bi bi-truck"></i>
              </div>
              <span className="ms-3">Fast Delivery</span>
            </div>

            <div className="d-flex align-items-center">
              <div className="icon-circle bg-light-yellow">
                <i className="bi bi-patch-check"></i>
              </div>
              <span className="ms-3">Quality Products</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;