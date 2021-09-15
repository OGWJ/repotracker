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

    if (user) return (

        <main id="main-container" className="container d-flex justify-content-center">

            <div id="content-column" className="">

                <UserSearchBar setUser={setUser} />

                {/* commented out to prevent spamming of api */}
                <div className="user-card"
                    style={{
                        background: `url(https://github-readme-stats.vercel.app/api?username=${user})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
                    }}>
                </div>

                {/* <img
                     id="user-card"
                     src={`https://github-readme-stats.vercel.app/api?username=${user}`}
                            className = "m-4"
                            />  */}


                <RepoSearchBar setRepoQueryResults={setRepoQueryResults} allRepos={fakeRepos} />

                <div id="cardlist-container" className="container">
                    <CardList repoData={repoQueryResults} />
                </div>

            </div>

        </main>
    )

    // else no user
    return (
        <div className="vh-100 vw-100 d-flex flex-column justify-content-center">
            <p>No user selected!</p>
        </div>
    )

}
const Header = ({ user }) => {
    return (
        <h1>{user}</h1>
    )
}

function App() {

    const [user, setUser] = useState('ogwj');

    return (
        <div id="app">
            {/* temporary header to save user card api */}
            {/* <Header user={user} /> */}
            <Main user={user} setUser={setUser} />
            {/* <Footer /> */}
        </div>
    )
}

export default App;