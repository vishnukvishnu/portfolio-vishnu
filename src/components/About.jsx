import profileImg from '../assets/profile-img.png';
import profileIimgMb from '../assets/profile-img-mb.png';
import { useState, useEffect, useRef } from 'react';
import Title from './common/Title';

const About = ({ setAbout }) => {
  const aboutSection = useRef();
  useEffect(() => {
    setAbout(aboutSection.current.offsetTop, 'about');
  }, []);

  const [challenges] = useState([
    'https://lssa.netlify.app',
    'https://embarkk.netlify.app',
    'https://wilp-faculty.netlify.app',
    'https://holmes-e-kyc-ui.netlify.app',
  ]);
  return (
    <div className="about-wrapper" ref={aboutSection}>
      <div className="row m-0">
        <div className="col-12 col-md-4"></div>
        <Title title="About Me" subTitle="Get to know me :)" />
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
        <div className="col-md-8 right-wrapper">
          <h5 className="mt-4 mb-3 roboto-bold red-c">Who am i?</h5>
          <h6>
            I'm Vishnu K, a senior frontend developer with <strong>7+ </strong>
            years of experience.
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
            Strong engineering professional with M-Tech focused in Computer
            Science from <strong>Bits Pilani</strong>.
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
