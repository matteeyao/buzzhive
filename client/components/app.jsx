import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SplashContainer from './splash/splash_container';
import LogInFormContainer from './session/session_form_container';
import SignUpFormContainer from './session/signup_form_container';
import ClientContainer from './main/container';

import { useLocation } from 'react-router-dom';
// import ReactGA from 'react-ga';

// function usePageViews() {
//     let location = useLocation();
//     React.useEffect(() => {
//         ReactGa.pageview(location.pathname);
//     }, [location]);
// }
n 
const App = () => {
    // usePageViews();
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={SplashContainer} />
                <AuthRoute exact path="/login" component={LogInFormContainer} />
                <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                <ProtectedRoute path="/client" component={ClientContainer} />
            </Switch>
        </ React.Fragment>
    );
};

export default App;