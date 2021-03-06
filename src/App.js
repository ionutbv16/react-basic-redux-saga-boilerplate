import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";


export default () => 
<Provider store={store}>
<Home />
</Provider>;
