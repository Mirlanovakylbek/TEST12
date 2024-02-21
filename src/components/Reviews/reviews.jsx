import React from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import grl from "../img/girl.jpg"

export default function Reviews() {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      };
  return (
    <div className="wrap">
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={grl} />
        </div>
        <div>
        <img src={grl} />
        </div>
        <div>
        <img src={grl} />
        </div>
        <div>
        <img src={grl} />
        </div>
      </Slider>
    </div>
    </div>
  );
}

