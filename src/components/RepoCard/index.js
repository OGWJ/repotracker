import React from 'react';

const RepoCard = ({ data }) => {
    return (
        <div className="card d-flex text-left">
            <h2>{data.name}</h2>
            <h2>{data.nForks}</h2>
        </div>
    )
}

export default RepoCard;