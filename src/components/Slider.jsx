import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useState } from "react";
import { ApiSlides } from "../ApiFolder/sliderAPI";
import "./Slider.css";
function Slider() {
  const arrowStyle =
    " rounded-full flex justify-center items-center shadow-sm hover:cursor-pointer";

  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);
  const handleNextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
      {/* leftarrow Div */}
      <div className={arrowStyle} onClick={handlePrevSlide}>
        <ArrowLeft style={{ fontSize: "50px" }} />
      </div>

      {/* Slider */}
      {slides.map((slider, i) => {
        if (i === activeSlide) {
          return (
            <div
              className={
                ` wrapper  w-[100%] flex h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative ` +
                slider.background
              }
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%] ">
                  <img
                    className="h-[100%] object-cover"
                    src={slider.src}
                    alt="silde img"
                  />
                </div>
                <div className="des flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-[55px]">{slider.content.h2}</h2>
                  <p className="text-[30px]">{slider.content.p}</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}

      {/* rightarrow Div */}
      <div className={arrowStyle} onClick={handleNextSlide}>
        <ArrowRight style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
}

export default Slider;
