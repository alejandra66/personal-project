import React from 'react';
import Navbar from "../Navbar/Navbar";
import SocialIcons from "../SocialIcons";
const MainContent: React.FC = () => {
    return (
        <>
            <div className="main-content h-screen bg-gradient-to-l from-violet-red to-cerise-red overflow-hidden">
                <Navbar/>
                <div className="flex items-center justify-center h-full">
                    <div className="text-center flex flex-col">
                        <h1 className="abril-fatface-regular text-8xl font-extrabold text-comp-header">COMPONENTS</h1>
                        <h2 className="passion-one-bold text-8xl font-extrabold text-port-header flex justify-end">PORT-</h2>
                        <h2 className="passion-one-bold text-8xl font-extrabold text-port-header flex justify-end">FOLIO</h2>
                    </div>
                    <div className="pl-6"><SocialIcons/></div>
                </div>
            </div>
        </>
    );
};

export default MainContent;


