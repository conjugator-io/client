import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login'
import { protectRoute } from './utils'
import Challenge from './components/Challenge';
import Home from './components/Home/Home'
import FormikSignUp from './components/SignUp';

const ProtectedRoute = protectRoute(Home)

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Login} />
      <Route exact path='/signup' component={FormikSignUp} />
      <Route path="/challenge" render={(props) => <Challenge {...props} />} />
      <Route path='/home' component={ProtectedRoute} />
    </div>
  );
}

export default App;
