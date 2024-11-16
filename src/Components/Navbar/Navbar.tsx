import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="zeyada-regular font-extrabold text-4xl self-center whitespace-nowrap dark:text-white">
                        alejandraRamos
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

