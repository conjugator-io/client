import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home/Home';
import Challenge from './components/Challenge';
// import { protectRoute } from './utils'
// const ProtectedRoute = protectRoute(Component goes here)
// import Challenge from './components/Challenge';
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Login} />
      <Route to='/home' component={Home} />
      <Route to='/challenge' component ={Challenge}/>
    </div>
  );
}

export default App;