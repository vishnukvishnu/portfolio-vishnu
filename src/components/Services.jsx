import { useEffect, useRef } from 'react';
import Title from './common/Title';
import ParallelSlideCard from './common/ParallelSlideCard';
import techbu from '../assets/images/services/techbu.jpg';
import explodo from '../assets/images/services/explodo.jpg';
import pbclient from '../assets/images/services/pbclient.jpg';
import fiveYear from '../assets/images/services/5year.jpg';

const Services = ({setService}) => {
  const serviceSection = useRef();
  useEffect(() => {
    setService(serviceSection.current.offsetTop, 'service');
  }, []);
  return (
    <div className="service-wrapper header-align" ref={serviceSection}>
      <Title
        title="What I can do ?"
        subTitle="I can't be the most talented but I can work really hard 😵"
      />
      <div className="row services-details-wrapper">
        <ParallelSlideCard
          frontTitle="Web development (React,Angular,JS)"
          backTitle="Web Development"
          icon="fa-solid fa-code"
          slidBgImg={techbu}
          tasks={['Reactjs', 'Angular', 'Jaavascript,HTML,SCSS and more..!']}
        />
        <ParallelSlideCard
          frontTitle="Mobile App Development"
          backTitle="Mobile App"
          icon="fa-mobile fa-icons"
          slidBgImg={explodo}
          tasks={['Ionic', 'Android', 'IOS']}
        />
        <ParallelSlideCard
          frontTitle="Technical Blog Writing"
          backTitle="Technical Blog"
          icon="fa-pencil-square"
          slidBgImg={pbclient}
          tasks={['User Interface', 'API Integrations', 'Medium blogs']}
        />
        <ParallelSlideCard
          frontTitle="Topcoder Challenges"
          backTitle="Top Coder"
          icon="fa-solid fa-laptop-code"
          slidBgImg={fiveYear}
          tasks={['Development Challenges', 'First2Finish']}
        />
      </div>
    </div>
  );
};

export default Services;
