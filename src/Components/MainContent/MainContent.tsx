import React from 'react';
import Navbar from "../Navbar/Navbar";

const MainContent: React.FC = () => {
    return (
        <div className="main-content h-screen bg-gradient-to-l from-violet-red to-cerise-red overflow-hidden">
            <Navbar />
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <p className="text-3xl font-bold text-comp-header">COMPONENTS</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-port-header">PORT-</h1>
                    <h1 className="text-3xl font-bold text-port-header">FOLIO</h1>
                </div>
            </div>
        </div>
    );
};

export default MainContent;

