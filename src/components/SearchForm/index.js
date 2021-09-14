import React, { useEffect, useState } from 'react';

function SearchForm({ getResult }) {

    const [user, setUser] = useState()

    const handleSubmit = e => {
        e.preventDefault();
        getUser(user);
        // This conditional accounts for missing input value in mock userEvent
        if (e.target[0]) e.target[0].value = '';
    }

    const updateInput = e => {
        const input = e.target.value
        setLocation(input)
    }

    return (
        <form onSubmit={handleSubmit} name="search-form">

            <label htmlFor={'location'} style={{ visibility: 'hidden' }}>Username</label>
            <input type="text" id="username" onChange={updateInput} />
            <input type="submit" value="Search" />

        </form>
    );
};

export default SearchForm;
