import profileImg from '../assets/profile-transperant-half.png';
import { useState } from 'react';
// import { useEffect, useRef, useContext } from 'react';
// import { containerContext } from '../App';

const Home = () => {
  // const homeSection = useRef(0);
  // const { refVal, setRef } = useContext(containerContext);
  // useEffect(() => {
  //   setRef({ ...refVal, home: homeSection.current.offsetTop });
  // }, []);
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
            {socialMedias.map((media) => (
              <li>
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
      <div className="col-12 col-md-5 right-home-wrapper">
        <img src={profileImg} alt="profile" />
      </div>
    </div>
  );
};

export default Home;
