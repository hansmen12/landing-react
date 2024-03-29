import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { render } from 'react-dom';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes } from 'react-router-dom';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
