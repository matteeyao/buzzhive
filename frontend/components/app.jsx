import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

// MAIN COMPONENTS:
import NavBarContainer from './client/navbar/navbar_container';
import HiveIndexContainer from './client/sidebar/hive_index_container';
// END

// Session Components
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/session_form_container';
import Splash from './splash/splash';
// END

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <Route exact path="/" component={Splash} />
        <ProtectedRoute exact path="/client" component={HiveIndexContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Switch>
        </Switch>
    </div>
);

export default App;