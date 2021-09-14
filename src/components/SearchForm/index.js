import React, { useEffect, useState } from 'react';

function SearchForm({ getResult }) {

    const [location, setLocation] = useState('London')

    const handleSubmit = e => {
        e.preventDefault();
        getResult(location);
        // conditional to prevent crash caused by mocked event in test
        if (e.target[0]) e.target[0].value = '';
    }

    const updateInput = e => {
        const input = e.target.value
        setLocation(input)
    }

    const initInput = () => {
        getResult(location);
    }

    useEffect(() => {
        console.log('called useEffect')
        initInput();
    }, [])

    return (
        <form onSubmit={handleSubmit} name="search-form">

            <label htmlFor={'location'} style={{ visibility: 'hidden' }}>Location</label>
            <input type="text" id="location" onChange={updateInput} />
            <input type="submit" value="Search" />

        </form>
    );
};

export default SearchForm;
