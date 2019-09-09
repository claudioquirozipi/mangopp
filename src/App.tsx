import React from 'react';
import Routes from './routes';
import './App.css';

import {MyContext} from './context';
//Data
import {dataBlog} from './context/dataBlog';

const App: React.FC = () => {
  return (
    <MyContext.Provider value={dataBlog}>
      <Routes />
    </MyContext.Provider>
  );
}

export default App;
