import React from 'react';
import ProfileModalContainer from './profile/component';
import SearchModalContainer from './search/container';
import HiveFormContainer from './hive_form/container';
import AboutModalContainer from './about/container';
import HiveUsersModal from './hive_users/container';

export default ({modal, currentUser, logout, closeModal}) => {
    if (!modal) return null;

    let component;
    switch (modal) {
        case 'profileModal':
            component = <ProfileModalContainer 
                currentUser={currentUser}
                closeModal={closeModal}
                logout={logout} />;
            break;
        case 'searchModal':
            component = <SearchModalContainer />;
            break;
        case 'hiveModal':
            component = <HiveFormContainer />;
            break;
        case 'aboutModal':
            component = <AboutModalContainer />;
            break;
        case 'hiveUsersModal':
            component = <HiveUsersModal />;
            break;
        default:
            return null;
    }

    return (
        <div>
            { component }
        </div>
    );
}