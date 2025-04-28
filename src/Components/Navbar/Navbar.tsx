import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
    ];

    const handleClick = () => {
        navigate("/hamburger-menu");
    };

    return (
        <nav aria-label="Main Navigation">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="zeyada-regular passion-one-bold text-primary text-4xl self-center whitespace-nowrap">
                        alejandraRamos
                    </span>
                </div>
                <div className="flex">
                    <ul className="flex space-x-6 text-lg font-medium invisible lg:visible">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:underline passion-one-bold text-primary">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Hamburger icon, only visible on small screens */}
                    <div>
                        <FontAwesomeIcon
                            icon={faBars}
                            size="2x"
                            className="visible lg:invisible cursor-pointer text-primary"
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


