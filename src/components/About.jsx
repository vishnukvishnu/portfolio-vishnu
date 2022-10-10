import meOracle from '../assets/me-oracle.jpg';
import oracleIcon from '../assets/images/logos/oracle-logo.png';
import wiproIcon from '../assets/images/logos/wipro-logo.png';
import topCodeIcon from '../assets/images/logos/topcoder.png';
import bitsIcon from '../assets/images/logos/bits-logo.png';
// import { useEffect, useContext, useRef } from 'react';
// import { containerContext } from '../App';

const About = () => {
  // const aboutSection = useRef(null);
  // const { refVal, setRef } = useContext(containerContext);
  // useEffect(() => {
  //   setRef({ ...refVal, about: aboutSection.current.offsetTop });
  // }, []);

  return (
    <div className="about-wrapper" >
      <div className="row m-0">
        <div className="col-12 col-md-4"></div>
        <div className="col-12 col-md-8 mb-3 about-header-wrapper">
          <h1 className="header-1">About Me</h1>
          <p className="roboto-medium">Get to know me :)</p>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-12 col-md-4 left-wrapper">
          <div>
            <img src={meOracle} alt="" />
          </div>
        </div>
        <div className="col-md-8 right-wrapper">
          <h5 className="mt-4 mb-3 roboto-bold red-c">Who am i?</h5>
          <h6>
            I'm Vishnu K, a senior frontend developer with <strong>7+ </strong>
            years of experience
          </h6>
          <p className="mt-4 mb-4">
            Experienced Frontend Developer with a demonstrated history of
            working in the information technology and services industry. Skilled
            in{' '}
            <strong>
              ReactJs, Redux, Angular 8, Nodejs, Javascript, SCSS, HTML, NextJS,
              MongoDB, Agile Methodologies, Angular Material, inVision,
              Bootstrap, and Adobe XD, Karma, Jasmine, React testing library.
            </strong>
            Strong engineering professional with an M-Tech focused in Computer
            Science from Bits Pilani.
          </p>
          <div className="pt-4 pb-4 technology-wrapper">
            <h6 className="roboto-bold mb-3">
              Technologies i have worked with:
            </h6>
            <ul>
              <li>
                <i className="fa fa-play"></i>React
              </li>
              <li>
                <i className="fa fa-play"></i>Angular
              </li>
              <li>
                <i className="fa fa-play"></i>Javascript
              </li>
              <li>
                <i className="fa fa-play"></i>HTML
              </li>
              <li>
                <i className="fa fa-play"></i>SCCS
              </li>
            </ul>
          </div>
          <div className="personal-info-wrapper">
            <div>
              <div>
                <span className="title">Name:</span>
                <span className="info">Vishnu K</span>
              </div>
              <div className="mt-3">
                <span className="title">Age:</span>
                <span className="info">24</span>
              </div>
            </div>
            <div>
              <div>
                <span className="title">Email:</span>
                <span className="info">vishnulogan4@gmail.com</span>
              </div>
              <div className="mt-3">
                <span className="title">From:</span>
                <span className="info">Kerala, India</span>
              </div>
            </div>
          </div>
          <div className="acadamic-wrapper">
            <ul>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1srW8GPGMytJIc67muCNL2hWTQnSa3RTw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-std">Resume</button>
                </a>
              </li>
              <li>
                <a
                  href="https://www.oracle.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={oracleIcon} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.wipro.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={wiproIcon} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.topcoder.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={topCodeIcon} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.bits-pilani.ac.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={bitsIcon} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
