import profileImg from '../assets/profile-home.png';
import { useState } from 'react';
import { useEffect, useRef, useContext } from 'react';
import { containerContext } from '../App';

const Home = () => {
  const homeSection = useRef(0);
  const { setRef } = useContext(containerContext);
  const [test,setTest] = useState(null)
  useEffect(() => {
    setTest(homeSection.current.offsetTop);
  }, []);
  useEffect(() => {
    setRef(test, "home");
  }, [test]);
  const [socialMedias] = useState([
    { link: 'https://www.linkedin.com/in/vishnu--k', icon: 'linkedin' },
    { link: 'https://github.com/vishnukvishnu', icon: 'github' },
    { link: 'https://www.instagram.com/vishnuk__k', icon: 'instagram' },
    {
      link: 'https://api.whatsapp.com/send?phone=9645160131',
      icon: 'whatsapp',
    },
    { link: 'https://twitter.com/vishnuk__k', icon: 'twitter' },
  ]);
  return (
    <div className="row m-0 home-wrapper" ref={homeSection} id="home">
      <div className="col-12 col-md-7 left-home-wrapper">
        <div className="wrapper">
          <h4 className="header-2 header-mb-2 header-mb-2 mb-4">
            Welcome to my portfolio!
          </h4>
          <h1 className="header-1 header-mb-1 header-sm-mt-2">VISHNU K</h1>
          <div className="programming-wrapper flex-vtkl-center">
            {/* <img src={lapIcon} alt="" /> */}
            <i className="fa fa-code"></i>
            <h5 className="header-3">UI/UX Developer</h5>
          </div>
          <ul className="social-media-wrapper">
            {socialMedias.map((media) => (
              <li key={media.icon}>
                <a
                  href={media.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin link"
                >
                  <i className={`fa fa-${media.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-5 right-home-wrapper flex-hztl-center">
        {/* <div className='profile-image'></div> */}
        <img src={profileImg} alt="profile" />
      </div>
    </div>
  );
};

export default Home;
