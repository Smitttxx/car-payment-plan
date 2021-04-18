import React, { Fragment } from "react";
import imageSass from "../../../images/1200px-Sass_Logo_Color.svg.png";
import imageReact from "../../../images/612-6126558_react-logo-png-react-js-logo-svg-transparent.png";
import JestImage from './../../../images/jesttesting.png';
import SiteWrapper from "../SiteWrapper/SiteWrapper";
import { Link, withRouter } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-container">
        <SiteWrapper>
          <div className="footer-inner">
          <div className="footer-inner__left-col">
            This app is powered by :-
            <ul>
              <li>
                <Link className="nav-link" to="/">
                  <img className="header--logo" src={imageSass} alt="imageSass" />
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/">
                  <img className="header--logo" src={imageReact} alt="imageReact" />
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/">
                  <img className="header--logo" src={JestImage} alt="JestImage" />
                </Link>
              </li>
            </ul>
            </div>
            <div className="footer-inner__right-col">
            <ul>
            This app was created for:-
              <li>
                Arnold Clark
              </li>
              <li>
                Created by : Laura Smith 
              </li>
            </ul>
            </div>
          </div>
        </SiteWrapper>
      </div>
    </Fragment>
  );
};

export default withRouter(Footer);
