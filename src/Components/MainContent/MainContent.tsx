import React from 'react';
import Navbar from "../Navbar/Navbar";
import SocialIcon from "../SocialIcons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import 'animate.css';

const MainContent: React.FC = () => {
    return (
        <>
            <div className="main-content h-screen bg-gradient-to-l from-violet-red to-cerise-red overflow-hidden">
                <Navbar/>
                <div className="flex items-center justify-center h-full">
                    <div className="text-center flex flex-col">
                        <h1 className="abril-fatface-regular text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-comp-header">
                            COMPONENTS
                        </h1>
                        <h2 className="passion-one-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-port-header flex justify-end">
                            PORT-
                        </h2>
                        <h2 className="passion-one-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-port-header flex justify-end">
                            FOLIO
                        </h2>
                    </div>

                    <div>
                        <div className="animate__animate animate__backInUp flex flex-col absolute max-w-screen-x flex-wrap items-center justify-between mx-auto pl-6
                      
                        ">
                            <SocialIcon icon={faGithub} href="https://github.com" />
                            <SocialIcon icon={faLinkedin} href="https://linkedin.com" />
                            <SocialIcon icon={faEnvelope} href="mailto:someone@example.com" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainContent;


