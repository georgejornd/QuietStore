import React from 'react';
import Router from "./router/router";
import Header from "./components/layouts/Header";

const App = () => {
    return (
        <main className="main">
            <div className="content box-shadow">
                <Header />
                <Router />
            </div>
        </main>
    )
}

export default App