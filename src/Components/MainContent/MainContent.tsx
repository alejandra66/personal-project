import React from "react";
import Navbar from "../Navbar/Navbar";
import SocialIcon from "../SocialIcons";
import "animate.css";
import InfiniteScroll from "../InfiniteScroll";

const MainContent: React.FC = () => {
    return (
        <>
            <div className="main-content h-screen bg-gradient-to-r from-purple-400 to-pink-400 overflow-hidden relative">
                <Navbar />
                <div className="flex items-center justify-center h-full">
                    {/* Wrapping div for the content and icons, set to flex-row */}
                    <div className="flex flex-row items-center space-x-8">
                        {/* Text content */}
                        <div className="text-center flex flex-col">
                            <h1 className="abril-fatface-regular text-5xl sm:text-xl md:text-7xl lg:text-8xl font-extrabold text-comp-header flex justify-end">
                                COMPONENTS
                            </h1>
                            <div className="flex flex-col items-end">
                                <h2 className="passion-one-bold text-5xl sm:text-xl md:text-7xl lg:text-8xl font-extrabold text-port-header">
                                    PORT-
                                </h2>
                                <h2 className="passion-one-bold text-5xl sm:text-xl md:text-7xl lg:text-8xl font-extrabold text-port-header">
                                    FOLIO
                                </h2>
                            </div>
                        </div>

                        {/* Social icons */}
                        <div className="animate__animated animate__backInUp">
                            <SocialIcon />
                        </div>
                    </div>
                </div>

                {/* Infinite Scroll at the bottom */}
                <div className="absolute bottom-0 left-0 w-full">
                    <InfiniteScroll />
                </div>
            </div>
        </>
    );
};

export default MainContent;



