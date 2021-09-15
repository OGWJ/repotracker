import React, { useEffect, useState } from 'react';
import { NavBar, RepoSearchBar, UserSearchBar } from './components';
import { CardList } from './layout';

// mock data with sample api resp
import { repoData as sampleRepoData } from './data/repoData';

import './style.css';

const Main = ({ user, setUser }) => {

    const fakeRepos = [
        {
            name: 'Repo A',
            dateCreated: '5-12-2020',
            nForks: '5'
        },
        {
            name: 'Repo B',
            dateCreated: '5-12-2020',
            nForks: '5'
        }
    ]

    const [repoQueryResults, setRepoQueryResults] = useState(sampleRepoData);
    const [userRepoData, setUserRepoData] = useState(sampleRepoData);

    function getUserRepoData() {
        return sampleRepoData;
    }

    useEffect(() => {
        const repoData = getUserRepoData()
        setUserRepoData(repoData);
        setRepoQueryResults(repoData);
        // if user changes download their github repo info
    }, [user])

    return (

        <main id="main-container" className="container d-flex justify-content-center">

            <div id="content-column" className="">

                <UserSearchBar setUser={setUser} />

                {user ?
                    <>
                        {/* commented out to prevent spamming of api */}
                        <div id="user-card"
                            style={{
                                background: `url(https://github-readme-stats.vercel.app/api?username=${user})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
                            }}>
                        </div>

                        <RepoSearchBar setRepoQueryResults={setRepoQueryResults} allRepos={userRepoData} />

                        <div id="cardlist-container" className="container">
                            <CardList repoData={repoQueryResults} />
                        </div>
                    </> :
                    null
                }

            </div>

        </main >
    )

}
const Header = ({ user }) => {
    return (
        <div id="main-header" className="p-4 bg-dark text-white">
            <h1>RepoTracker</h1>
            <h3>tracking <b>{user ? `${user}` : `nobody`}</b></h3>

        </div>
    )
}

function App() {

    const [user, setUser] = useState('ogwj');

    return (
        <div id="app">
            <Header user={user} />
            <Main user={user} setUser={setUser} />
            {/* <Footer /> */}
        </div>
    )
}

export default App;