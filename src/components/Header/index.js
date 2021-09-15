import React from 'react';

const Header = ({ user }) => {
    return (
        <div id="main-header" className="p-4 bg-dark text-white">
            <h1>RepoTracker</h1>
            <h3>tracking <b>{user ? `${user}` : `nobody`}</b></h3>
        </div>
    )
}

export default Header;