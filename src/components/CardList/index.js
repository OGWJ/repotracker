import React from 'react';
import { RepoCard } from '..';

const CardList = ({ repoData }) => {
    return (
        repoData ?
            repoData.data.map(data => {
                return <RepoCard data={data} />
            })
            : null
    )
}

export default CardList;