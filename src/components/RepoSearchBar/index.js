import React from 'react';

const RepoSearchBar = () => {

    const handleSubmit = () => {
        return
    }

    return (
        <>
            <form name="repo-search-bar" onSubmit={handleSubmit} className="py-4">
                <div className="row">
                    <div className="col">
                        <input id="repo-search-bar" placeholder="repository name" className="border-bottom" />
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