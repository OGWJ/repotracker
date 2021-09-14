import React from 'react';
import { RepoCard } from '../../components';

const CardList = ({ repoData }) => {
    return (
        repoData.map(data => {
            return <RepoCard data={data} />
        })
    )
}

export default CardList;