import profileImg from "../assets/about.png";
import profileIimgMb from "../assets/about-mobile.png";
import { useState, useEffect, useRef } from "react";
import Title from "./common/Title";

const About = ({ setAbout }) => {
  const aboutSection = useRef();
  useEffect(() => {
    setAbout(aboutSection.current.offsetTop, "about");
  }, []);

  const [challenges] = useState([
    "https://lssa.netlify.app",
    "https://embarkk.netlify.app",
    "https://wilp-faculty.netlify.app",
    "https://holmes-e-kyc-ui.netlify.app",
  ]);
  return (
    <div className="about-wrapper" ref={aboutSection}>
      <div className="row m-0">
        <div className="col-12 col-md-4"></div>
        <Title title="About Me" subTitle="Get to know me 😊" />
      </div>
      <div className="row m-0">
        <div className="col-12 col-md-4 left-wrapper flex-center">
          <div>
            <picture>
              <source media="(max-width: 56.25em)" srcSet={profileIimgMb} />
              <img src={profileImg} alt="frofile" />
            </picture>
          </div>
        </div>
        <div className="col-md-8 mt-5 right-wrapper">
          <p className="mt-4 mb-4">
            Experienced Engineer with a solid track record in the software
            development. I specialize in modern web development technologies
            including{" "}
            <strong>
              ReactJs, Nodejs, Javascript, Redux, Angular, SCSS, HTML, NextJS,
              MongoDB, ExpressJs, and Agile Methodologies.{" "}
            </strong>
            I have hands-on experience with inVision, Bootstrap, Adobe XD,
            Karma, Jasmine, Jest, and the React testing library. My work focuses
            on building high-quality, maintainable front-end solutions that
            deliver exceptional user experiences. With an M-Tech in Computer
            Science from <strong>BITS Pilani </strong>. Explore my portfolio to
            see how I translate complex requirements into intuitive and
            efficient digital experiences.
          </p>
          <div className="pt-4 pb-4 mt-5 technology-wrapper">
            <h6 className="roboto-bold mb-3">
              Here are a few samples of my topcoder challenge:
            </h6>
            <ul className="row">
              {challenges.map((challenge) => (
                <li
                  className="col-12 col-md-6 flex-vtkl-center"
                  key={challenge}
                >
                  <i className="fa fa-play"></i>
                  <a href={challenge} target="_blank" rel="noreferrer">
                    {challenge}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
