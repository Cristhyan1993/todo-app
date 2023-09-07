import React from "react";
import "./Footer.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiSolidMoviePlay } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="credit">
        <p>
          Created & styled by{" "}
          <a
            href="https://github.com/Cristhyan1993"
            target="_blank"
            rel="noreferrer"
          >
            Cris
          </a>
        </p>
      </div>
      <div className="footer-grid-container">
        <div className="contact">
          About me
          <div className="links">
            <ul className="links">
              <li>
                <a href="https://github.com/Cristhyan1993">
                  <AiFillGithub /> Github
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/criscalderon/">
                  <AiFillLinkedin /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact">
          Check out my other project
          <div className="links">
            <ul className="links">
              <li>
                <a href="https://cris-trailerz.netlify.app/">
                  <BiSolidMoviePlay /> Trailerz
                </a>
              </li>
              <li>
                <a href="https://cris-yugioh.netlify.app/">
                  <BiSolidMoviePlay /> Yu-Gi-Oh!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
