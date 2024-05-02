import React from 'react';
import './App.css';
import Main from './components/Main';
import Menu from './components/Menu';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Nav />
            <Main/>
            <Menu/>
            <Footer />
        </>
    );
}

export default App;