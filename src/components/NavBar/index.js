import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './style.css';

const NavBar = () => {

    const history = useHistory();

    const onBackButtonClick = e => {
        history.goBack();
    }

    return (
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
            <NavLink activeClassName="active" to="/search">Search</NavLink>
            <button onClick={onBackButtonClick}>Back</button>
        </nav>
    );
}

export default NavBar;
