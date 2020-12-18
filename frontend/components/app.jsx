import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SplashContainer from './splash/splash';
import LogInFormContainer from './session/session_form_container';
import SignUpFormContainer from './session/signup_form_container';
import MainContainer from './main/main';

import NavbarComponent from './navbar/navbar_container'

const App = () => (
    <div>
        <header>
            <Switch>
                <Route path="/" component={NavbarComponent} />
            </Switch>
        </header>
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute path="/hives/:hiveId" component={MainContainer} />
        </Switch>
    </div>
);

export default App;