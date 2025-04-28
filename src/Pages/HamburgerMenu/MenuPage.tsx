import React from "react";
import {useNavigate} from "react-router-dom";

const MenuPage: React.FC = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/');
    };


    return (
        <div className="h-screen bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
            {/* Close Button */}
            <button
                onClick={handleClose}
                aria-label="Close Menu"
                className="absolute top-4 right-4 text-2xl font-bold text-primary"
            >
                ✕
            </button>

            {/* Menu Content */}
            <ul className="space-y-4 text-center mt-16 text-primary passion-one-bold text-2xl">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul>
        </div>
    );
};

export default MenuPage;
