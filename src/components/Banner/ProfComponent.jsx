import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
// import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'm</span>
          </h4>
          <h1 className="green">Mario Rodríguez</h1>
          <h3>Junior Full Stack Web Developer </h3>
          <h4>Express | ReactJS | JavaScript (ES6) | HTML | CSS | MongoDB | Git | Node.js</h4>
          <p>I'm Mario Rodriguez, a Junior Full Stack Web Developer with experience in graphic design. My technical skills include JavaScript, ReactJs, HTML 5, CSS 3, Bootstrap, NodeJs, MongoDB, ExpressJs, and Handlebars. I have worked on coding projects such as Champ Car World Series, JAM session, and SpliTrip. I possess soft skills such as communication, teamwork, problem-solving, stress management, leadership, and adaptability. Furthermore, I speak both Spanish and English fluently. </p>
<br />
<p>I completed a Full Stack Web Development course at Ironhack and a QA Manual Tester course at Coderhouse. Additionally, I have professional experience as a Freelance Graphic Web Designer, Backup Supervisor, QA Manual Tester & Web Designer, and Customer Service & Technical Support Advisor. I'm passionate about learning and aspire to become a Senior Full Stack Web Developer.
          </p>
          <button><a href="#contact-section">Let's talk</a></button>
          <Social>
            <h4>Check out my</h4>
            <div className="social-icons">
              <span>
                <a href="https://github.com/MarioGRodriguez28">
                  <FaGithub />
                </a>
              </span>
              {/* <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span> */}
              <span>
                <a href="https://www.linkedin.com/in/mariogrm/">
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a href="https://res.cloudinary.com/dsevu38bc/image/upload/v1682959897/Mario_Rodriguez_Resume_awyubu.pdf">
                  <FaCloudDownloadAlt />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="https://res.cloudinary.com/dsevu38bc/image/upload/v1683154796/IMG-20230501-WA0029_mzhv72.jpg"
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
  }

  @media (max-width: 720px) {
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
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
    font-size:0.75rem;
  }
  button a {
    color: white;
    text-decoration: none;
  }

  button {
  padding: 0.7rem 2rem;
  margin-top: 3rem;
  cursor: pointer;
  background-color: #e14040;
  border: none;
  color: #fff;
  font-weight: 500;
  filter: drop-shadow(0px 10px 10px rgba(0,0,0,0.3));
}

button:hover {
  filter: drop-shadow(0px 10px 10px rgba(0,0,0,0.5));
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
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #e14040;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }
   
    a {
      color: #fff;
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
    filter: drop-shadow(0px 10px 10px rgba(0,0,0,0.3));
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
  }
`;
