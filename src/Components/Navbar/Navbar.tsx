import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
    ];

    const isMobile = false;

    return (
        <nav aria-label="Main Navigation">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="zeyada-regular font-extrabold text-4xl self-center whitespace-nowrap dark:text-white">
                        alejandraRamos
                    </span>
                </div>
                <div className="flex">
                    <ul className="flex space-x-6 text-lg font-medium invisible lg:visible">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:underline passion-one-bold text-port-header">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <FontAwesomeIcon icon={faBars} size="2x" className="visible lg:invisible" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

