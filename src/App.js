import React, { useState } from 'react';
import { NavBar, RepoSearchBar, UserSearchBar } from './components';
import { CardList } from './layout';

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

    if (user) return (

        <main id="main-container" className="container d-flex justify-content-center">

            <div id="content-column" className="">

                <UserSearchBar setUser={setUser} />

                {/* commented out to prevent spamming of api */}
                {/* <img
                    id="user-card"
                    src={`https://github-readme-stats.vercel.app/api?username=${user}`}
                    className="m-4"
                /> */}


                <RepoSearchBar />

                <div id="cardlist-container" className="container">
                    <CardList repoData={fakeRepos} />
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
            {/* <NavBar setUser={setUser} /> */}
            {/* temporary header to save user card api */}
            <Header user={user} />
            {/* <h2>{user}</h2> */}

            <Main user={user} setUser={setUser} />
            {/* <Footer /> */}
        </div>
    )
}

export default App;