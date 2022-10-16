import pb from '../assets/images/projects/pb-banner.png';
import philips from '../assets/images/projects/philips.jpg';
import oracle from '../assets/images/projects/oracle.png';
import topcoder from '../assets/images/projects/topcoder-banner.png';
import oracleLogo from '../assets/images/logos/oracle-logo.png';
import philipsLogo from '../assets/images/logos/philips-logo.png';
import pbLogo from '../assets/images/logos/pb-logo.png';
import tcLogo from '../assets/images/logos/topcoder.png';

// import { useEffect, useContext, useRef, useState } from 'react';
// import { containerContext } from '../App';


const Projects = () => {
  // const projectSection = useRef();
  // const { refVal, setRef } = useContext(containerContext);
  // useEffect(() => {
  //   setRef({ ...refVal, projects: projectSection.current.offsetTop });
  //   console.log("projectSection.current.offsetTop,......",  projectSection.current.offsetTop)
  // }, []);

  return (
    <div className="project-wrapper">
      <div className="project-header-wrapper">
        <h1 className="header-1">Projects</h1>
        <p className="mb-0 roboto-medium">
          Here are few samples of my previous work :)
        </p>
      </div>
      <div className="row project-details-wrapper">
        <div className="col-12 col-md-6 col-xxl-4">
          <div className="cards">
            <img className="card-front" src={oracle} alt="" />
            <div className="card-back">
              {/* <i className="fa fa-mobile fa-icons" aria-hidden="true"></i> */}
              <img src={oracleLogo} alt="" />
              <h3>ECP IOT</h3>
              <p>
                Worked on a migration of the on premise analysis server (Aware)
                to a new cloud-based analysis service.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xxl-4">
          <div className="cards">
            <img className="card-front" src={philips} alt="" />
            <div className="card-back">
              {/* <i className="fa fa-mobile fa-icons" aria-hidden="true"></i> */}
              <img src={philipsLogo} alt="" />
              <h3>Asset & Medical Domain</h3>
              <p>
                Worked on multiple project(Asset ManageMent & Medical domain)
                using <strong>React & </strong> <strong>Angular</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xxl-4">
          <div className="cards">
            <img className="card-front" src={pb} alt="" />
            <div className="card-back">
              {/* <i className="fa fa-mobile fa-icons" aria-hidden="true"></i> */}
              <img src={pbLogo} alt="" />
              <h3>Ecommerce System</h3>
              <p>
                Designed and implemented various features of an ecommerce system
                using emerging technologies
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xxl-4">
          <div className="cards">
            <img className="card-front" src={topcoder} alt="" />
            <div className="card-back">
              {/* <i className="fa fa-mobile fa-icons" aria-hidden="true"></i> */}
              <img src={tcLogo} alt="" />
              <h3>Topcoder Challenges</h3>
              <p>
                Participated and won multiple topcoder challenge using various
                emerging technologies.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="col-12 col-md-6 col-xxl-4">
          <div className="cards">
            <img src={oracle} alt="" />
            <div className="card-back">
              <i className="fa fa-mobile fa-icons" aria-hidden="true"></i>
              <h3>Topcoder KYC</h3>
              <p>
                Experienced Frontend Developer with a demonstrated history of
                working in the information technology and services industry.
                Skilled in ReactJs, Redux, Angular 8, Nodejs, Javascript, SCSS,
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="show-more-wrapper mt-5">
        <a
          href=" https://drive.google.com/drive/folders/1srW8GPGMytJIc67muCNL2hWTQnSa3RTw"
          target="_blank"
          rel="noreferrer"
        >
          <a
            href="https://github.com/vishnukvishnu"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn-std">
              <span>Show More</span>
              <i className="fa fa-solid fa-arrow-right ms-3"></i>
            </button>
          </a>
        </a>
      </div>
    </div>
  );
};

export default Projects;
