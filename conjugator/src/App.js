import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login'
import { protectRoute } from './utils'
import Challenge from './components/Challenge';
import Home from './components/Home/Home'

const ProtectedRoute = protectRoute(Home)

function App() {
  return (
      <div className="App">
      <Route exact path='/' component={Login} />
      <Route path='/home' component={ProtectedRoute} />
      <Route path= '/challenge' component={Challenge} />
    </div>

  );
}

export default App;
