// src/App.js
import React from 'react';
import { BrowserRouter ,Router, Switch, Route, BrowserRouter } from 'react-router-dom';

import Game from './Game.js';

const App = () => {
  return (
   
      <BrowserRouter>
      <Router>
          <Route  path="/" component={<Game/>} />
     
      </Router>
      </BrowserRouter>

    
  );
};

export default App;
