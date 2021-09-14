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

            <label>
                Location
                <input type="text" name="location" onChange={updateInput} />
            </label>

            <input type="submit" value="Search" />

        </form>
    );
};

export default SearchForm;
