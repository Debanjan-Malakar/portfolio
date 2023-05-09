import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name : "Shrayashi Mukherjee",
        position : "Graphic Desiner",
        img_url : "https://res.cloudinary.com/dk4gtde5l/image/upload/v1682100026/DALL_E_2023-04-21_16.27.06_-_make_this_picture_black_and_white_z5odvt.png",
        stars : 5,
        disc : `I wanted to take a moment to express my appreciation for your incredible work on our latest project. As a graphic designer, 
        I understand the importance of having a solid,
         user-friendly website to showcase our clients' brands, and you have truly exceeded my expectations.`
    },
    {
        name : "Someli Bhattacharya",
        position : "Copy writer & Business Co-ordinator",
        img_url : "https://res.cloudinary.com/db33ksgrm/image/upload/v1683646557/someli_pqvaux.jpg",
        stars : 4,
        disc : `My appreciation for the incredible work you did on our website project. As a copywriter,
         I understand how crucial it is for a website's design and functionality to effectively convey a brand's message. I am truly grateful for your dedication and hard work. Wish you all the very best for your future ahead.`
    },
    {
        name : "Manish Kumar",
        position : "CEO",
        img_url : "https://res.cloudinary.com/dk4gtde5l/image/upload/v1682100367/head1_rxsnh2.jpg",
        stars : 5,
        disc : `Your expertise in web development has allowed us to showcase our services and projects in a 
        visually appealing and easy-to-navigate website. Your attention to detail and ability to incorporate our branding elements has 
        made all the difference in setting us apart from our competitors.`
    },
    // {
    //     name : "John Michel",
    //     position : "web developer",
    //     img_url : "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    //     stars : 5,
    //     disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    //     Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    // },
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">testimonials</span>
            <h1>what clients say</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #ffe100;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #ffe100;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`