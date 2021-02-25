import React from 'react';
import ProfileModalContainer from './profile/profile';
import SearchModalContainer from './search/search_container';
import HiveFormContainer from './forms/hive_form_container';

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
        default:
            return null;
    }

    return (
        <div>
            { component }
        </div>
    );
}