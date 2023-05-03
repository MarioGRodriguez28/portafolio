import React from "react";
import { SiJavascript, SiMongodb, SiExpress, SiReact, SiNodedotjs,SiHtml5,SiCss3 } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
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
            Icon={SiJavascript}
            title={"JavaScript"}
            disc={`JavaScript is a widely used programming language in web development, allowing developers to create dynamic and interactive content for web pages. It is compatible with most web browsers and can be used for desktop and mobile applications as well.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={SiMongodb}
            title={"MongoDB"}
            disc={`MongoDB is a flexible and scalable NoSQL database that uses a dynamic schema and flexible data model to store and manage data. It offers features such as automatic sharding, replication, and full-text search to manage large datasets.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={SiExpress}
            title={"ExpressJs"}
            disc={`ExpressJs is a minimalist and flexible Node.js web application framework that simplifies server-side application and API development. It provides a robust set of features for building web and mobile applications.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={SiReact}
            title={"React Js"}
            disc={`React Js is a popular JavaScript library used for creating complex and dynamic user interfaces. It provides a virtual DOM that improves application performance and allows developers to create reusable UI components.`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={SiNodedotjs}
            title={"Node.Js"}
            disc={`Open-source, cross-platform, server-side JavaScript runtime environment that enables developers to build scalable, high-performance applications. Its non-blocking I/O model makes it ideal for building real-time web application`}
          />
          <Slide direction="down">
          <Card
            Icon={SiHtml5}
            title={"HTML 5"}
            disc={`HTML 5 is the latest version of the Hypertext Markup Language used for creating web pages and applications. It introduces new elements, multimedia support, and offline storage capabilities to improve the functionality and accessibility of web pages.`}
          />
        </Slide>
        </Slide>
        <Slide direction="left">
          <Card
            Icon={SiCss3}
            title={"CSS 3"}
            disc={`CSS 3 is the latest version of Cascading Style Sheets used for styling and layout of web pages. It introduces new features such as advanced selectors and layout modules like Flexbox and Grid, and supports animations and transitions for dynamic effects..`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Graphic designer"}
            disc={`I create visual concepts using computer software or by hand. I work on a range of projects, including advertisements, logos, website design, and product packaging. I combine creativity with technical skills to effectively communicate ideas through visual media.`}
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
