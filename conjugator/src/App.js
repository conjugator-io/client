import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login'
import Home from "./components/Home/Home";
// import { protectRoute } from './utils'
// const ProtectedRoute = protectRoute(Component goes here)
import Challenge from './components/Challenge';
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Login} />
      <Route to='/' component={Home} />
    </div>
  );
}

export default App;