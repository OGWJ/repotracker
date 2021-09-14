import React, { useState } from 'react';
import { NavBar, RepoSearchBar } from './components';
import { CardList } from './layout';

import './style.css';

const MainPage = () => {

    const [user, setUser] = useState(true);

    const fakeRepos = [
        {
            name: 'Repo A',
            dateCreated: '5-12-2020',
            nForks: '5'
        }
    ]

    if (user) return (

        <main id="main-container" className="container d-flex justify-content-center">

            <div id="content-column" className="">

                <img
                    id="user-card"
                    src={`https://github-readme-stats.vercel.app/api?username=${user}`}
                    className="m-4"
                />

                <RepoSearchBar />

                <div id="cardlist-container" className="container">
                    <CardList repoData={fakeRepos} />
                </div>

            </div>

        </main>
    )

    // else no user
    return (
        <p>No user selected!</p>
    )

}

function App() {
    return (
        <div id="app">
            <NavBar />
            <MainPage />
        </div>
    )
}

export default App;