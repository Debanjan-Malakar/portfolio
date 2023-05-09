import React from "react";
import { MdOutlineCode } from "react-icons/md";
// import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite, CgDebug } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdOutlineCode}
            title={"Software Devloper/tester"}
            disc={`Innovative creators of digital solutions, 
            developers and testers bring ideas to life through code and rigorous testing, ensuring seamless functionality for end-users. Simply fun.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={CgWebsite}
            title={"Web Devloper"}
            disc={`A web developer is a digital architect who designs and builds functional and visually 
            stunning websites using a combination of programming languages, creativity, and problem-solving skills.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgDebug}
            title={"DevOPs"}
            disc={`A DevOps developer is a versatile tech professional who bridges 
            the gap between software development and IT operations, ensuring seamless integration and deployment of software.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
