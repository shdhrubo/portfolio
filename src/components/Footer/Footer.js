import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
  faMailchimp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Social from "../Social/Social";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-[#1E2A3A]  pt-10">
      <div className="bg-[#1E2A3A]  text-neutral-content">
        <footer class="footer p-10 ">
          <div>
            <p className="text-xl text-[#44A076] font-bold">
              Shoriful Habib <br />
            </p>
            <span>
              Front-end Web Developer || MERN Stack Developer || React Developer
            </span>
            <a
              href="mailto:shorifulhabib.iit@gmail.com"
              className="text-gray-400 text-sm "
            >
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
              shorifulhabib.iit@gmail.com
            </a>
            <p>
              <a href="tel:+8801612939235" className="text-gray-400 text-sm ">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{" "}
                +8801612939235{" "}
              </a>
            </p>
          </div>
          <div>
            <span class="footer-title">Follow me</span>
            <Social></Social>
          </div>
        </footer>
        <div className="pb-10">
          &#169; {year} All rights reserved by{" "}
          <span className="text-[#44A076]">SHORIFUL</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
