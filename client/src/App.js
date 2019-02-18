import React, { Component } from 'react';
import './App.css';
import { Principal } from './pages/Principal';
import { Switch, Route } from 'react-router';
import { Signup } from './components/Signup';
import { Login } from './components/Login';



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact  path="/" component={Principal}/>
            <Route exact  path="/signup" component={Signup}/>
            <Route exact  path="/login" component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;