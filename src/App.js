import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <div className="content">
                <Sidebar />
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default App;
