import React, { useEffect, useState } from 'react';

function SearchForm({ getResult }) {

    const [location, setLocation] = useState("London")

    const handleSubmit = e => {
        e.preventDefault();
        getResult(location);
    }

    const updateInput = e => {
        const input = e.target.value
        setLocation(input)
    }

    const initInput = () => {
        getResult(location);
    }

    useEffect(() => {
        initInput();
    }, [])

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
