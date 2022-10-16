import './App.css';
import PortfolioWrapper from './components';
import { useState, createContext } from 'react';

export const containerContext = createContext('');
const App = () => {
  const [refVal, setRef] = useState({ home: 0, about: 0,projects:0, service: 0 });
  return (
    <>
      <containerContext.Provider value={{ refVal:refVal, setRef:setRef }}>
        <PortfolioWrapper />
      </containerContext.Provider>
    </>
  );
};

export default App;
