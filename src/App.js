import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from './components';

function App() {
    return (
        <div id="app">
            <NavBar />
            <main>
                <Switch>
                    <Route path="/" />
                    <Route path="/about" />
                    <Route path="/search" />
                </Switch>
            </main>
        </div>
    )
}

export default App;