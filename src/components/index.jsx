import Header from './Header';
import Home from './Home';
import About from './About';
import Service from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { useContext, useRef,  useEffect } from 'react';
// import { containerContext } from '../App';

const PortfolioWrapper = () => {
 // const { refVal } = useContext(containerContext);
 const aboutSection = useRef();
 const projectSection = useRef();
 const serviceSection = useRef();

  const scrollDown = (a) => {
    // console.log(refVal);
    // window.scrollTo({
    //   top: refVal,
    //   behavior: 'smooth',
    // });
  };
  useEffect(() => {
    console.log("aboutSection......", aboutSection.current)
  }, []);
  return (
    <div>
      <Header scrollFn={scrollDown} />
      <main>
        <Home />
        <About forwardRef={aboutSection} />
        <Projects forwardRef={projectSection} />
        <Service forwardRef={serviceSection} />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default PortfolioWrapper;
