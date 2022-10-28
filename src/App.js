import './App.css';
import PortfolioWrapper from './components';
import { useState, createContext } from 'react';

export const containerContext = createContext('');
const App = () => {
  // const [refVal, setRef] = useState({
  //   home: 0,
  //   about: 0,
  //   projects: 0,
  //   service: 0,
  // });


  const [home, setHome] = useState(0);
  const [about, setAbout] = useState(0);
  const [projects, setProjects] = useState(0);
  const [service, setService] = useState(0);
  const [contact, setContact] = useState(0);
  return (
    <>
      <containerContext.Provider
        value={{
          home,
          about,
          projects,
          service,
          contact,
          setHome,
          setAbout,
          setProjects,
          setService,
          setContact,
        }}
      >
        <PortfolioWrapper />
      </containerContext.Provider>
    </>
  );
};

export default App;
