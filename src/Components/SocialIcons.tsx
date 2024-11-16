import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons';

const SocialIcons: React.FC = () => {
    return (
        <div className="flex flex-col absolute max-w-screen-x flex-wrap items-center justify-between mx-auto">
            <FontAwesomeIcon icon={faGithub} className="text-3xl text-port-header"/>
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-port-header pt-4"/>
            <FontAwesomeIcon icon={faEnvelopeRegular} className="text-3xl text-port-header pt-4"/>
        </div>
    );
};

export default SocialIcons;
