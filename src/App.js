import './App.css';
import PortfolioWrapper from './components';
import { useState, createContext, useEffect } from 'react';

export const containerContext = createContext('');
const App = () => {
  const [refVal, setRef] = useState({
    home: 0,
    about: 0,
    projects: 0,
    service: 0,
  });

  const test = (val, section) => {
    setRef({ ...refVal, [section]: val });
  };

  useEffect(() => {
    console.log('refVal.........', refVal);
  }, [refVal]);
  return (
    <>
      <containerContext.Provider value={{ refVal: refVal, setRef: test }}>
        <PortfolioWrapper />
      </containerContext.Provider>
    </>
  );
};

export default App;
