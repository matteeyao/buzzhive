import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// TEST IMPORTS START
import { fetchHive, fetchHives } from './util/hive_api_util'
// import { fetchHive, fetchHives } from './actions/hive_actions'
// import { fetchUsers } from './actions/user_actions'
import { fetchUsers } from './util/user_api_util';
import { logout } from './actions/session_actions';
// import { login, logout } from './util/session_api_util';
// TEST IMPORTS END


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUser: window.currentUser },
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TESTING START
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchHives = fetchHives;
    window.fetchHive = fetchHive;
    window.fetchUsers = fetchUsers;
    window.logout = logout;
    // TESTING END
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});