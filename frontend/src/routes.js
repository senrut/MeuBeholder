import React /*, { children }*/ from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Login from './public/Login/Login';
import Settings from './private/Settings/Settings';

function Routes() {

    const isAuthenticated = localStorage.getItem('token');

    function PrivateRoute({ children, ...rest }){
        return (
            <Route {...rest} render={() => {
                return isAuthenticated
                ? children
                : <Redirect to="/" />

            }} />
        )
    }

    return (
        <BrowserRouter>
            <Route path="/" exact>
                <Login />
            </Route>
            <PrivateRoute path="/settings">
                <Settings />
            </PrivateRoute>
        </BrowserRouter>
    )
}

export default Routes;