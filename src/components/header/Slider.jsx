import React from "react";
import { ImageList } from "./ImageList";
import './bg.css'

const Slider = () => {
    return (
        <div
            id="Carousel"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            {/* Indicators */}
            <div className="carousel-indicators">
                {ImageList.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#Carousel"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                    ></button>
                ))}
            </div>

            {/* Slides */}
            <div className="bg carousel-inner text-center text-light">
                {ImageList.map((item, index) => (
                    <div
                        key={item.id}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <div className="row justify-content-center text-dark">
                            <div className="col-md-5">
                                <h2 className="display-2 mt-5">{item.title}</h2>
                                <p>{item.description}</p>
                                <button className="btn mt-2 mt-md-5" style={{backgroundColor:"#e6b980"}}>
                                    Shop Now
                                </button>
                            </div>
                            <div className="col-md-5">
                                <div className="justify-content-center">
                                <img
                                    src={item.img}
                                    className="img-fluid"
                                    alt={item.title}
                                    style={{ height: "470px", objectFit: "cover" }}
                                />
                                </div>
                            </div>
                        </div>


                    </div>
                ))}
            </div>

            {/* Controls */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#Carousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon"></span>
            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#Carousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    );
};

export default Slider;