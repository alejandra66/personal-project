import React from 'react';
import './App.css';
import './icons';
import MainContent from './Components/MainContent/MainContent';
import { Route, Routes } from 'react-router-dom';
import HamburgerMenuPage from './Components/Navbar/HamburgerMenu';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <MainContent />
            </div>
            <Routes>
                <Route path="/" element={<MainContent />} />
                {/*<Route path="/hamburger-menu" element={<HamburgerMenuPage />} />*/}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
