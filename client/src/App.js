import React, { Component } from 'react';
import './App.css';
import { Principal } from './pages/Principal';
import { Switch, Route } from 'react-router';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
// import { AboutUs } from './pages/AboutUs';
import Searchbar from './components/Searchbar';
import { NewClase } from './components/NewClase';



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact  path="/" component={Principal}/>
            <Route exact  path="/signup" component={Signup}/>
            <Route exact  path="/login" component={Login}/>
            <Route exact  path="/aboutus" component={Searchbar}/>
            <Route exact  path="/newclase" component={NewClase}/>
        </Switch>
      </div>
    );
  }
}

export default App;