import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom'
import Dashboard from './containers/Dashboard/Dashboard';
import './App.css';
import Login from './components/Login/Login';
import Header from "./components/Header/Header";
import Tile from "./components/Tile/Tile";
import getSession from './utilities/Session';
import { Redirect } from 'react-router-dom';

class App extends Component {

  render() {
    return (
        <Route>
      <div className="App">
        <Header/>
      </div>
          <Switch>
            <Route exact path='/' component={() => (getSession() ? <Redirect to='/dashboard'/> : <Redirect to='/login'/>)}
            />
            <Route exact  path='/login' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/tile/open/:index' component={Tile} />
          </Switch>
        </Route>
    );
  }
}

export default App;
