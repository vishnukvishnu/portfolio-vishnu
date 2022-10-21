import Header from './Header';
import Home from './Home';
import About from './About';
import Service from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { useContext } from 'react';
import { containerContext } from '../App';

const PortfolioWrapper = () => {
  const { refVal } = useContext(containerContext);
  const scrollDown = (section) => {
    console.log(section, '............', refVal[section]);
    window.scrollTo({
      top: refVal[section],
      behavior: 'smooth',
    });
  };
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
