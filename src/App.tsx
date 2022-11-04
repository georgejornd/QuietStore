import React from 'react';
import Router from "./router/router";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import {BrowserRouter} from "react-router-dom";
import PageContainer from "./ui-kit/container/page-сontainer";

const App = () => {
    return (
        <BrowserRouter>
            <main className="main">
                <div className="content box-shadow">
                    <Header />
                    <PageContainer>
                        <Router />
                    </PageContainer>
                    <Footer />
                </div>
            </main>
        </BrowserRouter>
    )
}

export default App