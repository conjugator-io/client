import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home/Home';
import Challenge from './components/Challenge';
import UserMenu from './components/Home/UserMenu';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Login} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/challenge' component ={Challenge}/>

    </div>
  );
}

export default App;