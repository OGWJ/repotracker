import React from 'react';
import { UserSearchBar } from '..';

const NavBar = ({ setUser }) => {

    return (
        <nav className="navbar">
            <h1>RepoTracker</h1>
            <UserSearchBar setUser={setUser} />
            {/* this is a single page application... could put search bar in here */}
        </nav>
    );
}

export default NavBar;
