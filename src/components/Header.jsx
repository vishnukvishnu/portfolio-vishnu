// import headerLogo from '../assets/images/logos/logo-header.png';
import { useContext } from 'react';
import { containerContext } from '../App';

const Header = ({ scrollFn }) => {
  const { refVal } = useContext(containerContext);
  return (
    <div className="header-wrapper">
      <nav role="navigation" className="left-nav-wrapper display-mobile-hide">
        <div>
          {/* <img src={headerLogo} alt="" /> */}
        </div>
        <ul className="right-nav-wrapper">
          <li className="navigation-link" onClick={() => scrollFn(refVal.home)}>
            HOME
          </li>
          <li
            className="navigation-link"
            onClick={() => scrollFn(refVal.about)}
          >
            ABOUT
          </li>
          <li className="navigation-link" onClick={scrollFn}>
            PROJECTS
          </li>
          <li className="navigation-link" onClick={scrollFn}>
            SERVICES
          </li>
          <li className="navigation-link" onClick={scrollFn}>
            CONTACT
          </li>
          <li className="navigation-link width-100">
            <a
              href="https://drive.google.com/drive/folders/1srW8GPGMytJIc67muCNL2hWTQnSa3RTw"
              target="_blank"
              rel="noreferrer"
            >
              <span>Resume</span>
              <i className="fa fa-solid fa-arrow-right ms-2"></i>
            </a>
          </li>
        </ul>
      </nav>
      <nav role="navigation" className="display-hide display-mobile-block">
        <div id="menuToggle">
          <div className="left-nav-mobile-wrapper display-block">
            {/* <img src={headerLogo} alt="" /> */}
          </div>
          <input type="checkbox" />
          <span className="icon"></span>
          <span className="icon"></span>
          <span className="icon"></span>

          <ul id="menu" className="right-nav-wrapper">
            <li
              className="navigation-link"
              onClick={() => scrollFn(refVal.home)}
            >
              <i className="fa fa-home-alt"></i>HOME
            </li>
            <li
              className="navigation-link"
              onClick={() => scrollFn(refVal.about)}
            >
              <i className="fa fa-user"></i>ABOUT
            </li>
            <li className="navigation-link" onClick={scrollFn}>
              <i className="fa fa-project-diagram"></i>PROJECTS
            </li>
            <li className="navigation-link" onClick={scrollFn}>
              <i className="fa fa-code"></i>SERVICES
            </li>
            <li className="navigation-link" onClick={scrollFn}>
              <i className="fa fa-phone-square-alt"></i>CONTACT
            </li>
            <li className="navigation-link width-100">
              <a
                href="https://drive.google.com/drive/folders/1srW8GPGMytJIc67muCNL2hWTQnSa3RTw"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-std">Resume</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
