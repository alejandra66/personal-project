import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/About/AboutPage';
import ProjectsPage from './Pages/Projects/ProjectsPage';
import HamburgerMenuPage from './Pages/HamburgerMenu/MenuPage';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/hamburger-menu" element={<HamburgerMenuPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
