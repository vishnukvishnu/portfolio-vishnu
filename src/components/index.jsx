import Header from './Header';
import Home from './Home';
import About from './About';
import Service from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { useState } from 'react';

const PortfolioWrapper = () => {
  const [home, setHome] = useState(0);
  const [about, setAbout] = useState(0);
  const [projects, setProjects] = useState(0);
  const [service, setService] = useState(0);
  const [contact, setContact] = useState(0);
  const context = { home, about, projects, service, contact };

  const scrollFn = (section) => {
    window.scrollTo({
      top: context[section] - 150,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <Header scrollFn={scrollFn} />
      <main>
        <Home setHome={setHome} />
        <About setAbout={setAbout} />
        <Projects setProjects={setProjects} />
        <Service setService={setService} />
        <Contact setContact={setContact} />
        <Footer />
      </main>
    </div>
  );
};

export default PortfolioWrapper;
