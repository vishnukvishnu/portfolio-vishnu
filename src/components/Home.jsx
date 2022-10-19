import profileImg from '../assets/profile-transperant-half.png';
// import lapIcon from '../assets/programming.png';
// import { useEffect, useRef, useContext } from 'react';
// import { containerContext } from '../App';

const Home = () => {
  // const homeSection = useRef(0);
  // const { refVal, setRef } = useContext(containerContext);
  // useEffect(() => {
  //   setRef({ ...refVal, home: homeSection.current.offsetTop });
  // }, []);

  return (
    <div className="row m-0 home-wrapper">
      <div className="col-12 col-md-7 left-home-wrapper">
        <div className="wrapper">
          <h4 className="header-2 header-mb-2 header-mb-2 mb-4">
            WELCOME TO MY PORTFOLIO!
          </h4>
          <h1 className="header-1 header-mb-1 header-sm-mt-2">VISHNU K</h1>
          <div className="programming-wrapper">
            {/* <img src={lapIcon} alt="" /> */}
            <i class="fa fa-code"></i>
            <h5 className="header-3">UI/UX Developer</h5>
          </div>
          <ul className="social-media-wrapper">
            <li>
              <a
                href="https://www.linkedin.com/in/vishnu--k"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/vishnukvishnu"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/vishnuk__k"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram"> </i>
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=9645160131"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-brands fa-square-whatsapp"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/vishnuk__k"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-5 right-home-wrapper">
        <img src={profileImg} alt="profile" />
      </div>
    </div>
  );
};

export default Home;
