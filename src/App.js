import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.scss';
import Login from './components/Header';
import HomePage from './components/customer/HomePage';
import Logout from './components/Header';


function App() {
  return (
    <Route exact path="/" component={Login} />

  );
}

export default App;
