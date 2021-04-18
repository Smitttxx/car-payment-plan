import React, { Fragment } from 'react';
import image from '../../../images/logo.jpg';
import SiteWrapper from '../SiteWrapper/SiteWrapper';
import { Link, withRouter } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <div className="header-container">
                <SiteWrapper>
                    <div className="header-inner">
                    <Link className="nav-link" to="/"><img className="header--logo" src={image} alt="AC"/></Link>
                        <nav className="header--nav">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/search">Search</Link>
                        </nav>
                    </div>
                </SiteWrapper>
            </div>
        </Fragment>
    )
}

export default withRouter(Header);
