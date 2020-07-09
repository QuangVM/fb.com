import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.scss';
import Login from './components/Header';
import HomePage from './components/customer/HomePage';
import Logout from './components/Header';
import Header from './components/Header';
import Content from './components/Content'

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
