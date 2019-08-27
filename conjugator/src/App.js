import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import FormikReg from 'react';
import './App.css';



function App() {
  const [Register, Login] = useState([]);
  return (
      <div className="App">
        <Route exact path="/" component={Login} />
      <Route path="/Register" component={Register}/>
      </div>
  );
}

export default App;
