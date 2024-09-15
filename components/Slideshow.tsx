"use client";
//import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { Slide } from "react-slideshow-image";
//import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
  const images = [
    "/images/num-three1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
    "/images/slider4.jpg",
    "/images/num-three2.jpg",
    "/images/num-three4.jpg",
    "/images/slider7.jpg",
    "/images/slider8.jpg",
    "/images/num-three3.jpg",
  ];

  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }}>
          <span>This page is under development.</span>
        </div>
      </div>

      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}>
          <span>This page is under development.</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }}>
          <span>This page is under development.</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[3]})` }}>
          <span>This page is under development.</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[4]})` }}>
          <span>This page is under development.</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[5]})` }}>
          <span>This page is under development.</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[6]})` }}>
          <span>This page is under development.</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[7]})` }}>
          <span>This page is under development.</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[8]})` }}>
          <span>This page is under development.</span>
        </div>
      </div>
    </Slide>
  );
};

export default Slideshow;
