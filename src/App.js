import React from 'react';
import { NavBar } from './components';
import { MainPage } from './pages';

function App() {
    return (
        <div id="app">
            <NavBar />
            <main>
                <MainPage />
            </main>
        </div>
    )
}

export default App;