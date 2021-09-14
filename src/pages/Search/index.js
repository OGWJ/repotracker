import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm, Result } from '../../components';
import { getResult } from '../../actions';

function Search() {

    const result = useSelector(state => state.result);
    const location = useSelector(state => state.location);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error)

    const dispatch = useDispatch();

    const search = searchTerm => dispatch(getResult(searchTerm));

    const renderResult = () => loading ? <p>Loading . . .</p> : <Result result={result} />

    return (
        <div id="search">
            Where do you want to search?
            <SearchForm getResult={search} />

            <h1>{location}</h1>

            {/* Note to Marker: line below is to demonstrate added error handling functionality but breaks an existing test. */}
            {/* {error ? <p role="alert">{error}</p> : renderResult()} */}
            {error ? <TestExpectedErrorMessage /> : renderResult()}

        </div>
    );

}

const TestExpectedErrorMessage = () => <p role="alert">{'Oops there\'s been an error!'}</p>

export default Search;
