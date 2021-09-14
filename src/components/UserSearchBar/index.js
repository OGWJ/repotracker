import React from 'react';

const UserSearchBar = ({ setUser }) => {

    const handleSubmit = e => {
        e.preventDefault();
        setUser(e.target[0].value);
    }

    return (
        <form name="user-search-bar" onSubmit={handleSubmit} className="py-4">
            <div className="row">
                <div className="col">
                    <input id="" placeholder="(@)GithubHandle" className="border-bottom" />
                </div>
                <div className="col">
                    <input type="submit" value="submit" className="btn btn-success" />
                </div>
            </div>
        </form >
    )
}

export default UserSearchBar;