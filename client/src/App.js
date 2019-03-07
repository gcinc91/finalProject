import React, { Component } from 'react';
import './App.css';
import { Principal } from './pages/Principal';
import { Switch, Route } from 'react-router';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import Searchbar from './components/Searchbar';
import { NewClase } from './components/NewClase';
import { OneUser } from './pages/OneUser';
import { MiProfile } from './pages/MiProfile';



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
            <Route exact  path="/user/:id" component={OneUser}/> 
            <Route exact  path="/miprofile" component={MiProfile}/> 
            <Route exact path='/vcall' component={() => { window.location = 'https://localhost:8443/vcall'; return null;} }/>
        </Switch>
      </div>
    );
  }
}

export default App;