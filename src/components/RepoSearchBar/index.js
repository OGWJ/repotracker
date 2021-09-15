import React from 'react';
import './style.css';

const RepoSearchBar = ({ setRepoQueryResults, allRepos }) => {

    const handleSubmit = () => {
        e.preventDefault();
        return
    }

    const handleUpdate = e => {
        if (!e.target.value) setRepoQueryResults(allRepos)
        let query = (e.target.value).toLowerCase();
        let retval = [];
        allRepos.forEach(repo => {
            if (repo.name.toLowerCase().includes(query)) retval.push(repo);
        })
        setRepoQueryResults(retval);
    }

    return (
        <form name="repo-search-bar" onSubmit={handleSubmit} className="py-4">
            <div className="row">
                <div className="col">
                    <input id="repo-search-bar" placeholder="repository name" className="border-bottom" onChange={handleUpdate} />
                </div>
                <div className="col">
                    <input type="submit" value="submit" className="btn btn-secondary" />
                </div>
            </div>
        </form >
    )
}

export default RepoSearchBar;