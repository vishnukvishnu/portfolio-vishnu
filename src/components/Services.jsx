import { useEffect, useContext, useRef, useState } from 'react';
import { containerContext } from '../App';
import Title from './common/Title';
import ParallelSlideCard from './common/ParallelSlideCard';

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
          slidBg="slide-bg-0"
          tasks={['Reactjs', 'Angular', 'Jaavascript,HTML,SCSS and more..!']}
        />
        <ParallelSlideCard
          frontTitle="Mobile App Development"
          backTitle="Mobile App"
          icon="fa-mobile fa-icons"
          slidBg="slide-bg-1"
          tasks={['Ionic', 'Android', 'IOS']}
        />
        <ParallelSlideCard
          frontTitle="Technical Blog Writing"
          backTitle="Technical Blog"
          icon="fa-pencil-square"
          slidBg="slide-bg-2"
          tasks={['User Interface', 'API Integrations', 'Medium blogs']}
        />
        <ParallelSlideCard
          frontTitle="Topcoder Challenges"
          backTitle="Top Coder"
          icon="fa-solid fa-laptop-code"
          slidBg="slide-bg-3"
          tasks={['Development Challenges', 'First2Finish']}
        />
      </div>
    </div>
  );
};

export default Services;
