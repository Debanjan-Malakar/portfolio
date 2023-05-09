import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  const openInNewTab = url => {
    window.open(url, 'noopener');
  };
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Debanjan Malakar</h1>
          <h3>Full stack web Devloper.</h3>
          <p>
          Are you in search of a wizard who can bring your digital dreams to life? Look no further than a full stack web developer! 
          With a mastery of both front-end and back-end development, a full stack web developer possesses the superpowers to create 
          stunning and responsive websites and web applications that will elevate your online presence.
          </p>
          <button className="green" onClick={() => openInNewTab('https://contact-us-inky.vercel.app/')}>  Let's talk</button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons" >
              <span>
                <a className="green" href="https://instagram.com/debanjan_malakar?igshid=YmMyMTA2M2Y=" target="blank">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/debanjan-malakar" target="blank">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="https://res.cloudinary.com/dk4gtde5l/image/upload/v1682092353/ganesh_thakur_a6xbwl.png"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;

  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
    height: 10rem;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
    :hover {
      transform: rotate(360deg);
    }
  }

  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #ffe100;
    border: none;
    color: black;
    font: bold;
    font-weight: 800;
    filter: drop-shadow(0px 10px 10px #ffe10051);
    :hover {
      filter: drop-shadow(0px 10px 10px #ffe10070);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    item-color: black;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #ffe100;
      item-color: black;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      
      text-decoration: none;
      color: black;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #ffe10050);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
    transform: scale(1.2);
    //transform: rotate(360deg);
    }
  }
`;
