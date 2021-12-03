import React from 'react';
import Router from './Router';
import './assets/style1.css';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';

function App() {
    return (
        <>
            <Header />
            <Router />
            <Footer />
        </>
    );
}

export default App;
