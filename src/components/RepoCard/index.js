import React from 'react';
import './style.css';

const RepoCard = ({ data }) => {
    return (
        <div className="card my-4">
            <a href={data.html_url} className="card-body text-start" style={{ maxWidth: '100% !important' }}>
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