import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Social = () => {
    return (
        <div>
                 <div class="grid grid-flow-col gap-8">
              <a href="https://www.facebook.com/Dhrubo1290" className="text-[#44A076] text-xl ">
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
              </a>

              <a href="https://www.linkedin.com/in/shorifulhabib/" className="text-[#44A076] text-xl ">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
              <a href="https://github.com/shdhrubo" className="text-[#44A076] text-xl ">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
            </div>
        </div>
    );
};

export default Social;