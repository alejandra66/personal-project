import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialIconProps {
    icon: any;
    href: string;
    color?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href, color = "#470a1f" }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="mr-4">
            <FontAwesomeIcon icon={icon} style={{ color }} className="text-3xl pb-4" />
        </a>
    );
};

export default SocialIcon;

