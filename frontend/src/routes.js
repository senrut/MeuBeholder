import React from 'react';
import { Route, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './public/Login/Login';
import Settings from './private/Settings/Settings';

function Routes(){
  return(
    <BrowserRouter>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/settings" exact>
        <Settings />
      </Route>
    </BrowserRouter>
  )
}

export default Routes;