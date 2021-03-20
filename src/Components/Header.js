import React from 'react';

import Login from './Login';

const Header = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <span className="navbar-brand mb-0 h1">{props.brand}</span>
                <Login />
            </div>
        </nav>
    );
};

export default Header;