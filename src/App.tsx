import React from 'react';
import Router from "./router/router";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

const App = () => {
    return (
        <main className="main">
            <div className="content box-shadow">
                <Header />
                <Router />
                <Footer />
            </div>
        </main>
    )
}

export default App