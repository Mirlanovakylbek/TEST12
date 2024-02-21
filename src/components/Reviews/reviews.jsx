import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import grl from "../img/girl.jpg"
import "./reviews.scss"
import { MdOutlineStar } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";



export default function Reviews() {
  const rews = [
    {
      id: 1,
      gml: grl,
      TNT: "Wade Warren",
      icvon: <MdOutlineStar />,
      klop: "Маршрут был потрясающим сочетанием культурных и природных достопримечательностей, позволяя нам узнать местную историю и обычаи, а также окунуться в потрясающую природу с изумительными видами. От знаменитых достопримечательностей до малоизвестных мест – каждый день приносил новые открытия.",
    },
    {
      id: 2,
      gml: grl,
      TNT: "Wade Warren",
      icvon: <MdOutlineStar />,
      klop: "Маршрут был потрясающим сочетанием культурных и природных достопримечательностей, позволяя нам узнать местную историю и обычаи, а также окунуться в потрясающую природу с изумительными видами. От знаменитых достопримечательностей до малоизвестных мест – каждый день приносил новые открытия.",
    },
    {
      id: 3,
      gml: grl,
      TNT: "Wade Warren",
      icvon: <MdOutlineStar />,
      klop: "Маршрут был потрясающим сочетанием культурных и природных достопримечательностей, позволяя нам узнать местную историю и обычаи, а также окунуться в потрясающую природу с изумительными видами. От знаменитых достопримечательностей до малоизвестных мест – каждый день приносил новые открытия.",
    },
    {
      id: 4,
      gml: grl,
      TNT: "Wade Warren",
      icvon: <MdOutlineStar />,
      klop: "Маршрут был потрясающим сочетанием культурных и природных достопримечательностей, позволяя нам узнать местную историю и обычаи, а также окунуться в потрясающую природу с изумительными видами. От знаменитых достопримечательностей до малоизвестных мест – каждый день приносил новые открытия.",
    },
  ]
    const settings = {
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      };
  return (
    <div className="wrap">
      <div className="moni">
        <h1>
        Отзывы наших клиентов
        </h1>
      </div>
    <div className="slider-container">
      <Slider {...settings}>
      {rews.map((ela) => (
        <div className="blop">
          <div className="dor">

          <div className="top"> 
          <img src={ela.gml} /> 
          </div>

          <div className="lopl"> 
          <h3 > {ela.TNT} </h3> 
          </div>

          <div className="mop">  
          <h1> {ela.icvon} {ela.icvon} {ela.icvon} {ela.icvon} <span> {ela.icvon} </span> </h1> 
          </div>

          <div className="klan">
            <p> {ela.klop} </p>
          </div>

          </div>
        </div>
           ))}
      </Slider>
    </div>
    <div className="cons">
      <button> Смотреть все <span> <GoChevronRight /> </span> </button>
    </div>
    </div>
  );
}

