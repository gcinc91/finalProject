import React, { Component } from 'react';
import './App.css';
import { Principal } from './pages/Principal';
import { Switch, Route } from 'react-router';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { NewClase } from './components/NewClase';
import { OneUser } from './pages/OneUser';
import { MiProfile } from './pages/MiProfile';
import Information from './components/Information';



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact  path="/" component={Information}/>
            <Route exact  path="/signup" component={Signup}/>
            <Route exact  path="/login" component={Login}/>
            <Route exact  path="/Explora" component={Principal}/>
            <Route exact  path="/newclase" component={NewClase}/>
            <Route exact  path="/user/:id" component={OneUser}/> 
            <Route exact  path="/miprofile" component={MiProfile}/> 
            <Route exact path='/vcall/:id' component={() => { window.location = 'https://localhost:8443/vcall'; return null;} }/>
        </Switch>
      </div>
    );
  }
}

export default App;