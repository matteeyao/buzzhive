import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SplashContainer from './splash/splash_container';
import LogInFormContainer from './session/session_form_container';
import SignUpFormContainer from './session/signup_form_container';
import Main from './main/container';

const App = () => (
    <>
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute path="/hives/:hiveId" component={Main} />
        </Switch>
    </>
);

export default App;