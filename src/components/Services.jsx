import { useEffect, useContext, useRef, useState } from 'react';
import { containerContext } from '../App';
import Title from './common/Title';
import ParallelSlideCard from './common/ParallelSlideCard';
import techbu from '../assets/images/services/techbu.jpg';
import explodo from '../assets/images/services/explodo.jpg';
import pbclient from '../assets/images/services/pbclient.jpg';
import fiveYear from '../assets/images/services/5year.jpg';

const Services = () => {
  const serviceSection = useRef();
  const { setRef } = useContext(containerContext);
  const [test, setTest] = useState(null);
  useEffect(() => {
    setTest(serviceSection.current.offsetTop);
  }, []);
  useEffect(() => {
    setRef(test, 'service');
  }, [test]);
  return (
    <div
      className="service-wrapper header-align"
      ref={serviceSection}
      id="service"
    >
      <Title
        title="What I can do ?"
        subTitle="I can't be the most talented but I can work really hard :)"
      />
      <div className="row services-details-wrapper">
        <ParallelSlideCard
          frontTitle="Web developement (React,Angular,JS)"
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
