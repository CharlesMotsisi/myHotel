//import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import React from 'react';
import ForgotPass from './Components/forgotPass';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from "./Components/signup"

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/forgotPass" component={ForgotPass}></Route>
        <Route path="/signup" component={SignUp}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
