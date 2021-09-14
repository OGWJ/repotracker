import React, { useState } from 'react';

function SearchForm({ getResult }) {

    const [location, setLocation] = useState("")

    const handleSubmit = e => {
        getResult(location);
    }

    const updateInput = e => {
        const input = e.target.value
        setLocation(input)
    }


    return (
        <form onSubmit={handleSubmit} name="search-form">
            <input type="text" />
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchForm;
