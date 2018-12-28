import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import Dashboard from './components/Dashboard'

export class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exac path='/' Component={SignInForm}></Route>
            <Route path='/signup' component={SignUpForm}></Route>
          </Switch>
        </div>  
      </BrowserRouter>
    )
  }
}
