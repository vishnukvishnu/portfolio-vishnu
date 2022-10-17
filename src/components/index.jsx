import Header from './Header';
import Home from './Home';
import About from './About';
import Service from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { useContext,  useEffect } from 'react';
import { containerContext } from '../App';

const PortfolioWrapper = () => {
  const { refVal } = useContext(containerContext);
  const scrollDown = (a) => {
    console.log(refVal);
    window.scrollTo({
      top: refVal,
      behavior: 'smooth', 
    });
  };
  useEffect(() => {
    console.log("aboutSection......",refVal)
  }, []);
  return (
    <div>
      <Header scrollFn={scrollDown} />
      <main>
        <Home />
        <About />
        <Projects />
        <Service />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default PortfolioWrapper;
