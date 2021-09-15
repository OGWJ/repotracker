import React from 'react';
import { RepoCard } from '..';

const CardList = ({ repoData }) => {
    console.log(`repoData`);
    console.log(repoData.data);
    return (
        repoData.data.map(data => {
            return <RepoCard data={data} />
        })
    )
}

export default CardList;