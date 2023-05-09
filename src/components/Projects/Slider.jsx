import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    
    {
        img : "https://res.cloudinary.com/db33ksgrm/image/upload/v1681027015/webss_m7tark.jpg",
        disc: "React Website for a Construction company.",
        demo: "https://www.mithyaraj.com/"
    },
    {
      img:"https://res.cloudinary.com/db33ksgrm/image/upload/v1683645198/shrayashiport_v1gpiy.jpg",
      disc: "This is a aesthetic portfolio website for a Graphics Designer.",
      demo:"https://shrayashimukherjee.pages.dev/"
    },
    {
      img : "https://res.cloudinary.com/db33ksgrm/image/upload/v1683647309/deba_web_bios7h.jpg",
      disc : "This is my own website.",
      demo:"https://www.mithyaraj.com/"
  },
  {
    img:"https://res.cloudinary.com/db33ksgrm/image/upload/v1683645198/shrayashiport_v1gpiy.jpg",
      disc: "This is a aesthetic portfolio website for a Graphics Designer.",
      demo:"https://shrayashimukherjee.pages.dev/"
  }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    interval: 1,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings} >
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`