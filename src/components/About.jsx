import oracleIcon from '../assets/images/logos/oracle-logo.png';
import wiproIcon from '../assets/images/logos/wipro-logo.png';
import topCodeIcon from '../assets/images/logos/topcoder.png';
import bitsIcon from '../assets/images/logos/bits-logo.png';
import profileImg from '../assets/profile-img.png';
import profileIimgMb from '../assets/profile-img-mb.png';
// import { useEffect, useContext, useRef } from 'react';
// import { containerContext } from '../App';

const About = () => {
  // const aboutSection = useRef();
  // const { refVal, setRef } = useContext(containerContext);
  // useEffect(() => {
  //   setRef({ ...refVal, about: aboutSection.current.offsetTop });
  // }, []);

  return (
    <div className="about-wrapper">
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
            <picture>
                <source media="(max-width: 56.25em)" srcset={profileIimgMb} />
                <img src={profileImg} alt="Flowers"/>
            </picture>
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
            in
            <strong>
              {` ReactJs, Redux, Angular 8, Nodejs, Javascript, SCSS, HTML, NextJS,
              MongoDB, Agile Methodologies, Angular Material, inVision,
              Bootstrap, and Adobe XD, Karma, Jasmine, React testing library.`}
            </strong>
            Strong engineering professional with an M-Tech focused in Computer
            Science from Bits Pilani.
          </p>
          <div className="pt-4 pb-4 technology-wrapper">
            <h6 className="roboto-bold mb-3">
            Here are few samples of my topcoder challenge:
            </h6>
            <ul className='row'>
              <li className='col-12 col-md-6'>
                <i className="fa fa-play"></i>
                <a href="https://lssa.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >https://lssa.netlify.app</a>
              </li>
              <li className='col-12 col-md-6'>
                <i className="fa fa-play"></i>    
                <a href=" https://embarkk.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                > https://embarkk.netlify.app</a>
              </li>
              <li className='col-12 col-md-6'>
                <i className="fa fa-play"></i>
                <a href="https://wilp-faculty.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >https://wilp-faculty.netlify.app</a>
              </li>
              <li className='col-12 col-md-6'>
                <i className="fa fa-play"></i>
                <a href="https://holmes-e-kyc-ui.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                > https://holmes-e-kyc-ui.netlify.app</a>
              </li>
            </ul>
          </div>
          <div className="row personal-info-wrapper">
            <div className='col-5 col-md-6'>
              <div>
                <span className="title">Name:</span>
                <span className="info">Vishnu K</span>
              </div>
              <div className="mt-2">
                <span className="title">Age:</span>
                <span className="info">29</span>
              </div>
            </div>
            <div className='col-7 col-md-6'>
              <div>
                <span className="title">Email:</span>
                <span className="info">vishnulogan4@gmail.com</span>
              </div>
              <div className="mt-2">
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
                  <button className="btn-std">
                    <span>Resume</span>
                    <i className="fa fa-solid fa-arrow-right ms-3"></i>
                  </button>
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
