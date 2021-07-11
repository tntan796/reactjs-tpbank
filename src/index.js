import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Admin from './admin/Admin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './pages/login/index';
import ForgotPasswordPage from './pages/forgot-password/index';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
          <Route path="/admin" exact> <Admin /> </Route>
          <Route path="/login" exact> <LoginPage /> </Route>
          <Route path="/forgot-password" exact> <ForgotPasswordPage /> </Route>
          <Route> <App /> </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
