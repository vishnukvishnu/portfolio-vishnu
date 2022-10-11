// import { useEffect, useContext, useRef } from 'react';
// import { containerContext } from '../App';

const Services = () => {
  // const serviceSection = useRef(null);
  // const { refVal, setRef } = useContext(containerContext);
  // useEffect(() => {
  //   setRef({ ...refVal, service: serviceSection.current.offsetTop });
  // }, []);

  return (
    <div className="service-wrapper">
      <div className="services-header-wrapper">
        <h1 className="header-1">What I can do ?</h1>
        <p className="mb-0 roboto-medium">
          I can't be the most talented but I can work really hard :)
        </p>
      </div>
      <div className="row services-details-wrapper">
        <div className="col-sm-6">
          <div className="slide-wrapper">
            <div className="slide card-front">
              <div>
                <div className="icon-wrapper">
                  <i className="fa fa-solid fa-code"></i>
                </div>
              </div>
              <div className="content-wrappwer">
                <p>Web developement (React,Angular,JS)</p>
              </div>
            </div>
            <div className="slide card-back">
              <div className="dev-info">
                <h4>Web Development</h4>
                <ul>
                  <li>
                    <i className="fa fa-play" aria-hidden="true"></i>Reactjs
                  </li>
                  <li>
                    <i className="fa fa-play" aria-hidden="true"></i>Angular
                  </li>
                  <li>
                    <i className="fa fa-play" aria-hidden="true"></i>
                    Jaavascript,HTML,SCSS and more..!
                  </li>
                </ul>
              </div>
              <div className="btn-wrapper">
                {/* <button class="col-sm-6" onclick="window.location.href = 'tel:+918943260360';">Call Us</button>
              <button class="col-sm-6 ml-3" onclick="window.location.href = 'https://wa.me/+918943260360';">WhatsApp</button> */}
                <button className="btn-std me-2">
                  <a
                    href="https://api.whatsapp.com/send?phone=9645160131"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Whatsapp
                  </a>
                </button>
                <button className="btn-std">
                  <a href="tel:+9645160131" target="_blank" rel="noreferrer">
                    Call
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="slide-wrapper">
            <div className="slide card-front">
              <div>
                <div className="icon-wrapper">
                  <i className="fa fa-mobile fa-icons" aria-hidden="true"></i>
                </div>
              </div>
              <div className="content-wrappwer">
                <p>Mobile App Development</p>
              </div>
            </div>
            <div className="slide card-back">
              <div className="dev-info">
                <h4>Mobile App</h4>
                <ul>
                  <li>
                    <i className="fa fa-play" aria-hidden="true"></i>Ionic
                  </li>
                  <li>
                    <i className="fa fa-play" aria-hidden="true"></i>Android
                  </li>
                  <li>
                    <i className="fa fa-play" aria-hidden="true"></i>IOS
                  </li>
                </ul>
              </div>
              <div className="btn-wrapper">
                <button className="btn-std me-2">
                  <a
                    href="https://api.whatsapp.com/send?phone=9645160131"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Whatsapp
                  </a>
                </button>
                <button className="btn-std">Call</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="slide-wrapper">
            <div className="slide card-front">
              <div>
                <div className="icon-wrapper">
                  <i className="fa fa-pencil-square"></i>
                </div>
              </div>
              <div className="content-wrappwer">
                <p>Technical Blog Writing</p>
              </div>
            </div>
            <div className="slide card-back">
              <div className="dev-info">
                <h4>Technical Blog</h4>
                <ul>
                  <li>
                    <i className="fa fa-play" aria-hidden="true"></i>User
                    Interface
                  </li>
                  <li>
                    <i className="fa fa-play" aria-hidden="true"></i>API
                    Integrations
                  </li>
                  <li>
                    <i className="fa fa-play" aria-hidden="true"></i>Medium
                    blogs
                  </li>
                </ul>
              </div>
              <div className="btn-wrapper">
                <button className="btn-std me-2">
                  <a
                    href="https://api.whatsapp.com/send?phone=9645160131"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Whatsapp
                  </a>
                </button>
                <button className="btn-std">Call</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="slide-wrapper">
            <div className="slide card-front">
              <div>
                <div className="icon-wrapper">
                  <i className="fa fa-solid fa-laptop-code"></i>
                </div>
              </div>
              <div className="content-wrappwer">
                <p>Topcoder Challenges</p>
              </div>
            </div>
            <div className="slide card-back">
              <div className="dev-info">
                <h4>Top Coder</h4>
                <ul>
                  <li>
                    <i className="fa fa-play" aria-hidden="true"></i>Development
                    Challenges
                  </li>
                  <li>
                    <i className="fa fa-play" aria-hidden="true"></i>
                    First2Finish
                  </li>
                </ul>
              </div>
              <div className="btn-wrapper">
                <button className="btn-std me-2">
                  <a
                    href="https://api.whatsapp.com/send?phone=9645160131"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Whatsapp
                  </a>
                </button>
                <button className="btn-std">Call</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
