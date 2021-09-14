import React from 'react';

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
        <>
            <form name="repo-search-bar" onSubmit={handleSubmit} className="py-4">
                <div className="row">
                    <div className="col">
                        <input id="repo-search-bar" placeholder="repository name" className="border-bottom" onChange={handleUpdate} />
                    </div>
                    <div className="col">
                        <input type="submit" value="submit" className="btn btn-success" />
                    </div>
                </div>
            </form >
            {/* <hr className="mb-4" /> */}
        </>
    )
}

export default RepoSearchBar;