import './App.css';
import PortfolioWrapper from './components';
import { useState, createContext } from 'react';

export const containerContext = createContext('');
const App = () => {
  const [refVal, setRef] = useState({ home: '', about: '', service: '' });
  return (
    <>
      <containerContext.Provider value={{ refVal, setRef }}>
        <PortfolioWrapper />
      </containerContext.Provider>
    </>
  );
};

export default App;
