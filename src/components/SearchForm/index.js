import React, { useState } from 'react';

function SearchForm({ getResult }) {

    const [ location, setLocation ] = useState("")

    handleSubmit = e => {
        getResult(location);
    }

    updateInput = e => {
        const input = e.target.value 
        setLocation(input)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchForm;
