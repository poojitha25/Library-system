import React from 'react';

import Header from "../Header";

const Home = (props) => {
    return (
        <>
            <header>
                <Header brand="Library System Management" />
            </header>

            <main className="container main-container">
                <h2>Welcome to the Library System Management</h2>
            </main>
        </>
    );
};

export default Home;