import React from 'react';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

export default ({ currentUser }) => {
    return (
        <div>
            <Header currentUser={currentUser} />
            <Content />
            <Footer currentUser={currentUser}/>
        </div>
    )
}
