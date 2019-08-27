import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login'
// import { protectRoute } from './utils'
// const ProtectedRoute = protectRoute(Component goes here)

function App() {
  return (
    <div className="App">
      <Route to="/login" component={Login} />
    </div>
  );
}

export default App;