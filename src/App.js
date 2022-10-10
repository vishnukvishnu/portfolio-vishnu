import './App.css';
import Containter from './components/Containter';
import { useState, createContext } from 'react';

export const containerContext = createContext('');
const App = () => {
  const [refVal, setRef] = useState({ home: '', about: '', service: '' });
  return (
    <>
      <containerContext.Provider value={{ refVal, setRef }}>
        <Containter />
      </containerContext.Provider>
    </>
  );
};

export default App;
