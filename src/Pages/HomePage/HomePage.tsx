import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SocialIcon from "../../Components/SocialIcons/SocialIcons";
import "animate.css";
import InfiniteScroll from "../../Components/InfiniteScroll/InfiniteScroll";
const HomePage: React.FC = () => {
    const secondaryStyle =
        "passion-one-bold text-5xl sm:text-xl md:text-7xl lg:text-8xl font-extrabold text-primary"

    return (
        <>
            <div className="main-content h-screen bg-gradient-to-r from-purple-400 to-pink-400 overflow-hidden relative">
                <Navbar />
                <div className="flex items-center justify-center h-full">
                    {/* Wrapping div for the content and icons, set to flex-row */}
                    <div className="flex flex-row items-center space-x-8">
                        {/* Text content */}
                        <div className="text-center flex flex-col">
                            <h1 className="abril-fatface-regular font-extrabold text-secondary
                             text-5xl sm:text-xl md:text-7xl lg:text-8xl
                             flex justify-end"
                            >
                                COMPONENTS
                            </h1>
                            <div className="flex flex-col items-end">
                                <h2 className={secondaryStyle}>
                                    PORT-
                                </h2>
                                <h2 className={secondaryStyle}>
                                    FOLIO
                                </h2>
                            </div>
                        </div>

                        {/* Social icons */}
                        <div className="animate__animated animate__backInUp">
                            <SocialIcon />
                        </div>
                    </div>

                    {/* Infinite Scroll at the bottom */}
                    <div className="absolute bottom-0 left-0 w-full pb-8">
                        <InfiniteScroll />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;



