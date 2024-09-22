"use client";
//import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { Slide } from "react-slideshow-image";
//import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
  const images = [
    "/images/header2.jpg",
    "/images/sslider.jpg",
    "/images/slider3.jpg",
    "/images/sliderqw.jpeg",
    "/images/header.jpg",
  ];

  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }}>
          <span className="text-white"></span>
        </div>
      </div>

      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}>
          <span className=""></span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }}>
          <span className=""></span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[3]})` }}>
          <span className=""></span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[4]})` }}>
          <span className=""></span>
        </div>
      </div>
    </Slide>
  );
};

export default Slideshow;
