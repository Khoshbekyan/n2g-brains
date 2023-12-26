import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import coursesObj from "../../coursesObj";
import "./Courses.css";

const Courses = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="courses-div">
      <h2 className="courses-h">Courses</h2>
      <div className="courses-cont">
        <Slider {...settings}>
          {coursesObj.map((el) => (
            
            <div key={el.title} className="small-conts">

              <h3>{el.title}</h3>
              <p>{el.info}</p>
              <div className="duration-div">
              <span>{el.duration}</span>
              <span>{el.durationTime}</span>
              </div>
              <a href="" className="apply-btn">Apply now &#8594;</a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Courses;
