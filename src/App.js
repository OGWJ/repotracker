import React, { useEffect, useState } from 'react';
import { CardList, RepoSearchBar, UserSearchBar } from './components';
import { fetchUserInfo } from './actions';
import './style.css';

const Main = ({ user, setUser }) => {

    const [repoQueryResults, setRepoQueryResults] = useState([]);
    const [userRepoData, setUserRepoData] = useState([]);

    async function getUserRepoData() {
        const retval = await fetchUserInfo(user);
        return retval;
    }

    useEffect(async () => {
        const repoData = await getUserRepoData();
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

    const [user, setUser] = useState('');

    return (
        <div id="app">
            <Header user={user} />
            <Main user={user} setUser={setUser} />
        </div>
    )
}

export default App;