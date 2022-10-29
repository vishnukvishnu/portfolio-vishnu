import pb from '../assets/images/projects/pb-banner.png';
import philips from '../assets/images/projects/philips.jpg';
import oracle from '../assets/images/projects/oracle.png';
import topcoder from '../assets/images/projects/topcoder-banner.png';
import oracleLogo from '../assets/images/logos/oracle-logo.png';
import philipsLogo from '../assets/images/logos/philips-logo.png';
import pbLogo from '../assets/images/logos/pb-logo.png';
import tcLogo from '../assets/images/logos/topcoder.png';
import Title from './common/Title';
import ImageHoverCard from './common/ImageHoverCard';

import { useEffect, useRef } from 'react';

const Projects = ({setProjects}) => {
  const projectSection = useRef();
  useEffect(() => {
    setProjects(projectSection.current.offsetTop, 'projects');
  }, []);

  return (
    <div className="project-wrapper header-align" ref={projectSection}>
      <Title
        title="Projects"
        subTitle="Here are a few samples of my previous work :)"
      />
      <div className="row project-details-wrapper">
        <ImageHoverCard
          frontImg={oracle}
          backImg={oracleLogo}
          title="ECP IOT"
          desc="Works on a product to resolve IoT device issues for products in various global business units."
        />
        <ImageHoverCard
          frontImg={philips}
          backImg={philipsLogo}
          title="Asset & Medical Domain"
          desc="Worked on multiple projects(Asset ManageMent & Medical domain)
                using React & Angular"
        />
        <ImageHoverCard
          frontImg={pb}
          backImg={pbLogo}
          title="Ecommerce System"
          desc="Designed and implemented various features of an ecommerce system
                using emerging technologies"
        />
        <ImageHoverCard
          frontImg={topcoder}
          backImg={tcLogo}
          title="Topcoder Challenges"
          desc="Participated and won multiple topcoder challenge using various
                emerging technologies."
        />
      </div>
      <div className="show-more-wrapper flex-hztl-center mt-5">
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
      </div>
    </div>
  );
};

export default Projects;
