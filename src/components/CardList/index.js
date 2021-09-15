import React from 'react';
import { RepoCard } from '..';

const CardList = ({ repoData }) => {
    return (
        // Prevent trying to render before fetch promise is resolved
        repoData ?
            repoData.data.map(data => {
                return <RepoCard data={data} />
            })
            : null
    )
}

export default CardList;