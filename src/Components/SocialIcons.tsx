import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import 'animate.css';
const SocialIcon: React.FC = () => {
    const icons = [
        { icon: faGithub, href: "https://github.com/alejandra66" },
        { icon: faLinkedin, href: "https://www.linkedin.com/in/alejandra-ramos/" },
        { icon: faEnvelope, href: "mailto:alejandra.ramos@me.com" },
    ];

    return (
        <div className="flex flex-col">
            {icons.map(({ icon, href }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icon} style={{ color: "#470a1f" }} className="text-3xl p-4" />
                </a>
            ))}
        </div>
    );
};

export default SocialIcon;

