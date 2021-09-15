import React from 'react';

const RepoCard = ({ data }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <a href={data.html_url} className="card-body">
                <h5 className="card-title">{data.name} ({data.created_at})</h5>
                <h6 className="card-subtitle mb-2 text-muted">active: {data.updated_at}</h6>
                <ul>
                    <li>{data.watchers} watchers</li>
                    <li>{data.forks} forks</li>
                </ul>
                {/* <a href={data.html_url} className="card-link">{data.full_name}</a> */}
            </a>
        </div>
    )
}

export default RepoCard;