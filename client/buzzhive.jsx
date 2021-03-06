import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import library from "./icons/library"
import ReactGA, { pageview } from 'react-ga';

// TEST IMPORTS START
// import { fetchHive, fetchHives } from './util/hive_api_util'
import { fetchHive, fetchHives, searchHives, deleteHive } from './actions/hive_actions'
import { fetchMessage, clearThread } from './actions/message_actions'

// import { fetchUsers } from './actions/user_actions'
import { fetchUsers } from './util/user_api_util';

// TEST IMPORTS END


document.addEventListener('DOMContentLoaded', () => {
    initializeGA();
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                allUsers: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUser: window.currentUser },
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TESTING START
    // window.store = store;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.fetchHives = fetchHives;
    // window.fetchHive = fetchHive;
    // window.fetchUsers = fetchUsers;
    // window.searchHives = searchHives;
    // window.deleteHive = deleteHive;
    // window.fetchMessage = fetchMessage;
    // window.clearThread = clearThread;
    // TESTING END
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});

function initializeGA() {
    ReactGA.initialize('');
    pageview(location.pathname + location.hash);
}